---
package: rjm
name: Code deleted
slug: code-deleted
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

# Code deleted

## Definition — verbatim
> "- **Code deleted**: the capability was removed. Update the spec to reflect the removal, or restore the code if the removal was unintended." — .claude/commands/sync.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/sync.md | 50 | defined here | Triage category in `/sync` identifying removed capabilities that require spec deprecation or code restoration. |

## Consumes
A drift finding where a referenced code file has been completely removed from the repository.

## Produces
A specification update documenting the removal of the capability, or a decision to restore accidentally deleted code.

## When applied
Selected during Step 2 of `/sync` when an entire module or feature cited in a specification has been removed.

## Sub-concepts
none

## Part of
triage, sync

## Implementation status
defects: orphan, missing-path

## Design notes
Code deleted handles scenarios where code cited in specifications has been eliminated. It forces engineers to make a deliberate decision: if the removal was intentional, the specification must be updated to remove dead requirements; if the deletion was an accidental regression, the missing code must be restored.
