---
package: rjm
name: Analysis Phase
slug: analysis-phase
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

# Analysis Phase

## Definition — verbatim
> "2. **Analysis Phase**: Write 3000-5000 word analysis to `.agents/analysis/`" — .claude/commands/research.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/research.md | 48 | defined here | Second phase in `/research`, distilling gathered findings into a comprehensive structured report. |

## Consumes
Gathered research findings and raw web data from the Research Phase.

## Produces
Long-form structured document (3,000–5,000 words) persisted under `.agents/analysis/`.

## When applied
Immediately follows the Research Phase once information gathering is complete.

## Sub-concepts
none

## Part of
research-and-incorporate-command

## Implementation status
defects: doc-drift

## Design notes
The synthesis stage where collected evidence is organized into an exhaustive analysis report. It requires deep technical elaboration, architectural trade-off evaluation, and structured comparative tables, preserving the full depth of discovery for human review and downstream agents.
