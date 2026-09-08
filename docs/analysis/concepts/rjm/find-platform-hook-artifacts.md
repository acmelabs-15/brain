---
package: rjm
name: _find_platform_hook_artifacts
slug: find-platform-hook-artifacts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_hook_anchoring.py, sha256: 0ffb67131b3c2a02efe52fdae23e3d439235a2be9c07ee4e95e44a4acbce99f8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _find_platform_hook_artifacts

## Definition — verbatim
(used, not defined)

> "def _find_platform_hook_artifacts(repo_root: Path) -> tuple[list[Path], list[str]]:" — scripts/validation/validate_hook_anchoring.py:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_hook_anchoring.py | 76 | defined here | Discovery function parsing platform YAML templates to find configured hook output artifacts. |

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
An internal platform discovery helper function in validate_hook_anchoring.py rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
