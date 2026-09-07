---
package: rjm
name: "SIMPLE MODE"
slug: simple-mode
kind: pattern
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py, sha256: 12d5e6321feed9b98ac6602cf514da5d873e188dcfd268dad4e556513febe92b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SIMPLE MODE

## Definition — verbatim
> "SIMPLE MODE (if you just know annual costs):" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:249

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py | 249 | defined here | Usage instructions defining flat annual cost estimation when detailed engineering parameters are unknown. |

## Consumes
Upfront initial costs and estimated static annual ongoing costs for build, buy, and partner options.

## Produces
High-level baseline TCO comparison without compounding maintenance expansion or code churn adjustments.

## When applied
Used during Quick tier evaluations or early exploratory phases when detailed operational telemetry is unavailable.

## Sub-concepts
none

## Part of
total-cost-of-ownership

## Implementation status
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
A simplified calculation pattern in `calculate_tco.py` for rapid early-stage estimations where teams only have flat annual run-rate figures, trading off the granular compounding dynamics of realistic mode for speed of analysis.
