---
package: rjm
name: validate_path_no_traversal
slug: validate-path-no-traversal
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/scripts/generate_experiment.py, sha256: 73b8a865a5fda70135d588b957fadcea836fc97f915b8e10accd54420010934e}
  - {path: .claude/skills/chaos-experiment/scripts/validate_experiment.py, sha256: 1826ee03d52a3393c8c669330d46dd9e26ab6585330991d1da261645a145de53}
  - {path: .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py, sha256: 1941714a412d29e03cb5aaca38a66fbff2cbc71e3ff9c7491192f63f73455c4e}
  - {path: .claude/skills/threat-modeling/scripts/generate_threat_matrix.py, sha256: efe078c6f610c0f98a1c52c3fe0ef180e0da08116dcaa84bc582a3efdcd12bb3}
  - {path: .claude/skills/threat-modeling/scripts/validate_threat_model.py, sha256: 2df216789ee2fa0e552450372de422efd2bda8e7dc1f6f8a4e386e05ec3d86b9}
  - {path: scripts/hook_utilities/path_safety.py, sha256: 5e74bbfd4a7a88137745cca178c34efe5632873fa0836d192f164074cfb03b10}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate_path_no_traversal

## Definition — verbatim
(used, not defined)

> "def validate_path_no_traversal(path: Path, context: str = \"path\") -> Path:" — scripts/hook_utilities/path_safety.py:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/scripts/generate_experiment.py | 49 | used here | Imported path safety utility ensuring output directory paths do not escape the workspace via traversal. |
| .claude/skills/chaos-experiment/scripts/validate_experiment.py | 40 | used here | Path safety check applied to input document paths to prevent CWE-22 directory traversal vulnerabilities. |
| .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py | 32 | used here | Validates target output paths against path traversal before writing mitigation roadmap documents. |
| .claude/skills/threat-modeling/scripts/generate_threat_matrix.py | 30 | used here | Enforces CWE-22 path safety bounds when generating threat matrix markdown files. |
| .claude/skills/threat-modeling/scripts/validate_threat_model.py | 31 | used here | Checks input threat model document paths against directory traversal before reading content. |
| scripts/hook_utilities/path_safety.py | 8 | defined here | Defines security validation function ensuring relative paths stay within the current working directory. |

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
defects: doc-drift, exit-code-mismatch

## Design notes
`validate_path_no_traversal` is a security helper function identifier defined in `hook_utilities.path_safety` to prevent CWE-22 directory traversal attacks in script path arguments rather than an operational lifecycle concept, classified as `name-only` per D-023.
