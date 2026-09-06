---
package: addy
name: Tier 3
slug: tier-3
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

# Tier 3

## Definition — verbatim
> "Tier 3 (opt-in, costs tokens, never in CI):" — scripts/run-evals.js:19

## Also called — verbatim
- `Behavioral` — evals/README.md:20

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/developer-onboarding.md | 64 | used here | Documented as the behavioral evaluation tier running on demand and spending tokens. |
| scripts/run-evals.js | 19 | defined here | Defined in runner docstring as the opt-in behavioral tier running via headless Claude. |

## Consumes
Workspace fixtures (`evals/fixtures/`), skill instructions, and per-case behavioral expectations.

## Produces
Full execution traces, conversational turns, and model-graded evaluation reports (`grading.json`).

## When applied
Executed on demand by developers or before major releases via `node scripts/run-evals.js --behavioral <skill>`.

## Sub-concepts
none

## Part of
- `three-tier-eval-framework`
- `verification-loop`

## Implementation status
clean

## Design notes
Tier 3 is the behavioral evaluation tier of agent-skills. Running on demand via headless Claude in isolated workspaces, it tests whether an agent actively guided by a skill satisfies concrete behavioral rubrics (tool use, file modifications, error handling, and resistance to rationalization pressure) rather than merely checking routing keywords.
