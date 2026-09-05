---
unit: inv-matt-36
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-36

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/package-lock.json`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/package.json`

## Outputs produced
- `docs/analysis/inventory/matt/package-lock-json.md` (2642 bytes)
- `docs/analysis/inventory/matt/package-json.md` (2607 bytes)
- `docs/analysis/inventory/matt/_units/inv-matt-36.md` (2309 bytes)

## Scripts executed
- `scripts/sync-plugin-version.mjs`, `node scripts/sync-plugin-version.mjs --check`, 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-36 inventories the repository's root package configuration files (`package.json` and `package-lock.json`).
- `package.json` configures development dependencies for Changeset release management (`@changesets/cli` and `@changesets/changelog-github`) and scripts that coordinate with `scripts/sync-plugin-version.mjs` to keep `.claude-plugin/plugin.json` (inventoried in inv-matt-2) in sync with npm package versioning (`1.2.3`).
- In `.github/workflows/release.yml` (inventoried in inv-matt-2), `npm ci` installs dependencies against `package-lock.json`, and `changesets/action@v1` executes `npm run version` (which runs `changeset version && node scripts/sync-plugin-version.mjs`).
- A cross-file contradiction was identified: `package-lock.json` retains `0.0.0` as its root package version (lines 3 and 9) while `package.json` is at `1.2.3` (line 3), reflecting lockfile drift resulting from running changeset versioning without updating the npm lockfile.
- Neither file appears in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,200 tokens (49,887 bytes across 2 files); approximate tokens of output written: ~1,500 tokens (5,249 bytes across 2 cards).
