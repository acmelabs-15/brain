---
package: matt
path: external/grill-me.md
type: doc
bytes: 348368
unit: inv-matt-15
deprecated: false
aliases: []
memo_inputs:
  - {path: external/grill-me.md, sha256: 8ef33c20bc9870b89757d0d6238d319381bb0b7afb299d3e4ef1f92d20dba1d3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/grill-me.md

## Purpose — required, verbatim
> "Align on an idea before committing to it." — external/grill-me.md:24

## Design intent — required
Provides a conversational interrogation technique to test and sharpen unformed, loose ideas before committing time and code to them. Without it, developers succumb to passive nod-along sessions where agents agree with everything and produce unearned certainty, or rush prematurely into planning and implementation before exploring edge cases, hidden assumptions, and structural boundaries. It keeps the interaction stateless and repository-free, ensuring pure conceptual inquiry across software, product, or writing.

## Phase — required
matt:Productivity Skills

## Inputs — required
A loose idea, direction, or problem statement (software, product, business decision, or writing), conversational answers to iterative question rounds, human steering, and pushback against agent assumptions.

## Outputs — required
none

## Invokes — required
- skill grill-with-docs — external/grill-me.md:33
- skill wayfinder — external/grill-me.md:34
- skill prototype — external/grill-me.md:44
- skill to-spec — external/grill-me.md:64
- skill grilling — external/grill-me.md:69
- skill ask-matt — external/grill-me.md:70
- skill setup-matt-pocock-skills — external/grill-me.md:70

## Invoked by — required
none

## Concepts named — required, verbatim
- `loose idea` — external/grill-me.md:25 — defined here
- `session` — external/grill-me.md:25 — used here
- `rounds` — external/grill-me.md:25 — defined here
- `frontier` — external/grill-me.md:25 — defined here
- `stateless` — external/grill-me.md:26 — defined here
- `fresh conversation` — external/grill-me.md:28 — defined here
- `plan mode` — external/grill-me.md:36 — used here
- `passivity` — external/grill-me.md:39 — defined here
- `ungrillable` — external/grill-me.md:44 — defined here
- `dumb zone` — external/grill-me.md:57 — used here
- `context window` — external/grill-me.md:57 — used here
- `context` — external/grill-me.md:64 — used here
- `model` — external/grill-me.md:66 — used here
- `standalone` — external/grill-me.md:68 — defined here
- `grilling` — external/grill-me.md:69 — used here

## Structure
- # The /grill-me Skill — external/grill-me.md:24
- ## What it does — external/grill-me.md:24
- ## When to reach for it — external/grill-me.md:27
- ## It's a conversation, not an interview — external/grill-me.md:37
- ## Grillable and ungrillable — external/grill-me.md:42
- ## It's working if — external/grill-me.md:46
- ## Common questions — external/grill-me.md:53
- ## Where it fits — external/grill-me.md:67
- ## Related reading — external/grill-me.md:70
- ## Skill actions — external/grill-me.md:70

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · external/grill-me.md:24: External page description states "Align on an idea before committing to it." whereas internal SKILL.md:3 defines description as "A relentless interview to sharpen a plan or design."
- `doc-drift` · external/grill-me.md:59: Advises configuring global CLAUDE.md to ask one question at a time, but underlying SKILL.md delegates directly to grilling primitive without inspecting or parsing custom instructions.
- `doc-drift` · external/grill-me.md:5: External site organizes skill under series category "Productivity Skills" while repository layout groups skills into directory folders without explicit sequence numbering.

## Observations
Explicitly frames passivity as the primary failure mode of AI-assisted planning: answering "agreed, agreed, agreed" for forty questions generates unearned confidence. Emphasizes counting question rounds rather than raw question counts, terminating only when the frontier is empty. Distinguishes grillable questions from ungrillable questions (interaction feel, visual appearance) which require throwaway prototypes before returning to dialogue.

## Context cost
348368 bytes, ~70000 tokens (HTML snapshot including full inline hydration payload).
