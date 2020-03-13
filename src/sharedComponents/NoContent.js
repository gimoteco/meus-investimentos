import { Text } from "rebass/styled-components";
import React from "react";

function NoContent() {
  return <Text>Não existem dados para o período</Text>;
}

export default React.memo(NoContent);
