---
package: rjm
name: Scoped Tool Execution
slug: scoped-tool-execution
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-043-scoped-tool-execution.md, sha256: 9a4be43328cc6530b1b24cac28beba3ffa57f0eb559fbaa872864d8f002798a4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Scoped Tool Execution

## Definition — verbatim
> "Session protocol tools MUST scope to changed files rather than the entire repository." — .agents/architecture/ADR-043-scoped-tool-execution.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-043-scoped-tool-execution.md | 12 | defined here | Title and decision requiring formatting and linting tools to operate only on changed files rather than repo-wide. |

## Consumes
Git working tree state and list of changed files in current session.

## Produces
Constrained tool execution commands that restrict modifications to the active session working set.

## When applied
Applied at session end during quality checks and linter invocations.

## Sub-concepts
scoped-command-pattern

## Part of
session-protocol

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Scoped Tool Execution is an architectural policy in rjm preventing repository-wide formatting and validation tools from modifying files outside the current agent session's working set, eliminating diff pollution and merge conflicts.
