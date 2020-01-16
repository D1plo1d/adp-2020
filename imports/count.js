let currentCount = 0

export const helloFromCount = () => (
  "hello from count"
)

const count = () => {
  currentCount += 1
  return currentCount
}

export default count
