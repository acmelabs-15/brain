---
package: rjm
name: Task Classification
slug: task-classification
kind: technique
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

# Task Classification

## Definition — verbatim
(used, not defined)

> "## Before Work: Task Classification" — .claude/skills/analyze/references/engineering-complexity-tiers.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 27 | defined here | Pre-work technique assigning review rigor and reviewer profiles based on complexity tier. |

## Consumes
Task specifications, problem scope, blast radius.

## Produces
Review rigor tier (self-review up to governance board) and reviewer profile assignment.

## When applied
Prior to commencing implementation work during planning or sprint kickoff.

## Sub-concepts
none

## Part of
engineering-complexity-tiers

## Implementation status
defects: missing-path

## Design notes
A pre-execution technique in rjm that classifies incoming engineering tasks into one of five complexity tiers to ensure proportional review rigor, ranging from simple peer review for Tier 1 to governance board sign-off for Tier 5.
