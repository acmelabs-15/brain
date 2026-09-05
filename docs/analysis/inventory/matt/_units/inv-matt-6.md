---
unit: inv-matt-6
phase: 1
package: matt
session: 002
subagent_returned: complete
---

# Unit inv-matt-6

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/prototype.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/research.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/resolving-merge-conflicts.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/setup-matt-pocock-skills.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/tdd.md`

## Outputs produced
- `docs/analysis/inventory/matt/docs-engineering-prototype-md.md` (4120 bytes)
- `docs/analysis/inventory/matt/docs-engineering-research-md.md` (4067 bytes)
- `docs/analysis/inventory/matt/docs-engineering-resolving-merge-conflicts-md.md` (2925 bytes)
- `docs/analysis/inventory/matt/docs-engineering-setup-matt-pocock-skills-md.md` (4353 bytes)
- `docs/analysis/inventory/matt/docs-engineering-tdd-md.md` (3930 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-6 analyzes 5 core engineering documentation files in the `sources/matt/docs/engineering/` directory (`prototype.md`, `research.md`, `resolving-merge-conflicts.md`, `setup-matt-pocock-skills.md`, `tdd.md`).
- Architectural and lifecycle synthesis observations:
  - `prototype.md` codifies throwaway code execution designed strictly to settle unresolved logic or UI design questions. Prototypes are not merged into main; instead, settled decisions are recorded in main while runnable prototypes are retained on separate `prototype/<name>` branches as primary source evidence.
  - `research.md` introduces the background-agent delegation pattern for external reading legwork (official docs, source code, specs). Findings are persisted to cited Markdown notes rather than conversation context. Crucial distinction established: short-lived factual assets (research notes) vs durable architectural decisions (ADRs).
  - `resolving-merge-conflicts.md` mandates intent-based conflict resolution by consulting primary sources (commit history, PR descriptions, issue tickets) rather than mechanical flag-based resolution (`--ours`/`--theirs`), and requires executing native verification suites prior to commit.
  - `setup-matt-pocock-skills.md` defines the repo-anchoring mechanism for the `matt` suite, writing declarative markdown configs to `docs/agents/` to support diverse issue trackers (GitHub, GitLab, local markdown, custom MCP) without altering skill bodies ("Config is death").
  - `tdd.md` documents a reference methodology for red-green vertical slicing and tracer bullets at pre-agreed public seams, explicitly noting that the "refactor" step was removed in June 2026 to be handled separately by `code-review`.
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (0 duplicates, no divergence cards required).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,400 tokens (44,442 bytes across 5 files); approximate tokens of output written: ~4,600 tokens (19,395 bytes across 5 inventory cards).
