---
package: rjm
name: Quality Gate Checklist
slug: quality-gate-checklist
kind: checklist
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Quality Gate Checklist

## Definition — verbatim
> "- [ ] No methods exceed 60 lines" — .claude/agents/qa.md:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 126 | defined here | Five-item checklist verifying method length, complexity, nesting, tests, and warning justifications. |
| templates/agents/qa.shared.md | 116 | defined here | Five-item checklist verifying method length, complexity, nesting, tests, and warning justifications. |

## Consumes
Target source code files, static metrics.

## Produces
Completed verification checklist items with file:line citations for any violations.

## When applied
Applied by QA agents when inspecting implementation files for quality compliance.

## Sub-concepts
none

## Part of
code-quality-gates

## Implementation status
defects: missing-path, doc-drift

## Design notes
The Quality Gate Checklist translates abstract quality goals into concrete verification tasks. Its binary checkboxes allow reviewers to systematically audit structural code metrics, ensuring uniform evaluation standards across diverse contributions.
