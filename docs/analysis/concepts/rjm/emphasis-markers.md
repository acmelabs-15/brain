---
package: rjm
name: Emphasis markers
slug: emphasis-markers
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/SKILL.md, sha256: 3d8237e4839c2714ee6e7ad4eaa523f285392c5ae35d22c0a7f68bcccf1c7277}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Emphasis markers

## Definition — verbatim
(used, not defined)

> "- [ ] Emphasis markers used sparingly (≤3 highest-level)" — .claude/skills/prompt-engineer/SKILL.md:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/SKILL.md | 146 | used here | Verified in the completion checkpoint to enforce sparse usage (at most 3 highest-level markers) to avoid signal dilution. |

## Consumes
Draft prompt text and typographic emphasis markup (`**` or `__`).

## Produces
Constrained emphasis budget reserving bold or strong markers strictly for the highest-priority operational instructions.

## When applied
Applied during Phase 3 execution and reconciled during Phase 4 verification.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
In prompt-engineer, emphasis markers are treated as a constrained attention resource limited to at most three occurrences per prompt to prevent instruction dilution from excessive bolding.
