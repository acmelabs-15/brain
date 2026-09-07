---
package: rjm
name: ProvenanceResult
slug: provenanceresult
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analysis-provenance/scripts/check_provenance.py, sha256: e9ba09d25d1343e57de5e42155192494ac325c4738171459485d9ab85d9e63ce}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ProvenanceResult

## Definition — verbatim
(used, not defined)

> "class ProvenanceResult:" — .claude/skills/analysis-provenance/scripts/check_provenance.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analysis-provenance/scripts/check_provenance.py | 50 | defined here | Defined as a dataclass representing the structured result of provenance analysis. |

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
defects: exit-code-mismatch, script-bug

## Design notes
`ProvenanceResult` is a Python dataclass in `check_provenance.py` encapsulating the output of provenance analysis (target path, category, confidence, and evidence), classified as `kind: name-only` per D-023 as an implementation data structure rather than an agent lifecycle concept.
