import React from "react";
import { Helmet } from "react-helmet";
import { Heading } from "rebass/styled-components";

const TitleHeader = ({ children }) => {
  return (
    <Heading as="h1" mb={3} color="primary">
      {children}
    </Heading>
  );
};

function Title({ children }) {
  return (
    <TitleHeader>
      <Helmet>
        <title>{children}</title>
      </Helmet>
      {children}
    </TitleHeader>
  );
}

export default React.memo(Title);
