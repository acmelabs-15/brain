---
package: rjm
name: Add
slug: add
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Add

## Definition — verbatim
> "ADD new skill | Novel learning, no existing pattern" — .claude/skills/retrospective/references/diagnosis-and-actions.md:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 117 | defined here | Action classification category defined as adding a new skill when novel learnings have no existing pattern. |

## Consumes
Novel learnings and diagnostic findings that do not match existing patterns or skillbooks.

## Produces
Specification of a new skill entry with a proposed skill ID and atomic learning statement.

## When applied
Applied during Phase 3 (Action Classification) when a finding represents an entirely new capability or prevention pattern.

## Sub-concepts
none

## Part of
action-classification, decide-what-to-do

## Implementation status
clean

## Design notes
Add is an action classification category in retrospective workflows that directs the agent to author a new prevention skill or learning entity when an extracted insight represents a novel capability gap.
