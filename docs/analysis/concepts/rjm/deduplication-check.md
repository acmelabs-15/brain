---
package: rjm
name: Deduplication Check
slug: deduplication-check
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/agents/skillbook.md, sha256: 91f950500a94ec961cadfc48125029f649b3fe031969b91c398d7b8da4747398}
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
  - {path: templates/agents/skillbook.shared.md, sha256: 75728e08c68359b9eade70c8c9358d8de6dca100cfdae2b34906567f5edf188f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Deduplication Check

## Definition — verbatim
> "## Deduplication Check" — .claude/agents/skillbook.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 101 | defined here | Phase 4 gate preventing duplicate skills from being added to the catalog. |
| .claude/agents/skillbook.md | 81 | defined here | Skillbook agent procedure specifying duplicate checks before adding new skills. |
| .claude/skills/retrospective/references/learning-template.md | 99 | defined here | Template section formatting deduplication similarity comparisons. |
| .claude/skills/retrospective/scripts/run_retrospective.py | 296 | defined here | Retrospective generator script emitting the Deduplication Check table. |
| templates/agents/skillbook.shared.md | 84 | defined here | Shared skillbook template detailing the deduplication protocol. |

## Consumes
Candidate new skills, existing skillbook domain indices, and memory vectors.

## Produces
Similarity ratings and decisions (MERGE, REJECT, or CREATE_NEW).

## When applied
Mandatory gate executed before creating any new skill in the skillbook.

## Sub-concepts
none

## Part of
skillbook, learning-extraction

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Deduplication Check is a verification gate that compares proposed skills against existing domain memories before insertion. By enforcing index keyword searches and calculating conceptual similarity, it prevents redundant skill proliferation and merges overlapping knowledge.
