import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import React from "react";
import { formatDate } from "../../utils/date";
import { formatMoney, formatShortNumber } from "../../utils/number";
import { inject, observer } from "mobx-react";
import { Box, Flex } from "rebass/styled-components";
import { useTheme } from "styled-components";
import LoadingIndicator from "../../sharedComponents/LoadingIndicator";
import NoContent from "../../sharedComponents/NoContent";
import ErrorMessage from "../../sharedComponents/ErrorMessage";

const DOMAIN_CHART_DELTA_MONEY = 10000;

function IncomesChart({ incomesStore }) {
  const { filteredIncomes, loading, error } = incomesStore;
  const theme = useTheme();

  return (
    <Box mt={3}>
      <Flex
        width={"100%"}
        height={[300, 500, 500]}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          ".recharts-cartesian-axis-tick-value": {
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: 0
          }
        }}
      >
        {loading ? (
          <LoadingIndicator />
        ) : error ? (
          <ErrorMessage />
        ) : !filteredIncomes.length ? (
          <NoContent />
        ) : (
          <ResponsiveContainer>
            <AreaChart data={filteredIncomes.slice()}>
              <CartesianGrid vertical={false} />

              <XAxis
                interval="preserveStartEnd"
                tickFormatter={formatDate}
                dataKey="[0]"
                ticks={[
                  filteredIncomes[0][0],
                  filteredIncomes[filteredIncomes.length - 1][0]
                ]}
                tickMargin={theme.space[3]}
                tickLine={false}
              />

              <YAxis
                tickMargin={theme.space[3]}
                domain={[
                  `dataMin - ${DOMAIN_CHART_DELTA_MONEY}`,
                  `dataMax + ${DOMAIN_CHART_DELTA_MONEY}`
                ]}
                tickFormatter={formatShortNumber}
                dy={0}
                orientation="right"
                tickLine={false}
              />

              <Tooltip
                labelFormatter={formatDate}
                formatter={value => [formatMoney(value)]}
              />

              <Area
                type="monotone"
                dataKey="[1]"
                stroke={theme.colors.primary}
                fillOpacity={theme.chartFillOpacity}
                fill={theme.colors.primary}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </Flex>
    </Box>
  );
}

export default inject("incomesStore")(observer(IncomesChart));
