---
package: rjm
name: working set
slug: working-set
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

# working set

## Definition — verbatim
(used, not defined)

> "The root cause is that session protocol tools operate on the entire repository rather than the working set relevant to the session." — .agents/architecture/ADR-043-scoped-tool-execution.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-043-scoped-tool-execution.md | 37 | used here | Identifies the set of files directly relevant to an agent session as the appropriate boundary for tool execution. |

## Consumes
Session task definition and modified file paths.

## Produces
Target file list for scoped validation and linting commands.

## When applied
Identified and constrained during active development and session protocol closure.

## Sub-concepts
none

## Part of
scoped-tool-execution

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The working set represents the subset of files explicitly modified or directly relevant to a specific agent session, used to restrict automated tool boundaries.
