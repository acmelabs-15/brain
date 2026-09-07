---
package: rjm
name: Falsification Test
slug: falsification-test
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/critical-thinking-falsifiability.md, sha256: 16b92ac278886404388a0459346144c6d32187344443c3d57185d6abf438d1d6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Falsification Test

## Definition — verbatim
> "### Falsification Test" — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/critical-thinking-falsifiability.md | 42 | defined here | Defines the 4-part template (Claim, Metric, Baseline, Failure condition) for testing claims. |

## Consumes
An asserted benefit or causal claim from a decision proposal.

## Produces
A pre-registered falsification block with Claim, Metric, Baseline, and Failure Condition.

## When applied
Completed before work starts for each asserted benefit in a decision.

## Sub-concepts
none

## Part of
falsifiability

## Implementation status
clean

## Design notes
The Falsification Test is an operational technique that operationalizes Popperian falsifiability into a concrete four-part template: Claim, Metric, Baseline, and Failure Condition. Requiring the failure condition before execution prevents retrofitting goals to whatever outcome occurs.
