---
package: rjm
name: claim-then-execute
slug: claim-then-execute
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# claim-then-execute

## Definition — verbatim
> "External effects (HTTP calls, notifications, file writes outside the SoR) are at-least-once. Wrap them with a claim-then-execute pattern: write the claim before, the result after, and skip on retry if either is present." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 135 | defined here | Defined as an architectural pattern for executing external side effects under at-least-once delivery semantics. |

## Consumes
External side-effect triggers, persistent claim storage, idempotency keys.

## Produces
Durable claim row before side-effect execution and result row after, preventing duplicate operations during retries.

## When applied
Applied when executing non-idempotent external operations (e.g. HTTP calls, notifications, irreversible file modifications) to defend against duplicate side effects.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
The claim-then-execute pattern wraps external non-idempotent side effects with durable state barriers by writing a claim record prior to side-effect execution and the outcome afterward, enabling retry loops to safely detect already-dispatched or completed requests.
