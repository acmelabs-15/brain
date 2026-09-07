---
package: rjm
name: settled battles
slug: settled-battles
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# settled battles

## Definition — verbatim
> "The chronicle of this repo's settled battles. Maps each major incident to symptom, root cause, evidence path, and the artifact that fixed it, so nobody re-fights a decided question." — .claude/skills/ai-agents-failure-archaeology/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 3 | defined here | Primary skill description defining the chronicle of decided repository debates and failure archaeology. |

## Consumes
Historical incident retrospectives, architectural decision records, and empirical probe logs.

## Produces
Binding verdicts and fossilized quality gates that prevent re-litigating decided architectural questions.

## When applied
Consulted before proposing workflow modifications, weakening guards, or altering established gates.

## Sub-concepts
settled-battles-list, major-incidents-table

## Part of
ai-agents-failure-archaeology

## Implementation status
defects: doc-drift

## Design notes
`settled battles` represents the canon of historic architectural conflicts, hard-learned lessons, and binding decisions in rjm. By maintaining a structured chronicle of past failures and their fossilized solutions, the repo prevents contributors and autonomous agents from reopening decided questions without fresh empirical evidence.
