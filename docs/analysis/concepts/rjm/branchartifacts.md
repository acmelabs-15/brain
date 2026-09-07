---
package: rjm
name: BranchArtifacts
slug: branchartifacts
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/audit_orphaned_branches.py, sha256: e08032e7dd3c0100f1c85b2e9f1c35ba9a15629b509f090f1b70691b46c14b01}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BranchArtifacts

## Definition — verbatim
(used, not defined)

> "class BranchArtifacts:" — scripts/audit_orphaned_branches.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/audit_orphaned_branches.py | 31 | defined here | Dataclass representing orphaned session and memory artifacts detected on a single git branch. |

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
BranchArtifacts is an internal Python dataclass structure used for tracking branch-level orphaned files rather than an operational lifecycle concept.
