---
package: rjm
name: Overall verdict
slug: overall-verdict
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/test.md, sha256: 74281fbfcba952ff4e88e177f7059484e828b78e5084a3de8463343dd82ef69d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Overall verdict

## Definition — verbatim
> "CRITICAL_FAIL if any gate fails. WARN if any gate warns. PASS if all gates pass." — .claude/commands/test.md:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 158 | defined here | Synthesis rule determining the final status of `/test` across all 6 quality gates. |

## Consumes
Individual gate verdicts from Functional, Non-Functional, Security, DevOps, DX, and Observability evaluations.

## Produces
Final synthesized verification verdict (`CRITICAL_FAIL`, `WARN`, or `PASS`) gating pull request advancement to review or ship.

## When applied
Evaluated at the conclusion of the `/test` command after all applicable quality gates have produced findings.

## Sub-concepts
none

## Part of
test

## Implementation status
defects: doc-drift

## Design notes
The overall verdict synthesizes findings from six distinct quality dimensions into a definitive lifecycle decision. Because quality gate findings are additive and non-short-circuiting, a single `CRITICAL_FAIL` immediately drives the overall verdict to `CRITICAL_FAIL`, halting progression to `/review` or `/ship` while guaranteeing all operational risks are cataloged for comprehensive remediation.
