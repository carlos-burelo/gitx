const { ctx, cmd } = require('./index.js')

function init() {
  const { data, path } = ctx()
  const base = `git commit -m "${data || ':jigsaw: base commit'}"`
  cmd(base, path)
}
init()
