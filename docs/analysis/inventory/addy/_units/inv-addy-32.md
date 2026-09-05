---
unit: inv-addy-32
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-32

## Files assigned
- [x] sources/addy-external/test-driven-development.md (26483 bytes, 20 lines)
- [x] sources/addy-external/using-agent-skills.md (21955 bytes, 20 lines)
- [x] sources/addy/hooks/hooks.json (364 bytes, 15 lines)

## Outputs produced
- docs/analysis/inventory/addy/external-test-driven-development-md.md (6348 bytes)
- docs/analysis/inventory/addy/external-using-agent-skills-md.md (4834 bytes)
- docs/analysis/inventory/addy/hooks-hooks-json.md (2292 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/test-driven-development.md` is an external documentation catalog page on `skills.addy.ie` corresponding to the `test-driven-development` skill (`skills/test-driven-development/SKILL.md` in inv-addy-11). It exhibits doc-drift relative to the repository `SKILL.md` description and standard anatomy headings, as well as an internal contradiction between its header `/test` command badge and its sidebar `/build` command indicator. Both `/test` and `/build` commands (`commands/test.toml` and `commands/build.toml` in inv-addy-1) invoke `test-driven-development`.
- `external/using-agent-skills.md` is an external documentation catalog page for `using-agent-skills` (`skills/using-agent-skills/SKILL.md` in inv-addy-12). It documents the central routing meta-skill that directs incoming tasks across lifecycle phases. It exhibits doc-drift relative to the repository `SKILL.md` description and anatomy. Unlike phase-specific skills, it does not bind to a slash command.
- `hooks/hooks.json` is a Claude Code plugin configuration file defining the `SessionStart` lifecycle hook. It executes `hooks/session-start.sh`, falling back to `${CLAUDE_PROJECT_DIR}/.claude/hooks/session-start.sh`. The referenced script `hooks/session-start.sh` is inventoried in unit `inv-addy-33`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,200 tokens (48,802 bytes across 3 files)
Approximate tokens of output written: ~3,950 tokens (15,840 bytes across 4 files)
