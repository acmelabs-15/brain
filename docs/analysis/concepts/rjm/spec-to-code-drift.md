---
package: rjm
name: Spec to Code drift
slug: spec-to-code-drift
kind: pattern
package_phase: rjm:sync
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/sync.md, sha256: f6e8579a330acaa0c1fad9b84a0e10fae41cdd63122e9d9becd65564f3727019}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Spec to Code drift

## Definition — verbatim
> "description: Detect Spec to Code drift. Scan REQ/DESIGN/TASK specs for references to code that no longer exists, then report drift for review." — .claude/commands/sync.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/sync.md | 2 | defined here | Core focus of the `/sync` command, detecting discrepancies between specification paths and working tree code. |

## Consumes
Formal specifications under the specification tier (REQ/DESIGN/TASK) and current repository file paths.

## Produces
A drift report listing broken path citations, missing files, and unaligned architectural assumptions.

## When applied
Checked via `/sync` after manual refactorings, file relocations, or component deletions.

## Sub-concepts
reverse-path, drift-detector

## Part of
sync

## Implementation status
defects: orphan, missing-path

## Design notes
Spec to Code drift captures the reality that implementation code often changes faster than documentation. When engineers refactor or delete components during bug fixes or emergency patches, formal specs silently become outdated. By providing automated detection of invalid references, `/sync` surfaces this drift early before it causes failures in review or confusion in future sprints.
