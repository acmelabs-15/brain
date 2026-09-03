# Handoff Report: inv-addy-16 (constraint-driven-development)

**Target**: `sources/addy/skills/constraint-driven-development/SKILL.md` (20,880 bytes)  
**Agent**: Spec Miner (`explorer_inv_addy_16_cdd`)  
**Parent Conversation ID**: `aed25c9d-0210-4705-b93e-eab462569ae1`  
**Date**: 2026-09-03  

---

## 1. Observation

1. **Source Content**: Inspected all 312 lines of `sources/addy/skills/constraint-driven-development/SKILL.md` (20,880 bytes), frontmatter to line 312.
2. **Lifecycle Phase**: `sources/addy/README.md:356` categorizes `skills/constraint-driven-development/` under `# Define`.
3. **Invocations**:
   - `commands/constraints.toml:4` invokes `constraint-driven-development`.
   - `.claude/commands/constraints.md:5` invokes `agent-skills:constraint-driven-development`.
   - `skills/using-agent-skills/SKILL.md:22` routes `"No quality bar written down? ──→ constraint-driven-development"`.
   - `evals/cases/constraint-driven-development.json:2` tests trigger and multi-turn dialogue evals.
   - `references/floor-guard.md:3, 10, 19, 55` is loaded as the reference implementation for Step 6 diff guards (`SKILL.md:216, 258`).
4. **Referenced Scripts & Commands**:
   - Inlined package.json script definitions in `SKILL.md:175-177`: `"check:fast"`, `"check:task"`, `"check:full"`.
   - Inlined script `floor-guard.mjs` in `references/floor-guard.md:18-93`.
   - Line 38 references non-existent command `/loop` (`"Don't run it in non-interactive contexts (CI, /loop, autonomous runs)."`).
   - Line 53 specifies `.codex/` while addy repository uses `.codex-plugin/`.
5. **Tool Executions**:
   - `bun scripts/validate-skills.js` exited with code `0`, reporting 25 skills checked and PASSED.
   - `bun scripts/validate-reference-links.js` exited with code `0`, reporting 25 skills checked and PASSED.
   - `bun scripts/run-evals.js` exited with code `0`, reporting 136 checks passed.
   - Tested inlined `floor-guard.mjs`: exits `0` on clean diff, exits `2` on missing merge base, exits `1` on detected violations.

---

## 2. Logic Chain

1. **Phase Assignment**:
   - Step 1: `sources/addy/README.md:356` lists `constraint-driven-development/ # Define`.
   - Step 2: In contrast to command files that span lifecycle triggers, the skill itself is authored for repository inception and standards definition.
   - Step 3: Therefore, the canonical phase is `addy:Define`.
2. **Design Intent**:
   - Step 1: `SKILL.md:10-16` explicitly contrasts written prose rules against mechanical enforcement: *"All of that lives in prose the agent reads and may or may not follow, and none of it survives the end of the session. This skill produces something different: a written record of this project's bar, with numbers, that outlives the conversation and can be checked mechanically."*
   - Step 2: It specifically counters agent evasion behaviors ("the cheapest road to green", line 205) via diff-scoped inspection.
   - Step 3: Therefore, the design intent is establishing persistent, mechanically verifiable quality boundaries that prevent quiet regression.
3. **Defect Identification**:
   - Step 1: In `SKILL.md:115`, the table designates `biome check` for linting. In `SKILL.md:175`, `check:fast` specifies `eslint .`. This constitutes an `internal-contradiction`.
   - Step 2: In `commands/constraints.toml:28-31` and `.claude/commands/constraints.md:29-32`, sub-commands `/constraints check`, `/constraints guard`, and `/constraints ratchet` are registered, yet they are nowhere documented in `SKILL.md`. This constitutes `doc-drift`.
   - Step 3: In `SKILL.md:140`, agents are told to add instructions to `AGENTS.md` and `CLAUDE.md`, but neither file in the repository contains that instruction. This constitutes `cross-file-contradiction`.
   - Step 4: `floor-guard.mjs` is referenced as a shipping reference in `references/floor-guard.md`, but is only an inlined markdown snippet, not an executable file (`missing-path`). Furthermore, `/loop` does not exist (`missing-path`).

---

## 3. Caveats

- `sources/addy` does not maintain a root `package.json` or live build environment; npm scripts (`check:fast`, `check:task`, `check:full`) are patterns provided for target projects rather than scripts executable in the source repository itself.
- External documentation at `sources/addy-external/constraint-driven-development.md` was unavailable during snapshotting (`docs/analysis/manifest/addy.md:205`).

---

## 4. Conclusion

- `sources/addy/skills/constraint-driven-development/SKILL.md` is an exhaustively specified, highly structured `Define`-phase skill that provides a complete framework for establishing repository quality contracts (`CONSTRAINTS.md`), anti-evasion diff guards (`floor-guard`), and cost-tiered pipeline placement.
- All 10 required inventory dimensions, 15 distinct functional features, 10 edge cases, and 7 classified defects have been cataloged with verbatim citations in `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_16_cdd/report.md`.

---

## 5. Verification Method

1. **Verify Report**: Inspect `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_16_cdd/report.md` to confirm all 10 required template fields are populated and follow `docs/plan/templates/inventory-entry.md` and `METHOD.md`.
2. **Verify Citations**: Check cited line numbers in `sources/addy/skills/constraint-driven-development/SKILL.md` (e.g., line 3 for Purpose, line 102 for Floor, line 140 for AGENTS.md instruction, line 216 for floor-guard reference).
3. **Verify Repo Validation**: Run `bun scripts/validate-skills.js` and `bun scripts/validate-reference-links.js` within `sources/addy` to confirm skill structure and reference link validity.
