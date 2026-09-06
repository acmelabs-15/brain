---
package: addy
name: fan-out orchestrator
slug: fan-out-orchestrator
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/ship.toml, sha256: 7018889ee96cd5e198fee199fdf7bc8a5af6fa5e57d575d74a6d94837dd7a101}
  - {path: commands/ship.toml, sha256: a067c5c4ea484609ceb530b908c7fb707f184abae839826012ddca653517c1c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# fan-out orchestrator

## Definition — verbatim
> "It runs three specialist personas in parallel against the current change, then merges their reports into a single go/no-go decision with a rollback plan." — .gemini/commands/ship.toml:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/ship.toml | 6 | defines | Architectural pattern where /ship executes three specialist subagents in parallel |
| commands/ship.toml | 6 | defines | Architectural pattern where /ship executes three specialist subagents in parallel |

## Consumes
Staged code changes, recent commits, or release branch diff.

## Produces
Unified pre-launch audit report synthesizing three independent specialist reviews into a go/no-go decision.

## When applied
Invoked by the `/ship` command during the pre-launch phase before releasing software.

## Sub-concepts
code-reviewer, security-auditor, test-engineer

## Part of
shipping-and-launch

## Implementation status
clean

## Design notes
The `fan-out orchestrator` pattern executes multiple specialized subagents (`code-reviewer`, `security-auditor`, and `test-engineer`) concurrently against a single change set. Because each subagent inspects code from an isolated, independent perspective without shared mutable state, concurrent execution minimizes review turnaround time while ensuring multi-faceted quality, security, and test verification before shipping.
