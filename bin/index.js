import { exec } from 'child_process'

export const ctx = process.argv.slice(2).join(' ').trim()

export const run = cmd => {
  const path = process.cwd()
  return exec(cmd, { cwd: path }, (e, out, err) => {
    if (e) console.error(e)
    if (err) console.error(err.trim())
    if (out) console.log(out.trim())
  })
}
