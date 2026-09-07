---
package: rjm
name: Debt Removal Tasks
slug: debt-removal-tasks
kind: checklist
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

# Debt Removal Tasks

## Definition — verbatim
> "## Debt Removal Tasks" — .claude/agents/janitor.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/janitor.md | 36 | defined here | Section heading organizing the five categories of tech debt remediation tasks. |
| templates/agents/janitor.shared.md | 44 | defined here | Section heading defining the debt removal task categories across shared templates. |

## Consumes
Identified debt categories spanning code, complexity, dependencies, tests, and documentation.

## Produces
Categorized remediation actions across code elimination, simplification, dependency hygiene, test optimization, and documentation cleanup.

## When applied
When scoping and executing janitorial refactoring passes across a repository.

## Sub-concepts
code-elimination, simplification, dependency-hygiene, test-optimization, documentation-cleanup

## Part of
janitor-agent

## Implementation status
clean

## Design notes
Organizes the operational scope of the janitor agent into five distinct functional domains: code elimination, simplification, dependency hygiene, test optimization, and documentation cleanup. This taxonomy ensures systematic coverage of technical debt rather than focusing solely on superficial code formatting.
