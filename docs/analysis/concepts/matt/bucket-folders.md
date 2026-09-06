---
package: matt
name: bucket folders
slug: bucket-folders
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0002-ship-as-a-claude-code-plugin.md, sha256: c8f8f946db9fee714fc55270caf6107e749e30316d43fb80cb3ce2f048dd949d}
  - {path: CLAUDE.md, sha256: fa8a2aaf79ca544e92c76401fe2a862aba0583fe62c3a4908af6f20ebadeb89e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# bucket folders

## Definition — verbatim
> "Skills are organized into bucket folders under `skills/`:" — CLAUDE.md:1

## Also called — verbatim
> "Skills live in bucket folders under `skills/`: `engineering/` and `productivity/` are **promoted** (shipped); `misc/`, `personal/`, `in-progress/`, and `deprecated/` are **not**." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:9

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0002-ship-as-a-claude-code-plugin.md | 9 | used here | Explains the structural constraint between bucketed repository layout and single-path plugin discovery |
| CLAUDE.md | 1 | defined here | Rule 1 defining skill repository organization into category buckets |

## Consumes
Individual skills grouped by lifecycle intent and maturity level.

## Produces
Organized subdirectories under `skills/` (`engineering/`, `productivity/`, `misc/`, `in-progress/`, `deprecated/`).

## When applied
When creating, categorizing, maintaining, and linking skills within the repository.

## Sub-concepts
engineering-skills, promoted

## Part of
none

## Implementation status
clean

## Design notes
The core repository organization scheme categorizing skills into thematic and lifecycle buckets (`engineering/`, `productivity/`, `misc/`, `in-progress/`, `deprecated/`). This structure separates production skills from experimental drafts and deprecated utilities, directly influencing plugin curation boundaries.
