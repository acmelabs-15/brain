---
package: matt
name: issue tracker
slug: issue-tracker
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md, sha256: 8f60cf9bf19f1ee8cc09a15c2e06e1d7a9cb51f79d9a273dd9b20b8a2a494f80}
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: docs/engineering/setup-matt-pocock-skills.md, sha256: 4a4129edb23d9ba1491e2ef9ccba964ebc3d85830b013c089f0b8b4dd58ebbe6}
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
  - {path: skills/engineering/to-spec/SKILL.md, sha256: 43ad9cf318e5e7d3d1fa360253a37021796dc87a0c2e595ad262661a10f85088}
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# issue tracker

## Definition — verbatim
> "**Issue tracker**:" — CONTEXT.md:7
> "The tool that hosts a repo's issues: GitHub Issues, Linear, a local `.scratch/` markdown convention, or similar. Skills like `to-tickets`, `to-spec`, and `triage` read from and write to it." — CONTEXT.md:8

## Also called — verbatim
> "_Avoid_: backlog manager, backlog backend, issue host" — CONTEXT.md:9

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md | 3 | used here | Cited as a per-repo configuration item seeded by setup |
| CONTEXT.md | 7 | defined here | Canonical ubiquitous language definition specifying allowed tools and disallowed synonyms |
| docs/engineering/ask-matt.md | 23 | used here | Router guidance directing questions about issue tracking to setup |
| docs/engineering/setup-matt-pocock-skills.md | 34 | defined here | Setup decision table listing tracker selection matching git remotes |
| docs/engineering/to-spec.md | 3 | used here | Spec publication destination identified as the repository issue tracker |
| external/setup-matt-pocock-skills.md | 37 | defined here | External setup documentation defining issue tracker configuration options |
| external/to-spec.md | 25 | used here | Destination where generated specs are published as single issues |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 11 | used here | Primary setup target identifying where project issues reside |
| skills/engineering/to-spec/SKILL.md | 9 | used here | Requirement checking for tracker configuration before spec generation |
| skills/engineering/to-tickets/SKILL.md | 11 | used here | Target destination where decomposed vertical slice tickets are published |
| skills/engineering/triage/SKILL.md | 9 | used here | Source and destination for issue state transitions and triage comments |

## Consumes
Repository configuration at `docs/agents/issue-tracker.md` (CLI tooling like `gh`, `glab`, or `.scratch/` local markdown files).

## Produces
Issues, specifications, tickets, and triage status updates recorded in the tracking system.

## When applied
When querying, reading, creating, modifying, or triaging issues across the lifecycle.

## Sub-concepts
none

## Part of
per-repo-config

## Implementation status
defects: missing-path, other (missing command files cited in instructions; labels not created programmatically in remote trackers).

## Design notes
The repository's backing system for work items and backlog management. It abstracts specific backends (GitHub Issues, GitLab, Linear, local Markdown files) behind a unified interface described in `docs/agents/issue-tracker.md`. Hard-dependency skills interact with this abstraction so agent instructions remain decoupled from concrete tracker APIs.
