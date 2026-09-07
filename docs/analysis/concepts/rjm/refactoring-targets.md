---
package: rjm
name: Refactoring Targets
slug: refactoring-targets
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/modularity-guidelines.md, sha256: 5c151e7d32f6e7bfc22aa372e53f9a57af5d71069dbbf201e89eb90522632518}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Refactoring Targets

## Definition — verbatim
> "## Refactoring Targets" — .claude/skills/skillforge/references/modularity-guidelines.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/modularity-guidelines.md | 68 | defined here | Section heading introducing four refactoring techniques when a skill exceeds complexity thresholds. |

## Consumes
Skills exceeding line count (>300 ideal, >500 max) or section (>10 h2) thresholds.

## Produces
Modularized skill components partitioned across references/, scripts/, templates/, and focused sub-skills.

## When applied
Applied when an audit or review identifies a skill that violates modularity guidelines.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift, other

## Design notes
Refactoring Targets provide a prescribed 4-step checklist for decomposing oversized or overly complex skills in rjm. By extracting reference tables, moving logic to scripts, splitting multi-responsibility skills, and templating outputs, it restores skills to the empirically optimal 2-3 skill focused range.
