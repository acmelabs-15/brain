---
package: rjm
name: check_incomplete_markers
slug: check-incomplete-markers
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/scripts/validate_experiment.py, sha256: 1826ee03d52a3393c8c669330d46dd9e26ab6585330991d1da261645a145de53}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# check_incomplete_markers

## Definition — verbatim
(used, not defined)

> "def check_incomplete_markers(content: str) -> list[str]:" — .claude/skills/chaos-experiment/scripts/validate_experiment.py:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/scripts/validate_experiment.py | 110 | defined here | Scans document text for placeholders or unresolved marker patterns and formats issue descriptions. |

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
defects: doc-drift, exit-code-mismatch

## Design notes
`check_incomplete_markers` is a helper function identifier that inspects document text for placeholder patterns (like TODO or TBD), classified as `name-only` per D-023.
