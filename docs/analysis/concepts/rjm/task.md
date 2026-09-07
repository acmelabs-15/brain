---
package: rjm
name: TASK-*
slug: task
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
  - {path: scripts/sync/__init__.py, sha256: 67ea47006dcd2b4c68e601bdc4092436a47d5454f6838565320bc77ee02c9f47}
  - {path: scripts/sync/detect_spec_drift.py, sha256: 4dc1517b2ead41c00958be4f3f4986ed5e2fa73971a79bac8c20a143afd635f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# TASK-*

## Definition — verbatim
> "This PR does not reference any specifications (REQ-*, DESIGN-*, TASK-*, or linked issues)." — .github/scripts/generate_spec_report.py:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/generate_spec_report.py | 120 | used here | Warning text citing the TASK-* specification prefix expected in compliant pull requests. |
| scripts/sync/__init__.py | 4 | used here | Package docstring identifying TASK as part of the specification tier monitored for drift against implementation code. |
| scripts/sync/detect_spec_drift.py | 7 | used here | Module docstring describing drift scanning across the TASK specification tier. |

## Consumes
Approved requirement specifications (`REQ-*`) and design specifications (`DESIGN-*`).

## Produces
Actionable implementation task definitions, work breakdown items, and deliverable checklists.

## When applied
During implementation planning when decomposing requirements and architecture designs into executable units of work, and during spec-drift audits.

## Sub-concepts
none

## Part of
specification-hierarchy

## Implementation status
defects: orphan, missing-path

## Design notes
`TASK-*` represents the actionable task artifact tier in rjm's specification hierarchy, breaking down high-level requirements and designs into concrete, traceable units of implementation work monitored for spec-to-code drift.
