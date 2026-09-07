---
package: rjm
name: keep-as-audit
slug: keep-as-audit
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-058-agent-eval-discipline.md, sha256: 772b9974abe96bcf928a8c9e89bd63fa9ecfb82e51baff7ccbfc07ce198daf51}
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md, sha256: d4d4d47d8635f0c96a17abe1ff50382189eea4aab68a7a7e39bf691d033c6e0a}
  - {path: .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md, sha256: 5760a41f262c0ac1fd5a7496c95cd0b37005dc15a36ac52de32b931cb045d720}
  - {path: scripts/eval/_report_writer.py, sha256: 2880d2a761552d864a734fd23db9f205c2ade9b2964f5892a7043ec3fb488fc7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# keep-as-audit

## Definition — verbatim
> "Criteria for `keep-as-audit`: positive delta but CI spans zero OR minor flakiness" — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:324

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 57 | defined here | Cites invalidated initial verdict (+8.3pp delta) from the v1 evaluation spike. |
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 310 | defined here | Design schema specification defining `keep-as-audit` as a valid recommendation enum value. |
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 219 | defined here | Requirements table defining criteria and disposition for `keep-as-audit` outcome (inconclusive signal, offline runner). |
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 324 | defined here | Task specification itemizing criteria for recommending `keep-as-audit`. |
| scripts/eval/_report_writer.py | 7 | used here | Module docstring describing write handling for the `keep-as-audit` verdict. |

## Consumes
Evaluation run statistics showing inconclusive positive delta (confidence interval spans zero) or minor flakiness.

## Produces
Offline audit status assignment, scheduled re-run milestones, and preserved evaluation runners.

## When applied
Selected as the evaluation outcome when an agent shows positive trends that do not achieve statistical significance required for CI gating.

## Sub-concepts
none

## Part of
agent-vs-baseline-efficacy, evaluation-spike-recommendations

## Implementation status
defects: doc-drift, missing-path

## Design notes
One of three standardized recommendation verdicts in DESIGN-004 and ADR-058 for agent evaluation spikes. Indicating an inconclusive positive signal, `keep-as-audit` keeps the evaluation runner offline for periodic tracking rather than promoting it to blocking CI, scheduling re-evaluation upon the next major model release.
