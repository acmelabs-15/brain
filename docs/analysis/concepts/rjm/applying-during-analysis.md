---
package: rjm
name: Applying During Analysis
slug: applying-during-analysis
kind: checklist
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/design-legacy-code.md, sha256: d99de8d31d31be7e7fed8d46f5f1c203e5a2ca6a83ec54b65fffa6ccff072274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Applying During Analysis

## Definition — verbatim
> "## Applying During Analysis" — .claude/skills/analyze/references/design-legacy-code.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/design-legacy-code.md | 42 | defined here | Step-by-step checklist (Testability, Cohesion, Coupling, Redundancy, Encapsulation) for evaluating legacy code. |

## Consumes
Legacy codebase modules, test suites, and component architectures.

## Produces
Ordered structural assessment assessing testability, cohesion, coupling, redundancy, and encapsulation.

## When applied
Applied when analyzing legacy code to ensure evaluation follows an ordered hierarchy of criteria.

## Sub-concepts
redundancy

## Part of
design-legacy-code

## Implementation status
defects: missing-path

## Design notes
A structured evaluation checklist that dictates the precise sequence for analyzing legacy code: Testability, Cohesion, Coupling, Redundancy, and Encapsulation. Enforcing this ordered checklist prevents reviewers from prematurely debating encapsulation or design patterns on code that cannot yet be tested in isolation.
