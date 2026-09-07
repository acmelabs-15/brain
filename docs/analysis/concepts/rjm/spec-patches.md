---
package: rjm
name: spec patches
slug: spec-patches
kind: artifact
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

# spec patches

## Definition — verbatim
> "### Step 3: Propose spec patches (follow-up, not in this slice)" — .claude/commands/sync.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/sync.md | 56 | defined here | Planned automated step in `/sync` proposing specification edits via `spec-generator` based on triaged drift. |

## Consumes
Triaged drift findings, human confirmations, and existing REQ/DESIGN/TASK specification text.

## Produces
Proposed specification edits and diff patches updating documentation to reflect code changes.

## When applied
Formulated during Step 3 of `/sync` following drift triage (currently applied manually pending automation).

## Sub-concepts
none

## Part of
sync

## Implementation status
defects: orphan, missing-path

## Design notes
Spec patches represent the proposed reconciliation edits generated from drift triage. Rather than automatically rewriting specifications without oversight, rjm designs spec patches as proposed changes requiring human author confirmation, preserving the integrity of architectural intent while easing the maintenance burden of updating documentation.
