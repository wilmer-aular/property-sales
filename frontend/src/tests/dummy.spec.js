const sum = (a, b) => a + b;
describe("test a sum function", () => {
  it("the sum of 3 + 4 = 7", () => {
    let result = sum(3,4);
    expect(7).toBe(result);
  });
});
