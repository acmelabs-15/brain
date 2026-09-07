---
package: rjm
name: Contrastive Examples
slug: contrastive-examples
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Contrastive Examples

## Definition — verbatim
> "Showing both correct AND incorrect examples significantly improves performance." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:492

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 490 | defined here | Defined as an example design technique using valid and invalid reasoning demonstrations to improve task performance. |
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 60 | used here | Applied to orchestrator prompt refinement using CORRECT vs INCORRECT examples to prevent false quality gate failures. |

## Consumes
Task demonstrations, input queries, and target reasoning steps.

## Produces
Paired few-shot demonstrations showing both correct rationales and contrastive invalid reasoning patterns (such as incoherent objects).

## When applied
> "Showing both correct AND incorrect examples significantly improves performance." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:492

## Sub-concepts
incoherent-objects, automatic-generation-of-invalid-demonstrations, forbidden-output-phrases-pattern

## Part of
prompt-engineer

## Implementation status
defects: missing-path, internal-contradiction, doc-drift

## Design notes
An empirical prompt engineering technique in rjm that pairs positive demonstrations with explicit negative counterexamples (CORRECT vs INCORRECT). In single-turn prompts and quality gate instructions, contrastive examples teach the model boundary conditions and reasoning failure modes (such as incoherent objects or invalid derivations) that positive-only demonstrations fail to inhibit.
