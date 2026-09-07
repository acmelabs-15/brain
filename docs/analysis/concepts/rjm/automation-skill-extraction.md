---
package: rjm
name: Automation & Skill Extraction
slug: automation-skill-extraction
kind: technique
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

# Automation & Skill Extraction

## Definition — verbatim
> "### 10. Automation & Skill Extraction" — .claude/skills/review/references/devops.md:183

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 183 | defined here | Focus area technique identifying opportunities to automate repetitive manual steps, consolidate duplicated workflows, and extract reusable slash commands or agent skills. |

## Consumes
Repetitive workflow steps, shell script blocks, manual procedures, and agent prompt patterns observed during pull request review.

## Produces
Extraction candidates and recommendations mapping script blocks to composite actions, workflow patterns to reusable workflows, and procedures to slash commands or skills.

## When applied
Applied during DevOps review to identify developer experience enhancements and reusable automation candidates.

## Sub-concepts
none

## Part of
devops

## Implementation status
clean

## Design notes
A continuous improvement technique in rjm that leverages routine DevOps code review to actively discover repetitive manual tasks and script patterns, converting them into reusable composite actions, slash commands, or specialized agent skills.
