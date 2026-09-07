---
package: rjm
name: Symlink traversal
slug: symlink-traversal
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/path_validation.py, sha256: 3243d22879ec0248595edc9f2c519a6f8c0b7433d6a9fe9fcc725177c5a971b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Symlink traversal

## Definition — verbatim
> "- Symlink traversal (symlinks resolving outside repo)" — .claude/skills/context-optimizer/scripts/path_validation.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/path_validation.py | 4 | defined here | Documented as one of the primary attack vectors prevented by repo-root-anchored path validation. |

## Consumes
Untrusted filesystem links or path parameters targeting directories outside the repo root.

## Produces
Validation failure (PermissionError) and blocking of file access.

## When applied
Checked during path resolution by resolving symlinks and asserting containment within the repository root.

## Sub-concepts
none

## Part of
repo-root-anchored-path-validation

## Implementation status
defects: doc-drift

## Design notes
A CWE-22 vulnerability vector where symbolic links point to sensitive files outside the repository boundary, explicitly neutralized by rjm's path validation utilities via strict canonicalization checks.
