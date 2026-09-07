---
package: rjm
name: AlertConfig
slug: alertconfig
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/scripts/generate_slo_document.py, sha256: 6cfedee270c2143f72cb05e1d5d1984bd31db0761caa9f91c1d71d621d547e80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AlertConfig

## Definition — verbatim
(used, not defined)

> "class AlertConfig:" — .claude/skills/slo-designer/scripts/generate_slo_document.py:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/scripts/generate_slo_document.py | 69 | defined here | Dataclass representing alert thresholds with burn rate, window, severity, and action. |

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
defects: internal-contradiction, exit-code-mismatch

## Design notes
AlertConfig is a Python dataclass identifier in generate_slo_document.py rather than an operational lifecycle concept, classified as name-only per D-023.
