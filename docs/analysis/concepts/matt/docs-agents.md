---
package: matt
name: docs/agents/
slug: docs-agents
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# docs/agents/

## Definition — verbatim
(used, not defined)

> "`docs/agents/`: does this skill's prior output already exist?" — skills/engineering/setup-matt-pocock-skills/SKILL.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 27 | used here | Checked during setup exploration to identify existing generated agent configuration files. |

## Consumes
Repository configuration decisions made during setup-matt-pocock-skills.

## Produces
Persistent agent configuration documents such as domain guides, issue tracker conventions, and triage label definitions.

## When applied
Created during repository setup to store persistent agent configuration.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, other

## Design notes
The designated directory within a repository where setup-matt-pocock-skills writes persistent configuration files governing agent behavior, domain conventions, and issue tracker integrations.
