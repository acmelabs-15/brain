---
package: rjm
name: Honesty contract
slug: honesty-contract
kind: checklist
package_phase: rjm:research
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Honesty contract

## Definition — verbatim
> "Honesty contract for this document: every asset claim below was re-verified" — .claude/skills/ai-agents-research-frontier/SKILL.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 17 | defined here | Epistemic discipline governing status claims, requiring explicit labeling of proposed or unverified artifacts. |

## Consumes
Current repository working tree state and verified commit history.

## Produces
Rigorous epistemic classifications (`PROPOSED`, `UNVERIFIED`, `ACCEPTED`) for all architectural claims.

## When applied
Enforced when writing or updating research frontier documents, skill definitions, and roadmap proposals.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An epistemic commitment ensuring documentation reflects verifiable current-state facts rather than aspirational goals. By explicitly differentiating between merged implementations, proposed designs, and unverified components, it prevents agents and engineers from acting on false assumptions.
