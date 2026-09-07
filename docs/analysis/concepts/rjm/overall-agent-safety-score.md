---
package: rjm
name: Overall Agent Safety Score
slug: overall-agent-safety-score
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Overall Agent Safety Score

## Definition — verbatim
> "**Overall Agent Safety Score**: X/5" — .claude/skills/review/references/agent-safety.md:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 102 | defined here | Overall numeric metric summarizing the agent safety assessment. |

## Consumes
Ratings across the five individual dimensions of the Agent Safety Assessment table.

## Produces
Summary numeric rating out of 5 indicating overall safety posture.

## When applied
Emitted as part of the Agent Safety Assessment output in agent safety reviews.

## Sub-concepts
none

## Part of
agent-safety-assessment

## Implementation status
defects: doc-drift, other

## Design notes
A summary numerical rating out of 5 aggregating individual dimension scores in the agent-safety review axis to provide an immediate indicator of agent modification risk.
