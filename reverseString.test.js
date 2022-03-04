const reverseString = require("./reverseString");

describe("reverse string", function () {
  it("reverses a string", function () {
    expect(reverseString("Texas")).toBe("saxeT");
    expect(reverseString("tucitcennoC")).toBe("Connecticut");
  });
});