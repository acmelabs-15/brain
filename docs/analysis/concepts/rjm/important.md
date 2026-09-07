---
package: rjm
name: IMPORTANT
slug: important
kind: reference
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# IMPORTANT

## Definition — verbatim
> "- **severity**: CRITICAL | IMPORTANT | SUGGESTION" — .claude/skills/review/SKILL.md:144

## Also called — verbatim
> "3. Categorizes findings as Critical, Important, or Suggestion" — docs/workflow-commands.md:156

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 144 | defined here | Defines intermediate finding severity level in the review output schema mapped from axis WARN verdicts. |
| docs/workflow-commands.md | 156 | defined here | Lists Important as one of three finding categories produced during review workflow execution. |

## Consumes
Review axis findings evaluated with a WARN verdict.

## Produces
Categorization of review findings as non-blocking but significant issues requiring acknowledgement or fix.

## When applied
Applied during review finding synthesis when an axis produces a WARN verdict.

## Sub-concepts
none

## Part of
review-findings

## Implementation status
defects: missing-path, doc-drift

## Design notes
IMPORTANT represents the intermediate finding severity level in rjm's review phase, designating issues that warrant attention and remediation before merge without triggering an outright gate blockage.
