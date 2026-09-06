---
package: addy
name: rules
slug: rules
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

# rules

## Definition — verbatim
> "Cursor combines **rules** (short policies) and **skills** (full workflows):" — docs/cursor-setup.md:9

## Also called — verbatim
- `Rules Files` — skills/context-engineering/SKILL.md:38

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/cursor-setup.md | 9 | used here | Defined as short policies combined with skills in Cursor's context model. |

## Consumes
Architectural constraints, team conventions, operational boundaries, and formatting policies.

## Produces
Concise instruction files (such as `.cursor/rules/*.mdc`) loaded into agent context.

## When applied
Applied continuously (always-on) or scoped to specific file globs whenever an agent operates within a project.

## Sub-concepts
- `project-rules`
- `user-rules`

## Part of
none

## Implementation status
clean

## Design notes
Rules represent concise, stable policy statements (such as commit conventions, linting commands, or architectural boundaries) designed to remain persistently active in agent context without consuming excessive tokens. Unlike procedural multi-step skills, rules set boundaries and constraints.
