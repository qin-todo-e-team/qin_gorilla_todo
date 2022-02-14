# Next.js starter template.

- Next.js
- TypeScript
- ESLint
- Prettier
- Jest
- Tailwind CSS

# up

```bash
yarn dev
```

# commit message

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- test: Adding missing tests or correcting existing tests

# firebase-cli

## install firebase cli

```
brew install firebase-cli
```

# java installer

```
// https://www.oracle.com/java/technologies/downloads/#jdk17-mac
intel -> x64 installer
M1 -> Arm 64 installer
```

## firebase login

```
firebae login

// すでにログインしている場合
firebase login --reauth
```

```
// プロジェクト配下
// 参考: https://www.i-ryo.com/entry/2020/12/30/180509
firebase init

// 選択
// fireauth / firestore / emulators

// 参考: https://zenn.dev/cotapon/scraps/032866ce34abc0
// create new projectを選択で良いかもしれない（要調査）
// portは以下で設定
port
emulators:
    auth: 9099
    firestore: 6670
    ui: 6671

// access
localhost:6671/firestore/
```

# install firebase-tools

```
yarn global add firebase-tools
```
