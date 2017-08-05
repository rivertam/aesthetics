const decorators = [
  '™',
  '†',
  '‡'
]

module.exports = ({ string, random }) => `${string}${decorators[Math.floor(random() * decorators.length)]}`
