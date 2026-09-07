---
package: rjm
name: CANONICAL_LAYERS
slug: canonical-layers
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/work-operating-model/scripts/validate_operating_model.py, sha256: 99f44b417e6f3b715e0579caf73524caa79c26fa8cf7887e0fda9f0a1de44a54}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CANONICAL_LAYERS

## Definition — verbatim
(used, not defined)

> "CANONICAL_LAYERS: tuple[str, ...] = (" — .claude/skills/work-operating-model/scripts/validate_operating_model.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/work-operating-model/scripts/validate_operating_model.py | 29 | defined here | Constant tuple enumerating the five canonical interview layers checked during validation. |

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
clean

## Design notes
`CANONICAL_LAYERS` is an internal Python constant tuple defining the valid layer keys in the operating model validator rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
