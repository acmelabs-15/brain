---
package: rjm
name: _strip_hash_comments
slug: strip-hash-comments
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_portability.py, sha256: 95cfb8c0749cec5771cc2c74e1a765f1ec706c86d206e90562cb3eeed64efd99}
  - {path: scripts/validation/push_lock_resolver.py, sha256: cbcf36abd98c9e7c96218617dea00872bc94ce3216d14c802558074a0d514503}
  - {path: scripts/validation/shell_text.py, sha256: 736473c178ce9bf083f65138b011174798bac8d01a76494457b9c66eaa9b5324}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _strip_hash_comments

## Definition — verbatim
(used, not defined)

> "def _strip_hash_comments(text: str) -> str:" — scripts/validation/check_skill_portability.py:172

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_portability.py | 172 | defined here | Helper function delegating to `strip_hash_comments` from `shell_text` to remove shell comments. |
| scripts/validation/push_lock_resolver.py | 24 | used here | Imported from `shell_text` to strip comments from shell code blocks before statement parsing. |
| scripts/validation/shell_text.py | 18 | defined here | Core library function stripping shell hash comments while preserving quotes, escapes, and line numbers. |

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
defects: doc-drift, orphan

## Design notes
A Python helper function identifier across validation scripts, classified as name-only per D-023.
