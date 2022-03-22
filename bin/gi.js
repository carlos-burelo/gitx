const { ctx, cmd } = require('./index.js')

function init() {
  const { path } = ctx()
  const base = `git init`
  cmd(base, path)
}
init()
