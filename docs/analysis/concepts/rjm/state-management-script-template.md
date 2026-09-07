---
package: rjm
name: State Management Script Template
slug: state-management-script-template
kind: template
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-patterns-catalog.md, sha256: ac036d192b627a7bda2c87286360e16e693123d268f4af6aacc98c5ea7a21733}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# State Management Script Template

## Definition — verbatim
> "<name>_tracker.py - Track progress for <purpose>" — .claude/skills/skillforge/references/script-patterns-catalog.md:682

## Also called — verbatim
> "### State Management Script Template" — .claude/skills/skillforge/references/script-patterns-catalog.md:677

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-patterns-catalog.md | 677 | defined here | Provides a starter template for tracking progress and managing multi-session state via CLI subcommands. |

## Consumes
Project names, item descriptions, status updates, and state persistence configurations.

## Produces
Multi-command state tracking script with `init`, `add-item`, `update`, and `status` subcommands.

## When applied
When authoring scripts to manage multi-step workflows, project milestones, or persisted progress.

## Sub-concepts
argparse-with-subcommands, json-state-persistence

## Part of
category-templates

## Implementation status
clean

## Design notes
Combines argparse subcommands with JSON state persistence to scaffold state-tracking CLI utilities for multi-session agentic workflows.
