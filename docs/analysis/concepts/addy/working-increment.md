---
package: addy
name: working increment
slug: working-increment
kind: artifact
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/incremental-implementation.json, sha256: 3f40c3955e0cccd725711818da2c4e3eac5c6eff0129afadea5cf8b74e558813}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# working increment

## Definition — verbatim
(used, not defined)
> "Build this feature step by step, committing after each working increment" — evals/cases/incremental-implementation.json:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/incremental-implementation.json | 10 | used here | Eval trigger prompt specifying step-by-step development committed after each working increment. |

## Consumes
The codebase at a stable commit plus a single incremental modification.

## Produces
A compilable, test-verified state of the codebase committed as a standalone save point.

## When applied
At each iteration of the build cycle prior to creating a commit.

## Sub-concepts
none

## Part of
- incremental-implementation

## Implementation status
clean

## Design notes
A working increment ensures that code modifications are saved only when the system as a whole remains compilable and passing tests. It prevents leaving the repository in a broken intermediate state.
