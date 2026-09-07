---
package: rjm
name: Kiro pattern
slug: kiro-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Kiro pattern

## Definition — verbatim
> "The steering system provides context-aware guidance injection based on file patterns, implementing the Kiro pattern of glob-based inclusion." — .agents/AGENT-SYSTEM.md:1574

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1574 | applies | Names the pattern architecture used by the steering system for glob-based context injection. |

## Consumes
File path glob specifications and modular guideline documents.

## Produces
Scoped context injection minimizing prompt token expenditure.

## When applied
When matching affected repository files against pattern-scoped steering definitions.

## Sub-concepts
none

## Part of
steering-system

## Implementation status
clean

## Design notes
A context engineering pattern adopted from Kiro where specific guidance documents are mapped to file glob expressions and injected into agent prompts only when touched files match those patterns, eliminating broad irrelevant context.
