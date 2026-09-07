---
package: rjm
name: Execution Trace Analysis
slug: execution-trace-analysis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Execution Trace Analysis

## Definition — verbatim
> "### Activity: Execution Trace Analysis" — .claude/skills/retrospective/references/frameworks.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 76 | defined here | Phase 0 activity reconstructing execution chronology from logs. |
| .claude/skills/retrospective/references/frameworks.md | 53 | defined here | Framework activity definition for chronological timeline reconstruction. |
| templates/agents/retrospective.shared.md | 182 | defined here | Shared template specifying execution trace analysis procedures. |

## Consumes
Command invocations, tool outputs, session logs, git commits, and agent state transitions.

## Produces
Chronological timeline of events annotated with timestamps, phases, actions, and anomalous outcomes.

## When applied
Applied during Phase 0 (Data Gathering) when debugging complex workflows or multi-turn execution failures.

## Sub-concepts
none

## Part of
data-gathering, retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Execution Trace Analysis is a forensic technique that parses raw execution logs into a structured temporal sequence. Reconstructing exact tool inputs, outputs, and intermediate states is essential for diagnosing root causes of unexpected deviations that cannot be understood from final outputs alone.
