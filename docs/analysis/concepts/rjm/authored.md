---
package: rjm
name: authored
slug: authored
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# authored

## Definition — verbatim
> "Classify a changed file as authored, test, or generated." — .claude/skills/code-qualities-assessment/scripts/assess.py:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/scripts/assess.py | 107 | defined here | Classification docstring defining human-written production files subject to full quality gating. |

## Consumes
File paths and source content evaluated through path segment heuristics and header markers.

## Produces
File category classification tagging human-written source code modules for assessment.

## When applied
Assigned to any evaluated file that does not match test path conventions or generated file markers.

## Sub-concepts
none

## Part of
fileassessment

## Implementation status
defects: doc-drift, missing-path, always-failing-gate

## Design notes
`authored` represents source code files written and maintained directly by human engineers or AI agents, as opposed to test harnesses or compiler/tool generated artifacts. In rjm's code qualities assessment framework, authored files are held to the highest standard of maintainability, requiring rigorous checks across cohesion, coupling, encapsulation, testability, and non-redundancy. Without distinguishing authored files from generated code or test suites, quality gates would enforce inappropriate architectural constraints on auto-generated code and test mocks.
