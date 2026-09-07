---
package: rjm
name: generate_threat_matrix
slug: generate-threat-matrix
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/scripts/generate_threat_matrix.py, sha256: efe078c6f610c0f98a1c52c3fe0ef180e0da08116dcaa84bc582a3efdcd12bb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# generate_threat_matrix

## Definition — verbatim
(used, not defined)

> "def generate_threat_matrix(scope: str, output_path: Path) -> int:" — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:190

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/scripts/generate_threat_matrix.py | 190 | defined here | Python function orchestrating document population and output file creation. |

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
`generate_threat_matrix` is the primary Python generation function in `generate_threat_matrix.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
