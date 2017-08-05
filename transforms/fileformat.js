const formats = [
  'wav',
  'raw',
  'mp3',
  'mp4',
  'mid',
  'wma',
]

module.exports = ({ string, random }) => `${string}.${formats[Math.floor(random() * formats.length)]}`
