---
package: rjm
name: Sanctioned deferral protocol
slug: sanctioned-deferral-protocol
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_no_orphaned_build_deferrals.py, sha256: 385823fc11288d84abe811bc70275a1e11eef981f5a217f044244fac5386fba0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Sanctioned deferral protocol

## Definition — verbatim
> "Sanctioned deferral protocol" — scripts/validation/validate_no_orphaned_build_deferrals.py:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_no_orphaned_build_deferrals.py | 27 | defined here | Governs the narrow, temporary exemption protocol allowing generator commits despite upstream broken skills. |

## Consumes
Tracking issue for upstream breakage and temporary exemption constant in build/scripts/build_all.py.

## Produces
Sanctioned deferral entry tied to an open tracking issue and enforced by automated orphan detection.

## When applied
When a generator change touches a new upstream-broken skill preventing clean mirror generation.

## Sub-concepts
deferralblock, staleness-deferrals

## Part of
build-all

## Implementation status
clean

## Design notes
The sanctioned deferral protocol defines a disciplined exception pattern in rjm's build phase: developers facing upstream-broken skills may introduce temporary generator staleness exemptions only if an active tracking issue is opened and cited, with automated CI validation preventing deadlocks while guaranteeing dead exemptions cannot be orphaned once the issue is closed.
