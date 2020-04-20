# danger-plugin-code-coverage

[![Build Status](https://travis-ci.org/Spoutnik97/danger-plugin-code-coverage.svg?branch=master)](https://travis-ci.org/Spoutnik97/danger-plugin-code-coverage)
[![npm version](https://badge.fury.io/js/danger-plugin-code-coverage.svg)](https://badge.fury.io/js/danger-plugin-code-coverage)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Danger.JS plugin to display the code coverage on a pull request by commenting it via the CI

## Installation

You need to [install Danger JS](https://danger.systems/js/guides/getting_started.html) first:

```sh
yarn add -D danger
```

Then add this package

```sh
yarn add -D danger-plugin-code-coverage
```

## Usage

- Create a dangerfile (dangerfile.js or dangerfile.ts at the root of your project folder)
- Edit it with

```javascript
// dangerfile.js
import codeCoverage from "danger-plugin-code-coverage"

codeCoverage()
```

- Run **locally** to test if it works

```sh
yarn danger local
```

You should see some lines in your terminal

- Run with your **Continuous Integration** system:

  - Follow the steps described in the "Setting up Danger to run on your CI" section of the [GETTING STARTED WITH DANGER JS](https://danger.systems/js/guides/getting_started.html) page
  - [Generate a new GitHub Token](https://github.com/settings/tokens)
  - Add it in your CI environment

Example for Circle CI:

```yaml
version: 2
jobs:
build:
  steps:
    - run: ... YOUR OTHER STEPS ...
    - run:
        name: Run Danger
        command: yarn danger ci
        environment:
          DANGER_GITHUB_API_TOKEN: YOUR_GITHUB_TOKEN
```

- Push a new PR and run the CI on it.
- Go see your pull request with a useful comment!

* ⭐️Add a star on [this repo](https://github.com/Spoutnik97/code-coverage-dangerjs-plugin) if you like it ;)

## Changelog

See the GitHub [release history](https://github.com/Spoutnik97/danger-plugin-code-coverage/releases).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
