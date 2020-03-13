import React, { useMemo } from "react";
import { inject, observer } from "mobx-react";
import { Periods, PeriodsShortLabels } from "../../utils/period";
import { RadioField } from "../../sharedComponents/RadioField";

function PeriodFilter({ incomesStore }) {
  const { setFilter, selectedPeriod } = incomesStore;
  const options = useMemo(
    () =>
      Object.keys(Periods).map(period => ({
        label: PeriodsShortLabels[period],
        value: period
      })),
    []
  );

  return (
    <RadioField
      id="period"
      label="Período"
      options={options}
      onChange={newValue => setFilter(newValue)}
      selectedOptionValue={selectedPeriod}
    />
  );
}

export default inject("incomesStore")(observer(PeriodFilter));
