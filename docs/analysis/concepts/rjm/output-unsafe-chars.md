---
package: rjm
name: _OUTPUT_UNSAFE_CHARS
slug: output-unsafe-chars
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _OUTPUT_UNSAFE_CHARS

## Definition — verbatim
(used, not defined)

> "_OUTPUT_UNSAFE_CHARS: re.Pattern[str] = re.compile" — scripts/validation/pr_description.py:1199

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pr_description.py | 1199 | defined here | Regex pattern matching ASCII control characters and equals signs unsafe for GITHUB_OUTPUT. |

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
defects: doc-drift

## Design notes
`_OUTPUT_UNSAFE_CHARS` is a compiled regex pattern constant identifier in `pr_description.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
