---
package: matt
name: relentless interview
slug: relentless-interview
kind: technique
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/grill-me/SKILL.md, sha256: caaf8b8de1684f96e26b28f3c29189db5c89cce4b73e1c93d86164f66ef88637}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# relentless interview

## Definition — verbatim
> "description: A relentless interview to sharpen a plan or design." — skills/productivity/grill-me/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/grill-me/SKILL.md | 3 | defined here | Summarized in frontmatter description as the core purpose of the grill-me skill. |

## Consumes
A user's plan, decision, or architectural proposal.

## Produces
Settled design decisions, pruned decision trees, and confirmed shared understanding.

## When applied
Triggered when the user invokes `/grill-me` or asks to sharpen, stress-test, or interrogate a plan or design.

## Sub-concepts
none

## Part of
grill-me

## Implementation status
clean

## Design notes
The core questioning technique employed by `grill-me` to stress-test designs and plans by recursively interrogating every branch of the design tree until all ambiguities and unexamined assumptions are resolved.
