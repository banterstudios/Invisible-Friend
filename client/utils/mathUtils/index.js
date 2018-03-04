export const randomBetween = (min, max) => (
  Math.round(Math.random() * (max - min) + min)
)

export const getEventDistance = ({ clientX: x, clientY: y }, { x: pX, y: pY }) => (
  Math.sqrt(Math.pow(pX - x, 2) + Math.pow(pY - y, 2))
)
