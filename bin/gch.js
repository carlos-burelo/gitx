import { ctx, cmd } from './index.js'
;(() => {
  const { data: branch, path } = ctx()
  const base = `git checkout -b ${branch || 'main'}`
  cmd(base, path)
})()
