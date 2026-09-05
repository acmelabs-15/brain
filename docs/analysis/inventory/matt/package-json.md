---
package: matt
path: package.json
type: config
bytes: 597
unit: inv-matt-36
deprecated: false
aliases: []
memo_inputs:
  - {path: package.json, sha256: 167010d1c535a085be165835a4cc89e1de2760c2bf3b6e43c6ae045e41d0587b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# package.json

## Purpose — required, verbatim
> "Matt Pocock's agent skills for real engineering" — package.json:5

## Design intent — required
Root package manifest defining package metadata (`mattpocock-skills`), version (`1.2.3`), private publishing status, repository link, MIT license, npm version pinning (`npm@10.9.4`), development dependencies for Changesets (`@changesets/cli`, `@changesets/changelog-github`), and automated scripts for changeset versioning and synchronization with Claude Code plugin metadata (`scripts/sync-plugin-version.mjs`). Without this file, the repository would lack a single source of truth for development dependencies, node package scripts, and package manager pinning.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- script scripts/sync-plugin-version.mjs — package.json:13
- script scripts/sync-plugin-version.mjs — package.json:14

## Invoked by — required
- script scripts/sync-plugin-version.mjs — scripts/sync-plugin-version.mjs:13

## Concepts named — required, verbatim
- `mattpocock-skills` — package.json:2 — defined here
- `license` — package.json:10 — defined here
- `changeset` — package.json:12 — defined here
- `version` — package.json:13 — defined here
- `check-plugin-version` — package.json:14 — defined here
- `@changesets/changelog-github` — package.json:17 — used here
- `@changesets/cli` — package.json:18 — used here
- `packageManager` — package.json:20 — defined here

## Structure
JSON object with top-level fields:
- Package identity and description: "name", "version", "private", "description" — package.json:2-5
- Source repository declaration: "repository" — package.json:6
- License declaration: "license" — package.json:10
- Scripts definitions: "scripts" — package.json:11
- Development dependencies: "devDependencies" — package.json:16
- Package manager specification: "packageManager" — package.json:20

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- cross-file-contradiction · package.json:3: Declares package version "1.2.3", whereas package-lock.json:3 and package-lock.json:9 specify "0.0.0".

## Observations
- Pinning `packageManager` to "npm@10.9.4" ensures npm v10 engine conventions.
- Script `version` chains changeset versioning with `scripts/sync-plugin-version.mjs` to keep `.claude-plugin/plugin.json` in sync.
- Running `node scripts/sync-plugin-version.mjs --check` exits with code 0 and verifies plugin.json version parity.

## Context cost
597 bytes (~150 tokens). Root package configuration file.
