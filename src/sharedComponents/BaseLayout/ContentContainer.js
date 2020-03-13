import { Box } from "rebass/styled-components";
import React from "react";

const ContentContainer = ({ children }) => (
  <Box
    bg="white"
    p={3}
    minWidth={["100%", "60%", "40%"]}
    sx={{
      borderRadius: "default"
    }}
  >
    {children}
  </Box>
);

export default React.memo(ContentContainer);
