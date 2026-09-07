---
package: rjm
name: Acceptance Criteria Coverage
slug: acceptance-criteria-coverage
kind: checklist
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

# Acceptance Criteria Coverage

## Definition — verbatim
> "### 2. Acceptance Criteria Coverage" — .claude/skills/review/references/spec-compliance.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/spec-compliance.md | 71 | defined here | Analysis focus area 2 enumerating and evaluating every acceptance criterion in the linked spec against the PR diff. |

## Consumes
Linked spec acceptance criteria and pull request diff changesets.

## Produces
Categorized coverage status (satisfied, partially satisfied, or not satisfied) for each declared acceptance criterion.

## When applied
Executed during Stage-1 spec compliance review whenever a specification document is linked.

## Sub-concepts
none

## Part of
spec-compliance

## Implementation status
defects: internal-contradiction

## Design notes
Acceptance Criteria Coverage is the systematic audit mechanism in rjm's spec review that enumerates each acceptance criterion in the contract and verifies that code changes provide concrete implementation evidence for every item.
