import subMonths from "date-fns/subMonths";
import subYears from "date-fns/subYears";

export const Periods = {
  ALL: "ALL",
  LAST_MONTH: "LAST_MONTH",
  LAST_3_MONTHS: "LAST_3_MONTHS",
  LAST_YEAR: "LAST_YEAR",
  LAST_2_YEARS: "LAST_2_YEARS"
};

export const PeriodsLabels = {
  [Periods.ALL]: "desde de o início",
  [Periods.LAST_MONTH]: "do último mês",
  [Periods.LAST_3_MONTHS]: "dos últimos três meses",
  [Periods.LAST_YEAR]: "do último ano",
  [Periods.LAST_2_YEARS]: "dos últimos dois anos"
};

export const PeriodsShortLabels = {
  [Periods.ALL]: "tudo",
  [Periods.LAST_MONTH]: "último mês",
  [Periods.LAST_3_MONTHS]: "últimos três meses",
  [Periods.LAST_YEAR]: "último ano",
  [Periods.LAST_2_YEARS]: "últimos dois anos"
};

export const getInterval = (period, basePeriod = new Date()) => {
  return {
    [Periods.LAST_MONTH]: { start: subMonths(basePeriod, 1), end: basePeriod },
    [Periods.LAST_3_MONTHS]: {
      start: subMonths(basePeriod, 3),
      end: basePeriod
    },
    [Periods.LAST_YEAR]: { start: subYears(basePeriod, 1), end: basePeriod },
    [Periods.LAST_2_YEARS]: { start: subYears(basePeriod, 2), end: basePeriod }
  }[period];
};
