import { ctx, cmd } from './index.js'
;(() => {
  const { data, path } = ctx()
  const base = `git add ${data || '.'}`
  cmd(base, path)
})()
