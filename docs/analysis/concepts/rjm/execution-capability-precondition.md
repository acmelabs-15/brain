---
package: rjm
name: Execution Capability Precondition
slug: execution-capability-precondition
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/merge-resolver.md, sha256: 86e3616bd8f081ebb1d343da98a60df28413592427c10d9ce95f992eab3e738b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Execution Capability Precondition

## Definition — verbatim
> "## Phase 0: Execution Capability Precondition (BLOCKING)" — .claude/agents/merge-resolver.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/merge-resolver.md | 64 | defined here | Section heading defining the blocking Phase 0 self-check that halts execution if shell access is missing. |

## Consumes
Agent execution environment capabilities (availability of Bash/shell execution tools).

## Produces
Immediate `[BLOCKED]` status exit or authorization to proceed to Phase 1 context gathering.

## When applied
Evaluated first before any analysis, context gathering, or planning in merge conflict resolution.

## Sub-concepts
none

## Part of
resolution-workflow

## Implementation status
defects: doc-drift

## Design notes
A critical blocking precondition gate designed to prevent the anti-pattern identified in issue #2646, where an LLM agent without shell execution tools would emit a descriptive plan of conflict resolution that masquerades as completed work. By forcing an immediate stop with `[BLOCKED]` when shell tools are absent, it guarantees agents never report simulated merges.
