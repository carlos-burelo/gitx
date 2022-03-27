#!/usr/bin/env node
'use strict'

import { ctx as branch, run } from './index.js'
;(() => {
  const cmd = `git branch ${branch || 'main'}`
  run(cmd)
})()
