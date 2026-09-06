---
package: matt
path: .github/workflows/release.yml
type: config
bytes: 780
unit: inv-matt-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .github/workflows/release.yml, sha256: 73ce81a83de90d93a63272dae7e1a3ff8d57dc2f8e99424694289dc7174eec46}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .github/workflows/release.yml

## Purpose — required, verbatim
> "name: Release" — .github/workflows/release.yml:1 (no explicit purpose statement)

## Design intent — required
Automated release CI/CD workflow executed by GitHub Actions on push to `main`. Checks out the repository, provisions Node.js 22, installs npm dependencies, and runs `changesets/action@v1` to generate version PRs (running `npm run version`, which invokes `changeset version` and synchronizes the plugin version) and publish git tags (`npx changeset tag`).

## Phase — required
none

## Inputs — required
Pushes to branch `main`, git repository content, changesets in `.changeset/`, `package.json`, `package-lock.json`, and `GITHUB_TOKEN` secret.

## Outputs — required
Version pull requests titled `"chore: version skills"`, release commits, and git tags.

## Invokes — required
none

## Invoked by — required
entry-point

## Concepts named — required, verbatim
- `Release` — .github/workflows/release.yml:1 — defined here
- `push` — .github/workflows/release.yml:4 — used here
- `main` — .github/workflows/release.yml:6 — used here
- `concurrency` — .github/workflows/release.yml:8 — used here
- `Version` — .github/workflows/release.yml:12 — defined here
- `ubuntu-latest` — .github/workflows/release.yml:13 — used here
- `Create Version Pull Request` — .github/workflows/release.yml:29 — defined here
- `changesets/action@v1` — .github/workflows/release.yml:30 — used here
- `GITHUB_TOKEN` — .github/workflows/release.yml:37 — used here

## Structure
YAML workflow root keys:
- `name`
- `on`
- `concurrency`
- `jobs`
  - `release`
    - `steps`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Uses Node 22 and `npm ci`. The version step runs `npm run version`, which in `package.json` executes `changeset version && node scripts/sync-plugin-version.mjs` to keep `.claude-plugin/plugin.json` in sync with `package.json`.

## Context cost
780 bytes, ~180 tokens. Loads no external files.
