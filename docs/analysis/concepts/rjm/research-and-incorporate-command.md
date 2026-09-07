---
package: rjm
name: Research and Incorporate Command
slug: research-and-incorporate-command
kind: technique
package_phase: cross-phase
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

# Research and Incorporate Command

## Definition — verbatim
> "# Research and Incorporate Command" — .claude/commands/research.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/research.md | 11 | defined here | Defined as the slash command orchestrating external topic research, structured analysis, and memory persistence. |

## Consumes
Research query or topic, existing knowledge base, and optional URL targets.

## Produces
In-depth analysis markdown in `.agents/analysis/`, persistent memories in Serena/Forgetful, and optional implementation issues.

## When applied
When investigating external libraries, architectural paradigms, or novel problem domains.

## Sub-concepts
ultrathink, research-phase, analysis-phase, applicability-phase, memory-phase, action-phase, fallback-rules, stop-conditions

## Part of
research-and-incorporate

## Implementation status
defects: doc-drift

## Design notes
The top-level command governing external intelligence gathering and knowledge synthesis. It structures research into five sequential phases, bounds execution within strict token budgets and stop conditions, and enforces immediate distillation into persistent memory systems to prevent loss of knowledge across sessions.
