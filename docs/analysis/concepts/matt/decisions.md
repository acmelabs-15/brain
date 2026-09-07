---
package: matt
name: decisions
slug: decisions
kind: artifact
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: skills/productivity/grilling/SKILL.md, sha256: 10ff989e7498b23b5acb49d5048f11dcd906757d2f79c5cdf8a00001381296f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# decisions

## Definition — verbatim
> "The _decisions_ are the user's: put each to them and wait." — skills/productivity/grilling/SKILL.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/grilling.md | 35 | defined here | Establishes that trade-offs and choices belong exclusively to the user and that agents must never answer them autonomously. |
| skills/productivity/grilling/SKILL.md | 26 | defined here | Mandates that the agent present decisions to the user and await explicit confirmation. |

## Consumes
A question on the interview frontier involving architectural trade-offs, preferences, or irreversible choices.

## Produces
User-authorized choices that reshape the design tree and unblock downstream branches.

## When applied
Whenever a prerequisite involves value judgements, business priorities, or trade-offs that cannot be deduced from code.

## Sub-concepts
none

## Part of
grilling

## Implementation status
defects: orphan, doc-drift, other

## Design notes
Decisions are subjective judgements, strategic priorities, and trade-offs that belong strictly to the human user. Unlike facts, an agent running grilling must never answer its own decisions; it formulates a recommended answer on a ➡️ line to assist review, but waits for explicit human resolution before proceeding.
