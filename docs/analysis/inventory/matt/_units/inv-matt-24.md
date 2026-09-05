---
unit: inv-matt-24
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-24

## Files assigned
- [x] sources/matt-external/setup-matt-pocock-skills.md (356510 bytes, 71 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-setup-matt-pocock-skills-md.md (5895 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-24.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/setup-matt-pocock-skills.md` documents web documentation for `/setup-matt-pocock-skills` under Series 1: Getting Started (1.1).
- Serves as the foundational repo setup mechanism: writes committed markdown files under `docs/agents/` (`issue-tracker.md`, `domain.md`, `triage-labels.md`) and updates `CLAUDE.md`/`AGENTS.md`.
- Explicitly marked `disable-model-invocation: true` to prevent autonomous agent self-invocation.
- Key tooling gap: does not provision tracker labels via CLI (`gh label create`), which can cause downstream ticket-creation failures for missing labels.
- Harness bug noted: prioritizes `CLAUDE.md` existence over active runtime harness, leaving Codex users with unread configurations unless moved manually to `AGENTS.md`.
- Remediated to conform strictly to canonical 13-heading schema from `docs/plan/templates/inventory-entry.md`.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~72,000 tokens (356,510 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,500 tokens (5,895 bytes inventory card + unit report).
