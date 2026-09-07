---
package: rjm
name: path_exists_in_repo
slug: path-exists-in-repo
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_drift.py, sha256: 6b40fae460dc8dfe9dcc290ea47974ca5af1f625d54bcd0d897c62e4d6d41155}
  - {path: scripts/validation/tracked_paths.py, sha256: 2d9d92b4577f09a636d93a061b26cd143389eb6153519e0ba1b195fe9b0d9afc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# path_exists_in_repo

## Definition — verbatim
(used, not defined)

> "def path_exists_in_repo(repo_root: Path, rel_path: str) -> bool:" — scripts/validation/tracked_paths.py:172

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 17 | used here | Imported from tracked_paths to verify repo-relative paths in skill documentation. |
| scripts/validation/tracked_paths.py | 172 | defined here | Returns whether a relative path is tracked in the git repository index snapshot. |

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
A repository-tracked path existence helper in `scripts/validation/tracked_paths.py`, classified as `name-only` per D-023.
