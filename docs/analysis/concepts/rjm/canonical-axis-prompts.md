---
package: rjm
name: canonical axis prompts
slug: canonical-axis-prompts
kind: reference
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# canonical axis prompts

## Definition — verbatim
> "The canonical axis prompts are authored at `references/{role}.md` co-located with this skill, with the canonical path expressed as `.claude/skills/review/references/{role}.md` in the source repo (the single source of truth)." — .claude/skills/review/SKILL.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 27 | defined here | Defines the prompt definitions located under references/{role}.md. |

## Consumes
Markdown prompt reference files co-located in `references/*.md` within the review skill directory.

## Produces
Standardized system instructions, analysis focus areas, and output schemas for review subagents.

## When applied
Loaded when executing Stage 1 and Stage 2 review axes during `/review`.

## Sub-concepts
none

## Part of
review, canonical-set

## Implementation status
defects: missing-path, doc-drift

## Design notes
Canonical axis prompts establish the single source of truth for review agent evaluation criteria across rjm. Stored as modular markdown files co-located with the review skill, they provide consistent domain-specific instructions that are synced into CI workflows and distributed to vendored plugin installs.
