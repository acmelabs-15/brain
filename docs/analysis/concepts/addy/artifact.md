---
package: addy
name: artifact
slug: artifact
kind: artifact
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# artifact

## Definition — verbatim
> "A fresh-context reviewer needs the **artifact** and the **contract**, not the journey." — skills/doubt-driven-development/SKILL.md:77

## Also called — verbatim
> "ARTIFACT: <paste artifact>" — skills/doubt-driven-development/SKILL.md:102

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/doubt-driven-development/SKILL.md | 77 | defined here | Defined as the isolated reviewable unit (diff, function, proposal) handed to the reviewer without author journey reasoning. |
| skills/doubt-driven-development/SKILL.md | 102 | defined here | Placeholder label in the adversarial review prompt template where the isolated subject under review is injected. |

## Consumes
A diff, function, architectural proposal, or concrete factual claim under evaluation.

## Produces
The minimal reviewable unit evaluated by the fresh-context reviewer.

## When applied
Extracted during Step 2 of the doubt cycle prior to reviewer invocation.

## Sub-concepts
none

## Part of
doubt-cycle

## Implementation status
clean

## Design notes
In doubt-driven development, an `artifact` is the smallest reviewable unit of code, decision, or assertion stripped of narrative justifications, enabling an adversarial reviewer to evaluate what was produced strictly against the contract without being swayed by author rationalizations.
