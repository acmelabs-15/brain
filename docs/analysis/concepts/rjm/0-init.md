---
package: rjm
name: /0-init
slug: 0-init
kind: phase
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# /0-init

## Definition — verbatim
> "| `/0-init` | Session start checklist in `templates/agents/implementer.shared.md` | Session initialization is a checklist, not a lifecycle phase or a skill |" — docs/workflow-commands.md:212

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/workflow-commands.md | 212 | defined here | Documented in comparison table as the legacy initialization command replaced by the session start checklist. |

## Consumes
Fresh agent session context or new feature request.

## Produces
Initialized development session environment.

## When applied
Executed at the beginning of legacy development workflows before session start checklists replaced it.

## Sub-concepts
none

## Part of
lifecycle

## Implementation status
defects: doc-drift

## Design notes
`/0-init` was the legacy initial phase slash command in rjm before PR #1611 replaced numbered commands with semantic commands and converted session initialization into an agent checklist rather than a discrete lifecycle command or skill.
