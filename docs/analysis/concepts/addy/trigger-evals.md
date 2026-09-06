---
package: addy
name: Trigger evals
slug: trigger-evals
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/run-evals.js, sha256: e71343ae3468314574eecc8e7f6811a261c902698da0cc591805ea2664b795e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Trigger evals

## Definition — verbatim
> "Trigger evals: for every case in evals/cases/<skill>.json, each positive" — scripts/run-evals.js:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/run-evals.js | 7 | defined here | Defines Tier 2 deterministic evaluation verifying positive prompt routing and negative prompt rejection across skill catalog. |

## Consumes
evals/cases/<skill>.json, skills/*/SKILL.md frontmatter descriptions

## Produces
Top-k ranking scores, rank-1 hit counts, and pass/fail validation verdict

## When applied
Applied during continuous integration and pre-commit checks to ensure skill descriptions reliably route user queries.

## Sub-concepts
rankskills, cosine, buildcorpus

## Part of
Tier 2

## Implementation status
clean

## Design notes
Evaluation technique that assesses whether a skill's description will trigger when an agent encounters natural language user requests. Evaluates TF-IDF similarity of positive test prompts against the entire catalog to guarantee target skills rank in the top-k, while ensuring negative prompts do not rank first.
