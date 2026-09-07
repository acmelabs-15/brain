---
package: rjm
name: ConfigError
slug: configerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/scripts/pr_snapshot.py, sha256: 141fa122f7859d1b75fe2018204506cc0adb32a4b94573d8f767b871a894cfec}
  - {path: scripts/ci/build_ai_review_context.py, sha256: 3f101a283c7e8f7336c1eddd274f513c9294353c5e57e7840de491adfb25bddb}
  - {path: scripts/eval/optimize-artifact.py, sha256: 0df36122ac74e0681e0caeb878ed07ab01ce7dea50d1881e6bd1f7c4e998b765}
  - {path: scripts/gh_retry_helpers.py, sha256: c89bd3c3d70fed06aa06c88d1d2d6cadbaca7930afc4ebab86ca53f2a1013051}
  - {path: scripts/validation/check_plugin_frontmatter_self_containment.py, sha256: 80c17e1875128b3805186d2139dc90218d179594a7098af3a1823e8027d8004c}
  - {path: scripts/workflows/resolve_dispatch_input.py, sha256: 35d272602e2bc342d438f73d230f9bfc7c092cdd82e0623fbbfa5915113e7612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ConfigError

## Definition — verbatim
(used, not defined)

> "class ConfigError(SnapshotError):" — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:181

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/pr_snapshot.py | 181 | defined here | Defines configuration exception subclass in snapshot hierarchy mapped to EXIT_CONFIG. |
| scripts/ci/build_ai_review_context.py | 30 | used here | Imports and references ConfigError for invalid configuration handling in AI review context generation. |
| scripts/eval/optimize-artifact.py | 119 | defined here | Defines configuration exception for missing or invalid parameters in artifact optimization. |
| scripts/gh_retry_helpers.py | 98 | defined here | Defines exception class indicating configuration prevents context output generation. |
| scripts/validation/check_plugin_frontmatter_self_containment.py | 156 | defined here | Defines configuration exception raised when plugin frontmatter checks encounter invalid configuration. |
| scripts/workflows/resolve_dispatch_input.py | 38 | defined here | Defines configuration exception raised when workflow dispatch inputs cannot be resolved. |

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
`ConfigError` is a Python exception class identifier defined across multiple CLI and validation utilities to signal invalid configuration or arguments rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
