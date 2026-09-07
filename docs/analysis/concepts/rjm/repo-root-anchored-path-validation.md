---
package: rjm
name: repo-root-anchored path validation
slug: repo-root-anchored-path-validation
kind: technique
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

# repo-root-anchored path validation

## Definition — verbatim
> "Provides repo-root-anchored path validation that prevents:" — .claude/skills/context-optimizer/scripts/path_validation.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/path_validation.py | 3 | defined here | Introduced in module docstring as the defensive validation technique guarding against CWE-22 traversal attacks. |

## Consumes
Filesystem paths, user arguments, or script parameters requiring resolution.

## Produces
Canonicalized, validated Path objects verified to reside strictly within repository or worktree boundaries.

## When applied
Enforced prior to reading, creating, or writing files to eliminate CWE-22 directory traversal vulnerabilities.

## Sub-concepts
symlink-traversal, validate-path-within-repo, get-repo-root

## Part of
context-optimizer

## Implementation status
defects: doc-drift

## Design notes
A defensive filesystem validation technique in rjm that resolves candidate paths against the verified git repository or worktree root, neutralizing symlink escapes, absolute paths, and encoded traversal sequences to ensure file operations cannot escape the repository sandbox.
