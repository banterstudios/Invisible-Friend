export const randomBetween = (min, max) => (
  Math.round(Math.random() * (max - min) + min)
)

export const getEventDistance = ({ clientX: x, clientY: y }, { x: pX, y: pY }) => (
  Math.sqrt(Math.pow(pX - x, 2) + Math.pow(pY - y, 2))
)

export const getVolumeFromCoords = (event, { boardWidth, boardHeight, x, y }) => (
  1 - getEventDistance(event, { x, y }) / Math.sqrt(Math.pow(boardWidth, 2) + Math.pow(boardHeight, 2))
)
