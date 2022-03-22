import { ctx, cmd } from './index.js'
;(() => {
  const { data: branch, path } = ctx()
  const base = `git push origin ${branch || 'main'}`
  cmd(base, path)
})()
