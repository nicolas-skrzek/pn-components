module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "body-leading-blank": [1, "always"],
    "body-max-line-length": [1, "always", 100],
    "header-max-length": [1, "always", 100],
    "type-enum": [2, "always", ["delete", "security", "deprecate"]],
  },
  prompt: {
    questions: {
      type: {
        enum: {
          delete: {
            description: "A features removed",
            title: "Removed",
          },
          security: {
            description: "Improves the security or resolves a security issue",
            title: "Security",
          },
          deprecate: {
            description:
              "Deprecates existing functionality, but does not remove it",
            title: "Deprecated",
          },
        },
      },
    },
  },
}
