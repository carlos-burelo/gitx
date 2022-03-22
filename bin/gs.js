#!/usr/bin/env node
'use strict'

const { ctx, cmd } = require('./index.js')

function init() {
  const { path } = ctx()
  const base = `git status`
  cmd(base, path)
}
init()
