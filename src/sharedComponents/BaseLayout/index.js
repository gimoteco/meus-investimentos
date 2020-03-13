import React from "react";
import { Flex } from "rebass/styled-components";
import ContentContainer from "./ContentContainer";

function BaseLayout({ children }) {
  return (
    <Flex
      minHeight="100%"
      width={"100vw"}
      p={[2, 5]}
      justifyContent="center"
      fontSize={[1]}
    >
      <ContentContainer>{children}</ContentContainer>
    </Flex>
  );
}

export default React.memo(BaseLayout);
