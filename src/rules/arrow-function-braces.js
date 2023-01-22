module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: 'Remove braces and word "return"',
    },
    fixable: "code",
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
            *fix(fixer) {
              const openBrace = [node.body.start, node.body.start + 1];
              const closeBraceAndSemicolon = [node.body.end - 1, node.body.end + 1];
              const wordReturn = [node.body.body[0].start, node.body.body[0].start + 6];

              yield fixer.removeRange(openBrace);
              yield fixer.removeRange(closeBraceAndSemicolon);
              yield fixer.removeRange(wordReturn);
            },
          });
        }
      }
    },
  }),
};