---
package: rjm
name: Simple prompts
slug: simple-prompts
kind: pattern
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

# Simple prompts

## Definition — verbatim
> "**Simple prompts** (use lightweight process):" — .claude/skills/prompt-engineer/SKILL.md:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/SKILL.md | 117 | defined here | Defined in Phase 0 triage as prompts under 20 lines with single clear purpose and no conditional logic that use a lightweight optimization workflow. |

## Consumes
Unoptimized prompt candidate undergoing triage review.

## Produces
Triage routing decision directing prompt to lightweight, single-pass refinement.

## When applied
Applied in Phase 0 when prompt text is under 20 lines, serves a single purpose, and contains no conditional branching.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
In prompt-engineer, simple prompts represent the lightweight triage tier, preventing the overhead of full multi-phase visual card decomposition on straightforward, single-purpose system prompts.
