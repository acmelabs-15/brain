---
package: addy
name: Tier 2
slug: tier-2
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
memo_inputs:
  - {path: docs/developer-onboarding.md, sha256: 59a35b68045f34aa42161bc5901892489e6ecdac4b5bbfcf311fde65f8255eea}
  - {path: scripts/run-evals.js, sha256: e71343ae3468314574eecc8e7f6811a261c902698da0cc591805ea2664b795e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Tier 2

## Definition — verbatim
> "Tier 2 (default, deterministic, CI-safe):" — scripts/run-evals.js:6

## Also called — verbatim
- `Trigger & routing` — evals/README.md:19

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/developer-onboarding.md | 61 | used here | Documented as the trigger and routing evaluation tier verifying prompt ranking and collision prevention. |
| scripts/run-evals.js | 6 | defined here | Defined in runner docstring as the default, deterministic, CI-safe evaluation tier. |

## Consumes
Skill descriptions from frontmatter and test case prompt sets from `evals/cases/*.json`.

## Produces
Deterministic trigger ranking scores (stemmed TF-IDF cosine similarity), top-k rank checks, collision warnings, and rank-1 rates.

## When applied
Executed in continuous integration on every pull request and locally via `node scripts/run-evals.js`.

## Sub-concepts
- `tf-idf`

## Part of
- `three-tier-eval-framework`
- `verification-loop`

## Implementation status
clean

## Design notes
Tier 2 is the deterministic trigger and routing evaluation tier of agent-skills. It uses stemmed TF-IDF keyword vectorization and cosine similarity to verify that real user queries successfully rank the target skill in the top-k while ensuring no two skill descriptions in the catalog collide, catching routing bugs without spending LLM tokens.
