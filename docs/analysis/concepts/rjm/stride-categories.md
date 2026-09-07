---
package: rjm
name: STRIDE_CATEGORIES
slug: stride-categories
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/scripts/generate_threat_matrix.py, sha256: efe078c6f610c0f98a1c52c3fe0ef180e0da08116dcaa84bc582a3efdcd12bb3}
  - {path: .claude/skills/threat-modeling/scripts/validate_threat_model.py, sha256: 2df216789ee2fa0e552450372de422efd2bda8e7dc1f6f8a4e386e05ec3d86b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# STRIDE_CATEGORIES

## Definition — verbatim
(used, not defined)

> "STRIDE_CATEGORIES = [" — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/scripts/generate_threat_matrix.py | 32 | defined here | Constant tuple list defining STRIDE letter codes, category names, and descriptions. |
| .claude/skills/threat-modeling/scripts/validate_threat_model.py | 51 | defined here | Constant set defining valid STRIDE category single-letter identifiers for table validation. |

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
defects: exit-code-mismatch

## Design notes
`STRIDE_CATEGORIES` is a Python code constant identifier defined across threat modeling generator and validation scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
