---
package: rjm
name: measure_pack_size
slug: measure-pack-size
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/measure_npm_pack_size.py, sha256: 552893e4598f8c097aa7fefa2f26e604bdbdf2a1aa099a1f3035793a35835fc8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# measure_pack_size

## Definition — verbatim
(used, not defined)

> "def measure_pack_size(package_dir: Path) -> tuple[int | None, str]:" — scripts/ci/measure_npm_pack_size.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/measure_npm_pack_size.py | 29 | defined here | Executes npm pack dry-run commands to extract tarball byte size and summary strings. |

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
`measure_pack_size` is a Python utility function identifier measuring npm package artifact sizes rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
