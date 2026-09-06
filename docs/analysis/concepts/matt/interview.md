---
package: matt
name: interview
slug: interview
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: skills/engineering/grill-with-docs/SKILL.md, sha256: 7de372c13488f1ee96cc11cd8907b56b6809cc93eef776eeddd37de6b6cbe3fe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# interview

## Definition — verbatim
> "`grill-with-docs` interviews you about a plan or design until you and the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) share one understanding of it, and writes the vocabulary and the hard decisions into your repo while it does. It is the same interview [grill-me](https://aihero.dev/skills-grill-me) runs (a round of questions, then wait, then the next round), pointed at a codebase." — docs/engineering/grill-with-docs.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/grill-with-docs.md | 3 | defined here | Defined as the interrogative dialogue protocol (rounds of questions, recommendations, waiting) that uncovers shared understanding and records repository artifacts. |
| skills/engineering/grill-with-docs/SKILL.md | 3 | used here | Specified in the skill description as the relentless questioning mechanism that sharpens plans and produces ADRs and glossaries. |

## Consumes
A preliminary plan, architecture proposal, design idea, or unexplored codebase.

## Produces
Shared mental model between user and agent, alongside repository documentation (`CONTEXT.md` terms and ADR files).

## When applied
At the start of a change or project when requirements or architectural decisions need interrogation and clarification.

## Sub-concepts
none

## Part of
grill-with-docs, grilling

## Implementation status
defects: doc-drift (silent failure to write files when run inside external orchestration in docs/engineering/grill-with-docs.md:49), other (failure to load grilling and domain-modeling dependencies in docs/engineering/grill-with-docs.md:52)

## Design notes
The structured conversational technique of questioning a human across iterative rounds to eliminate ambiguity and achieve shared understanding before code is written. In Matt's lifecycle, the interview is conducted in non-overlapping frontiers of questions with recommendations, producing concrete documentation as decisions resolve.
