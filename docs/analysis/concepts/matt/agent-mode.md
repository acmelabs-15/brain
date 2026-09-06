---
package: matt
name: agent mode
slug: agent-mode
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# agent mode

## Definition — verbatim
(used, not defined)

> "The dictionary is the house vocabulary for AI coding: _context window_, _subagent_, _harness_, _primary source_, _agent mode_." — .agents/writing-docs.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 77 | used here | Cited as a house vocabulary term from the AI Coding Dictionary in the documentation authoring conventions. |

## Consumes
User prompts, tool execution permissions, and autonomous loop configurations in the host harness.

## Produces
Autonomous agent execution loops executing multi-step tool calls without per-action human approval.

## When applied
Applied when switching from interactive turn-by-turn steering to autonomous multi-step execution.

## Sub-concepts
none

## Part of
ai-coding-dictionary

## Implementation status
clean

## Design notes
An operating state in AI coding harnesses where the LLM is granted autonomy to execute multi-turn loops of tool calls (reading files, executing shell commands, running tests, editing files) toward an objective without waiting for human confirmation at each individual step.
