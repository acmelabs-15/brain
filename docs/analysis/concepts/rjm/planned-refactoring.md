---
package: rjm
name: Planned refactoring
slug: planned-refactoring
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Planned refactoring

## Definition — verbatim
> "an explicit ticket for a known structural problem, time-boxed and reviewed on its own." — .claude/skills/software-engineering-library/references/refactoring.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 39 | defined here | Defined as an explicit ticket for a known structural problem, time-boxed and reviewed on its own. |

## Consumes
Documented architectural debt, significant code smells, or structural blockers.

## Produces
A dedicated refactoring pull request reviewed in isolation with passing test suites.

## When applied
Applied via an explicit ticket dedicated to resolving a recognized structural defect.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Planned refactoring in rjm represents deliberate, time-boxed remediation of substantial structural deficiencies. Unlike opportunistic litter-pickup or preparatory refactoring attached to feature work, planned refactoring is tracked as an explicit work item, executed on its own branch, and reviewed independently. This ensures high-debt areas receive dedicated engineering focus without mixing behavioral changes into feature pull requests.
