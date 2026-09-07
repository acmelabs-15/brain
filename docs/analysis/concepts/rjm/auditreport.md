---
package: rjm
name: AuditReport
slug: auditreport
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/audit_orphaned_branches.py, sha256: e08032e7dd3c0100f1c85b2e9f1c35ba9a15629b509f090f1b70691b46c14b01}
  - {path: scripts/detect_hook_bypass.py, sha256: 75ac8dd432b365b4d7934e216897ccd03b44a366b92d5e8245bb6795e4dd6e0c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AuditReport

## Definition — verbatim
(used, not defined)

> "class AuditReport:" — scripts/audit_orphaned_branches.py:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/audit_orphaned_branches.py | 45 | defined here | Dataclass capturing an aggregate summary of orphaned branches and files across the repository. |
| scripts/detect_hook_bypass.py | 48 | defined here | Dataclass structured to represent bypass detection indicators and commit audit results. |

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
defects: doc-drift, script-bug

## Design notes
AuditReport is a Python dataclass name used across branch auditing and hook bypass detection scripts rather than a standalone lifecycle concept.
