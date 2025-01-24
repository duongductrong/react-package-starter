# 📦 React Package Starter

Starter kit for developing TypeScript or React NPM packages

## 🏃 Getting started

```bash

npx degit https://github.com/duongductrong/react-package-starter custom-package

cd custom-package && git init

pnpm install && pnpm dev

```

## 🚀 What's included?

- **⚡️ tsup**: The quickest and easiest way to bundle your TypeScript libraries. It seamlessly bundles packages into both ESM and CJS modules, with built-in support for TypeScript, code splitting, PostCSS, and more.
- **🧪 Vitest**: A modern testing framework for JavaScript, preconfigured to work effortlessly with TypeScript and JSX.
- **🤖 Dependabot**: A GitHub-powered tool that integrates into your workflow to automatically check for dependency updates and create pull requests to keep your project up-to-date.
- **🏃‍♀️ TSX**: A zero-config tool that allows you to execute TypeScript files directly in a Node.js environment.
- **🔼 Release-it**: A command-line utility that automates the creation of GitHub Releases, populating them with changes (commits) made since the last release.
- **📦️ Pnpm**: A fast, disk space-efficient package manager that helps you install, share, and manage dependencies across projects.
- **📝 Commitizen**: A tool that helps you write conventional commit messages following the Conventional Commits specification.

## 📝 Usage

### 🔨 Development

Watch and rebuild code with `tsup`

```bash
pnpm dev
```

Run all tests and watch for changes

```bash
pnpm test
```

### 📦️ Build

Build package with tsup for production.

```bash
pnpm build
```

## 📩 Committing

When you are ready to commit simply run the following command to get a well formatted commit message. All staged files will automatically be linted and fixed as well.

```bash
pnpm commit
```

## 🔖 Releasing, tagging & publishing to NPM

Create a semantic version tag and publish to Github Releases. When a new release is detected a Github Action will automatically build the package and publish it to NPM. Additionally, a Storybook will be published to Github pages.

Learn more about how to use the release-it command here.

```bash
pnpm release
```

When you are ready to publish to NPM simply run the following command:

```bash
pnpm publish
```

## 🤖 Dependabot

Dependabot is a tool that automates dependency updates. It checks for updates to your dependencies and opens pull requests to update them. Dependabot is enabled by default in this project. You can configure it by editing the `.github/dependabot.yml` file.

Read more about Dependabot [here](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/dependabot-options-reference).