const toKebabCase = (str) =>
    str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

module.exports = function (plop) {
    plop.setGenerator("component", {
        description: "Создать новый React-компонент",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Введите имя компонента (в PascalCase):",
            },
            {
                type: "input",
                name: "path",
                message: "Дополнительный путь (оставьте пустым для /components):",
            },
        ],
        actions: (answers) => {
            const kebabName = toKebabCase(answers.name);
            const basePath = `components/${answers.path ? `${answers.path}/` : ""}${kebabName}`;

            return [
                {
                    type: "add",
                    path: `${basePath}/${kebabName}.tsx`,
                    templateFile: "plop-templates/component.tsx.hbs",
                    data: { kebabName },
                },
                {
                    type: "add",
                    path: `${basePath}/${kebabName}.module.css`,
                    templateFile: "plop-templates/component.module.css.hbs",
                },
                {
                    type: "add",
                    path: `${basePath}/index.ts`,
                    templateFile: "plop-templates/index.ts.hbs",
                },
            ];
        },
    });
};
