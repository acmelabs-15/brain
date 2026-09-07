---
package: rjm
name: Manual override
slug: manual-override
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

# Manual override

## Definition — verbatim
> "Manual override is a first-class audited lease operation, not `--no-verify`." — .agents/architecture/ADR-090-pr-branch-holder-lease.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 42 | defined here | Defined as a first-class audited operation requiring maintainer authorization and human-written rationale. |

## Consumes
Maintainer or admin GitHub authorization, previous holder ID, and human rationale string.

## Produces
An audited `operation: override` comment marker releasing or transferring lease ownership.

## When applied
When an operator or maintainer needs to break an unexpired or orphaned lease without bypassing git safety checks.

## Sub-concepts
none

## Part of
pr-branch-holder-lease

## Implementation status
not-implemented (ADR-090 proposed; citing inventory card records defects: none)

## Design notes
A formal, audited mechanism for breaking or taking over an active holder lease. Rather than using unstructured bypass flags like `--no-verify`, a manual override requires verified repository maintainer privileges and posts an explicit audit comment containing a human rationale, preserving accountability without compromising exact-SHA push safety.
