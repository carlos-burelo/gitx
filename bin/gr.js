import { ctx, cmd } from './index.js'
;(() => {
  const { data: url, path } = ctx()
  const base = `git remote add origin ${url || '.'}`
  cmd(base, path)
})()
