---
package: matt
name: ready for review
slug: ready-for-review
kind: gate
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ready for review

## Definition — verbatim
> "8. Mark the PR as ready for review." — skills/in-progress/implement-spec/SKILL.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/implement-spec/SKILL.md | 33 | defined here | Final completion transition for the pull request after all tickets and code review fixes land. |

## Consumes
PR branch containing all merged tickets and code review fixes from /code-review.

## Produces
Pull request transition from draft to ready for human review.

## When applied
Step 8 of implement-spec once all tickets are implemented, merged, and reviewed clean.

## Sub-concepts
none

## Part of
implement-spec

## Implementation status
clean

## Design notes
The final completion gate in implement-spec. It converts the draft pull request to ready for review only after every ticket in the task graph has been implemented, merged to the integration branch, reviewed via /code-review, and all review issues resolved.
