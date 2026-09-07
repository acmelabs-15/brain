---
package: rjm
name: Training knowledge
slug: training-knowledge
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Training knowledge

## Definition — verbatim
> "4. **Training knowledge.** What you remember from training. The weakest signal. Acceptable only as a starting hypothesis to verify with (1)-(3); never as the basis for a load-bearing claim." — .claude/agents/implementer.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 31 | defined here | Designated as Level 4 weakest evidence, permissible only as a starting hypothesis to verify with higher levels. |
| templates/agents/implementer.shared.md | 40 | defined here | Shared implementer template defining Level 4 evidence from parametric model training. |

## Consumes
LLM internal weights, parametric memory, and pre-training associations.

## Produces
Level 4 initial hypotheses, heuristic proposals, and tentative starting points requiring empirical verification.

## When applied
Permitted solely as a preliminary exploratory hypothesis, strictly forbidden as justification for load-bearing claims.

## Sub-concepts
none

## Part of
four-level-hierarchy, evidence-standards

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
The lowest tier (Level 4) in rjm's evidence hierarchy. RJM treats an LLM's raw training memory as unverified signal subject to hallucinations and version confusion; agents are strictly forbidden from grounding load-bearing technical claims on training recollection alone.
