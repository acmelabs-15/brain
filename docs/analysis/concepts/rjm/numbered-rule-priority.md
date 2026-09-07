---
package: rjm
name: Numbered Rule Priority
slug: numbered-rule-priority
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

# Numbered Rule Priority

## Definition — verbatim
> "When multiple rules could conflict, explicit numbering resolves ambiguity." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1326

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1324 | defined here | Defined as an instruction pattern using explicit numerical ranking to resolve rule conflicts unambiguously. |

## Consumes
Rule collections with competing directives or potential trade-offs.

## Produces
Ordered prompt rules indexed explicitly (e.g. `RULE 0`, `RULE 1`, `RULE 2`).

## When applied
> "When multiple rules could conflict, explicit numbering resolves ambiguity." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1326

## Sub-concepts
none

## Part of
emphasis-hierarchy

## Implementation status
clean

## Design notes
Numbered Rule Priority assigns explicit numerical ordering to system prompt directives (e.g., `RULE 0`, `RULE 1`). This allows the LLM to systematically reason through conflicts using deterministic precedence rules rather than guessing the relative weight of generic emphasis markers.
