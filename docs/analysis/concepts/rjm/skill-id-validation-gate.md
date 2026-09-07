---
package: rjm
name: Skill ID Validation Gate
slug: skill-id-validation-gate
kind: gate
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill ID Validation Gate

## Definition — verbatim
> "1. **Skill ID Validation Gate**: Pre-commit hook rejects skill files not listed in index" — .agents/archive/planning/PRD-skills-index-registry.md:436

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 436 | defined here | Specified as a planned pre-commit hook gate rejecting skill files not listed in the index registry. |

## Consumes
Skill files proposed in staged commits and the central skill index registry.

## Produces
Pre-commit validation verdict (pass or reject).

## When applied
Invoked as a pre-commit verification gate whenever skill files are added or modified.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The Skill ID Validation Gate is a pre-commit control designed in the skills index registry PRD to prevent unregistered skill files from entering the repository. By rejecting any skill commit whose identifier is missing from the centralized index, it enforces registry synchronization at the commit boundary.
