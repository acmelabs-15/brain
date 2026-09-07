---
package: rjm
name: Acceptance Gate Relaxation
slug: acceptance-gate-relaxation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md, sha256: 924e6f5e3f68c755ac189d1ade6220f4f904c62a74c32547df99dc5e58a64aa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Acceptance Gate Relaxation

## Definition — verbatim
(used, not defined)

> "#### Acceptance Gate Relaxation (2026-06-01, Issue #2197)" — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 97 | defined here | Section heading documenting relaxation of `has_improvement` hard pass requirement to allow non-behavioral prompt updates. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
acceptance-gate

## Implementation status
defects: doc-drift

## Design notes
An architectural decision amendment heading in ADR-057 documenting the removal of `has_improvement` as a mandatory pass requirement, classified as `name-only` per D-023.
