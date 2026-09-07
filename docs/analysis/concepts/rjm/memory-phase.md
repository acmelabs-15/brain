---
package: rjm
name: Memory Phase
slug: memory-phase
kind: phase
package_phase: rjm:research
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/research.md, sha256: a08ee89a1f75b86ad11d4044ef5ae0757629420384900a2f9ff2d38deeaeeda4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Memory Phase

## Definition — verbatim
> "4. **Memory Phase**: Create Serena memory + 5-10 atomic Forgetful memories" — .claude/commands/research.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/research.md | 50 | defined here | Fourth phase in `/research`, persisting synthesized insights into long-term agent memory stores. |

## Consumes
Applicability mappings and synthesized analysis conclusions.

## Produces
High-level narrative memory in Serena and 5–10 granular, tagged atomic memories in Forgetful.

## When applied
Following applicability analysis, before closing the research turn.

## Sub-concepts
none

## Part of
research-and-incorporate-command

## Implementation status
defects: doc-drift

## Design notes
The long-term knowledge retention phase of the research command. By creating both a holistic Serena memory and multiple tagged atomic Forgetful memories, it indexes the research findings into semantic memory so future sessions automatically retrieve relevant insights when working in related code areas.
