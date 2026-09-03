---
unit: inv-addy-33
phase: 1
package: addy
session: 009
subagent_returned: complete
---

# Unit inv-addy-33

## Files assigned
- [x] `sources/addy-external/observability-and-instrumentation.md` (26,344 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/external-observability-and-instrumentation-md.md` (30,381 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-33.md` (9,573 bytes)

## Scripts executed
- External Vercel Skills CLI (`@vercel-labs/skills`) — `bunx --yes skills add addyosmani/agent-skills --skill observability-and-instrumentation -y --copy` (in isolated temp directory `/tmp/test-obs-install-worker`) — Exit code: `0` (Output: cloned repository, selected `observability-and-instrumentation`, and copied `SKILL.md` (11,053 bytes) to `.agents/skills/observability-and-instrumentation/SKILL.md`)
- External Vercel Skills CLI (`@vercel-labs/skills`) — `bunx --yes skills add addyosmani/agent-skills -l` — Exit code: `0` (Output: enumerated all 25 skills in `addyosmani/agent-skills` including `observability-and-instrumentation`)
- Upstream Skill Validation — `cd sources/addy && bun scripts/validate-skills.js` — Exit code: `0` (Output: 25 skills checked — 0 error(s), 0 warning(s) — PASSED; validates `observability-and-instrumentation`)
- Upstream Reference Link Validation — `cd sources/addy && bun scripts/validate-reference-links.js` — Exit code: `0` (Output: 25 skills checked — 0 error(s) — PASSED; validates `skills/observability-and-instrumentation/SKILL.md`)
- Upstream Command Parity & Description Validation — `cd sources/addy && bun scripts/validate-commands.js` — Exit code: `0` (Output: 9 commands checked — 0 error(s) — PASSED; validates `/ship` parity and sync)
- Upstream Plugin Manifest Version Validation — `cd sources/addy && bun scripts/validate-versions.js` — Exit code: `0` (Output: All plugin manifests use version 0.6.8)
- Upstream Artifact Paths Validation — `cd sources/addy && bun scripts/validate-artifact-paths.js` — Exit code: `0` (Output: 7 files checked — 0 error(s) — PASSED)
- Upstream Evals Suite (Tier 2) — `cd sources/addy && bun scripts/run-evals.js` — Exit code: `0` (Output: 136 checks passed — 0 error(s), 0 warning(s) across 25 skills; rank-1 trigger rate 86%)
- Upstream Behavioral Eval Dry Run (Tier 3) — `cd sources/addy && bun scripts/run-evals.js --behavioral observability-and-instrumentation --dry-run` — Exit code: `0` (Output: [dry-run] eval 1: execution trace in workspace + 1 fixture(s))
- Synthesis Glossary Lint — `bun run scripts/synthesis/glossary-lint.ts` — Exit code: `0` (Output: Glossary lint: clean)
- Synthesis Coverage Check — `bun run scripts/synthesis/coverage.ts` — Exit code: `1` (Output: Unchecked manifest rows: 1196, Empty required inventory fields: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **External Documentation Architectural Role:**
  - `sources/addy-external/observability-and-instrumentation.md` is an Astro-compiled HTML document captured from the public website `https://skills.addy.ie/skills/observability-and-instrumentation/`.
  - It functions as a public catalog, distribution interface (via `@vercel-labs/skills`), and structural guide rather than an operational agent prompt.
- **Canonical Implementation Precedence & Companion Assets (`inv-addy-17` and `inv-addy-2`):**
  - Authoritative operational logic resides in `sources/addy/skills/observability-and-instrumentation/SKILL.md` (inventoried in `inv-addy-17` as `skills-observability-and-instrumentation-skill-md.md`).
  - Pre-launch verification is detailed in `sources/addy/references/observability-checklist.md` (inventoried in `inv-addy-2` as `references-observability-checklist-md.md`).
  - The external document serves as an entry point that provides summary highlights and links directly to GitHub for full execution instructions.
- **Command Layer Orphan & False Command Attribution:**
  - The external landing page sidebar explicitly displays `Command /ship` (`line 12`), implying that `/ship` invokes or executes `observability-and-instrumentation`.
  - Forensic inspection of `commands/ship.toml`, `.claude/commands/ship.md`, and `.gemini/commands/ship.toml` proves `/ship` focuses strictly on pre-flight checklists, build verification, and deployment execution for `shipping-and-launch`; it contains zero invocations of `observability-and-instrumentation`.
  - No `/observe` command exists anywhere in `sources/addy/`, rendering `observability-and-instrumentation` an orphan relative to the repository's command orchestration layer.
- **Trigger Condensation & Negative Boundary Omission:**
  - The external landing page collapses the skill's triggering criteria into a single clause (`"Adding telemetry, or shipping anything that runs in production."`, `line 5`).
  - Canonical `SKILL.md:12-23` specifies 5 positive trigger scenarios and 3 mandatory "NOT for" negative boundaries (redirecting debugging to `debugging-and-error-recovery`, performance profiling to `performance-optimization`, and release gating to `shipping-and-launch`).
- **Structural Anatomy & Section Heading Alignment:**
  - The external page asserts a standardized 6-part anatomy: `01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification` (`sources/addy-external/observability-and-instrumentation.md:10`).
  - In `sources/addy/skills/observability-and-instrumentation/SKILL.md`, the 6 primary H2 sections match this 6-part anatomy almost 1:1: `## Overview` (line 8), `## When to Use` (line 12), `## Process` (line 25, containing 7 numbered H3 subsections from `### 1. Define "working" before instrumenting` through `### 7. Verify the telemetry itself`), `## Common Rationalizations` (line 166), `## Red Flags` (line 178), and `## Verification` (line 190).
  - The only divergence is minor naming variation on section 04: `04 Rationalizations` on the web card vs `## Common Rationalizations` (`line 166`) in `SKILL.md`.
- **Installation Tooling & Isolation Hazard in Standalone CLI Distribution:**
  - Vercel's `skills CLI` (`npx skills add addyosmani/agent-skills`) IS prominently featured in `sources/addy/README.md:46-63` under "## Quick Start" as the fastest path across 70+ agents (with explicit warning about the single-skill isolation hazard), though it is not mentioned in agent-specific guidelines (`CLAUDE.md`, `AGENTS.md`) which govern in-repo contributors rather than consumer distribution.
  - Testing `npx skills add addyosmani/agent-skills --skill observability-and-instrumentation` confirmed that only `SKILL.md` (11,053 bytes) is copied.
  - The companion reference `references/observability-checklist.md` (referenced at line 203 of `SKILL.md`) is not packaged or copied, creating a broken relative link in standalone agent environments.
  - Notably, `sources/addy/README.md:61-66` explicitly documents this exact limitation ("A per-skill `npx` install copies only `skills/<name>/`, not the repo-level `references/` directory... This portability gap is tracked in #361"), whereas the external landing page (`sources/addy-external/observability-and-instrumentation.md:6, 8`) promotes the standalone `--skill` command without displaying this isolation hazard warning.
- **Footer Setup Navigation & Repository Documentation Structure:**
  - The external landing page footer (`line 15`) features a "Setup" column displaying links for "Claude Code", "Codex", "Cursor", and "Antigravity", all uniformly targeting the single generic route `/docs/getting-started/`.
  - Claude Code setup is documented directly in `docs/getting-started.md:105-126` and root `README.md:70-98` (no `docs/claude-code-setup.md` exists in the repository). Dedicated platform-specific setup guides exist in `sources/addy/docs/` for Codex, Cursor, and Antigravity (`docs/codex-setup.md`, `docs/cursor-setup.md`, `docs/antigravity-setup.md`), but the external website collapses all 4 setup links to the generic `/docs/getting-started/` destination.
- **Sibling Skill Truncation in External UI:**
  - The external page's "More in the Ship phase" section renders only 3 sibling skill cards (`git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`), omitting `shipping-and-launch` and `documentation-and-adrs` from the Ship phase cluster.
- **Telemetry Architecture Endorsement:**
  - The external document explicitly endorses the 4 modern telemetry pillars: Structured logging (JSON events, correlation IDs), RED metrics (Rate, Errors, Duration histograms), OpenTelemetry distributed tracing, and Symptom-based alerting.
- **Lifecycle Phase Alignment:**
  - In Addy's taxonomy, observability is canonically part of `addy:Ship` (`CLAUDE.md:26`, `README.md:281`, `skills/using-agent-skills/SKILL.md:191`). No `Monitor` phase exists in Addy's repository.
- **Session Assignment:**
  - Assigned to session `009` under work unit `inv-addy-33`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~7,400 tokens (26,344 bytes of external HTML snapshot plus cross-referenced skill, checklist, command, and eval files).
- Approximate tokens of output written: ~6,500 tokens across 1 inventory entry and 1 unit report.
