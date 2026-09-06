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
verified: 2026-09-06 quote-check+coverage
---

# .changeset/config.json

## Purpose — required, verbatim
> "https://unpkg.com/@changesets/config@3.1.4/schema.json" — .changeset/config.json:2 (no explicit purpose statement)

## Design intent — required
Configuration file for the Changesets toolchain managing versioning, changelog generation, and package releases for `mattpocock/skills`. Specifies the official GitHub changelog generator, restricts version commits (`commit: false`) to permit manual verification before pushing, targets the `main` branch, and establishes patch-level cascading for internal dependencies.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `$schema` — .changeset/config.json:2 — used here
- `changelog` — .changeset/config.json:3 — used here
- `@changesets/changelog-github` — .changeset/config.json:4 — used here
- `commit` — .changeset/config.json:7 — used here
- `privatePackages` — .changeset/config.json:8 — used here
- `fixed` — .changeset/config.json:9 — used here
- `linked` — .changeset/config.json:10 — used here
- `access` — .changeset/config.json:11 — used here
- `baseBranch` — .changeset/config.json:12 — used here
- `updateInternalDependencies` — .changeset/config.json:13 — used here
- `ignore` — .changeset/config.json:14 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Standard Changesets JSON configuration adhering to schema v3.1.4. Ensures release discipline across mono-repo or single-package repositories.

## Context cost
380 bytes, 16 lines, approximately 90 tokens.
