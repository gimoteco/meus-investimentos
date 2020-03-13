import React from "react";
import { Text } from "rebass/styled-components";

function ErrorMessage() {
  return <Text>Algo deu errado, por favor tente novamente mais tarde.</Text>;
}

export default React.memo(ErrorMessage);
