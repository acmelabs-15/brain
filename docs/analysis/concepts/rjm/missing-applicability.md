---
package: rjm
name: Missing applicability
slug: missing-applicability
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Missing applicability

## Definition — verbatim
> "Research without integration is wasted" — .claude/skills/research-and-incorporate/SKILL.md:152

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 152 | defined here | Tabulated as an anti-pattern warning that research without integration is wasted and every insight must show how it applies. |

## Consumes
External domain research findings and analysis documents lacking concrete project integration targets.

## Produces
Mandatory requirement during research analysis that every extracted insight explicitly shows how it applies to the project.

## When applied
Checked during Phase 3 (Applicability) and verification checklist of research-and-incorporate.

## Sub-concepts
none

## Part of
research-and-incorporate

## Implementation status
defects: doc-drift, missing-path

## Design notes
Missing applicability is an anti-pattern warning against gathering external research without mapping findings directly to project architecture or code, preventing token waste on ungrounded intellectual exercises.
