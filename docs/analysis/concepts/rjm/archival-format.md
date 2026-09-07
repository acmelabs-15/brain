---
package: rjm
name: Archival Format
slug: archival-format
kind: template
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

# Archival Format

## Definition — verbatim
> "## Archival Format" — .claude/skills/adr-review/references/deletion-workflow.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/deletion-workflow.md | 63 | defined here | Defines the standard markdown header metadata and destination path for archiving deleted or retired ADRs. |

## Consumes
Deleted ADR content, deletion timestamp, reason for archival, and original lifecycle status.

## Produces
Archived ADR document persisted under `.agents/architecture/archive/ADR-NNN-title.md` with structured header metadata.

## When applied
Applied during Phase D3 when an accepted, deprecated, or superseded ADR is removed from active documentation.

## Sub-concepts
none

## Part of
phase-d3-archival-decision, adr-deletion-workflow

## Implementation status
clean

## Design notes
Standardizes the storage location and header schema for retired ADRs. By preserving the original decision content under `.agents/architecture/archive/` with metadata capturing the archival date, original status, and deletion rationale, it maintains historical traceability without cluttering active architecture directories.
