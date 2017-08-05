const lorem = require('lorem-ipsum-japanese')

module.exports = ({ string, random, count }) => {
  const japanese = lorem({
    count: count || Math.floor(random() * 2 + 3),
    units: 'words',
    format: 'plain',
    random,
  })

  if (random() < 0.8) {
    return string + japanese
  }

  return japanese + string
}
