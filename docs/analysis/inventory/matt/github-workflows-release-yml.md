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
verified: 2026-09-05 quote-check+coverage
---

# .github/workflows/release.yml

## Purpose — required, verbatim
> "name: Release" — .github/workflows/release.yml:1
(no explicit purpose statement)

## Design intent — required
Automates versioning and release management for the repository using GitHub Actions and Changesets. On push to the `main` branch, the workflow checks out the repository, installs dependencies using Node 22 and `npm ci`, and runs `changesets/action@v1` to generate version bump PRs (`npm run version`) or publish release git tags (`npx changeset tag`). Without this workflow, versioning and tagging of skill releases would require manual execution and PR management.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Release` — .github/workflows/release.yml:1 — defined here
- `Version` — .github/workflows/release.yml:12 — defined here
- `changesets/action@v1` — .github/workflows/release.yml:30 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Demonstrates automated package lifecycle maintenance using Changesets. Note that `publish` only runs `npx changeset tag` rather than publishing to an npm registry, indicating that release management in this repository centers on git tags rather than npm packages.

## Context cost
780 bytes, approximately 190 tokens.
