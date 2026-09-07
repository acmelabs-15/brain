---
package: rjm
name: load_remote_head_refs
slug: load-remote-head-refs
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_remote.py, sha256: 26e40c416c74f117beb585cf042ed381311485f23c722ceb52c7c9edfef76d5b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# load_remote_head_refs

## Definition — verbatim
(used, not defined)

> "def load_remote_head_refs(run_git: GitRunner) -> frozenset[str]:" — scripts/maintenance/_gc_remote.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_remote.py | 10 | defined here | Function querying origin via ls-remote --heads to retrieve the set of branch names currently present on the remote. |

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
`load_remote_head_refs` is a Python function in maintenance scripts querying remote branches rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
