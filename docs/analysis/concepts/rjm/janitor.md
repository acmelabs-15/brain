---
package: rjm
name: janitor
slug: janitor
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# janitor

## Definition — verbatim
> "| **janitor** | Code and documentation cleanup | Refactoring and cleanup suggestions | both |" — README.md:415

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-catalog.md | 31 | used here | Catalog table entry indexing janitor as a support role for cleanup and tech debt remediation. |
| README.md | 415 | defined here | Defined in agent overview table as a dual-platform support agent for code and documentation cleanup. |

## Consumes
Target source code directories, documentation trees, and technical debt inspection scopes.

## Produces
Cleanup proposals, refactoring suggestions, and remediated code/documentation files.

## When applied
Applied across lifecycle phases whenever a codebase requires hygiene maintenance, dead code removal, or documentation tidying.

## Sub-concepts
none

## Part of
agent-catalog

## Implementation status
defects: missing-path, doc-drift

## Design notes
The janitor agent is a support role in rjm focused on codebase cleanliness and technical debt reduction. By handling routine maintenance tasks—such as dead code pruning, comment rot cleanup, and stylistic simplification—across both Claude Code and Copilot CLI environments, the janitor preserves maintainability without distracting feature developers.
