---
package: rjm
name: Phase D1: Deletion Detection
slug: phase-d1-deletion-detection
kind: phase
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/deletion-workflow.md, sha256: 554c3cb2d110a6afa1e06a8f7b09e4b8fa88e5d08f9206571bab8436cb576657}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase D1: Deletion Detection

## Definition — verbatim
> "## Phase D1: Deletion Detection" — .claude/skills/adr-review/references/deletion-workflow.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/deletion-workflow.md | 5 | defined here | Initial phase of the ADR deletion workflow, running automated detection scripts to identify deleted ADRs, their last known status, and dependent records. |

## Consumes
Git working tree modifications and deleted ADR files detected via `detect_adr_changes.py`.

## Produces
Detection report identifying deleted ADR paths, last known lifecycle status (proposed, accepted, deprecated, superseded), and referencing dependent ADRs.

## When applied
Triggered when an ADR file removal is detected during repository review or git status inspection.

## Sub-concepts
none

## Part of
adr-deletion-workflow, adr-review

## Implementation status
clean

## Design notes
The automated discovery phase of the ADR deletion workflow. Instead of treating ADR deletions as ordinary file removals, Phase D1 detects the deleted paths, queries their historical governance status, and identifies active references in other ADRs to guard against accidental removal of critical architectural context.
