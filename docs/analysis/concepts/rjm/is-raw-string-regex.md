---
package: rjm
name: _is_raw_string_regex
slug: is-raw-string-regex
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _is_raw_string_regex

## Definition — verbatim
(used, not defined)

> "def _is_raw_string_regex(" — scripts/validation/check_vendor_portability.py:342

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_vendor_portability.py | 342 | defined here | Helper function determining whether a token is a raw string containing regex metacharacters. |

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
A Python tokenizer helper function identifier in `check_vendor_portability.py`, classified as `kind: name-only` per D-023.
