import { sum } from "../sum"

test("Sum function should calculate the sum of two numbers", () => {
    const result = sum(1, 4);

    //assertion
    expect(result).toBe(5);
})