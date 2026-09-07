---
package: rjm
name: Emphasis Hierarchy
slug: emphasis-hierarchy
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Emphasis Hierarchy

## Definition — verbatim
> "Consistent emphasis levels create predictable priority:" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1262

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1260 | defined here | Defined as a behavioral shaping pattern creating predictable priority through consistent emphasis levels. |

## Consumes
Prompt rules, safety constraints, and directive guidelines.

## Produces
Tiered prompt instruction sets with calibrated emphasis levels.

## When applied
> "The hierarchy only works if higher levels are genuinely rare." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1284

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Emphasis Hierarchy defines a four-level priority structure (`IMPORTANT:`, `VERY IMPORTANT:`, `CRITICAL:`, `RULE 0 (MOST IMPORTANT):`) for instructions in single-turn prompts. It avoids emphasis dilution by ensuring that higher-priority tiers are reserved for exceptional requirements, preventing models from ignoring undifferentiated critical markers.
