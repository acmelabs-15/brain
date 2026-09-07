---
package: matt
name: explainer/
slug: explainer
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/scaffold-exercises/SKILL.md, sha256: 75f5c9d771606fb9762f16522efc954df11c324f87148d8ff069bce166257de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# explainer/

## Definition — verbatim
> "- `explainer/` - conceptual material, no TODOs" — skills/misc/scaffold-exercises/SKILL.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/scaffold-exercises/SKILL.md | 23 | defined here | Defines the exercise subfolder variant providing conceptual instruction without exercises or TODOs. |

## Consumes
Conceptual teaching text and explanatory code snippets.

## Produces
A directory containing a non-empty `readme.md` and optional supporting code without student tasks.

## When applied
When scaffolding conceptual background or when defaulting during stub generation.

## Sub-concepts
none

## Part of
exercise-variants, scaffold-exercises

## Implementation status
clean

## Design notes
An exercise directory variant designed for purely conceptual material. Unlike problem subfolders, explainers carry no TODOs or grading expectations, providing learners with mental models and foundational knowledge.
