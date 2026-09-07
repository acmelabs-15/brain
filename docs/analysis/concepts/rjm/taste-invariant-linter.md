---
package: rjm
name: Taste invariant linter
slug: taste-invariant-linter
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Taste invariant linter

## Definition — verbatim
> "Taste invariant linter with agent-readable remediation instructions." — .claude/skills/taste-lints/scripts/taste_lints.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/scripts/taste_lints.py | 2 | defined here | Module docstring defining taste_lints.py as a taste invariant linter with agent-readable remediation instructions. |

## Consumes
Target files on disk, git staged changes, or diff comparison scopes.

## Produces
Formatted text or JSON lint reports detailing rule violations and structured remediation instructions.

## When applied
Executed during build and pre-PR validation to enforce codebase taste invariants across files.

## Sub-concepts
remediation-instructions, file-size, naming, cyclomatic-complexity

## Part of
taste-lints

## Implementation status
defects: doc-drift, other

## Design notes
Taste invariant linter is an automated static analysis technique designed for coding agent workflows that checks architectural conventions (file size, naming, complexity, prompt size) and outputs agent-readable remediation instructions for autonomous fixes.
