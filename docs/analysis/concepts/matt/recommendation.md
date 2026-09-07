---
package: matt
name: recommendation
slug: recommendation
kind: technique
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# recommendation

## Definition — verbatim
> "then the agent&#x27;s recommended answer alone on a <code class="ah-code-inline">➡️</code> line." — external/grilling.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/grilling.md | 34 | defined here | Explains that questions arrive with a recommended answer on a ➡️ line to enable fast numeric answering. |

## Consumes
A question on the interview frontier.

## Produces
A proposed answer and rationale formatted on a ➡️ line directly beneath the question.

## When applied
When formatting each question in an interview round.

## Sub-concepts
none

## Part of
grilling

## Implementation status
defects: orphan, doc-drift, other

## Design notes
The recommendation technique requires the agent to propose a concrete, reasoned answer alongside every question it poses. This accelerates human decision-making by allowing users to answer by number ("1 yes, 2 second option") rather than drafting detailed responses from scratch.
