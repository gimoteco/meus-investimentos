import React from "react";
import Title from "../sharedComponents/Title";
import ActivePeriodFilter from "../domains/incomes/ActivePeriodFilter";
import IncomesChart from "../domains/incomes/IncomesChart";
import PeriodFilter from "../domains/incomes/PeriodFilter";

function MyIncomes() {
  return (
    <>
      <Title>Meus Rendimentos</Title>

      <ActivePeriodFilter />
      <PeriodFilter />
      <IncomesChart />
    </>
  );
}

export default React.memo(MyIncomes);
