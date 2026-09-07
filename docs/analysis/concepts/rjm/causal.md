---
package: rjm
name: Causal
slug: causal
kind: pattern
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-063-memory-skill-decomposition.md, sha256: f2d854c1e297dcca3e517498ab92b225ec28b5b60baecaaba73b8d166e2606c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Causal

## Definition — verbatim
(used, not defined)

> "system (Tier 1 Semantic, Tier 2 Episodic, Tier 3 Causal, plus the BLOCKING" — .agents/architecture/ADR-063-memory-skill-decomposition.md:31

## Also called — verbatim
Tier 3 Causal — .agents/architecture/ADR-063-memory-skill-decomposition.md:31

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-063-memory-skill-decomposition.md | 31 | used here | Identified as Tier 3 in the four-tier memory system structuring cause-and-effect reasoning relationships. |

## Consumes
Analysis of root causes, failure modes, dependency cascades, and decision rationales.

## Produces
A causal graph linking interventions to outcomes and documenting architectural rationale.

## When applied
Applied during architectural decision making and defect analysis to evaluate consequence networks.

## Sub-concepts
none

## Part of
four-tier-memory

## Implementation status
out-of-scope

## Design notes
Causal memory forms Tier 3 of rjm's memory architecture, modeling relational and explanatory links between choices and their outcomes. Rather than merely recording that an event occurred (episodic) or what symbols exist (semantic), causal memory captures why things happened and what consequences resulted, preventing agents from re-introducing previously resolved failure modes.
