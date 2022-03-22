import { ctx, cmd } from './index.js'
;(() => {
  const { data, path } = ctx()
  const base = `git commit -m "${data || ':jigsaw: base commit'}"`
  cmd(base, path)
})()
