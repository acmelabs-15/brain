---
unit: inv-addy-37
phase: 1
package: addy
session: 014
subagent_returned: complete
---

# Unit inv-addy-37

## Files assigned
- [x] `sources/addy/skills/git-workflow-and-versioning/SKILL.md` (14,063 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md` (12,575 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-37.md` (2,741 bytes)

## Scripts executed
none — unit contains no scripts or inlined executable code. Tooling checks run:
- `bun scripts/synthesis/quote-check.ts docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md` — Exit code: `0` (Output: 66 PASS, 0 FAIL)
- `bun scripts/synthesis/coverage.ts` — Exit code: `1` (clean for this unit; fails only on unrelated legacy orphan cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after: `addy:Ship`)

## Cross-unit notes
- **Phase classification tension (`addy:Ship` vs universal cross-phase discipline)**:
  `CLAUDE.md:26`, `README.md:371`, and `skills/using-agent-skills/SKILL.md:187` place `git-workflow-and-versioning` under the `Ship` phase. However, `SKILL.md:3, 14` explicitly mandates using it "when making any code change (always)". It operates as a foundational implementation and commit discipline throughout the entire development lifecycle (`/spec → /plan → /build → /review → /ship`), not merely as a release-time gate.
- **Save Point Pattern as Agent Revert Primitive**:
  `git-workflow-and-versioning` formalizes the `Save Point Pattern` (`git reset --hard HEAD`), which is referenced in `incremental-implementation` and provides the safety foundation for autonomous agent exploration and recovery.
- **Git Worktrees as Multi-Agent Isolation Primitive**:
  The skill introduces `git worktree add` for running concurrent agent streams in separate directories without branch collision, which aligns with orchestrator patterns seen across agent frameworks.
- **Human-Curated Changelogs vs Automated Dumps**:
  The skill establishes that release versioning (SemVer) and changelogs are consumer contracts, strictly forbidding raw git log dumps in favor of curated impact groupings (`Added`, `Changed`, `Fixed`, `Deprecated`, `Removed`, `Security`).

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~3,516 tokens (14,063 bytes across 1 file).
- Tokens of output written: ~3,700 tokens across 1 inventory card and 1 unit report.
