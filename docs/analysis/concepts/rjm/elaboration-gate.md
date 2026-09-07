---
package: rjm
name: Elaboration gate
slug: elaboration-gate
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/panning-for-gold/SKILL.md, sha256: 1f40dc18c6cd6fb4bd569c0803ca82dc42d45a86b7277259f9781a32c1afe286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Elaboration gate

## Definition — verbatim
> "**Elaboration gate (documentation-only, mandatory for High-Signal threads)**: Like Phase 0, this gate is LLM-applied, not script-enforced. `scripts/synthesis.py` appends the raw evaluation content for each thread; it does not parse for `Connects to:` or fail synthesis when the line is missing. The author of the evaluation (or a manual post-synth edit on the gold-found file) is responsible for producing the line. Future work may add a `pan.py validate --gold-found` check; until then, the acceptance checklist below is the gate." — .claude/skills/panning-for-gold/SKILL.md:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/panning-for-gold/SKILL.md | 93 | defined here | Primary definition of `Elaboration gate` within SKILL.md. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An operational technique or artifact (Elaboration gate) utilized within the rjm ecosystem to ensure consistency and systematic execution.
