---
package: rjm
name: WorkflowRun
slug: workflowrun
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/measure_workflow_coalescing.py, sha256: a2f08fac0cf0c442ccaecf9ff40c68082a3a635c9cd5051bd01849bf43b53d49}
  - {path: scripts/github_core/recovery_manifest.py, sha256: 4ec40a442220c75958c784756c9bb22f6e2c7902b1f47382feee82ef7ed953a9}
  - {path: scripts/github_core/runs_file.py, sha256: fc54605d096ae1191ec2ae922105c431c4f73b8993785931ff245fd72818e4f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# WorkflowRun

## Definition — verbatim
(used, not defined)

> "class WorkflowRun:" — .github/scripts/measure_workflow_coalescing.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/measure_workflow_coalescing.py | 61 | defined here | Dataclass representing a single GitHub Actions workflow run execution record. |
| scripts/github_core/recovery_manifest.py | 57 | defined here | Frozen dataclass defining a workflow run targeted by bulk cancellation recovery. |
| scripts/github_core/runs_file.py | 22 | used here | Imported from `recovery_manifest` to type-annotate runs loaded from workflow run files. |

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
defects: doc-drift, orphan

## Design notes
A dataclass representing GitHub workflow run execution metadata across CI scripts rather than an independent lifecycle concept.
