---
package: rjm
name: Failure Prevention Matrix
slug: failure-prevention-matrix
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Failure Prevention Matrix

## Definition — verbatim
> "### Failure Prevention Matrix" — .claude/skills/retrospective/references/diagnosis-and-actions.md:274

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 106 | defined here | Component of root cause pattern management tracking cumulative failure metrics. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 274 | defined here | Reference section defining the Failure Prevention Matrix table structure. |
| templates/agents/retrospective.shared.md | 866 | defined here | Shared template specifying the Failure Prevention Matrix format. |

## Consumes
Cumulative incident reports, root causes, detection mechanisms, and mitigation success records.

## Produces
Longitudinal tabular tracking of failure categories, occurrences, prevention rules, and recurrence rates.

## When applied
Updated during retrospective pattern management across multiple development cycles.

## Sub-concepts
none

## Part of
root-cause-pattern-management, retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The Failure Prevention Matrix tracks failure categories longitudinally across sessions. By recording historical occurrences, primary mitigations, and recurrence metrics, it enables the team to assess whether process improvements are successfully suppressing known defect modes over time.
