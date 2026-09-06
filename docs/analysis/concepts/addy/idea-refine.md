---
package: addy
name: idea-refine
slug: idea-refine
kind: technique
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/idea-refine.json, sha256: 559741e57427aca454ce9546df49771c1929208f5b3a89974ddc76ed0a15a224}
  - {path: external/idea-refine.md, sha256: 25fd41be4f76578f192d00aa50488dc022f4229eefbd6f8ad3c866c034772b91}
  - {path: external/interview-me.md, sha256: e1239cbcb73505255b9fa0f2e9fd296d03201a022bc41b1eded84178f03e73b7}
  - {path: external/spec-driven-development.md, sha256: 0c390d029fd44a59cf14303f6a99c0a24d0c67f8e5b5063ba504e3edb2b02e28}
  - {path: skills/interview-me/SKILL.md, sha256: 1d94741d10d2c826cd0c191aea3981ee94c8abb27ef2a166f6a372117d06448f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# idea-refine

## Definition — verbatim
> "Refines raw ideas into sharp, actionable concepts through structured divergent and convergent thinking. Stress-test assumptions and expand options before converging on one." — external/idea-refine.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/idea-refine.json | 2 | used here | Names the skill evaluated in the test case configuration. |
| external/idea-refine.md | 5 | defined here | Summary defining the skill on the public web documentation page. |
| external/interview-me.md | 12 | used here | Cross-references idea refinement in the Define phase related skills list. |
| external/spec-driven-development.md | 12 | used here | Lists idea-refine as a related skill preceding spec development. |
| README.md | 235 | used here | Catalogs the skill in the Define phase section of the README. |
| skills/interview-me/SKILL.md | 14 | used here | Contrasts interview-me against idea-refine which generates variations from an idea. |

## Consumes
A raw, unformed, or ambiguous product concept, feature request, or problem statement.

## Produces
Sharpened concept variations, surfaced and audited assumptions, and a one-pager with MVP scope and an explicit Not Doing list.

## When applied
> "You have a rough idea that needs exploration and stress-testing." — external/idea-refine.md:5

## Sub-concepts
- divergent-and-convergent-thinking
- sharpening-questions
- one-pager
- mvp-scope
- not-doing-list

## Part of
- addy:Define

## Implementation status
clean

## Design notes
Gives agents a structured method for early-stage discovery, applying divergent thinking to explore multiple distinct directions and convergent thinking to prune scope. It surfaces unexamined assumptions early when course correction is cheap, producing a crisp one-pager before spec drafting begins.
