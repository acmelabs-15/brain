---
package: addy
name: safe fallbacks
slug: safe-fallbacks
kind: pattern
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/debugging-and-error-recovery.md, sha256: 609cad09179de130e4d22459bc24cd857cad8ec084733dc6f2a6d526cbdbead3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# safe fallbacks

## Definition — verbatim
(used, not defined)

> "with a stop-the-line rule and safe fallbacks, so you fix the cause instead of guessing." — external/debugging-and-error-recovery.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/debugging-and-error-recovery.md | 5 | used here | Named as an essential safeguard alongside the stop-the-line rule to avoid speculative fixes during debugging. |

## Consumes
Unrecoverable runtime errors, broken states, or failed fix attempts.

## Produces
Graceful degradation path or safe failure state.

## When applied
> "Tests fail, builds break, or behavior is unexpected." — external/debugging-and-error-recovery.md:5

## Sub-concepts
none

## Part of
root-cause-debugging

## Implementation status
defects: doc-drift

## Design notes
A defensive recovery mechanism ensuring that when an error cannot be immediately resolved at its root or execution encounters unexpected failure, the system reverts to a known safe state or controlled fallback rather than attempting speculative changes that compound system instability.
