# Empirical Verification Report — Challenger 2 (inv-addy-15)

**Target Unit**: `inv-addy-15` (Package: `addy`, Phase 1)  
**Assigned Analyst/Subagent**: Challenger 2  
**Date**: 2026-09-03  
**Verdict**: **APPROVE**  

---

## 1. Executive Summary

Empirical verification was conducted on the work unit `inv-addy-15` across all 4 assigned inventory files, the work unit report, the package manifest (`docs/analysis/manifest/addy.md`), and repository state (`docs/plan/STATE.md`).

All four verification challenges outlined in the dispatch passed without discrepancies:
1. **Path Existence**: 100% of paths referenced in "Invokes", "Invoked by", and "Inputs" across all 4 inventory entry files exist on disk, and non-file/unimplemented paths are cataloged in `Defects`.
2. **Template Completeness**: Every required frontmatter property and required section header across all 4 inventory entry files and `_units/inv-addy-15.md` is populated with non-empty content conforming to schema requirements.
3. **Manifest Consistency**: All 4 source files match byte-for-byte with the entries in `docs/analysis/manifest/addy.md`, and all 4 rows are checked `[x]`.
4. **STATE.md Consistency**: Unit `inv-addy-15` is recorded with status `complete`, session `006`, output path `docs/analysis/inventory/addy/_units/inv-addy-15.md`, byte count `38,862` (exact sum of the 4 source files), and `Rows inventoried` count of `158` (exact sum of all completed units).

---

## 2. Challenge 1: Path Existence Verification

### 2.1 Verification Method & Results
Every file path referenced in "Invokes", "Invoked by", and "Inputs" was checked using `ls -ld` via direct shell execution:

#### Entry 1: `skills/frontend-ui-engineering/SKILL.md`
| Referenced Path | Section | Resolution / Check Command | Status |
|---|---|---|---|
| `../../references/accessibility-checklist.md` | Inputs / Invokes | `ls -ld sources/addy/references/accessibility-checklist.md` | Exists (5,206 B) |
| `CLAUDE.md` | Invoked by | `ls -ld sources/addy/CLAUDE.md` | Exists (4,094 B) |
| `AGENTS.md` | Invoked by | `ls -ld sources/addy/AGENTS.md` | Exists (5,386 B) |
| `README.md` | Invoked by | `ls -ld sources/addy/README.md` | Exists (25,223 B) |
| `skills/using-agent-skills/SKILL.md` | Invoked by | `ls -ld sources/addy/skills/using-agent-skills/SKILL.md` | Exists (10,426 B) |
| `docs/gemini-cli-setup.md` | Invoked by | `ls -ld sources/addy/docs/gemini-cli-setup.md` | Exists (5,640 B) |
| `docs/opencode-setup.md` | Invoked by | `ls -ld sources/addy/docs/opencode-setup.md` | Exists (9,547 B) |
| `docs/cursor-setup.md` | Invoked by | `ls -ld sources/addy/docs/cursor-setup.md` | Exists (8,370 B) |
| `docs/adoption-guide.md` | Invoked by | `ls -ld sources/addy/docs/adoption-guide.md` | Exists (11,197 B) |
| `docs/getting-started.md` | Invoked by | `ls -ld sources/addy/docs/getting-started.md` | Exists (7,104 B) |
| `evals/cases/api-and-interface-design.json` | Invoked by | `ls -ld sources/addy/evals/cases/api-and-interface-design.json` | Exists (1,494 B) |
| `evals/cases/frontend-ui-engineering.json` | Invoked by | `ls -ld sources/addy/evals/cases/frontend-ui-engineering.json` | Exists (1,430 B) |
| `sources/addy-external/frontend-ui-engineering.md` | Invoked by | `ls -ld sources/addy-external/frontend-ui-engineering.md` | Exists (26,596 B) |

#### Entry 2: `skills/shipping-and-launch/SKILL.md`
| Referenced Path | Section | Resolution / Check Command | Status |
|---|---|---|---|
| `../../references/definition-of-done.md` | Inputs / Invokes | `ls -ld sources/addy/references/definition-of-done.md` | Exists (3,798 B) |
| `../../references/security-checklist.md` | Inputs / Invokes | `ls -ld sources/addy/references/security-checklist.md` | Exists (11,881 B) |
| `../../references/performance-checklist.md` | Inputs / Invokes | `ls -ld sources/addy/references/performance-checklist.md` | Exists (13,139 B) |
| `../../references/accessibility-checklist.md` | Inputs / Invokes | `ls -ld sources/addy/references/accessibility-checklist.md` | Exists (5,206 B) |
| `commands/ship.toml` | Invoked by | `ls -ld sources/addy/commands/ship.toml` | Exists (4,712 B) |
| `CLAUDE.md` | Invoked by | `ls -ld sources/addy/CLAUDE.md` | Exists (4,094 B) |
| `AGENTS.md` | Invoked by | `ls -ld sources/addy/AGENTS.md` | Exists (5,386 B) |
| `skills/git-workflow-and-versioning/SKILL.md` | Invoked by | `ls -ld sources/addy/skills/git-workflow-and-versioning/SKILL.md` | Exists (14,063 B) |
| `skills/observability-and-instrumentation/SKILL.md` | Invoked by | `ls -ld sources/addy/skills/observability-and-instrumentation/SKILL.md` | Exists (11,053 B) |
| `skills/using-agent-skills/SKILL.md` | Invoked by | `ls -ld sources/addy/skills/using-agent-skills/SKILL.md` | Exists (10,426 B) |
| `README.md` | Invoked by | `ls -ld sources/addy/README.md` | Exists (25,223 B) |
| `docs/getting-started.md` | Invoked by | `ls -ld sources/addy/docs/getting-started.md` | Exists (7,104 B) |
| `docs/opencode-setup.md` | Invoked by | `ls -ld sources/addy/docs/opencode-setup.md` | Exists (9,547 B) |
| `references/definition-of-done.md` | Invoked by | `ls -ld sources/addy/references/definition-of-done.md` | Exists (3,798 B) |
| `docs/antigravity-setup.md` | Invoked by | `ls -ld sources/addy/docs/antigravity-setup.md` | Exists (5,041 B) |
| `docs/adoption-guide.md` | Invoked by | `ls -ld sources/addy/docs/adoption-guide.md` | Exists (11,197 B) |
| `docs/cursor-setup.md` | Invoked by | `ls -ld sources/addy/docs/cursor-setup.md` | Exists (8,370 B) |
| `references/observability-checklist.md` | Invoked by | `ls -ld sources/addy/references/observability-checklist.md` | Exists (4,931 B) |
| `evals/cases/code-review-and-quality.json` | Invoked by | `ls -ld sources/addy/evals/cases/code-review-and-quality.json` | Exists (1,374 B) |
| `evals/cases/interview-me.json` | Invoked by | `ls -ld sources/addy/evals/cases/interview-me.json` | Exists (1,197 B) |
| `evals/cases/shipping-and-launch.json` | Invoked by | `ls -ld sources/addy/evals/cases/shipping-and-launch.json` | Exists (1,816 B) |
| `scripts/validate-reference-links-test.js` | Invoked by | `ls -ld sources/addy/scripts/validate-reference-links-test.js` | Exists (5,666 B) |
| `sources/addy-external/shipping-and-launch.md` | Invoked by | `ls -ld sources/addy-external/shipping-and-launch.md` | Exists (26,336 B) |

#### Entry 3: `skills/spec-driven-development/SKILL.md`
| Referenced Path | Section | Resolution / Check Command | Status |
|---|---|---|---|
| `skills/api-and-interface-design/SKILL.md` | Inputs / Invokes | `ls -ld sources/addy/skills/api-and-interface-design/SKILL.md` | Exists (14,884 B) |
| `skills/planning-and-task-breakdown/SKILL.md` | Inputs / Invokes | `ls -ld sources/addy/skills/planning-and-task-breakdown/SKILL.md` | Exists (10,564 B) |
| `skills/incremental-implementation/SKILL.md` | Inputs / Invokes | `ls -ld sources/addy/skills/incremental-implementation/SKILL.md` | Exists (9,507 B) |
| `skills/test-driven-development/SKILL.md` | Inputs / Invokes | `ls -ld sources/addy/skills/test-driven-development/SKILL.md` | Exists (16,483 B) |
| `skills/context-engineering/SKILL.md` | Inputs / Invokes | `ls -ld sources/addy/skills/context-engineering/SKILL.md` | Exists (11,070 B) |
| `.claude/commands/spec.md` | Invoked by | `ls -ld sources/addy/.claude/commands/spec.md` | Exists (913 B) |
| `commands/spec.toml` | Invoked by | `ls -ld sources/addy/commands/spec.toml` | Exists (911 B) |
| `README.md` | Invoked by | `ls -ld sources/addy/README.md` | Exists (25,223 B) |
| `CLAUDE.md` | Invoked by | `ls -ld sources/addy/CLAUDE.md` | Exists (4,094 B) |
| `AGENTS.md` | Invoked by | `ls -ld sources/addy/AGENTS.md` | Exists (5,386 B) |
| `skills/interview-me/SKILL.md` | Invoked by | `ls -ld sources/addy/skills/interview-me/SKILL.md` | Exists (14,359 B) |
| `skills/using-agent-skills/SKILL.md` | Invoked by | `ls -ld sources/addy/skills/using-agent-skills/SKILL.md` | Exists (10,426 B) |
| `docs/adoption-guide.md` | Invoked by | `ls -ld sources/addy/docs/adoption-guide.md` | Exists (11,197 B) |
| `docs/getting-started.md` | Invoked by | `ls -ld sources/addy/docs/getting-started.md` | Exists (7,104 B) |
| `docs/antigravity-setup.md` | Invoked by | `ls -ld sources/addy/docs/antigravity-setup.md` | Exists (5,041 B) |
| `docs/codex-setup.md` | Invoked by | `ls -ld sources/addy/docs/codex-setup.md` | Exists (1,805 B) |
| `docs/commandcode-setup.md` | Invoked by | `ls -ld sources/addy/docs/commandcode-setup.md` | Exists (2,437 B) |
| `docs/cursor-setup.md` | Invoked by | `ls -ld sources/addy/docs/cursor-setup.md` | Exists (8,370 B) |
| `docs/gemini-cli-setup.md` | Invoked by | `ls -ld sources/addy/docs/gemini-cli-setup.md` | Exists (5,640 B) |
| `docs/opencode-setup.md` | Invoked by | `ls -ld sources/addy/docs/opencode-setup.md` | Exists (9,547 B) |
| `evals/cases/spec-driven-development.json` | Invoked by | `ls -ld sources/addy/evals/cases/spec-driven-development.json` | Exists (2,657 B) |
| `evals/cases/browser-testing-with-devtools.json` | Invoked by | `ls -ld sources/addy/evals/cases/browser-testing-with-devtools.json` | Exists (1,455 B) |
| `scripts/validate-artifact-paths.js` | Invoked by | `ls -ld sources/addy/scripts/validate-artifact-paths.js` | Exists (4,102 B) |
| `scripts/validate-artifact-paths-test.js` | Invoked by | `ls -ld sources/addy/scripts/validate-artifact-paths-test.js` | Exists (4,572 B) |
| `sources/addy-external/spec-driven-development.md` | Invoked by | `ls -ld sources/addy-external/spec-driven-development.md` | Exists (25,104 B) |

#### Entry 4: `skills/constraint-driven-development/references/floor-guard.md`
| Referenced Path | Section | Resolution / Check Command | Status |
|---|---|---|---|
| `skills/constraint-driven-development/SKILL.md` | Invoked by | `ls -ld sources/addy/skills/constraint-driven-development/SKILL.md` | Exists (20,880 B) |
| `.claude/commands/constraints.md` | Invoked by | `ls -ld sources/addy/.claude/commands/constraints.md` | Exists (2,762 B) |
| `commands/constraints.toml` | Invoked by | `ls -ld sources/addy/commands/constraints.toml` | Exists (2,775 B) |

#### Cataloged Defects for Non-File / Unimplemented Paths
- `floor-guard.mjs`: Cataloged as `missing-path` defect in `skills-constraint-driven-development-references-floor-guard-md.md:100` because it exists only as an inline markdown block and not as a standalone executable file in `scripts/`.
- `.constraintsignore`: Cataloged as `doc-drift` defect in `skills-constraint-driven-development-references-floor-guard-md.md:101` because it is documented in `floor-guard.md:98` but has no implementation in the reference script.
- `CONSTRAINTS.md`: Accurately identified as a project-level target artifact produced/consumed when applying `constraint-driven-development`, rather than an internal file of the repository.

**Conclusion for Challenge 1**: PASS (100% compliant).

---

## 3. Challenge 2: Template Completeness Verification

An automated parser evaluated each of the 4 inventory entries and the unit report against `docs/plan/templates/inventory-entry.md` and `docs/plan/templates/work-unit-report.md`.

### 3.1 Inventory Entries Checklist
| Section / Field | Required | `frontend-ui-engineering` | `shipping-and-launch` | `spec-driven-development` | `floor-guard.md` |
|---|---|---|---|---|---|
| Frontmatter: `package` | Yes | `addy` | `addy` | `addy` | `addy` |
| Frontmatter: `path` | Yes | Populated | Populated | Populated | Populated |
| Frontmatter: `type` | Yes | `skill` | `skill` | `skill` | `reference` |
| Frontmatter: `bytes` | Yes | 10711 | 10137 | 12163 | 5851 |
| Frontmatter: `unit` | Yes | `inv-addy-15` | `inv-addy-15` | `inv-addy-15` | `inv-addy-15` |
| `Purpose — required, verbatim` | Yes | Quoted + path:line | Quoted + path:line | Quoted + path:line | Quoted + path:line |
| `Design intent — required` | Yes | Populated | Populated | Populated | Populated |
| `Phase — required` | Yes | `addy:Build` | `addy:Ship` | `addy:Define` | `addy:Define` |
| `Inputs — required` | Yes | Populated | Populated | Populated | Populated |
| `Outputs — required` | Yes | Populated | Populated | Populated | Populated |
| `Invokes — required` | Yes | Populated | Populated | Populated | Populated |
| `Invoked by — required` | Yes | Populated | Populated | Populated | Populated |
| `Concepts named — required, verbatim` | Yes | Populated (43 items) | Populated (53 items) | Populated (42 items) | Populated (18 items) |
| `Structure` | Yes | Populated | Populated | Populated | Populated |
| `Scripts — required...` | Yes | `none` | `none` | `none` | Populated (executed & tested) |
| `Defects — required` | Yes | 2 defects | 2 defects | 4 defects | 5 defects |
| `Observations` | Yes | Populated | Populated | Populated | Populated |
| `Context cost` | Yes | Populated | Populated | Populated | Populated |

### 3.2 Work-Unit Report Checklist (`_units/inv-addy-15.md`)
- Frontmatter (`unit`, `phase`, `package`, `session`, `subagent_returned`): All populated (`complete`).
- `## Files assigned`: All 4 files listed with `[x]` and byte counts.
- `## Outputs produced`: 5 files listed with byte counts.
- `## Scripts executed`: Details execution of `floor-guard.mjs` across 4 test configurations, `validate-skills.js`, `validate-reference-links.js`, `validate-artifact-paths.js`, `validate-commands.js`, and test suites.
- `## Coverage self-check`: All 5 criteria checked `[x]`.
- `## Cross-unit notes`: Comprehensive analysis of phase allocations, script bugs, and architectural drift.
- `## Blocked or uncertain`: `none`.
- `## Time and size`: Populated.

**Conclusion for Challenge 2**: PASS (0 missing or empty fields).

---

## 4. Challenge 3: Manifest Consistency Verification

Source file sizes on disk were verified using `ls -l` and compared directly to `docs/analysis/manifest/addy.md`:

| Manifest Line | File Path | Actual Disk Bytes | Manifest Bytes | Type | Checked State | Match |
|---|---|---|---|---|---|---|
| Line 173 | `skills/frontend-ui-engineering/SKILL.md` | 10,711 | 10711 | `skill` | `[x]` | Exact |
| Line 174 | `skills/shipping-and-launch/SKILL.md` | 10,137 | 10137 | `skill` | `[x]` | Exact |
| Line 175 | `skills/spec-driven-development/SKILL.md` | 12,163 | 12163 | `skill` | `[x]` | Exact |
| Line 176 | `skills/constraint-driven-development/references/floor-guard.md` | 5,851 | 5851 | `reference` | `[x]` | Exact |

All 4 entries match path, byte count, artifact type, and are checked `[x]`.

**Conclusion for Challenge 3**: PASS (100% consistent).

---

## 5. Challenge 4: STATE.md Consistency & Arithmetic Verification

### 5.1 Unit Entry in `STATE.md`
Line 79 of `docs/plan/STATE.md`:
```markdown
| inv-addy-15 | addy | 4 | 38862 | complete | 006 | docs/analysis/inventory/addy/_units/inv-addy-15.md |
```
- Status: `complete` (Matches)
- Session: `006` (Matches)
- Output path: `docs/analysis/inventory/addy/_units/inv-addy-15.md` (Matches and exists on disk)
- Source byte count: $10,711 + 10,137 + 12,163 + 5,851 = 38,862$ bytes (Exact mathematical sum)

### 5.2 `Rows inventoried` Mathematical Consistency
Line 434 of `docs/plan/STATE.md`:
```markdown
| Rows inventoried (addy / matt / rjm) | 158 / 0 / 0 |
```
Sum of files across all units with status `complete` in `STATE.md`:
- `inv-addy-1`: 28
- `inv-addy-2`: 57
- `inv-addy-3`: 3
- `inv-addy-4`: 17
- `inv-addy-5`: 6
- `inv-addy-6`: 5
- `inv-addy-7`: 6
- `inv-addy-8`: 5
- `inv-addy-9`: 10
- `inv-addy-10`: 4
- `inv-addy-12`: 5
- `inv-addy-13`: 4
- `inv-addy-14`: 4
- `inv-addy-15`: 4
$$\text{Total completed files} = 28 + 57 + 3 + 17 + 6 + 5 + 6 + 5 + 10 + 4 + 5 + 4 + 4 + 4 = 158$$

Note: Unit `inv-addy-11` (16 files) is marked `in-progress` in `STATE.md` (line 75), which accounts for the difference between the 158 completed rows recorded in `STATE.md` and the 174 checked rows in `manifest/addy.md` ($158 + 16 = 174$). The `Rows inventoried` count of 158 is strictly mathematically consistent with completed units.

**Conclusion for Challenge 4**: PASS (Mathematically exact).

---

## 6. Adversarial Stress-Testing of Extracted Defects

To verify the quality and veracity of the inventory extraction, Challenger 2 independently verified the defects discovered in `floor-guard.mjs`:

1. **Untracked files dropped bug** (`skills-constraint-driven-development-references-floor-guard-md.md:97`):
   Verified: `git diff --no-index` exits 1 on diffs. In Node's `child_process.execFileSync`, exit code 1 causes an exception to be thrown. The `git` wrapper (`floor-guard.md:28-31`) catches all errors and returns `null`, which `?? ''` coerces to empty string. Consequently, any untracked file containing violations is silently ignored. Confirmed bug.
2. **Deleted test file bypass** (`skills-constraint-driven-development-references-floor-guard-md.md:98`):
   Verified: Git diff headers for deleted files output `+++ /dev/null`. Line 48 slices 6 characters (`line.slice(6)`), producing `'ev/null'` instead of the test file name. When line 72 checks `/\.(test|spec)\.|_test\.|test_/.test(file)`, it evaluates to false, allowing deleted test files to bypass the floor guard without triggering `assertion-removed`. Confirmed bug.
3. **Deleted constraint bullets undetected** (`skills-constraint-driven-development-references-floor-guard-md.md:99`):
   Verified: Line 82 searches for an added line matching the key prefix of the removed line (`addedConstraints.find(...)`). If a bullet or constraint is deleted without being replaced, `a` is undefined and `flag('threshold-lowered', ...)` is never invoked. Confirmed bug.

---

## 7. Final Verdict

**Verdict**: **APPROVE**  
Unit `inv-addy-15` satisfies all requirements of `docs/plan/METHOD.md` (R1–R6) and passes all four empirical verification challenges.
