---
package: rjm
name: Automation Opportunities
slug: automation-opportunities
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Automation Opportunities

## Definition — verbatim
> "### Automation Opportunities" — .claude/skills/review/references/devops.md:233

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 233 | defined here | Output table enumerating detected opportunities for developer experience automation, categorized by type, benefit, and effort. |

## Consumes
DevOps review observations identifying repetitive manual tasks, recurring workflow patterns, or procedure automation candidates.

## Produces
A structured Markdown table listing candidate automations with columns for Opportunity description, Type (Action/Workflow/Skill/Command), Benefit (Low/Medium/High), and Effort (Low/Medium/High).

## When applied
Emitted in DevOps review reports when reviewer analysis identifies opportunities to automate workflows or extract reusable skills.

## Sub-concepts
none

## Part of
devops

## Implementation status
clean

## Design notes
A structured review artifact in rjm capturing actionable proposals for continuous developer workflow automation, linking code review observations directly to ongoing productivity enhancements and reusable tool generation.
