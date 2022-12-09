module.exports = {
  display: {
    notifications: true,
    offendingContent: true,
    rulesSummary: false,
    shortStats: true,
    verbose: false,
  },
  rules: [
    {
      message: '🤔 Did you forget to complete some tasks ?',
      nonBlocking: true,
      regex: /(?:FIXME|TODO)/,
    },
  ],
}
