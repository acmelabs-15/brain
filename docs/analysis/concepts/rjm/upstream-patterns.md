---
package: rjm
name: UPSTREAM_PATTERNS
slug: upstream-patterns
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
  - {path: scripts/validation/check_skill_portability.py, sha256: 95cfb8c0749cec5771cc2c74e1a765f1ec706c86d206e90562cb3eeed64efd99}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# UPSTREAM_PATTERNS

## Definition — verbatim
(used, not defined)

> "UPSTREAM_PATTERNS: tuple[re.Pattern[str], ...] = (" — scripts/validation/check_skill_md_portability.py:239

## Also called — verbatim
`UPSTREAM_PATTERNS: tuple[re.Pattern[str], ...] = (` — scripts/validation/check_skill_portability.py:77

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 239 | defined here | Tuple of compiled regular expressions matching banned upstream path references in Markdown prose. |
| scripts/validation/check_skill_portability.py | 77 | defined here | Tuple of compiled regular expressions detecting upstream-only path prefixes in skill scripts. |

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
`UPSTREAM_PATTERNS` is a Python constant identifier storing regex patterns for upstream path detection rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
