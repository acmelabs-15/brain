---
package: matt
name: shared understanding
slug: shared-understanding
kind: gate
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

# shared understanding

## Definition — verbatim
> "Interview the user relentlessly until you reach a shared understanding." — skills/productivity/grilling/SKILL.md:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/grilling.md | 35 | used here | States that an agent will not act on agreed outcomes until the user explicitly confirms a shared understanding. |
| skills/productivity/grilling/SKILL.md | 6 | defined here | Identifies reaching a shared understanding as the primary goal of relentless grilling. |

## Consumes
An exhausted design tree where the frontier is empty and all prerequisite questions are answered.

## Produces
Mutual alignment between human and agent, unlocking downstream specification and implementation.

## When applied
At the conclusion of an interview session before taking action on agreed outcomes.

## Sub-concepts
none

## Part of
grilling

## Implementation status
defects: orphan, doc-drift, other

## Design notes
Shared understanding serves as the quality gate that marks the successful completion of an interview. The agent maps the entire design tree until no unexamined assumptions remain on the frontier, and halts execution until the human user confirms that both parties share the exact same mental model.
