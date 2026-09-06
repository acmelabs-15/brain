---
package: matt
name: agent skills
slug: agent-skills
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude-plugin/marketplace.json, sha256: 83e889fed719fc92dc17a4accc69beed7d6c28bc87ec064b515a90a030f72e13}
  - {path: .claude-plugin/plugin.json, sha256: e531ddc6560515397ac32d93334fa3eb586b6b6bcc2e472c3646641fd3d2b951}
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# agent skills

## Definition — verbatim
> "A collection of agent skills (slash commands and behaviors) loaded by Claude Code." — CONTEXT.md:3

## Also called — verbatim
`Agent skills` — skills/engineering/setup-matt-pocock-skills/SKILL.md:87

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude-plugin/marketplace.json | 12 | defined here | Description highlighting the package as a collection of agent skills for real engineering. |
| .claude-plugin/plugin.json | 4 | defined here | Manifest description defining the suite as agent skills for real engineering. |
| CONTEXT.md | 3 | defined here | Defines agent skills as slash commands and behaviors loaded by Claude Code. |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 87 | used here | Section heading written into project configuration files documenting configured skills. |

## Consumes
Claude Code or compatible harness, model capabilities, and repo-level configuration.

## Produces
Interactive workflows, automated engineering procedures, and specialized slash commands.

## When applied
Loaded into an agent harness to provide structured workflows across engineering, productivity, and planning tasks.

## Sub-concepts
none

## Part of
mattpocock-skills

## Implementation status
defects: missing-path, other

## Design notes
`agent skills` represent the fundamental unit of capability in `matt`. Defined as slash commands and specialized prompt behaviors loaded by Claude Code, skills are divided into promoted buckets (`engineering/` and `productivity/`) and configured per repository via `/setup-matt-pocock-skills`. They provide structured, deterministic lifecycle interactions rather than unconstrained "vibe coding."
