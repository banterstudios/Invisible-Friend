const breakpoints = require('./breakpoints')

const createMinWidth = (value = 0) => (
  `(min-width: ${value}px)`
)

const createMaxWidth = (value = 0) => (
  (typeof value === 'number') ? ` and (max-width: ${value}px)` : ''
)

const createQueries = (obj, [ key, { min, max } ]) => (
  {
    ...obj,
    [`${key}Query`]: `@media screen and ${createMinWidth(min)}${createMaxWidth(max)}`
  }
)

module.exports = Object.entries(breakpoints).reduce(createQueries, {})
