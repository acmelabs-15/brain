---
package: rjm
name: list_remote_branches
slug: list-remote-branches
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

# list_remote_branches

## Definition — verbatim
(used, not defined)

> "def list_remote_branches(exclude_patterns: list[str] | None = None) -> list[str]:" — scripts/audit_orphaned_branches.py:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/audit_orphaned_branches.py | 78 | defined here | Function querying remote repository branches via git and filtering excluded prefixes. |

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
list_remote_branches is a helper function identifier in the branch auditing utility rather than an operational lifecycle concept.
