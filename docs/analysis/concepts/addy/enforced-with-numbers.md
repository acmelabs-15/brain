---
package: addy
name: Enforced with numbers
slug: enforced-with-numbers
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Enforced with numbers

## Definition — verbatim
> "## Enforced with numbers" — skills/constraint-driven-development/SKILL.md:110

> "Every row names the command that produces the verdict. A dimension with a number and no command in this column is an aspiration, not a constraint." — skills/constraint-driven-development/SKILL.md:123-124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/SKILL.md | 110 | defined here | Section heading in CONSTRAINTS.md for the table of numerical quality rules and verifying commands |

## Consumes
User selections for enforced quality dimensions, numerical thresholds, and chosen tooling.

## Produces
A structured markdown table mapping each quality dimension to a numerical rule, checking command, and execution stage.

## When applied
Authored in Step 3 of constraint-driven development; executed across the lifecycle phases.

## Sub-concepts
none

## Part of
constraints-md, constraint-driven-development

## Implementation status
defects: doc-drift

## Design notes
A structured table section in CONSTRAINTS.md that binds explicit numerical thresholds to executable CLI commands and specific lifecycle execution points. By requiring a checking command alongside each number, it prevents quality thresholds from becoming unverified aspirations.
