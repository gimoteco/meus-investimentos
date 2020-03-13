import { formatDate } from "./date";

describe("dateUtils", () => {
  it("should format date", () => {
    const result = formatDate(new Date(1991, 2, 16));

    expect(result).toBe("16 mar 1991");
  });
});
