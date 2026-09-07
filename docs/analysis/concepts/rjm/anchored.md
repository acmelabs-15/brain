---
package: rjm
name: _anchored
slug: anchored
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_stale.py, sha256: e719dbce6d933f8fcaffbc203d3383e6d4d9c43021c26e056b09070e2052ffc5}
  - {path: scripts/validation/check_skill_resolver_anchoring.py, sha256: 8013b916e0028b1191d0d6f89083dfc8030d317c22fc705a4fb159522f950e46}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _anchored

## Definition — verbatim
(used, not defined)

> "def _anchored(recorded: str, base: Path) -> Path | None:" — scripts/maintenance/_gc_stale.py:389

## Also called — verbatim
`ANCHORED` — scripts/validation/check_skill_resolver_anchoring.py:60

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 389 | defined here | Path resolution helper resolving relative gitdir paths against the marker file rather than the current working directory. |
| scripts/validation/check_skill_resolver_anchoring.py | 60 | defined here | Regular expression pattern verifying that shell resolvers anchor paths using git rev-parse --show-toplevel. |

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
`_anchored` is an internal function and regular expression pattern identifier in maintenance and validation scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
