---
package: addy
name: parallel fan-out
slug: parallel-fan-out
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/developer-onboarding.md, sha256: 59a35b68045f34aa42161bc5901892489e6ecdac4b5bbfcf311fde65f8255eea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# parallel fan-out

## Definition — verbatim
(used, not defined)
> "the only endorsed multi-persona pattern is parallel fan-out with a merge step" — docs/developer-onboarding.md:23

## Also called — verbatim
- `persona fan-out` — docs/gemini-cli-setup.md:120

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/developer-onboarding.md | 23 | used here | Identified as the only endorsed multi-persona pattern: parallel fan-out with a merge step. |

## Consumes
Candidate feature branches, pull requests, or release artifacts requiring multi-perspective review.

## Produces
Independent concurrent review evaluations synthesized into a consolidated merge verdict.

## When applied
Applied during pre-release review phases (such as `/ship`) where multiple personas review the same deliverable concurrently.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Parallel fan-out is an architectural orchestration pattern designed to evaluate changes through multiple specialized viewpoints (code quality, testing, security, performance) simultaneously. By forbidding personas from invoking each other and instead dispatching them concurrently from an orchestrator with a final synthesis step, it avoids recursive context loops and produces clean, balanced reviews.
