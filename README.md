# Decisões de arquitetura

- Este projeto usa o create-react-app para se gerenciar,
  foi escolhida essa opção por facilidade de configuração.
- Mobx (com mobx-react) como gerenciador de estado da aplicação, pela sua
  facilidade das criações e integração das stores.
- Em relação ao estilo foi adotado o padrão css-in-js (com styled-components) usando o rebass para formar um design system.
  isto facilitou bastante a implementação de componentes responsivos e com estilo padronizado.
- Escolha do date-fns por causa do tamanho da lib (pequena vs moment).
- Em relação a documentação acredita-se que clean code + tests é bem suficiente.
- Existem tests de snapshots para garantir a renderização correta e que a estrutura
  do html está preservada, existem também de tests de unidade para garantir a lógica
  correta de algumas funções e alguns de testes de integração usando react-testing-library
  para testar interações com os elementos. 
- Escolheu-se a biblioteca de gráficos recharts pela facilidade de integração com o react.
- Uso de linters para manter o código padronizado; automaticamente executado ao comitar.

# Ideias

- Escrever tests e2e usando cypress

# Rodando o projeto 

```
# Pule este passo se você já tiver o yarn
npm install -g yarn

# Instalando as deps
yarn install

# Starta o servidor de desenvolvimento
yarn start
```

# Rodando os tests

```
yarn test
```




