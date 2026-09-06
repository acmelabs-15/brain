---
package: addy
name: parallel fan-out with a merge step
slug: parallel-fan-out-with-a-merge-step
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# parallel fan-out with a merge step

## Definition — verbatim
> "The only multi-persona orchestration pattern this repo endorses is **parallel fan-out with a merge step** — used by `/ship` to run `code-reviewer`, `security-auditor`, and `test-engineer` concurrently and synthesize their reports." — AGENTS.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 80 | defines | Defines the multi-persona orchestration pattern used by `/ship` to run reviewer personas in parallel and merge their output |

## Consumes
Candidate release code changes and verification artifacts.

## Produces
Consolidated verdict report synthesizing outputs from code reviewer, security auditor, and test engineer personas.

## When applied
Used during `/ship` to perform comprehensive multi-lens verification before production launch.

## Sub-concepts
personas, senior-code-reviewer

## Part of
ship

## Implementation status
clean

## Design notes
This pattern restricts multi-agent complexity by disallowing hierarchical persona-to-persona invocations and instead enforcing flat parallel evaluation with a single synthesis step.
