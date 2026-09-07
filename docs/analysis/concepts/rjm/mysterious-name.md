---
package: rjm
name: Mysterious Name
slug: mysterious-name
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Mysterious Name

## Definition — verbatim
> "a name you have to read the body to understand. Suggests Rename. Renames are cheap and almost always undervalued." — .claude/skills/software-engineering-library/references/refactoring.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 63 | defined here | Defined as a code smell where understanding an identifier requires reading its implementation body. |

## Consumes
Vague, cryptic, or misleading variable, function, class, or module names.

## Produces
Candidate identifiers targeted for Rename refactoring to express clear intent.

## When applied
Identified during code reading or review when an identifier's purpose cannot be deduced from its name.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Mysterious Name is a premier code smell in Fowler's refactoring catalog and rjm. When an identifier requires an engineer or agent to read through function bodies or implementation details to decipher its role, comprehension cost multiplies. Renaming identifiers to be clear and intention-revealing is cheap, safe with modern tooling, and yields immediate readability dividends.
