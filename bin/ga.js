#!/usr/bin/env node
'use strict'

import {ctx as data, run } from './index.js'
;(() => {
  const cmd = `git add ${data || '.'}`
  run(cmd)
})()
