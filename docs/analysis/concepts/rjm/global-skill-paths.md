---
package: rjm
name: GLOBAL_SKILL_PATHS
slug: global-skill-paths
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_skill_installation.py, sha256: 79da66a839b12bd87c6a6de7f14835f23a19d1c1dd505507adc06d19d563f191}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GLOBAL_SKILL_PATHS

## Definition — verbatim
(used, not defined)

> "GLOBAL_SKILL_PATHS = {" — scripts/validate_skill_installation.py:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_installation.py | 37 | defined here | Dictionary mapping agent platform names to global skill installation directories. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
`GLOBAL_SKILL_PATHS` is a Python dictionary constant identifier mapping supported platforms to global skill directory paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
