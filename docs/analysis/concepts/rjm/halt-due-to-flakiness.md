---
package: rjm
name: halt-due-to-flakiness
slug: halt-due-to-flakiness
kind: gate
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-058-agent-eval-discipline.md, sha256: 772b9974abe96bcf928a8c9e89bd63fa9ecfb82e51baff7ccbfc07ce198daf51}
  - {path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md, sha256: d4d4d47d8635f0c96a17abe1ff50382189eea4aab68a7a7e39bf691d033c6e0a}
  - {path: scripts/eval/_report_writer.py, sha256: 2880d2a761552d864a734fd23db9f205c2ade9b2964f5892a7043ec3fb488fc7}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# halt-due-to-flakiness

## Definition — verbatim
> "flakiness > 30% of fixtures after the contingency rerun (per AC-10)" — .agents/architecture/ADR-058-agent-eval-discipline.md:190

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 190 | defined here | Normative recommendation requiring an immediate evaluation halt when flaky fixtures exceed 30% of the corpus |
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 249 | defined here | Requirement specifying halt verdict when AC-10 flakiness gate trips |
| scripts/eval/_report_writer.py | 8 | used here | Docstring reference to automatic halt verdict persisted when runner flakiness gate trips |
| scripts/eval/eval-agent-vs-baseline.py | 1052 | defined here | Runner report generation logic setting recommendation to halt-due-to-flakiness if flakiness threshold is crossed |

## Consumes
Evaluation run results across runs showing nondeterministic verdict variance across fixtures.

## Produces
Immediate evaluation termination with a non-normative halt report blocking any graduation or audit verdict.

## When applied
Triggered automatically when the flaky fixture count reaches the N-aware threshold (>30% of fixtures after contingency rerun).

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path, exit-code-mismatch, script-bug

## Design notes
halt-due-to-flakiness is a blocking termination verdict emitted by the agent evaluation harness when non-deterministic verdict variance across fixtures exceeds tolerance (30%). In rjm's eval discipline, this gate enforces that unstable prompts cannot receive any passing or audit verdict until the underlying source of variance (such as temperature=0 model drift on long contexts) is diagnosed and eliminated.
