import { ctx, cmd } from './index.js'
;(() => {
  const { path } = ctx()
  const base = `git init`
  cmd(base, path)
})()
