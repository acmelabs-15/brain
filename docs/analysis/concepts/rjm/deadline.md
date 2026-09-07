---
package: rjm
name: deadline
slug: deadline
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# deadline

## Definition — verbatim
> "Define a deadline at the entry point of the operation and propagate it down. Do not let downstream calls exceed the deadline." — .claude/skills/software-engineering-library/references/release-it.md:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 168 | defined here | Defined as an end-to-end time budget established at request entry and propagated down through all subordinate calls. |

## Consumes
Overall operation latency budgets and user-facing SLO contracts.

## Produces
Adjusted per-call timeout allocations, deadline propagation headers/contexts, and early cancellation triggers.

## When applied
Established at the outer entry point of an operation and passed through each downstream dependency.

## Sub-concepts
none

## Part of
slow-responses-are-failures

## Implementation status
defects: missing-path

## Design notes
A deadline establishes a fixed point in time by which an overall operation must complete, regardless of how many subordinate calls it makes. Propagating deadlines through downstream integration points ensures work is cancelled immediately when the overall time budget has expired.
