import { ctx, cmd } from './index.js'
;(() => {
  const { path } = ctx()
  const base = `git status`
  cmd(base, path)
})()
