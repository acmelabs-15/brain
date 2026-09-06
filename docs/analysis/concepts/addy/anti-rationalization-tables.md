---
package: addy
name: Anti-rationalization tables
slug: anti-rationalization-tables
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Anti-rationalization tables

## Definition — verbatim
> "Anti-rationalization tables and Red Flags in every skill; parallel review **personas** in `/ship`; reference checklists; a **three-tier eval framework** in CI" — docs/comparison.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/comparison.md | 24 | defines | Distinctive structural tables included across skills to counter model shortcuts |

## Consumes
Anticipated shortcuts, lazy assumptions, and invalid excuses common to LLM behavior.

## Produces
Two-column reference tables pairing common rationalizations with required corrective actions.

## When applied
Standardized section present in each skill's markdown documentation.

## Sub-concepts
none

## Part of
anti-rationalization-guards

## Implementation status
clean

## Design notes
Anti-rationalization tables structure guardrails into explicit tables pairing 'What the agent thinks' with 'Why it's wrong and what to do instead,' giving models explicit negative examples to resist rationalizing past quality gates.
