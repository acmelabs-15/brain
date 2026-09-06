---
package: matt
name: merger subagent
slug: merger-subagent
kind: role
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/add-implement-spec-skill.md, sha256: abbf2ece03c6629782df0f815603378f275252c92379529eae0268e101721246}
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# merger subagent

## Definition — verbatim
> "5. Once an **implementer subagent** completes, merge its work to the PR branch with a **merger subagent**." — skills/in-progress/implement-spec/SKILL.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/add-implement-spec-skill.md | 5 | used here | Explains that a merger subagent folds each ticket's work back into the PR branch. |
| skills/in-progress/implement-spec/SKILL.md | 27 | defined here | Defines the merger subagent role responsible for integrating completed work into the PR branch. |

## Consumes
A completed feature branch from an implementer subagent and the target PR integration branch.

## Produces
A git merge integrating ticket changes into the PR branch, resolving any merge conflicts.

## When applied
Triggered immediately upon completion of an implementer subagent's ticket execution.

## Sub-concepts
none

## Part of
implement-spec, subagent

## Implementation status
clean

## Design notes
A specialized agent role in `implement-spec` responsible for folding completed ticket branches back into the unified PR branch. Isolating merge operations into a separate subagent prevents implementers from being distracted by integration details and enables immediate recalculation of the ready frontier.
