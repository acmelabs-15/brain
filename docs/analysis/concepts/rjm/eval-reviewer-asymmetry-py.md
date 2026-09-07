---
package: rjm
name: eval-reviewer-asymmetry.py
slug: eval-reviewer-asymmetry-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# eval-reviewer-asymmetry.py

## Definition — verbatim
(used, not defined)

> "| `eval-reviewer-asymmetry.py` | Statistical-significance test for `templates/agents/{critic,qa,implementer}.shared.md` reviewer-asymmetry framing. Fisher's exact (verdict-pass) + Mann-Whitney U (findings-count). | Complementary |" — scripts/eval/README.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 95 | defined here | Documented in evaluation tooling table as a statistical test script for reviewer-asymmetry framing. |

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
defects: doc-drift, missing-path, script-bug

## Design notes
`eval-reviewer-asymmetry.py` is a Python evaluation script file name for statistical hypothesis testing of reviewer prompt framing rather than an SDLC lifecycle concept.
