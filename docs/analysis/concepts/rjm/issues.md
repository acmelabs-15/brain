---
package: rjm
name: ISSUES
slug: issues
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/sweep_copilot_synthesis.py, sha256: 6e2ee8a4efeefcaf6a250ad485ea4cab481fdaf8d9024465b82c936a6a4360d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ISSUES

## Definition — verbatim
(used, not defined)

> "(ADR-006: no logic in YAML). Iterates over all issue numbers in ISSUES," — scripts/ci/sweep_copilot_synthesis.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/sweep_copilot_synthesis.py | 4 | used here | Environment variable input containing space-separated issue numbers to process in a sweep. |

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
defects: orphan

## Design notes
ISSUES is an environment variable identifier passing a space-delimited list of issue numbers to a sweep script rather than an SDLC lifecycle concept.
