---
package: rjm
name: Role-Play Prompting
slug: role-play-prompting
kind: technique
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

# Role-Play Prompting

## Definition — verbatim
> "Role-play prompting consistently surpasses the standard zero-shot approach across most datasets... accuracy on AQuA rises from 53.5% to 63.8%." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1045

## Also called — verbatim
> "### Identity Establishment (Role-Play Prompting)" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1043

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1043 | defined here | Defined as a behavioral prompting technique assigning domain expert roles to improve problem-solving accuracy. |

## Consumes
Problem domain specification and target expert persona description.

## Produces
Role-conditioned problem analysis and domain-aligned execution outputs.

## When applied
When instructing agents on specialized domain tasks such as mathematics, software architecture, or debugging.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Role-Play Prompting assigns an explicit professional persona to the model to activate latent domain competence and reasoning styles. Research indicates that role-play conditioning consistently outperforms generic zero-shot prompts by structuring how the model approaches complex problem sets.
