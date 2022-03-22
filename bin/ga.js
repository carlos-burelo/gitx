#!/usr/bin/env node
'use strict'

const { ctx, cmd } = require('./index.js')

function init() {
  const { data, path } = ctx()
  const base = `git add ${data || '.'}`
  cmd(base, path)
}
init()
