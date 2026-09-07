---
package: rjm
name: Skill Creation Checklist
slug: skill-creation-checklist
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/SKILL-CREATION-CRITERIA.md, sha256: 27241f09bb7441e7cf128ddc9721db0c2ce7d3497721cafee4e0871c57f1586a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill Creation Checklist

## Definition — verbatim
(used, not defined)

> "## Skill Creation Checklist" — .agents/governance/SKILL-CREATION-CRITERIA.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-CREATION-CRITERIA.md | 55 | defined here | Pre-creation verification checklist enforcing frequency, failure patterns, procedural documentation, and frontmatter syntax. |

## Consumes
Candidate skill proposal, incident history, and workflow specification.

## Produces
Verification checklist confirmation gating whether skill development may proceed.

## When applied
Applied before creating any new skill in the repository.

## Sub-concepts
none

## Part of
skill-creation-criteria

## Implementation status
defects: doc-drift

## Design notes
A governance checklist in rjm defining mandatory justification criteria, anti-patterns to avoid, and structural design requirements for new skills. It ensures that developers and agents verify problem frequency, failure patterns, and programmatic verification capability before introducing new skill maintenance overhead.
