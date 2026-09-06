---
package: addy
name: interview-me
slug: interview-me
kind: technique
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/interview-me.json, sha256: 5fcd623b845d367ac360776008cee6d6bebec60bb2f16c175e5410424794886d}
  - {path: external/idea-refine.md, sha256: 25fd41be4f76578f192d00aa50488dc022f4229eefbd6f8ad3c866c034772b91}
  - {path: external/interview-me.md, sha256: e1239cbcb73505255b9fa0f2e9fd296d03201a022bc41b1eded84178f03e73b7}
  - {path: external/spec-driven-development.md, sha256: 0c390d029fd44a59cf14303f6a99c0a24d0c67f8e5b5063ba504e3edb2b02e28}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
  - {path: skills/interview-me/SKILL.md, sha256: 1d94741d10d2c826cd0c191aea3981ee94c8abb27ef2a166f6a372117d06448f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# interview-me

## Definition — verbatim
> "Extracts what the user actually wants instead of what they think they should want. Achieves this through one-question-at-a-time interview until ~95% confidence about the underlying intent." — skills/interview-me/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/interview-me.json | 2 | used here | Specified as the target skill under evaluation for conversational intent elicitation. |
| external/idea-refine.md | 12 | used here | Referenced in the web documentation as a related Define-phase skill for discovery. |
| external/interview-me.md | 5 | defined here | Published documentation defining the skill's purpose and one-question-at-a-time process. |
| external/spec-driven-development.md | 12 | used here | Referenced in the web documentation as a prerequisite discovery skill before specification. |
| README.md | 57 | used here | Cataloged as the Define-phase skill for requirements interrogation one question at a time. |
| skills/constraint-driven-development/SKILL.md | 59 | used here | Cited as the source of the one-question-at-a-time interview discipline with default answers. |
| skills/interview-me/SKILL.md | 2 | defined here | Main skill definition establishing the one-question-at-a-time interview process and 95% confidence stop. |

## Consumes
Underspecified user request or conversational trigger ("interview me", "grill me", "are we sure?").

## Produces
A confirmed statement of intent (`docs/intent/[topic].md`) with explicit user confirmation and non-goals.

## When applied
> "Use when an ask is underspecified (\"build me X\" without \"for whom\" or \"why now\"), when the user explicitly invokes (\"interview me\", \"grill me\", \"are we sure?\", \"stress-test my thinking\"), or when you catch yourself silently filling in ambiguous requirements before any plan, spec, or code exists." — skills/interview-me/SKILL.md:3

## Sub-concepts
one-question-at-a-time-interview

## Part of
none

## Implementation status
clean

## Design notes
In Addy's lifecycle, `interview-me` serves as the initial gate in the Define phase before formal specification or task breakdown begins. It prevents premature solutioning and the costly anchoring of misaligned requirements by forcing the agent to interrogate the user's intent one question at a time with an attached hypothesis until reaching high confidence (~95%). Without this technique, agents silently fill in ambiguous requirements with generic assumptions, locking in misfits before implementation starts.
