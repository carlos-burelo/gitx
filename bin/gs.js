#!/usr/bin/env node
'use strict'

import { run } from './index.js'
/**
 *
 * @param {string} stdout
 * @returns
 */
function handler(stdout) {
  if (stdout.includes('modified')) {
    const regex = /(\w+):\s+([\w/\.]+)/g
    let text = ''
    stdout.replace(regex, (_, key, value) => (text += `[${key}]: ${value}\n`))
    return text.trim()
  } else {
    return `The repository is clean.`.trim()
  }
}

;(() => {
  const cmd = `git status`
  run(cmd, handler)
})()
