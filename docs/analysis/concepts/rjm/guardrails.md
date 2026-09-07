---
package: rjm
name: Guardrails
slug: guardrails
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/build.md, sha256: 29d6811b2eb2712273cae310f4addb615187cc2a8746c35bc1bfc99c262234c5}
  - {path: scripts/new_validated_pr.py, sha256: e7f98eabae5a880bb1b95d1fe22e8e4c7af472ad07daac743e937c77d661d452}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Guardrails

## Definition — verbatim
> "## Guardrails" — .claude/commands/build.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/build.md | 74 | defined here | Establishes the core operational rules and execution constraints governing implementer behavior. |
| scripts/new_validated_pr.py | 2 | used here | Referenced in script documentation as the set of validation checks enforced when generating PRs. |

## Consumes
Code changes, PR preparation tasks, and system modification requests.

## Produces
Enforced engineering constraints ensuring commit atomicity, memory lookup prior to modification, and real-environment integration validation.

## When applied
Throughout development in `/build` and during automated pull request validation.

## Sub-concepts
none

## Part of
build-command

## Implementation status
defects: orphan (scripts/new_validated_pr.py:1); clean in .claude/commands/build.md

## Design notes
Guardrails codifies the fundamental operational boundaries that constrain automated code generation and system modification. By enforcing rules such as atomic commits, consulting architectural memory before changing existing components, favoring delegation over inheritance, and verifying live CLI behavior, it prevents agents from introducing brittle abstractions or sprawling, unreviewable diffs.
