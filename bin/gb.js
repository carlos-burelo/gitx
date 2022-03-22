const { ctx, cmd } = require('./index.js')

function init() {
  const { data: branch, path } = ctx()
  const base = `git branch ${branch || 'main'}`
  cmd(base, path)
}
init()
