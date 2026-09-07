---
package: rjm
name: deep review
slug: deep-review
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# deep review

## Definition — verbatim
> "explicit deep review runs the full 15-axis set." — .claude/skills/review/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 4 | defined here | Defines full evaluation mode running all 15 review axes. |

## Consumes
Explicit caller request or unclassified change risk requiring exhaustive evaluation.

## Produces
Exhaustive findings and verdict evaluations across all 15 canonical and local review axes.

## When applied
> "when requested or when deep review is explicit." — .claude/skills/review/SKILL.md:4

## Sub-concepts
15-axis-set

## Part of
review

## Implementation status
defects: missing-path, doc-drift

## Design notes
Deep review provides an exhaustive review pass running all 15 canonical and local axes without risk-based pruning, operating as a strict local superset of CI checks. It ensures that major refactors, complex changes, or ambiguous diffs undergo maximum multi-perspective scrutiny before merge.
