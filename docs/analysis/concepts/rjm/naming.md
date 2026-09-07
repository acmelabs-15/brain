---
package: rjm
name: naming
slug: naming
kind: gate
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

# naming

## Definition — verbatim
> "ALL_RULES = (\"file-size\", \"naming\", \"complexity\", \"skill-size\")" — .claude/skills/taste-lints/scripts/taste_lints.py:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/scripts/taste_lints.py | 34 | defined here | Declared as an active taste invariant rule in ALL_RULES for casing verification. |

## Consumes
File paths and directory names for Python, YAML, hook scripts, and skill directories.

## Produces
Exit code 10 and renaming remediation commands (e.g. git mv) when naming conventions are violated.

## When applied
Evaluated during build and pre-PR validation when checking naming consistency across project files.

## Sub-concepts
check_naming

## Part of
taste-lints

## Implementation status
defects: doc-drift, other

## Design notes
naming is a taste invariant gate in taste-lints enforcing standard casing conventions across code, hooks, and skill directories to prevent naming drift in agent projects.
