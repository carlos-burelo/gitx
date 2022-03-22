# Simple git shortcuts

| Shortcut | Command        | Description                     | Example            |
| -------- | -------------- | ------------------------------- | ------------------ |
| ga       | `git add`      | Add all changes to staging area | `ga index.ts`      |
| gc       | `git commit`   | Commit all changes to git       | `gc add index.ts ` |
| gi       | `git init`     | Initialize git repository       | `gi`               |
| gs       | `git status`   | Show git status                 | `gs`               |
| gp       | `git push`     | Push all changes to remote      | `gp main`          |
| gr       | `git remote`   | Show remote repositories        | `gr http:...`      |
| gb       | `git branch`   | Show local branches             | `gb prod`          |
| gch      | `git checkout` | Switch to a branch              | `gch main`         |

# Install

```bash
$ npm install -g gitx-app
# or
$ yarn global add gitx-app
```

# Usage

```bash
$ gi # Initialize git repository
$ ga <file/dir> # Add all changes to staging area
$ gc [commit description]# Commit all changes to git
$ gs # Show git status
...
```
