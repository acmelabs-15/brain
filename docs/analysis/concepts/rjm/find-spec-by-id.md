---
package: rjm
name: _find_spec_by_id
slug: find-spec-by-id
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/spec_load_content.py, sha256: 6dafe22d03081ee7038326083af675e4e75eb8f3d8db3165a2cc6b466442665c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _find_spec_by_id

## Definition — verbatim
(used, not defined)

> "def _find_spec_by_id(ref: str) -> Path | None:" — scripts/ci/spec_load_content.py:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/spec_load_content.py | 85 | defined here | Helper function recursively searching .agents/specs for a specification file matching a given ID. |

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
_find_spec_by_id is a private filesystem search utility for resolving specification IDs to file paths rather than an operational lifecycle concept.
