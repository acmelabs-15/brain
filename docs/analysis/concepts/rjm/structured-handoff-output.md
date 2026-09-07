---
package: rjm
name: Structured Handoff Output
slug: structured-handoff-output
kind: template
package_phase: rjm:retrospective
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

# Structured Handoff Output

## Definition — verbatim
> "**ALWAYS** end your retrospective with this structured output block. The orchestrator parses this to automate downstream processing." — .claude/agents/retrospective.md:1381

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 1379 | defined here | Mandatory handoff schema containing Skill Candidates, Memory Updates, Backlog Items, and ROTI. |

## Consumes
Finalized retrospective outputs, candidate skills, memory diffs, and action items.

## Produces
Machine-readable markdown block designed for automated orchestration and ingestion.

## When applied
Appended at the very end of every retrospective agent session as a mandatory termination requirement.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Structured Handoff Output enforces a uniform contract between the retrospective subagent and the orchestrator. Because subagents cannot delegate directly, this structured markdown payload allows orchestrators to parse and automate memory persistence, skill updates, and issue creation without manual interpretation.
