#!/usr/bin/env node
'use strict'

import { ctx as url, run } from './index.js'
;(() => {
  const cmd = `git remote add origin ${url || '.'}`
  run(cmd)
})()
