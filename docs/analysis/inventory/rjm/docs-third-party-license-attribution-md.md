---
package: rjm
path: docs/third-party-license-attribution.md
type: doc
bytes: 4463
unit: inv-rjm-194
in_scope_via: CONTRIBUTING.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: docs/third-party-license-attribution.md, sha256: 273f0ae5e3a041689084c309b0b3d321d0185b87ab33d74343a115816d56e321}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# docs/third-party-license-attribution.md

## Purpose — required, verbatim
> "This document describes the policy and procedure for third-party license attribution in this project." — docs/third-party-license-attribution.md:3-4

## Design intent — required
Defines the repository's open source license compliance policy and automated attribution procedures for third-party components. It restricts mandatory attribution specifically to shipped components redistributed via `.claude-plugin/marketplace.json` (forked/vendored code and runtime dependencies in shipped paths) while explicitly exempting dev-only tools, CI infrastructure, and test frameworks. It establishes an inbound license compatibility matrix for the project's MIT license, specifies the schema and workflow for `scripts/generate_third_party_notices.py` (which produces `THIRD-PARTY-NOTICES.TXT` in the dotnet/runtime format), and provides a pre-release compliance checklist. Without this document, contributors and automated workflows would lack clear legal boundaries for dependency adoption and risk either omitting required copyright notices or mistakenly introducing incompatible copyleft licenses (GPL/AGPL).

## Phase — required
rjm:ship

## Inputs — required
- Plugin manifest at `.claude-plugin/marketplace.json` defining shipped plugin paths (docs/third-party-license-attribution.md:9, 54, 78).
- Forked or vendored source code in shipped plugin paths (docs/third-party-license-attribution.md:14, 55-56, 82-89).
- Runtime dependencies declared in `requirements.txt` files within shipped paths (docs/third-party-license-attribution.md:15, 57-58, 91-98).
- Upstream licenses from repository LICENSE files or PyPI (docs/third-party-license-attribution.md:84, 93).
- Data structures `FORKED_COMPONENTS` and `RUNTIME_DEPENDENCIES` inside `scripts/generate_third_party_notices.py` (docs/third-party-license-attribution.md:56, 58, 86, 95).

## Outputs — required
- Generated notices file: `THIRD-PARTY-NOTICES.TXT` formatted in the dotnet/runtime attribution style (docs/third-party-license-attribution.md:59, 73, 88, 97, 104).

## Invokes — required
- file marketplace.json — docs/third-party-license-attribution.md:9
- script generate_third_party_notices.py — docs/third-party-license-attribution.md:49

## Invoked by — required
- CONTRIBUTING.md — CONTRIBUTING.md:1104, 1113

## Concepts named — required, verbatim
- `Third-Party License Attribution` — docs/third-party-license-attribution.md:1 — defined here
- `Shipped Components` — docs/third-party-license-attribution.md:6 — defined here
- `License Compatibility` — docs/third-party-license-attribution.md:24 — defined here
- `MIT` — docs/third-party-license-attribution.md:26 — used here
- `BSD-2-Clause` — docs/third-party-license-attribution.md:31 — used here
- `BSD-3-Clause` — docs/third-party-license-attribution.md:32 — used here
- `Apache-2.0` — docs/third-party-license-attribution.md:33 — used here
- `ISC` — docs/third-party-license-attribution.md:34 — used here
- `PSF` — docs/third-party-license-attribution.md:35 — used here
- `Unlicense` — docs/third-party-license-attribution.md:36 — used here
- `MPL-2.0` — docs/third-party-license-attribution.md:37 — used here
- `LGPL` — docs/third-party-license-attribution.md:38 — used here
- `GPL` — docs/third-party-license-attribution.md:39 — used here
- `AGPL` — docs/third-party-license-attribution.md:40 — used here
- `FORKED_COMPONENTS` — docs/third-party-license-attribution.md:56 — used here
- `RUNTIME_DEPENDENCIES` — docs/third-party-license-attribution.md:58 — used here
- `Check Mode` — docs/third-party-license-attribution.md:61 — defined here
- `Compliance Checklist` — docs/third-party-license-attribution.md:118 — defined here

## Structure
- # Third-Party License Attribution — docs/third-party-license-attribution.md:1
- ## Scope: Shipped Components Only — docs/third-party-license-attribution.md:6
- ## License Compatibility — docs/third-party-license-attribution.md:24
- ## Generating the Notices File — docs/third-party-license-attribution.md:44
- ### Check Mode — docs/third-party-license-attribution.md:61
- ## When to Update — docs/third-party-license-attribution.md:71
- ## Adding a New Shipped Component — docs/third-party-license-attribution.md:80
- ### Forked or Vendored Code — docs/third-party-license-attribution.md:82
- ### Runtime Dependencies — docs/third-party-license-attribution.md:91
- ## Attribution Requirements by License — docs/third-party-license-attribution.md:100
- ### MIT, BSD-2-Clause, BSD-3-Clause, ISC — docs/third-party-license-attribution.md:102
- ### Apache-2.0 — docs/third-party-license-attribution.md:106
- ### MPL-2.0 — docs/third-party-license-attribution.md:112
- ## Compliance Checklist — docs/third-party-license-attribution.md:118

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Clear distinction between shipped redistributed code (requiring attribution) and dev/CI infrastructure (exempt). The automation script embeds metadata dicts (`FORKED_COMPONENTS`, `RUNTIME_DEPENDENCIES`) directly in python source code rather than maintaining separate YAML or JSON metadata manifests.

## Context cost
4463 bytes, ~1115 tokens.
