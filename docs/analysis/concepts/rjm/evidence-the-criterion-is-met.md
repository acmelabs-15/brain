---
package: rjm
name: Evidence the Criterion Is Met
slug: evidence-the-criterion-is-met
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/spec-compliance.md, sha256: 9e50737d1c7146134285d882501c119b417becab5db7e182af64e5c47edc1a7c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Evidence the Criterion Is Met

## Definition — verbatim
> "### 5. Evidence the Criterion Is Met" — .claude/skills/review/references/spec-compliance.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/spec-compliance.md | 90 | defined here | Analysis focus area 5 demanding concrete file:line citations in the diff for satisfied criteria and tests. |

## Consumes
File and line citations in the pull request diff for code and test implementations.

## Produces
Grounded proof of compliance or downgrades claims lacking file:line citations to partially satisfied.

## When applied
Applied to validate each satisfied acceptance criterion during Stage-1 spec compliance review.

## Sub-concepts
none

## Part of
spec-compliance

## Implementation status
defects: internal-contradiction

## Design notes
Evidence the Criterion Is Met enforces empirical rigor in rjm's spec review by requiring the reviewing agent to cite specific file and line coordinates in the diff for every claimed satisfaction, downgrading unproven claims.
