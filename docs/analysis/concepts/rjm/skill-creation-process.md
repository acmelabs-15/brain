---
package: rjm
name: Skill Creation Process
slug: skill-creation-process
kind: pattern
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill Creation Process

## Definition — verbatim
> "When creating a new skill, agents MUST:" — .agents/archive/planning/PRD-skills-index-registry.md:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 166 | defined here | Specified as functional requirement FR-7 outlining the 5-step workflow for authoring and indexing new skills. |

## Consumes
Identified repeatable patterns, retrospective findings, and domain categorizations.

## Produces
A new atomic skill file and corresponding Draft index entry in the centralized registry.

## When applied
Applied when an agent extracts a newly learned technique or pattern into a reusable skill.

## Sub-concepts
none

## Part of
skill-lifecycle-governance

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The procedural workflow in rjm governing how agents author new skills: checking index collision, assigning the next sequential ID, generating the atomic markdown file, registering a Draft entry, and updating to Active following validation.
