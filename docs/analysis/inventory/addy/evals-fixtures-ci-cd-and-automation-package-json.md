---
package: addy
path: evals/fixtures/ci-cd-and-automation/package.json
type: config
bytes: 132
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/fixtures/ci-cd-and-automation/package.json, sha256: 9e9e19c20f0c6da962c516816d89bad3dc6492e5b5a9c1051bfa8fe9d5b28be5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/fixtures/ci-cd-and-automation/package.json

## Purpose — required, verbatim
> "name": "ci-fixture" — evals/fixtures/ci-cd-and-automation/package.json:2

(no explicit purpose statement)

## Design intent — required
Package manifest for the `ci-cd-and-automation` eval fixture project. Defines project metadata and script commands (`lint` via `node --check src/slug.js`, `test` via `node --test`), providing the target package configuration for an agent tasked with designing an automated CI pipeline (install, lint, test) on GitHub Actions.

## Phase — required
none

## Inputs — required
none

## Outputs — required
Declares lifecycle script commands at evals/fixtures/ci-cd-and-automation/package.json:4-7.

## Invokes — required
- file src/slug.js — evals/fixtures/ci-cd-and-automation/package.json:5

## Invoked by — required
"ci-cd-and-automation" — evals/cases/ci-cd-and-automation.json:35

## Concepts named — required, verbatim
- `ci-fixture` — evals/fixtures/ci-cd-and-automation/package.json:2 — defined here
- `scripts` — evals/fixtures/ci-cd-and-automation/package.json:4 — defined here
- `lint` — evals/fixtures/ci-cd-and-automation/package.json:5 — defined here
- `test` — evals/fixtures/ci-cd-and-automation/package.json:6 — defined here

## Structure
JSON top-level keys:
- name: "ci-fixture" — evals/fixtures/ci-cd-and-automation/package.json:2
- private: true — evals/fixtures/ci-cd-and-automation/package.json:3
- scripts: lint, test — evals/fixtures/ci-cd-and-automation/package.json:4-7

## Scripts — required if type is script or the skill ships scripts
- path: evals/fixtures/ci-cd-and-automation/package.json, language: npm scripts (node CLI), lines: 9
- documented invocation: `node --check src/slug.js` (evals/fixtures/ci-cd-and-automation/package.json:5)
- **executed:** yes
- actual command run: `node --check src/slug.js && node --test test/slug.test.js` (cwd: `sources/addy/evals/fixtures/ci-cd-and-automation`)
- actual stdout: `✔ slugifies a title (0.492ms)\nℹ tests 1\nℹ suites 0\nℹ pass 1\nℹ fail 0`
- **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: exits 0 on valid syntax and passing tests
- for validators/gates: not a validator or gate
- does the output match what the documentation claims: yes, executes syntax check and unit test suite successfully

## Defects — required
none

## Observations
Zero-dependency setup leveraging Node.js native tooling (`--check` syntax verification and built-in `--test` runner).

## Context cost
132 bytes, ~35 tokens. References `src/slug.js` (93 bytes).
