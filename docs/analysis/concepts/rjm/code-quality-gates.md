---
package: rjm
name: Code Quality Gates
slug: code-quality-gates
kind: gate
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

# Code Quality Gates

## Definition — verbatim
> "During test strategy review, verify implementation meets quality standards:" — .claude/agents/qa.md:124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 122 | defined here | Defines static code quality thresholds (method length, complexity, nesting, test coverage) required during review. |
| templates/agents/qa.shared.md | 112 | defined here | Defines static code quality thresholds (method length, complexity, nesting, test coverage) required during review. |

## Consumes
Implementation source code, complexity analysis, test coverage mappings.

## Produces
Violation reports citing specific file:line references in the test strategy deliverable.

## When applied
Evaluated during test strategy review and pre-PR implementation validation.

## Sub-concepts
quality-gate-checklist

## Part of
qa

## Implementation status
defects: missing-path, doc-drift

## Design notes
Code Quality Gates establish objective structural constraints on newly authored code. By capping method length at 60 lines, cyclomatic complexity at 10, and nesting depth at 3 levels while mandating test pairing and warning documentation, they prevent technical debt from slipping into the codebase unnoticed.
