---
package: rjm
name: test-writer-fixer
slug: test-writer-fixer
kind: role
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md, sha256: eeb775c6904eb47c22737939b10273f902cc3477c7daef2815f3a810a0be320b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# test-writer-fixer

## Definition — verbatim
(used, not defined)

> "After code changes" — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 66 | used here | Listed in the auto-triggered agents table as an agent role that fires automatically after code changes. |

## Consumes
Modified source code, test suites, and test execution results.

## Produces
New test cases, updated assertions, and bug fixes for broken tests.

## When applied
> "After code changes" — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:66

## Sub-concepts
none

## Part of
auto-triggered-agents

## Implementation status
defects: missing-path

## Design notes
A specialized agent role in Claude Code productivity patterns intended to run automatically whenever code modifications are detected, writing and updating tests to prevent test regressions.
