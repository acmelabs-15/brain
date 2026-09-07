---
package: rjm
name: Checklist
slug: checklist
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/architecture-patterns.md, sha256: 8d435e1860a20134846db5bd3f3af1ed981de5fb03546d77575bce623b83ad01}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Checklist

## Definition — verbatim
> "| **Checklist** | Quality/compliance audits | ☐ Item verification |" — .claude/skills/skillforge/references/architecture-patterns.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/architecture-patterns.md | 8 | defined here | Architecture patterns table entry defining Checklist for quality/compliance audits structured as checkbox item verifications. |

## Consumes
Audit criteria, compliance guidelines, or verification rules.

## Produces
A checklist verification report with pass/fail item statuses.

## When applied
Selected when the primary goal of the skill is verifying, auditing, or ensuring compliance against a set of standards.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Checklist is an architectural pattern in SkillForge tailored for audit and compliance workflows where an agent systematically inspects target files against a discrete list of verification items.
