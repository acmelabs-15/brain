---
package: rjm
name: Evidence-Based Skill Extraction
slug: evidence-based-skill-extraction
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Evidence-Based Skill Extraction

## Definition — verbatim
> "Skills require specific execution evidence (tool calls, timestamps, outcomes) before validation" — .claude/agents/retrospective.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 29 | defined here | Agent requirement demanding concrete execution evidence before skill validation. |

## Consumes
Execution logs, tool call arguments, timestamps, and observed output statuses.

## Produces
Validated candidate skill entries grounded in historical execution evidence.

## When applied
Applied during retrospective Phase 4 and Phase 5 when proposing new skills or updates to existing skills.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Evidence-Based Skill Extraction enforces that skills added to the repository's institutional memory must originate from demonstrable tool interactions and verified outcomes rather than theoretical reasoning. This technique prevents hallucinatory skills from polluting the skillbook and guarantees that only battle-tested behaviors are codified.
