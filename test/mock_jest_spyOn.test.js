import * as app from "../src/app";
import * as math from "../src/math";
test("calls math.add", () => {
    const addMock = jest.spyOn(math, "add");

    expect(app.doAdd(1, 2)).toEqual(3);
    expect(addMock).toHaveBeenCalledWith(1, 2);
});
test("calls math.subtract", () => {
    const subtractMock = jest.spyOn(math, "subtract");

    expect(app.doSubtract(1, 2)).toEqual(1);
    expect(subtractMock).toHaveBeenCalledWith(1, 2);
});
test("calls math.multiply", () => {
    const multiplyMock = jest.spyOn(math, "multiply");

    expect(app.doMultiply(1, 2)).toEqual(2);
    expect(multiplyMock).toHaveBeenCalledWith(1, 2);
});
test("calls math.divide", () => {
    const divideMock = jest.spyOn(math, "divide");

    expect(app.doDivide(1, 2)).toEqual(2);
    expect(divideMock).toHaveBeenCalledWith(1, 2);
});