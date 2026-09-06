---
package: addy
name: Execution Model
slug: execution-model
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
  - {path: docs/opencode-setup.md, sha256: 77a6bd91ef2837acb96feea4ae60f3bfea2c4155864c197394dd2166f49de864}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Execution Model

## Definition — verbatim
> "### Execution Model" — AGENTS.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 47 | defines | Section heading introducing the step-by-step agent execution rules for every incoming request |
| docs/opencode-setup.md | 124 | defines | Section heading detailing OpenCode's execution model and tool loading steps |

## Consumes
Any incoming user prompt or task invocation.

## Produces
Execution sequence ensuring mandatory skill application before implementation.

## When applied
Applied unconditionally for every request received by an agent.

## Sub-concepts
skill-driven-execution-model, intent-skill-mapping

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Addy's Execution Model defines the invariant protocol that coding agents must check for applicable skills on every request, invoke them via tools, and complete requisite design steps before writing code.
