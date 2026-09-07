---
package: rjm
name: UNKNOWN is information
slug: unknown-is-information
kind: pattern
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

# UNKNOWN is information

## Definition — verbatim
> "- **UNKNOWN is information**. A skill that did not evaluate is not a silent PASS." — .claude/skills/review/SKILL.md:188

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 188 | defined here | Guiding review principle stating that unevaluated or failed skills must not be treated as passing. |

## Consumes
Evaluation results from individual review axes and subagent skills.

## Produces
Preservation of indeterminate status to prevent false negative verdicts and silent failures.

## When applied
Applied when processing review skill crashes, execution timeouts, or unparseable outputs.

## Sub-concepts
none

## Part of
review-principles

## Implementation status
defects: missing-path, doc-drift

## Design notes
A fail-safe review principle mandating that lack of evaluation or crash in a review tool is treated as valuable diagnostic information rather than defaulted to a successful pass.
