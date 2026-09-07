---
package: rjm
name: Unsafe reference
slug: unsafe-reference
kind: gate
package_phase: rjm:sync
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/sync.md, sha256: f6e8579a330acaa0c1fad9b84a0e10fae41cdd63122e9d9becd65564f3727019}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Unsafe reference

## Definition — verbatim
> "- **Unsafe reference**: the spec uses `..`, an absolute path, or a symlink escape." — .claude/commands/sync.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/sync.md | 52 | defined here | Triage category in `/sync` classifying path traversals or escapes as drift to maintain repository containment. |

## Consumes
Specification citations containing parent directory markers (`..`), root slashes, or symlink traversal escapes.

## Produces
A security drift finding requiring the citation to be updated to a repository-contained relative path.

## When applied
Flagged during Step 1 and handled in Step 2 of `/sync` whenever non-hermetic path references are encountered.

## Sub-concepts
none

## Part of
triage, sync

## Implementation status
defects: orphan, missing-path

## Design notes
Unsafe reference enforces repository containment and security boundary rules. If specifications reference paths outside the repository root via absolute paths, parent directory traversals, or symlinks, the drift detector flags them as drift rather than probing external filesystem paths, preventing directory traversal vulnerabilities and ensuring specs remain self-contained.
