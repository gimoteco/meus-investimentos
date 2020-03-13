module.exports = function(plop) {
  plop.setHelper("storeName", name => {
    const toPascalCase = plop.getHelper("pascalCase");
    return `${toPascalCase(name)}Store`;
  });

  plop.setGenerator("shared-component", {
    description: "Creates a shared component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "shared component name"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/sharedComponents/{{name}}.js",
        templateFile: "templates/sharedComponent.hbs"
      }
    ]
  });

  plop.setGenerator("store", {
    description: "Creates a store",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "store name"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/stores/{{ storeName name }}.js",
        templateFile: "templates/store.hbs"
      }
    ]
  });
};
