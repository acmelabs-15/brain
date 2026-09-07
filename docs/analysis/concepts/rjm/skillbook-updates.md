---
package: rjm
name: Skillbook Updates
slug: skillbook-updates
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Skillbook Updates

## Definition — verbatim
> "## Skillbook Updates" — .claude/skills/retrospective/references/learning-template.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 100 | defined here | Phase 4 activity formatting concrete JSON updates for the skillbook. |
| .claude/skills/retrospective/references/learning-template.md | 71 | defined here | Template section providing structured ADD, UPDATE, TAG, and REMOVE schemas. |
| .claude/skills/retrospective/scripts/run_retrospective.py | 268 | defined here | Retrospective generator script creating the Skillbook Updates template block. |

## Consumes
Scored learnings and validated action items.

## Produces
Formatted JSON operational blocks (ADD, UPDATE, TAG, REMOVE) targeting specific skill IDs.

## When applied
Produced during Phase 4 (Learning Extraction) to represent concrete changes to the skill knowledge base.

## Sub-concepts
none

## Part of
learning-extraction, retrospective

## Implementation status
clean

## Design notes
Skillbook Updates is the machine-actionable section of a retrospective artifact that specifies exact modifications to the skill catalog. Structuring updates into explicit ADD, UPDATE, TAG, or REMOVE operations enables automated memory maintenance without manual transcription.
