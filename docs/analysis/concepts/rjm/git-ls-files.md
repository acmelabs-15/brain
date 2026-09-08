---
package: rjm
name: git_ls_files
slug: git-ls-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/stale_script_refs.py, sha256: d370182ee816d55a633ca1d64e58fea620bd931e2197a07aa8e9bf110440cf29}
  - {path: scripts/validation/tracked_paths.py, sha256: 2d9d92b4577f09a636d93a061b26cd143389eb6153519e0ba1b195fe9b0d9afc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# git_ls_files

## Definition — verbatim
(used, not defined)

> "def git_ls_files(repo_root: Path, patterns: tuple[str, ...] | None = None) -> set[str]:" — scripts/validation/stale_script_refs.py:73

## Also called — verbatim
- `git ls-files` — scripts/validation/tracked_paths.py:13

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/stale_script_refs.py | 73 | defined here | Function executing git ls-files to return a set of tracked repository files matching pathspec patterns. |
| scripts/validation/tracked_paths.py | 13 | used here | Cited in module docstring explaining that repository path existence is judged against the git index via git ls-files. |

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
A helper function identifier in `stale_script_refs.py` wrapping git ls-files and referenced as a git command in `tracked_paths.py`, classified as name-only per D-023.
