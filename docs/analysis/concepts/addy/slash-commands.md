---
package: addy
name: Slash commands
slug: slash-commands
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
  - {path: docs/gemini-cli-setup.md, sha256: 982d9cdc469fb26cbd4dd6a2d26d1894f2b93e2f821dd8646c188dacb8150803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Slash commands

## Definition — verbatim
> "- **Slash commands** (`.claude/commands/*.md`) — user-facing entry points. The *when*. The orchestration layer." — AGENTS.md:76

## Also called — verbatim
> "## Slash Commands" — docs/gemini-cli-setup.md:108

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 76 | defines | Defines slash commands as user-facing entry points providing orchestration over skills and personas |
| docs/gemini-cli-setup.md | 108 | references | Details the 8 slash commands supported in Gemini CLI under `.gemini/commands/` |

## Consumes
User command invocation (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`, `/webperf`).

## Produces
Orchestrated execution of underlying skills and persona fan-outs.

## When applied
Triggered when a developer enters a slash command in a supported CLI harness.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Slash commands form the top-level orchestration layer in addy, giving human developers simple entry points that trigger complex multi-skill workflows and persona evaluations.
