# BRIEFING — 2026-09-03T15:30:00Z

## Mission
Deep read-only investigation and inventory entry drafting for unit inv-addy-17 files: deprecation-and-migration and observability-and-instrumentation.

## 🔒 My Identity
- Archetype: teamwork_preview_explorer
- Roles: explorer, investigator, synthesizer
- Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_17_2
- Original parent: 9d06e1e6-15c9-4e83-9868-3d9dd89d69a0
- Milestone: inv-addy-17

## 🔒 Key Constraints
- Read-only investigation — do NOT implement
- Adhere strictly to METHOD.md rules R1-R6 and §4 checklist
- Verbatim extraction for required verbatim fields with path:line citations
- Exhaustive concept extraction (R6)
- Check all referenced paths with ls / view_file
- Verify invokes and invoked_by across sources/addy/
- Check doc-drift against README.md, CLAUDE.md, AGENTS.md, commands, references, and external doc snapshots
- All code in repository is Bun/TypeScript

## Current Parent
- Conversation ID: 9d06e1e6-15c9-4e83-9868-3d9dd89d69a0
- Updated: 2026-09-03T15:26:00Z

## Investigation State
- **Explored paths**: `skills/deprecation-and-migration/SKILL.md`, `skills/observability-and-instrumentation/SKILL.md`, `references/observability-checklist.md`, `references/definition-of-done.md`, `evals/cases/deprecation-and-migration.json`, `evals/cases/observability-and-instrumentation.json`, `evals/fixtures/...`, `sources/addy-external/deprecation-and-migration.md`, `sources/addy-external/observability-and-instrumentation.md`, `README.md`, `CLAUDE.md`, `AGENTS.md`, `commands/`
- **Key findings**:
  1. Both skills are in `addy:Ship` lifecycle phase (per CLAUDE.md, README.md, using-agent-skills).
  2. Neither skill ships executable scripts in `scripts/`.
  3. All referenced files on disk exist (no missing-path defects).
  4. Both skills are omitted from `AGENTS.md` implicit lifecycle mappings and intent-to-skill mappings (doc-drift).
  5. External documentation pages (`sources/addy-external/`) associate both skills with command `/ship` in sidebar, but `/ship` (`commands/ship.toml`) runs only `shipping-and-launch` with parallel specialist fan-out (doc-drift).
  6. External doc anatomy for `deprecation-and-migration` claims a `03 Process` section which does not exist in `SKILL.md` (doc-drift).
  7. Exhaustive concepts identified: 43 for deprecation-and-migration, 66 for observability-and-instrumentation.
- **Unexplored areas**: None for the assigned files. Complete line-by-line coverage achieved.

## Key Decisions Made
- Confirmed phase mapping is `addy:Ship` for both skills based on `CLAUDE.md:26`, `README.md:373,375`, and `skills/using-agent-skills/SKILL.md:189,191`.
- Categorized all doc-drift occurrences across AGENTS.md, commands/ship.toml, external doc site, and checklist headings.

## Artifact Index
- DISPATCH.md — dispatch log
- BRIEFING.md — situational awareness
- progress.md — liveness heartbeat
- handoff.md — detailed findings and complete draft inventory entries
