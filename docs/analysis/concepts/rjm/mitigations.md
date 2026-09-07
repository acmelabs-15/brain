---
package: rjm
name: Mitigations
slug: mitigations
kind: artifact
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Mitigations

## Definition — verbatim
(used, not defined)

> "## 5. Mitigations" — .claude/skills/threat-modeling/templates/threat-model-template.md:172

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/templates/threat-model-template.md | 172 | used here | Section heading structuring prioritized countermeasures across Critical/High, Medium, and Accepted risk tiers. |

## Consumes
Threat matrix entries, risk ratings, architectural constraints, and engineering team ownerships.

## Produces
Prioritized, actionable remediation plan with assigned sprint targets and implementation owners.

## When applied
Applied during Phase 3 (Mitigation Strategy) when detailing engineering solutions for identified vulnerabilities.

## Sub-concepts
none

## Part of
threat-model-template

## Implementation status
clean

## Design notes
`Mitigations` is the operational planning section of a threat model in `rjm` detailing concrete technical safeguards, assigned owners, and target sprint milestones to systematically eliminate or reduce identified risks.
