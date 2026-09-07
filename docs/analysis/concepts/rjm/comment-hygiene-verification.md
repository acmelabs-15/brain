---
package: rjm
name: comment_hygiene_verification
slug: comment-hygiene-verification
kind: checklist
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/planner.py, sha256: 7c8c5cbbaace2e7111150238c7aac48963f1395180196f85ca965bb7ede4dfaf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# comment_hygiene_verification

## Definition — verbatim
> "Comments in code snippets will be transcribed VERBATIM to code." — .claude/skills/planner/scripts/planner.py:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 108 | defined here | Verification step ensuring code comments in planned snippets use timeless present phrasing without temporal markers. |

## Consumes
Draft code snippets and inline comments in implementation plans.

## Produces
Sanitized code comments phrased in the timeless present, free of temporal references ("added", "replaces", "fixed").

## When applied
Enforced during final planning verification before sending the plan to review.

## Sub-concepts
timeless-present

## Part of
planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A quality checklist step in planning that audits planned code snippets to ensure inline comments describe present system behavior rather than transient refactoring actions, reducing downstream technical writer rework.
