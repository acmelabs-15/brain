---
unit: inv-matt-3
phase: 1
package: matt
session: 005
subagent_returned: complete
---

# Unit inv-matt-3

## Files assigned
- [x] sources/matt/CHANGELOG.md (44408 bytes, 271 lines)
- [x] sources/matt/CLAUDE.md (3703 bytes, 26 lines)
- [x] sources/matt/CONTEXT.md (1768 bytes, 31 lines)

## Outputs produced
- docs/analysis/inventory/matt/changelog-md.md (6296 bytes)
- docs/analysis/inventory/matt/claude-md.md (5610 bytes)
- docs/analysis/inventory/matt/context-md.md (4712 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-3.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `CLAUDE.md` is the canonical file for the EXACT alias `AGENTS.md` (which is a symlink in `sources/matt/`). Under METHOD §2.4 and R11(a), `claude-md.md` claims `AGENTS.md` in its frontmatter `aliases:` list, satisfying the manifest row without duplicating analysis.
- `CLAUDE.md` enforces a strict negative prose style constraint forbidding em-dashes repository-wide across prose, docs, skills, ADRs, changesets, and code comments.
- `CONTEXT.md` serves as the central domain glossary for the suite, establishing `Issue tracker`, `Issue`, `Decision ticket`, and `Triage role`. It resolves legacy ambiguity around "backlog" (which is discontinued as a domain term) and reserves "ticket" strictly for decision tickets (child units of `wayfinder:map`).
- `CHANGELOG.md` records the evolution from early exploratory single-machine tools (`caveman`, `obsidian-vault`, `edit-article`) to the unified, structured workflows (`to-spec`, `to-tickets`, `wayfinder`, `domain-modeling`, `codebase-design`), along with the transition from sequential grilling to round-based frontier questioning.
- Identified missing path defects across `CONTEXT.md` and `CHANGELOG.md`:
  - `docs/agents/triage-labels.md` is cited in both `CONTEXT.md:19` and `CHANGELOG.md:117`, but the template file actually resides at `skills/engineering/setup-matt-pocock-skills/triage-labels.md`.
  - `docs/agents/issue-tracker.md` is cited in `CHANGELOG.md:118`, but resides at `skills/engineering/setup-matt-pocock-skills/issue-tracker.md`.
  - `docs/invocation.md` is cited in `CHANGELOG.md:266`, but resides at `.agents/invocation.md`.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~12,470 tokens (49,879 bytes across 3 files).
Approximate output tokens: ~4,500 tokens (18,000+ bytes across 3 inventory cards and unit report).
