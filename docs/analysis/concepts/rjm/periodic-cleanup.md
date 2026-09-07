---
package: rjm
name: Periodic Cleanup
slug: periodic-cleanup
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

# Periodic Cleanup

## Definition — verbatim
> "Create periodic \"formatting cleanup\" issues/PRs to address unformatted files:" — .agents/architecture/ADR-043-scoped-tool-execution.md:185

## Also called — verbatim
"formatting cleanup" — .agents/architecture/ADR-043-scoped-tool-execution.md:185

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-043-scoped-tool-execution.md | 183 | defined here | Pattern scheduling periodic repository-wide maintenance PRs to complement scoped execution. |

## Consumes
Unformatted or drifted repository files accumulated outside active session working sets.

## Produces
Dedicated formatting cleanup issues and pull requests.

## When applied
Scheduled quarterly or initiated on-demand as a dedicated maintenance task.

## Sub-concepts
none

## Part of
scoped-tool-execution

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Periodic Cleanup is an operational maintenance pattern designed to counterbalance scoped tool execution by consolidating repository-wide formatting updates into dedicated, isolated PRs rather than polluting feature branches.
