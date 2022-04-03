#!/usr/bin/env node
'use strict'

import { ctx as data, run } from './index.js'
;(() => {
  const match = /^https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/?$/.exec(data)
  const url = match ? data : `https://github.com/${data}`
  const cmd = `git clone ${url}`
  run(cmd)
})()
