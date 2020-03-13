import React, { useCallback } from "react";
import { Box, Flex } from "rebass/styled-components";
import FilterLabel from "./FilterLabel";
import { Label, Radio } from "@rebass/forms/styled-components";

function RadioField({ id, label, options, selectedOptionValue, onChange }) {
  const handleChange = useCallback(period => () => onChange(period), [
    onChange
  ]);

  return (
    <Box p={3} mt={2}>
      <FilterLabel htmlFor={id}>{label}</FilterLabel>

      <Flex flexDirection={["column", "column", "row"]} mt={2}>
        {options.map(option => (
          <Label width="auto" mr={3} alignItems={"center"} key={option.value}>
            <Radio
              mr={1}
              role="radio"
              onChange={handleChange(option.value)}
              name={id}
              id={`${id}-${option.value}`}
              checked={selectedOptionValue === option.value}
              value={option.value}
            />
            {option.label}
          </Label>
        ))}
      </Flex>
    </Box>
  );
}

export default React.memo(RadioField);
