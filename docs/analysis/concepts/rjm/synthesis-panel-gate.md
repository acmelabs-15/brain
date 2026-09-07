---
package: rjm
name: synthesis panel gate
slug: synthesis-panel-gate
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/check_design_review_gate.py, sha256: f42c9b74de25301caed2e74b38deaacd36b3491b6d7a5e1708f56dc595d08579}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# synthesis panel gate

## Definition — verbatim
(used, not defined)

> "Run the synthesis panel gate check." — .github/scripts/check_design_review_gate.py:126

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/check_design_review_gate.py | 126 | used here | Documented as the gate check validating design review artifacts for blocking review verdicts. |

## Consumes
Design review markdown files containing structured YAML frontmatter verdicts.

## Produces
Gate result output ("PASS" or "FAIL"), count of blocking reviews, and exit code 0 or 1.

## When applied
Applied in CI workflows or review phase to prevent merging or advancing designs when blocking review findings exist.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, other

## Design notes
The synthesis panel gate evaluates multi-perspective design reviews against blocking verdict criteria, ensuring unresolved architectural or quality objections halt downstream progress.
