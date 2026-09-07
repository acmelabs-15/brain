---
package: rjm
name: validate_path_within_repo
slug: validate-path-within-repo
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/extract_and_index.py, sha256: 6d3e638453dc07f7586b49315c8539b2d9eaa0aad91b14e53cac345e8a0fcde4}
  - {path: .claude/skills/context-optimizer/scripts/path_validation.py, sha256: 3243d22879ec0248595edc9f2c519a6f8c0b7433d6a9fe9fcc725177c5a971b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate_path_within_repo

## Definition — verbatim
(used, not defined)

> "def validate_path_within_repo(path: Path, repo_root: Path | None = None) -> Path:" — .claude/skills/context-optimizer/scripts/path_validation.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/extract_and_index.py | 232 | used here | Invoked to verify that target detail output directories resolve safely within repository boundaries. |
| .claude/skills/context-optimizer/scripts/path_validation.py | 61 | defined here | Core validation function ensuring resolved filesystem paths remain strictly within repo root or worktree. |

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
defects: doc-drift, script-bug

## Design notes
validate_path_within_repo is a Python function identifier in path_validation.py implementing CWE-22 path traversal prevention rather than an operational lifecycle concept, classified as name-only per D-023.
