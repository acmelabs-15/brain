---
package: rjm
name: Senior to Staff
slug: senior-to-staff
kind: pattern
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Senior to Staff

## Definition — verbatim
> "Senior to Staff is where execution stops being the primary measure of value." — .claude/skills/analyze/references/engineering-complexity-tiers.md:23

## Also called — verbatim
"The Inflection Point: Senior to Staff" — .claude/skills/analyze/references/engineering-complexity-tiers.md:21

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 21 | defined here | Highlights the shift where engineering value transitions from code execution to organizational clarity. |

## Consumes
Engineering role descriptions and output expectations.

## Produces
Guidance for evaluating architectural decisions versus implementation tasks.

## When applied
Assessing engineering level requirements and task ambiguity.

## Sub-concepts
the-senior-inflection-point

## Part of
engineering-complexity-tiers

## Implementation status
defects: missing-path

## Design notes
An architectural concept in rjm identifying the transition point where engineering value ceases to be measured in individual code production and instead centers on unblocking teams, clarifying ambiguity, and setting cross-cutting technical direction.
