---
unit: inv-matt-3
phase: 1
package: matt
session: 011
subagent_returned: complete
---

# Unit inv-matt-3

## Files assigned
- [x] `sources/matt/CHANGELOG.md` (44408 bytes, 271 lines)
- [x] `sources/matt/CLAUDE.md` (3703 bytes, 26 lines)
- [x] `sources/matt/CONTEXT.md` (1768 bytes, 31 lines)

## Outputs produced
- `docs/analysis/inventory/matt/changelog-md.md` (9697 bytes)
- `docs/analysis/inventory/matt/claude-md.md` (4727 bytes)
- `docs/analysis/inventory/matt/context-md.md` (5613 bytes)
- `docs/analysis/inventory/matt/_units/inv-matt-3.md` (unit report)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `CLAUDE.md` satisfies the EXACT alias `AGENTS.md` (symlink) identified in `docs/analysis/manifest/matt-duplicates.md`. It lists `AGENTS.md` in its `aliases:` frontmatter.
- Phase 1V verification findings for `CONTEXT.md` were thoroughly remediated:
  - Missing concepts `issue host` (line 9), `ticket` (line 13), `implementation ticket` (line 16), and `GitHub Issues` / `Linear` (line 8) are fully captured and cited.
  - Runaway artifact bloat defect/observation where models treat `CONTEXT.md` write permission as a license to write running specs is cross-referenced with `docs/engineering/domain-modeling.md:44-45, 55`.
- In `CHANGELOG.md`:
  - `scripts/hitl-loop.template.sh` cited on line 11 is located under `skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`, recorded as a `missing-path` defect.
  - Widespread use of em-dashes across `CHANGELOG.md` directly contradicts the repo-wide rule in `CLAUDE.md:25` prohibiting em-dashes in repo prose.
- In `CONTEXT.md`:
  - Reference to `docs/agents/triage-labels.md` on line 19 does not exist in the source repository root (it is emitted into consumer repositories by `setup-matt-pocock-skills`).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,500 tokens (49,879 bytes)
- Approximate tokens of output written: ~5,200 tokens (20,037 bytes across cards + unit report)
