---
package: rjm
name: FORENSIC TOOL
slug: forensic-tool
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_seed_parity.py, sha256: c25853828b45f5da25b2e26fd0e51b4ec2b4c68b8fcceb4ed6f8c7061ae67f59}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# FORENSIC TOOL

## Definition — verbatim
(used, not defined)

> "This is a FORENSIC TOOL, not a regression gate. Do NOT add it to CI." — scripts/validation/validate_seed_parity.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_seed_parity.py | 4 | defined here | used here | Label distinguishing a one-shot diagnostic auditing tool from an ongoing CI regression gate. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An operational classification label distinguishing one-time audit scripts from CI regression gates, classified as name-only per D-023.
