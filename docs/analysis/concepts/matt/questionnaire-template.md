---
package: matt
name: questionnaire-template
slug: questionnaire-template
kind: template
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/to-questionnaire/SKILL.md, sha256: b5eb929842ee0e93d867c5e906d183d350f2f2d149eaeaa86967d94d8eda1d3b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# questionnaire-template

## Definition — verbatim
> "Write it using the template below." — skills/productivity/to-questionnaire/SKILL.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/to-questionnaire/SKILL.md | 22 | defined here | XML template tag defining the standard layout and sections for output discovery questionnaires. |

## Consumes
User answers from the two-step send interview identifying the recipient and required decisions.

## Produces
A formatted `to-questionnaire-<slug>.md` discovery document organized with context, response guidance, themed questions, and a catch-all.

## When applied
During step 3 of the `/to-questionnaire` workflow when generating the output file.

## Sub-concepts
none

## Part of
to-questionnaire

## Implementation status
clean

## Design notes
Provides a rigid structural envelope for external inquiries. By standardizing header metadata, context setting, response instructions, and themed question stubs, the template minimizes recipient friction and maximizes the odds of receiving complete, actionable answers in a single pass.
