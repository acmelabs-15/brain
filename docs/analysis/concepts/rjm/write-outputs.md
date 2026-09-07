---
package: rjm
name: _write_outputs
slug: write-outputs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/parse_pr_standards.py, sha256: adc2d57b18d0bd54ff66d68244d1aaf1487755715dbc172042fc15d3442415f4}
  - {path: scripts/ai_review_outputs.py, sha256: 6d483eb4ec8210bf6680223566ea291dacb103d838f8bc60a0a673b58b14f09f}
  - {path: scripts/ci/collect_ai_metrics.py, sha256: 58812012ab261d1a99d10734c90fd507b727a64e4c1f1d14c5ddddfa7cefce0f}
  - {path: scripts/generate_third_party_notices.py, sha256: e3e00bb9d46ec4f25fdba742a185b1661b21630bb92b4fa3e094114854765e0e}
  - {path: scripts/quality_gate/run_pytest.py, sha256: 7630e0a27249e65473eb05d07aa0dea1d3c5b4db404f9162a358d979493475e2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _write_outputs

## Definition — verbatim
(used, not defined)

> "def _write_outputs(" — .github/scripts/parse_pr_standards.py:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/parse_pr_standards.py | 90 | defined here | Writes keyword and template validation status to GITHUB_OUTPUT file. |
| scripts/ai_review_outputs.py | 62 | defined here | Writes AI review context variables to GITHUB_OUTPUT. |
| scripts/ci/collect_ai_metrics.py | 49 | defined here | Appends metric table and timestamp values to GITHUB_OUTPUT file. |
| scripts/generate_third_party_notices.py | 423 | defined here | Writes generated third-party notices content to destination output file paths. |
| scripts/quality_gate/run_pytest.py | 114 | defined here | Appends pytest execution status and summary text to GITHUB_OUTPUT file. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
A helper function identifier for writing pipeline outputs to GitHub Actions output files rather than an independent lifecycle concept.
