#!/usr/bin/env node
'use strict'

import { ctx as branch, run } from './index.js'
;(() => {
  const cmd = `git push origin ${branch || 'main'}`
  run(cmd)
})()
