---
package: rjm
name: Path Traversal Prevention
slug: path-traversal-prevention
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security/references/powershell-security-checklist.md, sha256: 716f0b004472e48c8f42c408cf4679633293a8eead54861d4163cffcfb208f29}
  - {path: .claude/skills/context-optimizer/scripts/path_validation.py, sha256: 3243d22879ec0248595edc9f2c519a6f8c0b7433d6a9fe9fcc725177c5a971b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Path Traversal Prevention

## Definition — verbatim
> "## Path Traversal Prevention (CWE-22, CWE-23, CWE-36)" — .claude/agents/security/references/powershell-security-checklist.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security/references/powershell-security-checklist.md | 42 | defined here | Checklist section and explanation for preventing path traversal in PowerShell filesystem operations. |
| .claude/skills/context-optimizer/scripts/path_validation.py | 1 | defined here | Module docstring defining shared path validation utilities preventing path traversal. |

## Consumes
file-path-inputs

## Produces
validated-repo-anchored-paths

## When applied
> "Provides repo-root-anchored path validation that prevents:" — .claude/skills/context-optimizer/scripts/path_validation.py:3

## Sub-concepts
cwe-22, cwe-23, cwe-36, getfullpath

## Part of
powershell-security-review, path-validation

## Implementation status
defects: doc-drift

## Design notes
A filesystem safety technique requiring paths to be canonicalized and anchored to trusted root directories before access. In rjm, it prevents dot-dot traversal, symlink escapes, and boundary breakouts across scripts and tool invocations, safeguarding system and repository integrity.
