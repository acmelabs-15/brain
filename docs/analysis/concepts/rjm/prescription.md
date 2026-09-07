---
package: rjm
name: Prescription
slug: prescription
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reviewer-findings/SKILL.md, sha256: 04e77c280908ff452996e9cc7874985d34475f7fae25d2a49f1c2f4a2403b9b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Prescription

## Definition — verbatim
> "Prescription" — .claude/skills/reviewer-findings/SKILL.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reviewer-findings/SKILL.md | 35 | defined here | Table row defining the recommended remediation claim within the three-claim finding decomposition model. |

## Consumes
A review finding proposing specific code changes or architectural mitigations.

## Produces
Proposed remediation steps evaluated independently from the finding's verdict and diagnosis.

## When applied
Evaluated during premise verification to verify whether proposed remediations are valid and not already implemented.

## Sub-concepts
none

## Part of
the-three-claims

## Implementation status
defects: orphan, missing-path

## Design notes
The prescriptive remediation element of a review finding that proposes how to fix an issue, evaluated independently from whether the defect exists to prevent implementing outdated or flawed suggestions.
