---
package: matt
name: Institutional memory
slug: institutional-memory
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/triage/OUT-OF-SCOPE.md, sha256: 1fbf9b432130c6380aa65813b55553cfda150309b27c595e183f8e335b8a190d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Institutional memory

## Definition — verbatim
> "1. **Institutional memory**: why a feature was rejected, so the reasoning isn't lost when the issue is closed" — skills/engineering/triage/OUT-OF-SCOPE.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/triage/OUT-OF-SCOPE.md | 5 | defined here | Explains that the out-of-scope directory preserves rejected feature reasoning after issues close. |

## Consumes
Rejection decisions, maintainer rationale, and architectural trade-offs for proposed features.

## Produces
Persistent concept documents stored in `.out-of-scope/<concept>.md`.

## When applied
Applied whenever an enhancement request is formally rejected with prejudice during triage.

## Sub-concepts
none

## Part of
triage

## Implementation status
clean

## Design notes
A knowledge preservation pattern implemented via `.out-of-scope/*.md` files in the repository. It ensures that the technical, architectural, and product rationale behind rejecting a feature is permanently retained in the codebase rather than being lost in closed issue tracker tickets.
