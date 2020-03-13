import { Box, Text } from "rebass/styled-components";
import React from "react";

export function Disclaimer({ children }) {
  return (
    <Box
      p={2}
      role="alert"
      bg="messageBackground"
      sx={{
        borderRadius: "default",
        borderColor: "primary",
        borderWidth: "1px",
        borderStyle: "solid",
        "& strong": {
          fontWeight: "bold"
        }
      }}
    >
      <Text color="primary">{children}</Text>
    </Box>
  );
}
