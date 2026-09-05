---
unit: inv-matt-36
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-36

## Files assigned
- [x] sources/matt/package-lock.json (49290 bytes, 1386 lines)
- [x] sources/matt/package.json (597 bytes, 22 lines)

## Outputs produced
- docs/analysis/inventory/matt/package-lock-json.md (2480 bytes)
- docs/analysis/inventory/matt/package-json.md (2792 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-36.md (1707 bytes)

## Scripts executed
- scripts/sync-plugin-version.mjs: `node scripts/sync-plugin-version.mjs --check`, exit code 0 (configured via `package.json` script `check-plugin-version`)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Identified cross-file version contradiction between `package.json:3` (`"version": "1.2.3"`) and `package-lock.json:3` / `package-lock.json:9` (`"version": "0.0.0"`).
- `package.json` defines scripts invoking `scripts/sync-plugin-version.mjs` (unit `inv-matt-34`). Executed check successfully against `.claude-plugin/plugin.json`.
- Changesets devDependencies (`@changesets/cli`, `@changesets/changelog-github`) link to the Changesets release workflow configured in `.changeset/config.json` (unit `inv-matt-1`).

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~11,200 tokens (49,887 bytes).
Approximate output tokens: ~1,550 tokens (6,979 bytes).
