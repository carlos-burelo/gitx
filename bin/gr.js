#!/usr/bin/env node
'use strict'

const { ctx, cmd } = require('./index.js')

function init() {
  const { data: url, path } = ctx()
  const base = `git remote add origin ${url || '.'}`
  cmd(base, path)
}
init()
