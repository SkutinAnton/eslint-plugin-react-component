module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: 'Remove braces and word "return"',
    },
    messages: {
      removeBraces: 'Remove braces and word "return" in arrow function component',
    },
  },
  create: (context) => ({
    ArrowFunctionExpression(node) {
      const isReactComponent = /^[A-Z]/.test(node.parent.id?.name);

      if (isReactComponent) {
        const isBodyHasOnlyReturn =
          node.body.type === "BlockStatement" &&
          node.body.body.length === 1 &&
          node.body.body[0].type === "ReturnStatement";

        if (isBodyHasOnlyReturn) {
          context.report({
            node,
            messageId: "removeBraces",
          });
        }
      }
    },
  }),
};