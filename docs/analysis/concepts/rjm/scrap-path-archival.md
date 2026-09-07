---
package: rjm
name: Scrap-path archival
slug: scrap-path-archival
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md, sha256: 5760a41f262c0ac1fd5a7496c95cd0b37005dc15a36ac52de32b931cb045d720}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Scrap-path archival

## Definition — verbatim
> "**Scrap-path archival (R10 mitigation)**: If the recommendation is `scrap`, T4-7 also moves the runner code and tests to the archive:" — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:331

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 331 | defined here | Defined in sub-task T4-7 as the risk mitigation procedure for archiving code and updating ADR status if a spike recommendation is scrap. |

## Consumes
spike-report-recommendation

## Produces
archived-modules

## When applied
> "If the recommendation is `scrap`, T4-7 also moves the runner code and tests to the archive" — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:331

## Sub-concepts
none

## Part of
spike-lifecycle

## Implementation status
defects: doc-drift

## Design notes
A graceful decommissioning procedure for experimental spikes whose evaluation results fail to justify adoption. It relocates prototype code and test files into an archive directory and marks corresponding ADRs as superseded, keeping the active repository clean of unmaintained experimental dead code.
