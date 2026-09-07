---
package: rjm
name: Documentation-Enforced Gates
slug: documentation-enforced-gates
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/SKILL-PHASE-GATES.md, sha256: 57542e2a38b186872f2388bebe2f47c8b95c4a3743d6fcf63c473048bbb86f49}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Documentation-Enforced Gates

## Definition — verbatim
> "### Pattern B: Documentation-Enforced Gates" — .agents/governance/SKILL-PHASE-GATES.md:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-PHASE-GATES.md | 148 | defined here | Implementation pattern defining phase gate prerequisites directly within markdown skill instructions. |

## Consumes
Markdown instructions in SKILL.md and model prompt adherence.

## Produces
Prompt-guided behavioral checkpoints without code modifications.

## When applied
Used for scriptless skills consisting solely of prompt instructions.

## Sub-concepts
none

## Part of
skill-phase-gates

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A prompt-based gating pattern for scriptless skills that specifies prerequisite checks in SKILL.md. While easily deployed without code changes, it relies on LLM compliance and is vulnerable to occasional protocol bypasses.
