const { exec } = require('child_process')
const ctx = () => {
  const path = process.cwd()
  const data = process.argv.slice(2).join(' ').trim()
  return {
    data,
    path,
  }
}

const cmd = (cmd, path) =>
  exec(cmd, { cwd: path }, (err, stdout, stderr) => {
    if (err) return console.error(err)
    if (stderr) console.error(stderr)
    console.log(stdout)
  })
module.exports = {
  ctx,
  cmd,
}
