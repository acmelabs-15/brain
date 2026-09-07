---
package: matt
name: explainers
slug: explainers
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
  - {path: skills/misc/scaffold-exercises/SKILL.md, sha256: 75f5c9d771606fb9762f16522efc954df11c324f87148d8ff069bce166257de9}
  - {path: skills/productivity/teach/GLOSSARY-FORMAT.md, sha256: 9b99859ec28437668130d8f2ce5a342938970f8a1ed4fd38c3eab4f4b5fff210}
  - {path: skills/productivity/teach/RESOURCES-FORMAT.md, sha256: e9cacf34026e11a8d1c8f9de88abe5bcbf654f4ebdb25cae8c0de0d5f48f44ec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# explainers

## Definition — verbatim
> "- `explainer/` - conceptual material, no TODOs" — skills/misc/scaffold-exercises/SKILL.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/README.md | 7 | used here | Listed as an exercise folder variant containing conceptual educational material. |
| skills/misc/scaffold-exercises/SKILL.md | 3 | used here | Named in skill description as conceptual exercise modules to scaffold. |
| skills/productivity/teach/GLOSSARY-FORMAT.md | 3 | used here | Mandates that all explainers adhere to the canonical terminology defined in `GLOSSARY.md`. |
| skills/productivity/teach/RESOURCES-FORMAT.md | 3 | used here | Requires knowledge in explainers to be drawn from trusted resources rather than parametric model guesses. |

## Consumes
Curated knowledge from `RESOURCES.md` and canonical terms from `GLOSSARY.md`.

## Produces
Conceptual teaching documents and exercise subfolders (`explainer/` with `readme.md`).

## When applied
When presenting conceptual background and mental models without interactive problem code or TODO tasks.

## Sub-concepts
explainer

## Part of
exercise-variants, scaffold-exercises

## Implementation status
defects: doc-drift (teach/SKILL.md omits link to GLOSSARY-FORMAT.md)

## Design notes
In Matt's pedagogical framework, explainers are self-contained conceptual artifacts that teach core principles without asking the student to solve problems or complete TODOs. They must strictly adhere to the teaching workspace's glossary vocabulary and draw fact-based insights exclusively from curated resources rather than AI model hallucinations.
