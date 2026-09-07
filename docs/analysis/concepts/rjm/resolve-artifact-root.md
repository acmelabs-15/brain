---
package: rjm
name: resolve_artifact_root
slug: resolve-artifact-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/scripts/generate_experiment.py, sha256: 73b8a865a5fda70135d588b957fadcea836fc97f915b8e10accd54420010934e}
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# resolve_artifact_root

## Definition — verbatim
(used, not defined)

> "output_dir = paths.resolve_artifact_root(_CHAOS_SUBDIR)" — .claude/skills/chaos-experiment/scripts/generate_experiment.py:221

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/scripts/generate_experiment.py | 221 | used here | Calls portability helper to lazily resolve the chaos experiment artifact directory root. |
| scripts/validation/check_vendor_portability.py | 9 | used here | Cited as the standard portability helper function for resolving writable artifact directories in vendored installations. |

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
`resolve_artifact_root` is a path resolution helper function identifier from `.claude/lib/paths.py` that enables vendored scripts to locate project artifact directories without hardcoding paths, classified as `name-only` per D-023.
