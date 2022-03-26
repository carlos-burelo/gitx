import { exec } from 'child_process'

export const ctx = process.argv.slice(2).join(' ').trim()

/**
 *
 * @param {string} cmd
 * @param {(e:string)=> string} handler
 * @returns
 */
export const run = (cmd, handler) => {
  if (!handler) handler = e => e
  const path = process.cwd()
  return exec(cmd, { cwd: path }, (e, out, err) => {
    if (e) console.error(e)
    if (err) console.error(err.trim())
    if (out) console.log(handler(out.trim()))
  })
}
