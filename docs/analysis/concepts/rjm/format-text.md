---
package: rjm
name: format_text
slug: format-text
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# format_text

## Definition — verbatim
(used, not defined)

> "def format_text(result: LintResult) -> str:" — .claude/skills/taste-lints/scripts/taste_lints.py:994

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/scripts/taste_lints.py | 994 | defined here | Formats lint execution results and violation remediation blocks as human- and agent-readable text. |

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
defects: other, doc-drift

## Design notes
`format_text` is a Python function identifier in `taste_lints.py` responsible for rendering console diagnostic output and remediation blocks, classified as kind: name-only per D-023.
