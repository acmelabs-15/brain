# Citation Polish Analysis & Strategy Report — Explorer r2_2

**Work Unit**: `inv-addy-18` (Iteration 2)  
**Agent**: Explorer r2_2 (`teamwork_preview_explorer`)  
**Target Path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_18_r2_2/report.md`  
**Date**: 2026-09-03  

---

## Executive Summary

Both minor citation polish observations identified by Challenger 1 were empirically verified against the original source files in `sources/addy/skills/`. Both observations represent valid, actionable precision enhancements that improve citation accuracy and path uniformity without introducing regressions or altering semantic inventory contents. 

Exact, drop-in replacement strings are recommended for Worker 2 below.

---

## 1. Item 1: `skills-interview-me-skill-md.md:111` Line Polish

### 1.1 Source & Inventory Audit

- **Inventory File**: `docs/analysis/inventory/addy/skills-interview-me-skill-md.md:111`
  - Current line content:
    ```markdown
    - `step back` — skills/interview-me/SKILL.md:133, 209 — defined here
    ```
- **Source File**: `sources/addy/skills/interview-me/SKILL.md`
  - Lines 130–134:
    ```markdown
    130: If yes, you have shared understanding. Stop interviewing and produce the restate. If no, you're not done; ask the next question.
    131: 
    132: This is a checkable test, not a vibe. It also has a floor: if you've gone several rounds and still can't predict, that's information about the ask, not a reason to keep grinding. Stop and tell the user: "I've asked X questions and I still can't predict your reactions. Something foundational is missing. Want to step back?"
    133: 
    134: ## Output
    ```
  - Line 209:
    ```markdown
    209: - Three or more rounds without your confidence visibly rising: you're asking the wrong questions, step back and reframe
    ```

### 1.2 Analysis & Assessment

1. In the source file, the quote `"Want to step back?"` appears on **line 132**, at the conclusion of "The 95% Confidence Stop" subsection.
2. Line 133 is an empty newline separating paragraph 132 from section header `## Output` on line 134.
3. The second occurrence cited (`209`) correctly references line 209 (`"step back and reframe"`).
4. Citing line 133 is an off-by-one citation pointing to whitespace.
5. **Recommendation**: **YES, polish it**. Update citation from `133, 209` to `132, 209`.

---

## 2. Item 2: `skills-doubt-driven-development-skill-md.md:122` Path Prefix

### 2.1 Source & Inventory Audit

- **Inventory File**: `docs/analysis/inventory/addy/skills-doubt-driven-development-skill-md.md:122`
  - Current line content:
    ```markdown
    - cross-file-contradiction · skills/interview-me/SKILL.md:14 vs CLAUDE.md:23, README.md:361, skills/using-agent-skills/SKILL.md:176, commands/build.toml:38, and sources/addy-external/doubt-driven-development.md:5 · skills/interview-me/SKILL.md:14 explicitly classifies doubt-driven-development as an "other Define-phase" skill that "stress-tests a plan after you've drafted one", directly contradicting all authoritative listings that place it in the Build phase (addy:Build), as well as doubt-driven-development/SKILL.md:12-28 which defines it as an in-flight implementation posture for non-trivial coding decisions.
    ```
- **Source File**: `sources/addy/skills/doubt-driven-development/SKILL.md`
  - Lines 12–28 correspond to the definition of in-flight posture and "When to Use" non-trivial decision criteria:
    ```markdown
    12: This is not `/review`. `/review` is a verdict on a finished artifact. This is an in-flight posture: non-trivial decisions get cross-examined while course-correction is still cheap.
    ...
    28: - About to claim a non-obvious fact ("this is safe", "this scales", "this matches the spec")
    ```
- **Repo Structure & Citation Convention**:
  - The relative path within `sources/addy/` is `skills/doubt-driven-development/SKILL.md`. No file exists at `doubt-driven-development/SKILL.md`.
  - In `skills-doubt-driven-development-skill-md.md`, every other citation (frontmatter, title, concept cards lines 58–116, and defects lines 123–124) uniformly uses the `skills/doubt-driven-development/SKILL.md` prefix.
  - In the unit report `docs/analysis/inventory/addy/_units/inv-addy-18.md:42`, the path is already cited as `skills/doubt-driven-development/SKILL.md (lines 12–28)`.

### 2.2 Analysis & Assessment

1. Omitting `skills/` in line 122 is an isolated typographic omission.
2. Automated cross-reference linters or path validators resolving against package root would flag `doubt-driven-development/SKILL.md` as a missing file.
3. Prepending `skills/` restores complete internal consistency across the document and aligns with the work unit report.
4. **Recommendation**: **YES, polish it**. Prepend `skills/` so it reads `skills/doubt-driven-development/SKILL.md:12-28`.

---

## 3. Recommended Fix Strategy for Worker 2

Worker 2 can execute these precise edits directly using single-line string replacements.

### Fix 1: `skills-interview-me-skill-md.md`

- **File**: `docs/analysis/inventory/addy/skills-interview-me-skill-md.md`
- **Line**: 111
- **Target Content**:
  ```markdown
  - `step back` — skills/interview-me/SKILL.md:133, 209 — defined here
  ```
- **Replacement Content**:
  ```markdown
  - `step back` — skills/interview-me/SKILL.md:132, 209 — defined here
  ```

### Fix 2: `skills-doubt-driven-development-skill-md.md`

- **File**: `docs/analysis/inventory/addy/skills-doubt-driven-development-skill-md.md`
- **Line**: 122
- **Target Content**:
  ```markdown
  - cross-file-contradiction · skills/interview-me/SKILL.md:14 vs CLAUDE.md:23, README.md:361, skills/using-agent-skills/SKILL.md:176, commands/build.toml:38, and sources/addy-external/doubt-driven-development.md:5 · skills/interview-me/SKILL.md:14 explicitly classifies doubt-driven-development as an "other Define-phase" skill that "stress-tests a plan after you've drafted one", directly contradicting all authoritative listings that place it in the Build phase (addy:Build), as well as doubt-driven-development/SKILL.md:12-28 which defines it as an in-flight implementation posture for non-trivial coding decisions.
  ```
- **Replacement Content**:
  ```markdown
  - cross-file-contradiction · skills/interview-me/SKILL.md:14 vs CLAUDE.md:23, README.md:361, skills/using-agent-skills/SKILL.md:176, commands/build.toml:38, and sources/addy-external/doubt-driven-development.md:5 · skills/interview-me/SKILL.md:14 explicitly classifies doubt-driven-development as an "other Define-phase" skill that "stress-tests a plan after you've drafted one", directly contradicting all authoritative listings that place it in the Build phase (addy:Build), as well as skills/doubt-driven-development/SKILL.md:12-28 which defines it as an in-flight implementation posture for non-trivial coding decisions.
  ```

---

## 4. Post-Edit Verification Checklist for Worker 2

After making the edits, Worker 2 should verify:
1. `grep -n "step back" docs/analysis/inventory/addy/skills-interview-me-skill-md.md` shows `skills/interview-me/SKILL.md:132, 209`.
2. `grep -n "doubt-driven-development/SKILL.md:12-28" docs/analysis/inventory/addy/skills-doubt-driven-development-skill-md.md` confirms `skills/` is present.
3. Run `bun scripts/synthesis/coverage.ts` — verify `Empty required inventory fields: 0`.
4. Run `bun scripts/synthesis/glossary-lint.ts` — verify clean exit code 0.
