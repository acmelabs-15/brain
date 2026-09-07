---
package: rjm
name: editorial judgment
slug: editorial-judgment
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# editorial judgment

## Definition — verbatim
(used, not defined)

> "Your job is not to hand back a polished readiness score. Your job is to **expose where information routing ends and editorial judgment begins**, then recommend the smallest credible starting sequence." — .claude/skills/world-model-diagnostic/SKILL.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/world-model-diagnostic/SKILL.md | 14 | used here | Core diagnostic focus establishing the boundary between deterministic information routing and subjective human interpretation. |

## Consumes
Operational information flows, business context, and human decision-making responsibilities.

## Produces
Explicit boundaries delineating automated execution from required human review.

## When applied
Applied during the diagnostic intake and boundary audit phases when probing where tacit human interpretation remains indispensable.

## Sub-concepts
none

## Part of
world-model-diagnostic

## Implementation status
defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2)

## Design notes
A vital qualitative distinction in rjm's architectural methodology separating mechanical data routing from subjective, context-heavy human decision-making. Identifying editorial judgment prevents organizations from prematurely delegating unconstrained authority to AI agents where nuanced human interpretation and accountability remain necessary.
