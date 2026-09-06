---
package: addy
name: Project rules
slug: project-rules
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/cursor-setup.md, sha256: 2df2336526a4463202615457f202d470300dd90727b1312df22513962ae4883f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Project rules

## Definition — verbatim
(used, not defined)
> "| **Project rules** | `.cursor/rules/*.mdc` | Always-on or file-scoped instructions (`alwaysApply`, `globs`) |" — docs/cursor-setup.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/cursor-setup.md | 13 | used here | Defined as always-on or file-scoped instructions in .cursor/rules/*.mdc. |

## Consumes
Project-specific architectural constraints, repository policies, and file glob patterns.

## Produces
`.cursor/rules/*.mdc` rule files checked into version control for workspace-wide enforcement.

## When applied
Loaded automatically into agent context for all workspace tasks or whenever active files match specified file globs.

## Sub-concepts
none

## Part of
- `rules`

## Implementation status
clean

## Design notes
Project rules provide repository-scoped operational policies stored in version control (such as `.cursor/rules/*.mdc`). They allow engineering teams to enforce uniform conventions, testing rules, and boundary constraints across all agent interactions within that specific project workspace.
