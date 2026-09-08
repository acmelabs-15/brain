---
package: rjm
name: MARKDOWNLINT_COMMAND_LENGTH_LIMIT
slug: markdownlint-command-length-limit
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_tooling.py, sha256: e2bb66c5604fcd44f1b055a511bef6ebd5e8992ae473bad34d466c74b96ac738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# MARKDOWNLINT_COMMAND_LENGTH_LIMIT

## Definition — verbatim
(used, not defined)

> "MARKDOWNLINT_COMMAND_LENGTH_LIMIT = 7_500" — scripts/validation/checks_tooling.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_tooling.py | 46 | defined here | Constant bounding rendered markdownlint command length below Windows cmd.exe 8,191-character limit. |

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
defects: doc-drift, other, exit-code-mismatch

## Design notes
`MARKDOWNLINT_COMMAND_LENGTH_LIMIT` is a module-level integer constant in `scripts/validation/checks_tooling.py` capping command length for Windows compatibility rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
