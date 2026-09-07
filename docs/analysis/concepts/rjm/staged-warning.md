---
package: rjm
name: _staged_warning
slug: staged-warning
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_reasons.py, sha256: 22de18647c922dbf12c06b57fa8f9ac95d21742f8903a2d4d1bc145dc78af179}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _staged_warning

## Definition — verbatim
(used, not defined)

> "def _staged_warning(admin: Path, head: str | None, main_path: str) -> str:" — scripts/maintenance/_gc_reasons.py:153

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_reasons.py | 153 | defined here | Private helper generating a warning and command sequence to recover uncommitted staged content from an orphaned index. |

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
clean

## Design notes
`_staged_warning` is an internal Python function identifier formatting index recovery commands rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
