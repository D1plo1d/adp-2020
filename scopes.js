// NodeJS implicitly wraps each file in a closure
// (() => {

global.c = "an actual global"
// window is the same as global for the browser

var b = "file local value"

const fn = () => {
  global.d = "a global set from fn"
  const a = 5
  if (true) {
    console.log("if statement local", { a })
  }

  console.log("function local", { a })
}

fn()
console.log("global", { b, c, d })

const globalArrowFn = () => "hello global"
global.globalArrowFn = globalArrowFn

// end of the file closure:
// })()