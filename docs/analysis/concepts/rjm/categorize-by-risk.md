---
package: rjm
name: categorize_by_risk
slug: categorize-by-risk
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py, sha256: 1941714a412d29e03cb5aaca38a66fbff2cbc71e3ff9c7491192f63f73455c4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# categorize_by_risk

## Definition — verbatim
(used, not defined)

> "def categorize_by_risk(threats: list[Threat]) -> dict[str, list[Threat]]:" — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:172

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py | 172 | defined here | Python function grouping Threat objects by severity risk level. |

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
`categorize_by_risk` is a Python utility function in `generate_mitigation_roadmap.py` sorting threats by risk category rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
