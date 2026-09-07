---
package: rjm
name: get_repo_root
slug: get-repo-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/path_validation.py, sha256: 3243d22879ec0248595edc9f2c519a6f8c0b7433d6a9fe9fcc725177c5a971b3}
  - {path: .codeql/scripts/install_codeql_integration.py, sha256: adbf946c456edd42fee06b3b1b9f5aa133615fc62a8ef671279817400e886012}
  - {path: scripts/ai_review_common/cache_guard.py, sha256: 831609daa3a9693507ede9335562af1c3b2f85fc21491bcca96471cceef458c6}
  - {path: scripts/github_core/__init__.py, sha256: 8eff83b2be69b5158b6f035088b9e9a74d814704ddfc2364caf814b86c248031}
  - {path: scripts/github_core/repo.py, sha256: 189b9f3cfa59b9d185a0524db79b323a9c0368a0d5fe3236762b409c66eed47e}
  - {path: scripts/sync_mcp_config.py, sha256: 121e1c3cf83183f12974ea194d84fb4bb3e5f5827fcd336a323acd5a6fa494df}
  - {path: scripts/traceability/spec_utils.py, sha256: 4df2d5c43d281d37e689de849420f8003706ec909aceb87fc3a594595908db70}
  - {path: scripts/update_reviewer_signal_stats.py, sha256: 4b6c1c52f7c49f9d5ba2b3884926800b17ce518c26602fa0f9089ee99c17b01e}
  - {path: scripts/validation/traceability.py, sha256: 40c7c048372c9e5232f2b8e2b4f5e31a1153f88fdde32afb7e069d5b065fd1a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# get_repo_root

## Definition — verbatim
(used, not defined)

> "def get_repo_root() -> Path:" — .claude/skills/context-optimizer/scripts/path_validation.py:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/path_validation.py | 18 | defined here | Function resolving repository or worktree root via git rev-parse --show-toplevel. |
| .codeql/scripts/install_codeql_integration.py | 70 | defined here | Function locating repo root via git rev-parse --git-common-dir. |
| scripts/ai_review_common/cache_guard.py | 38 | defined here / used here | Function determining repo root by walking parent directories looking for .git or .claude markers. |
| scripts/github_core/__init__.py | 60 | used here | Exported as part of github_core package repository resolution interface. |
| scripts/github_core/repo.py | 78 | defined here | Standard repository root locator function using git rev-parse with subprocess timeouts. |
| scripts/sync_mcp_config.py | 35 | defined here | Function resolving repo root with support for explicit directory override. |
| scripts/traceability/spec_utils.py | 188 | defined here | Function retrieving repository root by delegating to shared github_core.repo implementation. |
| scripts/update_reviewer_signal_stats.py | 41 | used here | Imported from github_core.repo to anchor stats cache file locations. |
| scripts/validation/traceability.py | 482 | used here | Imported to enforce path traversal protections during spec validation. |

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
defects: doc-drift, missing-path, orphan, script-bug

## Design notes
get_repo_root is a Python function identifier implemented and shared across numerous utility and validation scripts to determine repository boundaries rather than an operational lifecycle concept, classified as name-only per D-023.
