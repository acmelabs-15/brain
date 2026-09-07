---
package: rjm
name: copilot-context-synthesis.yml
slug: copilot-context-synthesis-yml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/find_copilot_ready_issues.py, sha256: faf9bb06e7fd11b6e0fd37e7d397cd119e07631df2eb92a142facbeabe9205a7}
  - {path: scripts/ci/run_copilot_synthesis.py, sha256: 459e6460fccb04b0e408532fe0cd7329c2272b3c9b6359ad4fef345cebe13038}
  - {path: scripts/ci/sweep_copilot_synthesis.py, sha256: 6e2ee8a4efeefcaf6a250ad485ea4cab481fdaf8d9024465b82c936a6a4360d7}
  - {path: scripts/ci/write_copilot_synthesis_summary.py, sha256: 66e561aabde64519c36ba45cf72ea182d9ddaa490d07dbed619e75d1cae541f0}
  - {path: scripts/ci/write_synthesis_sweep_summary.py, sha256: 9732aaa0ee10e54638d74fbe8b52f84ddafbc55ac0d3ed4cf2a0f0ae628bf82e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# copilot-context-synthesis.yml

## Definition — verbatim
(used, not defined)

> "Replaces the inline bash block in copilot-context-synthesis.yml" — scripts/ci/find_copilot_ready_issues.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/find_copilot_ready_issues.py | 3 | used here | Referenced as the workflow file containing former inline bash blocks for finding issues. |
| scripts/ci/run_copilot_synthesis.py | 3 | used here | Referenced as the workflow executing single-issue Copilot context synthesis. |
| scripts/ci/sweep_copilot_synthesis.py | 3 | used here | Referenced as the workflow executing batch sweep Copilot context synthesis. |
| scripts/ci/write_copilot_synthesis_summary.py | 6 | used here | Referenced as the workflow whose summary step writes synthesis results. |
| scripts/ci/write_synthesis_sweep_summary.py | 3 | used here | Referenced as the workflow whose sweep step writes batch summary results. |

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
A GitHub Actions workflow configuration filename governing Copilot context synthesis jobs rather than an operational lifecycle concept.
