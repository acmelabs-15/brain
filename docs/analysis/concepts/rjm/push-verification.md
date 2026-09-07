---
package: rjm
name: push verification
slug: push-verification
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-090-pr-branch-holder-lease.md, sha256: eb606b8f382ec06a8126b2a6d1814d7323a239eb350ba99314361006d776059d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# push verification

## Definition — verbatim
(used, not defined)

> "The implementation must resolve one stable holder id before acquire, renew, release, override, or push verification." — .agents/architecture/ADR-090-pr-branch-holder-lease.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 47 | used here | Named as one of the mandatory enforcement steps requiring a resolved stable holder ID. |

## Consumes
Resolved holder ID, verified GitHub actor, active lease state, and target branch ref.

## Produces
Validation check permitting or aborting the push pipeline.

## When applied
Immediately prior to invoking git push against the remote repository.

## Sub-concepts
none

## Part of
pr-branch-holder-lease

## Implementation status
not-implemented (ADR-090 proposed; citing inventory card records defects: none)

## Design notes
The verification check confirming that the current pushing process holds an active, unexpired lease with matching actor and holder IDs before initiating ref transmission.
