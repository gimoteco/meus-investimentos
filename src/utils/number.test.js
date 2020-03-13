import { getInterval, Periods } from "./period";
import subMonths from "date-fns/subMonths";
import { formatMoney, formatShortNumber } from "./number";
import { configureLocale } from "../App";

describe("numberUtils", () => {
  const now = new Date();

  beforeAll(() => {
    configureLocale();
  });

  it("should format money", () => {
    const result = formatMoney(1000.99);

    expect(result).toBe("R$ 1.000,99");
  });

  it("should format short number", () => {
    const result = formatShortNumber(100000);

    expect(result).toBe("100mil");
  });
});
