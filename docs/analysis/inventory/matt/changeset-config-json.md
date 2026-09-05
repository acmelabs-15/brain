---
package: matt
path: .changeset/config.json
type: config
bytes: 380
unit: inv-matt-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .changeset/config.json, sha256: 61717b21675ba9d99f0fc363253ead2716895a4c043c779727d8c685d48684e8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .changeset/config.json

## Purpose — required, verbatim
> `"$schema": "https://unpkg.com/@changesets/config@3.1.4/schema.json"` — .changeset/config.json:2 (no explicit purpose statement)

## Design intent — required
Configuration file for `@changesets/cli` versioning and changelog tooling in the repository. Integrates `@changesets/changelog-github` for automated GitHub changelog generation pointing to `mattpocock/skills`, sets the release branch to `main`, disables automatic commit creation on changeset generation, and defines versioning behaviors for private packages.

## Phase — required
cross-phase

## Inputs — required
Changeset markdown files in `.changeset/*.md`.

## Outputs — required
Changelog entries in `CHANGELOG.md` and version bumps in `package.json`.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `changelog` — .changeset/config.json:3 — defined here
- `commit` — .changeset/config.json:7 — defined here
- `privatePackages` — .changeset/config.json:8 — defined here
- `baseBranch` — .changeset/config.json:12 — defined here

## Structure
JSON document configuring Changesets schema, changelog generator, commit behavior, privatePackages, access, baseBranch, updateInternalDependencies, and ignore array.

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · .changeset/config.json:1: Not referenced or invoked by any other in-scope file in the repository.

## Observations
Configured with `"access": "restricted"` and `"baseBranch": "main"`.

## Context cost
380 bytes, ~90 tokens.
