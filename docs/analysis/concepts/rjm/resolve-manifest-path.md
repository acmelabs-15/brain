---
package: rjm
name: resolve_manifest_path
slug: resolve-manifest-path
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/bulk_cancel_guard.py, sha256: ab3973edd5a813192e5cb59c448bfaaf557c121f33667246bf911e7da8dbcc9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# resolve_manifest_path

## Definition — verbatim
(used, not defined)

> "def resolve_manifest_path(args: argparse.Namespace) -> Path | None:" — scripts/bulk_cancel_guard.py:219

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/bulk_cancel_guard.py | 219 | defined here | Function determining the destination path for emitting recovery manifests based on CLI flags. |

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
resolve_manifest_path is a Python function identifier that determines manifest destination paths rather than a lifecycle concept.
