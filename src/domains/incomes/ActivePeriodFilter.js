import React from "react";
import { inject, observer } from "mobx-react";
import { PeriodsLabels } from "../../utils/period";
import { Disclaimer } from "../../sharedComponents/Disclaimer";

function ActivePeriodFilter({ incomesStore }) {
  const { selectedPeriod } = incomesStore;

  return (
    <Disclaimer>
      Você está vendo o período <strong>{PeriodsLabels[selectedPeriod]}</strong>
    </Disclaimer>
  );
}

export default inject("incomesStore")(observer(ActivePeriodFilter));
