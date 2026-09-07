---
package: rjm
name: vector DB
slug: vector-db
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# vector DB

## Definition — verbatim
(used, not defined)

> "description: Twenty-minute diagnostic mapping a team to a world-model paradigm (vector DB, structured ontology, signal-fidelity)." — .claude/skills/world-model-diagnostic/SKILL.md:4

## Also called — verbatim
> "vector database" — .claude/skills/world-model-diagnostic/SKILL.md:70

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/world-model-diagnostic/SKILL.md | 4 | used here | Identified in skill description as one of three primary knowledge infrastructure paradigms. |

## Consumes
Unstructured documents, conversation records, and senior human oversight acting as an interpretive boundary.

## Produces
Vector index structures enabling semantic retrieval over soft organizational knowledge.

## When applied
Evaluated during world-model diagnostic intake when assessing organizations with soft context or teams under 100 people.

## Sub-concepts
none

## Part of
world-model-diagnostic

## Implementation status
defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2)

## Design notes
An architectural knowledge storage paradigm in rjm relying on dense vector embeddings for semantic search over unstructured organizational context. It offers rapid initial capability for smaller teams with strong senior oversight but carries high risk of simulated judgment if deployed without rigorous boundary layers and outcome feedback loops.
