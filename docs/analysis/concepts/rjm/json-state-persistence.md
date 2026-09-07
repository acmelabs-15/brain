---
package: rjm
name: JSON State Persistence
slug: json-state-persistence
kind: pattern
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

# JSON State Persistence

## Definition — verbatim
> "For tracking state across sessions." — .claude/skills/skillforge/references/script-patterns-catalog.md:313

## Also called — verbatim
> "### Pattern 5: JSON State Persistence" — .claude/skills/skillforge/references/script-patterns-catalog.md:311

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-patterns-catalog.md | 311 | defines | Implements atomic JSON file persistence with automatic corruption recovery and XDG cache storage. |

## Consumes
In-memory state dictionaries, project names, and XDG cache environment variables.

## Produces
Atomically written JSON cache files (`.json.tmp` -> `.json`) and backup files (`.json.bak`).

## When applied
When tracking progress across multi-session workflows, managing caches, or saving skill state.

## Sub-concepts
none

## Part of
script-patterns-catalog

## Implementation status
clean

## Design notes
Implements crash-resilient local persistence by writing state first to a temporary file before an atomic rename, automatically quarantining corrupted state files to preserve workflow continuity.
