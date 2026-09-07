---
package: rjm
name: Code moved
slug: code-moved
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

# Code moved

## Definition — verbatim
> "- **Code moved**: the path was renamed. Update the spec reference to the current path." — .claude/commands/sync.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/sync.md | 49 | defined here | Triage category in `/sync` identifying renamed or relocated files requiring specification path updates. |

## Consumes
A drift finding where a referenced file is absent at the cited path but exists elsewhere in the repository.

## Produces
An updated specification reference pointing to the relocated file path.

## When applied
Selected during Step 2 of `/sync` when a file path cited in a specification has been moved or renamed.

## Sub-concepts
none

## Part of
triage, sync

## Implementation status
defects: orphan, missing-path

## Design notes
Code moved is one of four drift triage categories in `/sync`. It recognizes that architectural refactorings frequently relocate modules to better organizational structures without changing their fundamental purpose, instructing authors to update path references in specifications to restore traceability.
