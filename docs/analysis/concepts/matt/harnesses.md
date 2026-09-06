---
package: matt
name: harnesses
slug: harnesses
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# harnesses

## Definition — verbatim
(used, not defined)

> "The repo ships metadata for other [harnesses](https://www.aihero.dev/ai-coding-dictionary/harness), including Codex, and those may expose nothing under that name, so the parallel-design phase is less portable than the skill's metadata suggests." — docs/engineering/codebase-design.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/codebase-design.md | 72 | used here | Discussed in connection with tool portability issues across different agent execution environments like Codex and Claude Code. |
| docs/productivity/grilling.md | 73 | used here | Cited regarding cross-harness skill loading failures where multi-skill invocations fail to load dependencies. |

## Consumes
Host agent execution environments and platform tool definitions.

## Produces
Runtime execution context and tool availability for skills.

## When applied
When executing skills across different coding agent client environments (Claude Code, Codex, etc.).

## Sub-concepts
none

## Part of
none

## Implementation status
defects: other (harness lock-in on Agent tool for DESIGN-IT-TWICE in codebase-design:72), missing-path (cross-skill invocation failure across harnesses in grilling:73)

## Design notes
The client runtime platform that executes coding agents and provides tool interfaces. In Matt's architecture, differences in harness capabilities (such as whether subagent spawning tools exist or whether skill dependencies load reliably) represent a primary source of portability friction.
