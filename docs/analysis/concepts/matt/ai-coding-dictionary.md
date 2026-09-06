---
package: matt
name: AI Coding Dictionary
slug: ai-coding-dictionary
kind: reference
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

# AI Coding Dictionary

## Definition — verbatim
> "The dictionary is the house vocabulary for AI coding: _context window_, _subagent_, _harness_, _primary source_, _agent mode_." — .agents/writing-docs.md:77

## Also called — verbatim
`mattpocock/dictionary-of-ai-coding` — .agents/writing-docs.md:77

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 77 | used here | Prescribed as the house vocabulary reference for documentation authoring, defining terms like context window, subagent, harness, and primary source. |

## Consumes
Domain concepts and patterns encountered across AI agent workflows.

## Produces
Standardized definitions and canonical links for terms used across documentation and skills.

## When applied
Applied whenever authoring documentation or defining conceptual boundaries across skills in the repository.

## Sub-concepts
context-window, subagent, harness, primary-source, agent-mode

## Part of
none

## Implementation status
clean

## Design notes
The external canonical dictionary maintained by Matt Pocock defining shared vocabulary for AI engineering. It establishes a consistent lingua franca for concepts like context windows, subagents, and harnesses, eliminating ambiguous synonyms across skills and documentation.
