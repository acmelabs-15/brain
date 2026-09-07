---
package: rjm
name: fail-opens
slug: fail-opens
kind: pattern
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

# fail-opens

## Definition — verbatim
(used, not defined)

> "fail-opens. The verdict was wrong in the direction nobody double-checks." — .claude/skills/reviewer-findings/SKILL.md:309

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reviewer-findings/SKILL.md | 309 | used here | Identifies a dangerous anti-pattern where reviewers certify code containing error paths that fail open. |

## Consumes
Review findings and error handling logic in target code.

## Produces
Awareness and detection of insecure permissive failure modes during code review.

## When applied
Analyzed during adversarial review triage when examining security and error handling paths.

## Sub-concepts
none

## Part of
reviewer-findings

## Implementation status
defects: orphan, missing-path

## Design notes
A security and quality defect pattern where an error, exception, or unhandled condition results in granting access or passing a gate by default.
