---
package: addy
name: Skill Evals
slug: skill-evals
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/README.md, sha256: 9d67d641f2b710661462fce67370b25adcc60ad99d2149342f55cb33e025aa2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Skill Evals

## Definition — verbatim
> "How this repo measures whether its skills actually work: that they **trigger** when they should, **stay distinct** from each other, and **change agent behavior** the way each skill promises." — evals/README.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/README.md | 1 | defined here | Document title and framework overview explaining the multi-tier skill evaluation system |

## Consumes
Skill markdown files (SKILL.md), command definitions, trigger test cases, eval specifications (evals.json), prompt fixtures.

## Produces
Evaluation verdicts and execution traces across structural, routing, and behavioral tiers.

## When applied
During continuous integration (for structural and routing checks) and on-demand execution (for behavioral testing of skill compliance).

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
The evaluation framework in Addy's repository provides automated quality assurance for agent skills. By validating that skills adhere to schema standards, trigger accurately on realistic user prompts without routing collisions, and reliably drive expected agent tool use and outputs, it prevents prompt drift and degradation in AI agent capabilities.
