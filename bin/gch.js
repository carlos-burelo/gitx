const { ctx, cmd } = require('./index.js')

function init() {
  const { data: branch, path } = ctx()
  const base = `git checkout -b ${branch || 'main'}`
  cmd(base, path)
}
init()
