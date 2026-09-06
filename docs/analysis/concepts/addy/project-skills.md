---
package: addy
name: Project skills
slug: project-skills
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/cursor-setup.md, sha256: 2df2336526a4463202615457f202d470300dd90727b1312df22513962ae4883f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Project skills

## Definition — verbatim
(used, not defined)
> "| **Project skills** | `.cursor/skills/<skill-name>/SKILL.md` | Agent-discovered workflows; read when the task matches the skill `description` |" — docs/cursor-setup.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/cursor-setup.md | 14 | used here | Defined as agent-discovered workflows in .cursor/skills/<name>/SKILL.md read on demand. |

## Consumes
Workflow definitions (`SKILL.md`), task context matching frontmatter descriptions.

## Produces
Step-by-step procedural workflow execution with embedded verification gates within the project.

## When applied
Discovered dynamically and loaded into context only when a requested task aligns with the skill description.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Project skills represent complete, procedural engineering workflows colocated within a repository (`.cursor/skills/`). By loading full process instructions only on demand when a task matches the skill's description, project skills keep the primary context window lean while ensuring specialized guidance is accessible when needed.
