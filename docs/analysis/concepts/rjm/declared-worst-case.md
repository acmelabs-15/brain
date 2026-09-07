---
package: rjm
name: declared worst case
slug: declared-worst-case
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md, sha256: 9c9d265c58a594d301eccfdd19ae672962b14346fafec48e28c327e3ce1fbf1c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# declared worst case

## Definition — verbatim
> "the declared worst case reached 29x the real one." — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:271

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 271 | defined here | Explains how unratcheted hook timeouts drifted upward over time until declared worst-case budgets severely exceeded empirical durations. |

## Consumes
Configured job execution limits and timeouts declared across hook configurations such as `lefthook.yml`.

## Produces
Aggregated upper-bound duration models used by automated budget ratchets and container deadline tests.

## When applied
Evaluated during gate tier placement and CI test verification (`test_lefthook_declared_budget.py`) to prevent cumulative hook timeouts from exceeding environment reclamation limits.

## Sub-concepts
none

## Part of
gate-tier-placement

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
The declared worst case represents the mathematical sum or scheduling maximum of all configured timeout caps that an execution environment must be able to survive without hanging. In rjm's architecture (ADR-104), declared worst-case budgets are strictly ratcheted against the base ref to prevent individual jobs from gradually inflating timeouts and causing remote container teardowns.
