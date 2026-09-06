---
package: addy
name: "Pre-launch checklists"
slug: pre-launch-checklists
kind: checklist
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Pre-launch checklists

## Definition — verbatim
(used, not defined)

> "Pre-launch checklists, feature-flag lifecycle, staged rollouts, rollback procedures, and monitoring setup." — external/shipping-and-launch.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/shipping-and-launch.md | 1 | defined here | Listed as a foundational operational readiness tool in the shipping-and-launch page metadata. |

## Consumes
Release candidate code, verification results, documentation, and monitoring readiness.

## Produces
Validated operational readiness checklist confirming all deployment criteria are satisfied.

## When applied
Executed during the Ship phase immediately before initiating production release.

## Sub-concepts
none

## Part of
shipping-and-launch

## Implementation status
defects: doc-drift

## Design notes
A structured procedural checklist verifying that testing, monitoring, rollbacks, and operational safeguards are in place before a release is approved for production deployment.
