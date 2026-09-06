---
package: addy
name: fan-out
slug: fan-out
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agents.md, sha256: e03481592a725146ed48ee22010086dcfebd1faf1373cb99e7f2ed4d2100275c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# fan-out

## Definition — verbatim
> "Pick this only when **independent** investigations can run in parallel and produce reports that a single agent then merges." — docs/agents.md:42

## Also called — verbatim
> "parallel fan-out" — docs/agents.md:54

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agents.md | 41 | defines | Endorsed orchestration pattern running independent review personas in parallel and merging their reports |

## Consumes
An immutable artifact or git diff ready for multi-perspective evaluation.

## Produces
Multiple independent subagent reports synthesized by the main agent into a unified decision.

## When applied
Used during pre-launch review (e.g. /ship) where code review, security audit, and QA coverage can run simultaneously.

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
Fan-out is the only orchestration pattern officially endorsed by addy, enabling parallel specialist execution while enforcing that subagents remain stateless and report back to a single merging agent.
