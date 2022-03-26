#!/usr/bin/env node
'use strict'

import { run } from './index.js'
;(() => {
  const cmd = `git status`
  run(cmd)
})()
