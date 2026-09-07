---
package: rjm
name: reviewed tip
slug: reviewed-tip
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/scripts/validate_review_marker.py, sha256: 544dafe1234d93afd9cba8b65d80c67fd198918f7a44838a56528ed5256afd11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# reviewed tip

## Definition — verbatim
> "asserts: the reviewed tip." — .claude/skills/review/scripts/validate_review_marker.py:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/scripts/validate_review_marker.py | 18 | defined here | Defined as the Git commit object name whose review state the marker trailer binds and asserts. |

## Consumes
The Git commit at HEAD when all review axes pass.

## Produces
A target commit SHA embedded into the `Reviewed-By` trailer of an empty marker commit.

## When applied
Captured via `git rev-parse HEAD` upon completion of a successful `/review` execution.

## Sub-concepts
none

## Part of
review

## Implementation status
clean

## Design notes
The reviewed tip is the specific Git commit hash that underwent review, bound to an empty marker commit to guarantee that approval applies strictly to that exact commit state.
