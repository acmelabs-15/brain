---
package: rjm
name: validate_safe_path
slug: validate-safe-path
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md, sha256: ee5cb9a3172bd724519fa305997ae2d7cff5bc6b983194995c5651bb50d21d3a}
  - {path: scripts/skill_registry.py, sha256: b59dee7092a05da94f9dca83da5ee0b2372eadda816aadb43cc58e02e1f6c786}
  - {path: scripts/utils/path_validation.py, sha256: c2f4ac43ed5662e0fddce7be5e1a0e91c5e0592b931e84b4c7415cca2cd0e949}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_safe_path

## Definition — verbatim
> "Validate that a path is safe and within the base directory." — scripts/utils/path_validation.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md | 55 | defined here | Mandates path traversal protection locking completion gate configuration to the repository root |
| scripts/skill_registry.py | 33 | used here | Imports path validation utility to verify custom skills directory paths |
| scripts/utils/path_validation.py | 18 | defined here | Defines the canonical path validation utility function enforcing directory boundary confinement |

## Consumes
Candidate target filesystem path and base directory boundary path.

## Produces
Canonical resolved `Path` object verified to reside within base directory, or raises `ValueError`/`FileNotFoundError`.

## When applied
Invoked on all user-provided or config-specified paths before opening, reading, or writing files to prevent directory traversal (CWE-22).

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, other, orphan, doc-drift

## Design notes
validate_safe_path is a core filesystem security utility that defends against path traversal attacks (CWE-22) by canonicalizing input paths and verifying that the target is strictly a child of an allowed base directory. In rjm's architecture, it protects dispatchers, skill registries, and commands from malicious directory climbing.
