---
unit: inv-addy-29
phase: 1
package: addy
session: 008
subagent_returned: complete
---

# Unit inv-addy-29

## Files assigned
- [x] `../addy-external/spec-driven-development.md` (25,104 bytes)
- [x] `../addy-external/constraint-driven-development.md` (0 bytes — verified unavailable upstream: HTTP 404 on `https://skills.addy.ie/skills/constraint-driven-development/`, 0 bytes / missing on disk)

## Outputs produced
- `docs/analysis/inventory/addy/external-spec-driven-development-md.md` (24,014 bytes)
- `docs/analysis/inventory/addy/sources-addy-external-spec-driven-development-md.md` (symlink -> `external-spec-driven-development-md.md`)
- `docs/analysis/inventory/addy/external-constraint-driven-development-md.md` (5,528 bytes)
- `docs/analysis/inventory/addy/sources-addy-external-constraint-driven-development-md.md` (symlink -> `external-constraint-driven-development-md.md`)
- `docs/analysis/inventory/addy/_units/inv-addy-29.md` (work-unit report)

## Scripts executed
- `npx skills add addyosmani/agent-skills --skill spec-driven-development` — `mkdir -p /tmp/test-spec-verify && cd /tmp/test-spec-verify && npx --yes skills add addyosmani/agent-skills --skill spec-driven-development -y --copy && ls -la .agents/skills/spec-driven-development && rm -rf /tmp/test-spec-verify` — Exit code: `0` (Output: `Agent detected — installing non-interactively ... Selected 1 skill: spec-driven-development ... Installed 1 skill: ✓ spec-driven-development (copied) → ./.agents/skills/spec-driven-development ... SKILL.md 12,163 bytes`)
- `npx skills add addyosmani/agent-skills` — `npx --yes skills add addyosmani/agent-skills -l` — Exit code: `0` (Output: Listed all 25 skills in `addyosmani/agent-skills`, including `spec-driven-development` and `constraint-driven-development`)
- `scripts/synthesis/glossary-lint.ts` — `bun scripts/synthesis/glossary-lint.ts` — Exit code: `0` (Output: `Glossary lint: clean`)
- `scripts/synthesis/coverage.ts` — `bun scripts/synthesis/coverage.ts` — Evaluated cleanly against `| [x] (unavailable) |` and reported `Empty required inventory fields: 0`
- `bun test` — `bun test` — Exit code: `0` (Output: `89 pass, 0 fail across 15 files`)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **External Documentation Integration with Canonical Skills**:
  - `sources/addy-external/spec-driven-development.md` is the external documentation companion for `sources/addy/skills/spec-driven-development/SKILL.md` (inventoried in `inv-addy-1` / `inv-addy-18` as `skills-spec-driven-development-skill-md.md`). Both assign `spec-driven-development` to `addy:Define`.
  - Slash command `/spec` links directly to `sources/addy/.claude/commands/spec.md`, `sources/addy/commands/spec.toml`, and `sources/addy/.gemini/commands/spec.toml` (all inventoried in `inv-addy-1`, `inv-addy-4`, and `inv-addy-5`).
- **Handling of Unavailable Upstream File (`constraint-driven-development.md`)**:
  - `sources/addy-external/constraint-driven-development.md` is 0 bytes / absent on disk because `https://skills.addy.ie/skills/constraint-driven-development/` returned HTTP 404 during Phase 0 manifest generation.
  - Active probing revealed that `https://skills.addy.ie/sitemap-0.xml` indexes only 24 skills, omitting `constraint-driven-development` from website deployment, whereas the cloned git repository contains 25 skills.
  - The canonical skill `sources/addy/skills/constraint-driven-development/SKILL.md` (20,880 bytes) and `references/floor-guard.md` (10,419 bytes) were comprehensively inventoried in `inv-addy-16` (`skills-constraint-driven-development-skill-md.md`).
  - Per `METHOD.md` §1.1, §5 (Phase 0 step 3), and §3 R1, unavailable files are retained in the manifest and cataloged with an explicit inventory entry documenting the unavailable status. Marking manifest row 205 as `| [x] (unavailable) |` ensures full coverage auditability while satisfying `scripts/synthesis/coverage.ts:13`.
- **Documentation Drift**:
  - **PRD vs Spec Nomenclature**: The external web page states the skill "Writes a PRD covering objectives, commands, structure, code style, testing, and boundaries...", introducing the acronym `PRD` (Product Requirements Document), which never appears anywhere in `sources/addy/skills/spec-driven-development/SKILL.md` (which strictly specifies a "spec document" or "specification").
  - **6-Part Anatomy vs Gated Workflow**: The external site enforces a standardized 6-step layout template (`01 Overview` through `06 Verification`) across all catalog pages, which flattens the rich 5-phase sequential gated workflow (`Phase 0: Scope Check / Capability Map` through `Phase 4: Implement`) and omits `Keeping the Spec Alive`.
  - **Define Sibling Skills Drift**: The external page lists only `interview-me` and `idea-refine` under "More in the Define phase", omitting `constraint-driven-development` and `doubt-driven-development` which are also cataloged in the Define phase in repository documentation (`README.md:356`).
  - **Trigger Compression**: The external page collapses triggering conditions to a single sentence ("Starting a new project, feature, or significant change."), omitting four positive triggers and the explicit "When NOT to use" negative triggers defined in `SKILL.md`.
- **Distribution Ecosystem**:
  - The external documentation promotes single-skill installation via Vercel's open `skills CLI` (`npx skills add addyosmani/agent-skills --skill spec-driven-development`). Running this command in an isolated directory (`/tmp/test-spec-verify`) succeeded with exit code 0 and installed the skill into `.agents/skills/spec-driven-development/SKILL.md`.
  - Similarly, `npx skills add addyosmani/agent-skills -l` resolved from the GitHub repository and enumerated all 25 skills, proving that `constraint-driven-development` remains discoverable via the CLI toolchain despite the web catalog 404.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~6,300 tokens (25,104 bytes across 2 assigned files).
- Approximate tokens of output written: ~8,200 tokens across 2 inventory entries and 1 unit report.
