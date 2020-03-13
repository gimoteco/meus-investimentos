import { Text } from "rebass";
import React from "react";

function NoContent() {
  return <Text>Não existem dados para o período</Text>;
}

export default React.memo(NoContent);
