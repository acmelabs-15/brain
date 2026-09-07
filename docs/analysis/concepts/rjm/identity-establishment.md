---
package: rjm
name: Identity Establishment
slug: identity-establishment
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

# Identity Establishment

## Definition — verbatim
> "On mathematical reasoning benchmarks, identity establishment provides 10+ percentage point accuracy improvement through implicit role-based reasoning." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1047

## Also called — verbatim
> "### Identity Establishment (Role-Play Prompting)" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1043

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1043 | defined here | Defined as a behavioral shaping technique establishing competent agent personas to anchor reasoning capabilities. |

## Consumes
Agent system prompt or role configuration specification.

## Produces
Established agent persona that implicitly conditions task reasoning and behavioral boundaries.

## When applied
Universally applied across agent definitions and system instructions as a foundational behavioral prompt.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Identity Establishment sets an agent's operational persona to prime relevant capabilities and reasoning frameworks. Empirical benchmarks demonstrate that establishing a competent identity improves performance significantly across reasoning tasks without requiring elaborate character backstories.
