---
package: rjm
name: CWE-88
slug: cwe-88
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
  - {path: scripts/ci/install_locked_deps.py, sha256: 8fbaf932b42e746f6d6ce2a3b41c8ae0ae36f0144c988bad8f0a4aea54f97e69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CWE-88

## Definition — verbatim
(used, not defined)

> "Refuse a revision git would read as an option (CWE-88)." — .claude/skills/code-qualities-assessment/scripts/assess.py:689

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/scripts/assess.py | 689 | used here | Guard function docstring explaining refusal of option-like revisions that git could parse as flags. |
| .claude/skills/taste-lints/scripts/taste_lints.py | 265 | used here | Raises ValueError when base branch parameter begins with dash to prevent git argument injection. |
| scripts/ci/install_locked_deps.py | 69 | used here | Explains falling back to safe temporary directory if RUNNER_TEMP starts with dash to prevent flag injection. |

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
defects: doc-drift, missing-path, always-failing-gate, other, orphan

## Design notes
`CWE-88` (Improper Neutralization of Argument Delimiters in a Command) is a Common Weakness Enumeration security taxonomy identifier for command and option injection vulnerabilities, classified as `kind: name-only` per D-023.
