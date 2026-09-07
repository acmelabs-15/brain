---
package: rjm
name: The Negative Instruction Trap
slug: the-negative-instruction-trap
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
  - {path: .claude/skills/prompt-engineer/references/workflow.md, sha256: ea1e77d662f8c4a12ffda0f422ecfffe351f582581aa20548657f26eef2e2fef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The Negative Instruction Trap

## Definition — verbatim
> "Framing instructions as prohibitions rather than directives." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1634

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1632 | defined here | Defined as an anti-pattern framing instructions as prohibitions ("don't") rather than positive directives ("do"). |
| .claude/skills/prompt-engineer/references/workflow.md | 307 | used here | Audited in Phase 4 prompt optimization checks to eliminate negative constraints. |

## Consumes
Prohibitive rules ("don't do X", "avoid Y") and negative constraint lists.

## Produces
Increased cognitive processing overhead and frequent rule violations in models.

## When applied
> "Per Bsharat et al. (2024), negative framing requires additional cognitive steps to interpret." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1643

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The Negative Instruction Trap highlights the empirical phenomenon (Bsharat et al., 2024) where telling an LLM what *not* to do requires additional cognitive steps to interpret and inhibit, often causing the model to mention or produce the forbidden behavior anyway. rjm replaces negative prohibitions with affirmative directives specifying exactly what the model should output.
