import * as app from "../src/app";
import * as math from "../src/math";

test("calls math.add", () => {
    const addMock = jest.spyOn(math, "add");

    addMock.mockImplementation(() => "mock");
    expect(app.doAdd(1, 2)).toEqual("mock");

    addMock.mockRestore();
    expect(app.doAdd(1, 2)).toEqual(3);
});
test("calls math.subtract", () => {
    const subtractMock = jest.spyOn(math, "subtract");
  
    subtractMock.mockImplementation(() => "mock");
    expect(app.doSubtract(1, 2)).toEqual("mock");
  
    subtractMock.mockRestore();
    expect(app.doSubtract(1, 2)).toEqual(1);
});
test("calls math.multiply", () => {
    const multiplyMock = jest.spyOn(math, "multiply");

    multiplyMock.mockImplementation(() => "mock");
    expect(app.doMultiply(1, 2)).toEqual("mock");

    multiplyMock.mockRestore();
    expect(app.doMultiply(1, 2)).toEqual(2);
});
test("calls math.divide", () => {
    const divideMock = jest.spyOn(math, "divide");

    divideMock.mockImplementation(() => "mock");
    expect(app.doDivide(1, 2)).toEqual("mock");

    divideMock.mockRestore();
    expect(app.doDivide(1, 2)).toEqual(2);
});