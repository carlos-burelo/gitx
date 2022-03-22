import { ctx, cmd } from './index.js'
;(() => {
  const { data: branch, path } = ctx()
  const base = `git branch ${branch || 'main'}`
  cmd(base, path)
})()
