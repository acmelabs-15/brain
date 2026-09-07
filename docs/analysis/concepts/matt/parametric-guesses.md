---
package: matt
name: parametric guesses
slug: parametric-guesses
kind: pattern
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/RESOURCES-FORMAT.md, sha256: e9cacf34026e11a8d1c8f9de88abe5bcbf654f4ebdb25cae8c0de0d5f48f44ec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parametric guesses

## Definition — verbatim
> "Knowledge for explainers should be drawn from here, not from parametric guesses." — skills/productivity/teach/RESOURCES-FORMAT.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/RESOURCES-FORMAT.md | 3 | defines | Prohibited source of knowledge for explainers, contrasting curated resources against unverified model hallucinations. |

## Consumes
none

## Produces
none

## When applied
Prohibited anti-pattern throughout teaching sessions; instructors must ground instructional claims in verified resources rather than model parameters.

## Sub-concepts
none

## Part of
teach

## Implementation status
clean

## Design notes
An anti-pattern representing an LLM relying on internal pre-trained weights rather than verified external sources. Matt's teaching methodology explicitly forbids parametric guesses for instructional explainers, demanding that all curriculum material cite curated, high-trust documentation in RESOURCES.md.
