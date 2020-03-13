import { getInterval, Periods } from "./period";
import subMonths from "date-fns/subMonths";
import subYears from "date-fns/subYears";

describe("getInterval", () => {
  const now = new Date();

  it("should compute last month period", () => {
    const result = getInterval(Periods.LAST_MONTH, now);

    expect(result).toEqual({
      start: subMonths(now, 1),
      end: now
    });
  });

  it("should compute last 3 months period", () => {
    const result = getInterval(Periods.LAST_3_MONTHS, now);

    expect(result).toEqual({
      start: subMonths(now, 3),
      end: now
    });
  });

  it("should compute last year period", () => {
    const result = getInterval(Periods.LAST_YEAR, now);

    expect(result).toEqual({
      start: subYears(now, 1),
      end: now
    });
  });

  it("should compute last 2 years period", () => {
    const result = getInterval(Periods.LAST_2_YEARS, now);

    expect(result).toEqual({
      start: subYears(now, 2),
      end: now
    });
  });
});
