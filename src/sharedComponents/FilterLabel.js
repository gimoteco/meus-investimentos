import React from "react";
import { Label } from "@rebass/forms/styled-components";

const FilterLabel = ({ children }) => (
  <Label fontWeight="bold">{children}</Label>
);

export default React.memo(FilterLabel);
