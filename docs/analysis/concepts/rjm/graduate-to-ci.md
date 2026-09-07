---
package: rjm
name: graduate-to-CI
slug: graduate-to-ci
kind: gate
package_phase: none
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

# graduate-to-CI

## Definition — verbatim
> "recall delta > 0 AND 95% CI lower bound > 0 AND flakiness = false AND error count = 0" — .agents/architecture/ADR-058-agent-eval-discipline.md:186

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 186 | defined here | Normative decision criteria recommending CI integration when recall delta > 0, 95% CI excludes zero, flakiness is false, and errors equal zero |
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 301 | defined here | Documented recommendation value in the report schema indicating readiness for CI integration |
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 218 | defined here | Acceptance criteria specifying evidence-backed positive recall requirements for CI graduation |
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 323 | defined here | Implementation task criteria for selecting the graduate-to-CI recommendation in evaluation reports |
| scripts/eval/_report_writer.py | 6 | used here | Docstring reference to valid recommendation string persisted by ReportWriter when criteria are met |

## Consumes
Completed agent-vs-baseline evaluation metrics including signed recall delta, 95% paired-bootstrap confidence interval bounds, flakiness flag, and run error counts.

## Produces
Normative evaluation verdict authorizing opening a follow-up issue for automated CI integration scoped to the tested agent.

## When applied
Applied during Tier 3 architecture review of offline agent evaluation reports to decide whether an agent qualifies for CI inclusion.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
graduate-to-CI is the highest-tier normative recommendation verdict emitted by rjm's offline agent evaluation harness, indicating that a specialized agent has proven statistically significant recall lift over a naive baseline without flakiness or execution errors. In rjm's lifecycle, this gate prevents premature deployment of unvalidated or flaky agent prompts into continuous integration pipelines.
