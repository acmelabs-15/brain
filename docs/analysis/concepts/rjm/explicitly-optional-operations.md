---
package: rjm
name: Explicitly optional operations
slug: explicitly-optional-operations
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
  - {path: templates/agents/silent-failure-hunter.shared.md, sha256: 7edfe3cecb075fed987074b8a012b420750ea9ac1053089aa94d6f1dfb85598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Explicitly optional operations

## Definition — verbatim
> "A feature documented as optional, for example a non-critical telemetry ping or a cache warm, can fail without notifying the end user." — .claude/agents/silent-failure-hunter.md:150

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/silent-failure-hunter.md | 150 | defined here | Exemption rule permitting non-critical operations to fail without end-user alerts if logged. |
| templates/agents/silent-failure-hunter.shared.md | 160 | defined here | Shared template exemption rule for documented optional background operations. |

## Consumes
Telemetry pings, metrics publishing, cache warming, and supplementary background routines.

## Produces
Audit exemption validating that failures in non-critical tasks do not constitute critical defect findings.

## When applied
Applied during false-positive verification when auditing features explicitly designated as optional in project documentation.

## Sub-concepts
none

## Part of
reducing-false-positives

## Implementation status
defects: other

## Design notes
Explicitly optional operations describes non-critical background actions (telemetry pings, cache pre-warming) whose failures are permitted to proceed without user notification, provided the failure is recorded in operator observability channels.
