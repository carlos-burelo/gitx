#!/usr/bin/env node
'use strict'

import { ctx as data, run } from './index.js'
;(() => {
  const cmd = `git commit -m "${data || ':jigsaw: base commit'}"`
  run(cmd, handler)
})()

function handler(stdout) {
  return stdout.replace(/\[.+\].+/, '').trim()
}
