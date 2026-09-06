---
package: matt
name: slash commands
slug: slash-commands
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# slash commands

## Definition — verbatim
> "A collection of agent skills (slash commands and behaviors) loaded by Claude Code." — CONTEXT.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTEXT.md | 3 | defined here | Identifies slash commands alongside behaviors as the interaction packaging of agent skills in Claude Code. |

## Consumes
User command invocation beginning with `/` in an interactive agent CLI session.

## Produces
Interactive execution of the requested skill workflow.

## When applied
When an engineer explicitly invokes a skill via `/` command in the CLI.

## Sub-concepts
none

## Part of
skills

## Implementation status
defects: missing-path, other (CONTEXT.md cites non-existent triage-labels.md path; risks runaway artifact bloat)

## Design notes
An interaction pattern representing user-facing commands invoked via a leading slash in interactive agent sessions, providing clear orchestration entry points distinct from automatic model-invoked behaviors.
