export function convertToMilliseconds(min, sec) {
  return min * 60000 + sec * 1000
}

export function convertToTimeUnits(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return [minutes, seconds]
}
