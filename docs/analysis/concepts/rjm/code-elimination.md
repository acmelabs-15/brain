---
package: rjm
name: Code Elimination
slug: code-elimination
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/janitor.md, sha256: 9de457fb6d9a8d9b380b4027b3ade8c089c44b4d09c9ff74293bc14a89889421}
  - {path: templates/agents/janitor.shared.md, sha256: d341d17755611a3c50912455dba61ca3418780bf4584785f2f7a3d69b68a66d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Code Elimination

## Definition — verbatim
> "### Code Elimination" — .claude/agents/janitor.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/janitor.md | 38 | defined here | Section heading specifying rules for deleting unused, dead, duplicate, and over-engineered code. |
| templates/agents/janitor.shared.md | 46 | defined here | Section heading defining code elimination tasks across shared platform templates. |

## Consumes
Unused functions, variables, imports, dead code paths, unreachable branches, duplicate logic, and unnecessary abstractions.

## Produces
Deleted dead code, purged debug statements, consolidated logic, and reduced line count.

## When applied
When identifying unreachable, unused, or duplicate code constructs during janitorial cleanup.

## Sub-concepts
none

## Part of
debt-removal-tasks

## Implementation status
clean

## Design notes
Represents the most aggressive category of tech debt remediation in rjm, focusing on outright removal of dead code paths, unreachable logic, unused variables, and redundant abstractions. By purging dead code rather than commenting it out or maintaining it for hypothetical future use, it reduces cognitive load and repository bloat.
