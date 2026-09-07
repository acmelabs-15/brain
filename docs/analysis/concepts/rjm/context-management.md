---
package: rjm
name: Context Management
slug: context-management
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Context Management

## Definition — verbatim
> "Multi-turn prompting accumulates context." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:574

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 572 | defined here | Section prescribing techniques (summarizing history, keeping recent + best, structured extraction) to prevent token exhaustion. |

## Consumes
Accumulated conversation history across multi-turn exchanges.

## Produces
Compacted context representations, historical summaries, and retained candidate pairs that fit within model token budgets.

## When applied
Applied throughout multi-turn interactions as token accumulation approaches context limits.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
A context engineering technique in rjm that prevents multi-turn prompt sequences from exceeding model context windows or degrading attention. It establishes strategies such as historical summarization, retaining only recent and best-so-far outputs, and extracting structured bullet points from verbose feedback.
