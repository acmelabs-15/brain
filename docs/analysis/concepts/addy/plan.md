---
package: addy
name: PLAN
slug: plan
kind: phase
package_phase: addy:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
  - {path: CLAUDE.md, sha256: f03b7aaf2c08ab93e70a020442634a09f518286ff1beb7b8353dde92533ff9b0}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
  - {path: docs/opencode-setup.md, sha256: 77a6bd91ef2837acb96feea4ae60f3bfea2c4155864c197394dd2166f49de864}
  - {path: external/planning-and-task-breakdown.md, sha256: 8fb58d1a8023ab97c340e53c0e34f9f20419c0de574f60fa64fbae00fd4927e4}
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# PLAN

## Definition — verbatim
> "- PLAN → `planning-and-task-breakdown`" — AGENTS.md:41

## Also called — verbatim
> "**Plan:**" — CLAUDE.md:22

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 41 | defines | Maps PLAN phase to `planning-and-task-breakdown` in the implicit lifecycle mapping |
| CLAUDE.md | 22 | defines | Catalogs skills under the Plan phase (`planning-and-task-breakdown`) |
| docs/comparison.md | 11 | references | Cites Plan as the third stage in addy's seven-phase lifecycle description |
| docs/opencode-setup.md | 169 | references | Maps Plan phase to `planning-and-task-breakdown` in OpenCode setup |
| external/planning-and-task-breakdown.md | 5 | references | Associates `planning-and-task-breakdown` with the Plan phase in external breadcrumb navigation |
| external/planning-and-task-breakdown.md | 5 | references | Classifies skill under Plan phase chip in external detail header |
| README.md | 12 | defines | Places PLAN as the second phase in the lifecycle flow ASCII diagram |
| README.md | 17 | defines | Maps `/plan` slash command to the Plan phase in the command-to-phase diagram |
| references/orchestration-patterns.md | 157 | references | Explains read-only research during plan mode in persona-based orchestration patterns |

## Consumes
Approved specification from the Define phase.

## Produces
Ordered task list with explicit acceptance criteria, dependency graph, and verification strategy.

## When applied
Triggered when requirements are clear and need decomposition into small, atomic, implementable units.

## Sub-concepts
planning-and-task-breakdown

## Part of
lifecycle-mapping-implicit-commands

## Implementation status
defects: cross-file-contradiction, doc-drift, missing-path, orphan

## Design notes
The Plan phase decomposes settled specifications into bite-sized, sequentially executable tasks, preventing agent derailment and establishing concrete checkpoints before code modification starts.
