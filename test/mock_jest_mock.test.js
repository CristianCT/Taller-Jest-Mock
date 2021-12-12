import * as app from "../src/app";
import * as math from "../src/math";

jest.mock("../src/math");

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});
test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
test("calls math.multiply", () => {
  app.doMultiply(1, 2);
  expect(math.multiply).toHaveBeenCalledWith(1, 2);
});
test("calls math.divide", () => {
  app.doDivide(1, 2);
  expect(math.divide).toHaveBeenCalledWith(1, 2);
});