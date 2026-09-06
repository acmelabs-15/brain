---
package: addy
name: Specific
slug: specific
kind: pattern
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 190d4a4a399018f1d7bf0895a953042fe0f285080e37ca45381785f80ba007c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Specific

## Definition — verbatim
> "- **Specific** — Actionable steps, not vague advice" — CONTRIBUTING.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 31 | defines | Defined as the first criterion of the Skill Quality Bar, demanding actionable steps over vague advice. |

## Consumes
Workflow steps and engineering process guidance.

## Produces
Concrete, prescriptive instructions executable by AI agents without ambiguity.

## When applied
Applied when designing, reviewing, or modifying skills to ensure procedural clarity.

## Sub-concepts
none

## Part of
skill-quality-bar

## Implementation status
clean

## Design notes
"Specific" is the foundational pillar of addy's skill quality bar, establishing that skills must present concrete, actionable procedures rather than high-level suggestions. Because AI models struggle with abstract guidelines, specificity ensures that skills provide unambiguous decision trees and deterministic command sequences.
