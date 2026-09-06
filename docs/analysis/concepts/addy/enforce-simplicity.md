---
package: addy
name: Enforce Simplicity
slug: enforce-simplicity
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/using-agent-skills/SKILL.md, sha256: 8bdbecb2f98cff2dbb70b3852c67d8dca179b27d2b1042aac040866d258ad471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Enforce Simplicity

## Definition — verbatim
> "Your natural tendency is to overcomplicate. Actively resist it." — skills/using-agent-skills/SKILL.md:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/using-agent-skills/SKILL.md | 86 | defined here | Fourth core operating behavior commanding agents to actively resist overcomplication and favor simple, boring solutions. |

## Consumes
Proposed code changes, architectural abstractions, refactoring drafts.

## Produces
Minimalist implementations that omit unneeded abstractions, extra dependencies, and premature generality.

## When applied
Before completing any code implementation or architecture design.

## Sub-concepts
none

## Part of
core-operating-behaviors, using-agent-skills

## Implementation status
defects: cross-file-contradiction, internal-contradiction, doc-drift

## Design notes
A counter-bias mechanism directing agents to resist overengineering and premature abstraction, demanding minimal lines of code and favoring boring, obvious solutions over expensive cleverness.
