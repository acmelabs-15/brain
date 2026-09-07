---
package: rjm
name: _load_spec_refs
slug: load-spec-refs
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

# _load_spec_refs

## Definition — verbatim
(used, not defined)

> "def _load_spec_refs(spec_refs: list[str]) -> tuple[int, list[str]]:" — scripts/ci/spec_load_content.py:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/spec_load_content.py | 109 | defined here | Helper function resolving and reading content for a collection of local specification references. |

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
_load_spec_refs is a private Python function aggregating local specification reference contents rather than an operational lifecycle concept.
