---
package: rjm
name: has_bot_reviewer
slug: has-bot-reviewer
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/invoke_pr_maintenance.py, sha256: 8dd50236d9f75e15ad2d420781c4ac4c220c25edfbbe428b53a2d8044ad449b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# has_bot_reviewer

## Definition — verbatim
(used, not defined)

> "def has_bot_reviewer(review_requests: dict[str, Any] | None) -> bool:" — .github/scripts/invoke_pr_maintenance.py:169

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/invoke_pr_maintenance.py | 169 | defined here | Inspects requested reviewers to determine if an agent-controlled bot has been requested for review. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction, orphan

## Design notes
has_bot_reviewer is a predicate function identifier evaluating whether an agent-controlled bot is among requested PR reviewers rather than an SDLC lifecycle concept, classified as name-only per D-023.
