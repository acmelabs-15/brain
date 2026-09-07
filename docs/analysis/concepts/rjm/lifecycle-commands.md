---
package: rjm
name: Lifecycle commands
slug: lifecycle-commands
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CLAUDE.md, sha256: 9a1e9abfb2f67110d986b795a47dcc54656dc365beb6384002f7ca9f628f6372}
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Lifecycle commands

## Definition — verbatim
> "Slash commands for structured development phases. Each command invokes specialized agents and quality gates." — docs/workflow-commands.md:3

## Also called — verbatim
> "## Lifecycle commands" — CLAUDE.md:50
> "# When to Use the Lifecycle Commands" — docs/when-to-use.md:1
> "# Lifecycle Commands Reference" — docs/workflow-commands.md:1

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CLAUDE.md | 50 | defined here | Section heading defining the six phase slash commands (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`). |
| docs/when-to-use.md | 3 | defined here | Defines the command set as a structured development lifecycle fitness guide mapping task shapes to phases. |
| docs/workflow-commands.md | 1 | defined here | Title heading of the comprehensive reference guide specifying command chaining, arguments, and agents. |

## Consumes
Feature requests, issue specifications, code diffs, test outputs, and pull requests.

## Produces
Chained lifecycle phase execution spanning requirements specification through branch shipping.

## When applied
Used as the primary development interface for all structured software engineering workflows.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
The central operational backbone of `rjm`, formalizing software development into six sequential, gate-enforced slash commands that govern agent coordination and quality assurance.
