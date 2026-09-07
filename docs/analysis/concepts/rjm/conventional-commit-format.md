---
package: rjm
name: conventional commit format
slug: conventional-commit-format
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/PROJECT-CONSTRAINTS.md, sha256: b992b592ba20b20faca1f1a120ff4068e3d5197e07ca22bb39b33135d4ec4686}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# conventional commit format

## Definition — verbatim
(used, not defined)

> "MUST use conventional commit format" — .agents/governance/PROJECT-CONSTRAINTS.md:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/PROJECT-CONSTRAINTS.md | 113 | used here | Specified as a mandatory requirement enforced by commit-msg hook. |
| CONTRIBUTING.md | 837 | used here | Specified as a contributor guideline requirement for commit messages. |

## Consumes
Individual git commits and staged changes.

## Produces
Standardized commit messages following type and scope syntax.

## When applied
Applied to all commit messages across all repository contributions.

## Sub-concepts
none

## Part of
commit-constraints

## Implementation status
defects: cross-file-contradiction, doc-drift, internal-contradiction, missing-path

## Design notes
A standardized git commit message format requiring structured prefixes (feat, fix, docs, refactor, test, chore, style) and optional scopes. In rjm, conventional commits enable automated changelog generation, structured semantic release tracking, and automated validation via commit-msg git hooks.
