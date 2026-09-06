---
package: rjm
path: docs/third-party-license-attribution.md
type: doc
bytes: 4463
unit: inv-rjm-194
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: docs/third-party-license-attribution.md, sha256: 273f0ae5e3a041689084c309b0b3d321d0185b87ab33d74343a115816d56e321}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/third-party-license-attribution.md

## Purpose — required, verbatim
> "This document describes the policy and procedure for third-party license attribution in this project." — docs/third-party-license-attribution.md:3-4

## Design intent — required
Establishes the intellectual property compliance and third-party license attribution policy for components shipped as part of plugins defined in `.claude-plugin/marketplace.json`. Delineates between shipped components (requiring attribution in `THIRD-PARTY-NOTICES.TXT`) and non-shipped dev/CI infrastructure, defines inbound license compatibility rules under MIT, and provides procedures and automation (`scripts/generate_third_party_notices.py`) for generating and checking notice files.

## Phase — required
cross-phase

## Inputs — required
- "Attribution applies to components **shipped** as part of the plugins defined in `.claude-plugin/marketplace.json`." — docs/third-party-license-attribution.md:8-9
- "Forked or vendored source code included in a plugin source path" — docs/third-party-license-attribution.md:14
- "Runtime dependencies declared in `requirements.txt` files within shipped paths" — docs/third-party-license-attribution.md:15
- "Check the upstream repository's LICENSE file." — docs/third-party-license-attribution.md:84
- "Check PyPI or the package's GitHub repository." — docs/third-party-license-attribution.md:93

## Outputs — required
- "Writes `THIRD-PARTY-NOTICES.TXT` in the dotnet/runtime format" — docs/third-party-license-attribution.md:59

## Invokes — required
- script scripts/generate_third_party_notices.py — docs/third-party-license-attribution.md:49

## Invoked by — required
- doc docs/third-party-license-attribution.md — CONTRIBUTING.md:1104

## Concepts named — required, verbatim
`Third-Party License Attribution` — docs/third-party-license-attribution.md:1 — defined here
`Shipped Components` — docs/third-party-license-attribution.md:6 — defined here
`License Compatibility` — docs/third-party-license-attribution.md:24 — defined here
`Check Mode` — docs/third-party-license-attribution.md:61 — defined here
`Forked or Vendored Code` — docs/third-party-license-attribution.md:82 — defined here
`Runtime Dependencies` — docs/third-party-license-attribution.md:91 — defined here
`Compliance Checklist` — docs/third-party-license-attribution.md:118 — defined here

## Structure
# Third-Party License Attribution — docs/third-party-license-attribution.md:1
## Scope: Shipped Components Only — docs/third-party-license-attribution.md:6
## License Compatibility — docs/third-party-license-attribution.md:24
## Generating the Notices File — docs/third-party-license-attribution.md:44
### Check Mode — docs/third-party-license-attribution.md:61
## When to Update — docs/third-party-license-attribution.md:71
## Adding a New Shipped Component — docs/third-party-license-attribution.md:80
### Forked or Vendored Code — docs/third-party-license-attribution.md:82
### Runtime Dependencies — docs/third-party-license-attribution.md:91
## Attribution Requirements by License — docs/third-party-license-attribution.md:100
### MIT, BSD-2-Clause, BSD-3-Clause, ISC — docs/third-party-license-attribution.md:102
### Apache-2.0 — docs/third-party-license-attribution.md:106
### MPL-2.0 — docs/third-party-license-attribution.md:112
## Compliance Checklist — docs/third-party-license-attribution.md:118

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides a concrete compatibility matrix for inbound licenses under MIT, explicitly cautioning on LGPL and prohibiting GPL and AGPL without legal consultation. Implements deterministic check mode in `scripts/generate_third_party_notices.py --check` that can be run in CI to prevent un-attributed or license-incompatible shipped components.

## Context cost
4463 bytes, approximately 1115 tokens.
