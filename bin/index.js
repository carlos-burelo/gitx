import { exec } from 'child_process'

export const ctx = () => {
  const base = process.argv
  const data = base.join(' ')
  const path = process.cwd()
  return {
    data,
    path,
  }
}

export const cmd = (cmd, path) =>
  exec(cmd, { cwd: path }, (err, stdout, stderr) => {
    if (err) return console.error(err)
    if (stderr) console.error(stderr)
    console.log(stdout)
  })
