---
package: rjm
name: cleanup_tmp
slug: cleanup-tmp
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/bootstrap-vm.sh, sha256: a04fdf031ec3cd4858fbeef8991fc72ace1274da92327620cfc473b59bae43d1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# cleanup_tmp

## Definition — verbatim
(used, not defined)

> "cleanup_tmp() {" — scripts/bootstrap-vm.sh:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/bootstrap-vm.sh | 32 | defined here | Trap handler function removing temporary apt log files and scratch directories upon script exit. |

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
defects: missing-path, doc-drift

## Design notes
cleanup_tmp is a shell exit-trap function identifier handling temporary file deletion in VM bootstrapping rather than a lifecycle concept.
