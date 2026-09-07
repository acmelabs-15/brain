---
package: rjm
name: Explore
slug: explore
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CLAUDE.md, sha256: 9a1e9abfb2f67110d986b795a47dcc54656dc365beb6384002f7ca9f628f6372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Explore

## Definition — verbatim
> "- `Task(subagent_type=\"Explore\")` for codebase exploration" — CLAUDE.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CLAUDE.md | 10 | used here | Designated subagent type for conducting read-only codebase exploration tasks. |

## Consumes
Codebase repository files, directory hierarchies, and exploration prompt instructions.

## Produces
Synthesized findings, architectural traces, and codebase survey reports for specialized workflows.

## When applied
Invoked when an agent or user initiates codebase reconnaissance or preliminary investigation before modifying code.

## Sub-concepts
none

## Part of
claude-code-specifics

## Implementation status
clean

## Design notes
`Explore` represents Claude Code's native exploratory subagent role used across lifecycle phases for fast, read-only repository reconnaissance without polluting the orchestrator's context window.
