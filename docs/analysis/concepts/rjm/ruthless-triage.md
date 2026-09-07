---
package: rjm
name: Ruthless Triage
slug: ruthless-triage
kind: template
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Ruthless Triage

## Definition — verbatim
> "Provide ruthless triage, strategic prioritization, and direct verdicts. Unblock decision paralysis by being the person willing to say the hard thing." — .claude/agents/high-level-advisor.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/high-level-advisor.md | 100 | defined here | Core mandate defining the advisor's role in cutting through paralysis with direct verdicts. |
| .claude/agents/high-level-advisor.md | 175 | defined here | Markdown template structuring Current State, The Real Question, Options, and Verdict (DO/DON'T/WHY). |
| templates/agents/high-level-advisor.shared.md | 88 | defined here | Shared core mandate defining ruthless triage and direct prioritization. |
| templates/agents/high-level-advisor.shared.md | 166 | defined here | Shared template structuring ruthless triage decision outputs. |

## Consumes
Multi-variable dilemmas, stalled projects, overwhelming goal lists, organizational blockers.

## Produces
Structured triage report (Current State, The Real Question, Options, Verdict: DO / DON'T / WHY).

## When applied
Applied when a project suffers from scope creep, paralysis by analysis, or unclear trade-offs.

## Sub-concepts
none

## Part of
high-level-advisor

## Implementation status
defects: missing-path

## Design notes
Ruthless Triage is the core diagnostic and decision format of the high-level advisor. It cuts through noise and extraneous context to isolate the single question that truly matters, delivering unambiguous DO / DON'T / WHY verdicts to unblock stalled execution.
