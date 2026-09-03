# Handoff Report: Deep-Dive Inventory of `sources/addy-external/debugging-and-error-recovery.md`

**Agent**: Explorer 3 (`explorer_inv_addy_21_3_gen2`)  
**Work Unit**: `inv-addy-21` (Phase 1 Inventory Extraction)  
**Parent**: Orchestrator (`orchestrator_inv_addy_21_2`)  
**Handoff Type**: Hard (Task complete)  

---

## 1. Observation

1. **File Existence and Exact Dimensions**:
   - Path: `sources/addy-external/debugging-and-error-recovery.md`
   - Manifest path relative to `sources/addy/`: `../addy-external/debugging-and-error-recovery.md`
   - Byte count: `23,705` bytes (confirmed via Bun `Buffer.byteLength()` and Unix `wc -c sources/addy-external/debugging-and-error-recovery.md`).
   - Line count: `20` lines (confirmed via Bun `text.split("\n").length`; `wc -l` reports `19` newlines).
   - SHA-256: `d0c1b0c0347395ef86161427a1e05a3da4ce2f5f1ea38be98d30e3bbbe7089b0`.

2. **Verbatim Purpose Statement**:
   - Quote: `"Guides systematic root-cause debugging. Reproduce, localize, reduce, fix, guard - with a stop-the-line rule and safe fallbacks, so you fix the cause instead of guessing."`
   - Location: `sources/addy-external/debugging-and-error-recovery.md:5` (in `<p class="detail-summary">`) and line 1 (`<meta name="description">`).

3. **Phase Assignment**:
   - Location: `sources/addy-external/debugging-and-error-recovery.md:5` (breadcrumb `<span class="crumb-phase">Verify</span>`, chip `<span class="chip phase-chip"><span class="phase-dot"></span>Verify phase</span>`) and line 12 (`<h3 class="side-title">Verify phase</h3>`).
   - Value: `addy:Verify`.

4. **Interactive Invocations and Commands**:
   - Install command 1: `npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery` (`line 8`).
   - Install command 2: `npx skills add addyosmani/agent-skills` (`line 8, 15`).
   - Associated lifecycle command: `/test` (`line 12`).
   - Upstream repository target: `https://github.com/addyosmani/agent-skills/blob/main/skills/debugging-and-error-recovery/SKILL.md` (`line 10-12`).

5. **Discrepancies against Repository `SKILL.md` (`sources/addy/skills/debugging-and-error-recovery/SKILL.md`)**:
   - **Triage Steps**: External page lines 1 and 5 describe triage as `"Reproduce, localize, reduce, fix, guard"` (5 steps). External peer card `sources/addy-external/browser-testing-with-devtools.md:12` explicitly calls it `"Five-step triage: reproduce, localize, reduce, fix, guard."` In contrast, repository file `sources/addy/skills/debugging-and-error-recovery/SKILL.md:36-170` defines 6 distinct steps: Step 1: Reproduce (line 40), Step 2: Localize (line 87), Step 3: Reduce (line 111), Step 4: Fix the Root Cause (line 121), Step 5: Guard Against Recurrence (line 138), and Step 6: Verify End-to-End (line 154).
   - **Anatomy**: External page lines 8-10 assert a rigid 6-item anatomy (`Overview`, `When to Use`, `Process`, `Rationalizations`, `Red Flags`, `Verification`). But `SKILL.md` has no `Process` section (it has `The Stop-the-Line Rule`, `The Triage Checklist`, `Error-Specific Patterns`, `Safe Fallback Patterns`, `Instrumentation Guidelines`), names its section `Common Rationalizations` (line 262), and contains `Treating Error Output as Untrusted Data` (line 272) which is unrepresented in the external anatomy.
   - **Trigger Conditions**: External page line 5 truncates triggers to `"Tests fail, builds break, or behavior is unexpected."` whereas `SKILL.md:14-19` has 6 specific triggers including bug reports, console/log errors, and regressions.
   - **Lifecycle Command**: External page line 12 pairs the Verify phase and skill with `Command /test`, but in `sources/addy/`, `/test` (`commands/test.toml`) does not invoke `debugging-and-error-recovery`; instead, `/build` (`commands/build.toml:36, 42`) invokes it.

---

## 2. Logic Chain

1. **Classification as `external-doc`**:
   - Observation 1 and manifest row 194 classify this file as `external-doc`. It is a frozen HTML snapshot of `https://skills.addy.ie/skills/debugging-and-error-recovery/` stored under `sources/addy-external/`.
   - Therefore, per METHOD.md §1.1 and §4, it must be inventoried with exact dimensions, external source citations, cross-file comparisons against the corresponding skill, and defect classifications.

2. **Phase Assignment (`addy:Verify`)**:
   - Observation 3 directly confirms the page explicitly identifies the skill as belonging to the `"Verify phase"` in four separate locations (breadcrumb, header badge, sidebar card, and related skills section).
   - Therefore, the lifecycle phase is `addy:Verify`.

3. **Doc-Drift Identification**:
   - Observation 5 reveals that the public marketing page describes a 5-step triage (`reproduce, localize, reduce, fix, guard`), completely omitting the 6th step (`Verify End-to-End`).
   - Because `SKILL.md` lines 154-170 define `Step 6: Verify End-to-End` as an essential step before resuming development, this is a clear `doc-drift` defect.
   - Furthermore, the external doc's claimed "Process" section does not exist in `SKILL.md`, and `Treating Error Output as Untrusted Data` is omitted from the external anatomy.

4. **Inventory Completeness**:
   - All fields required by `docs/plan/templates/inventory-entry.md` and METHOD.md R1-R6 (Purpose, Design Intent, Phase, Inputs, Outputs, Invokes, Invoked By, Concepts Named, Structure, Scripts, Defects, Observations, Context Cost) have been fully extracted and populated without omission.

---

## 3. Caveats

- **No Live Network Invocations**: The external URL was snapshotted into `sources/addy-external/` during Phase 0 setup. In accordance with DO-NOT-READ.md and the offline frozen snapshot rule (METHOD.md §1.1), no live HTTP fetch was performed against `skills.addy.ie`.
- **Packaging Ecosystem Dependency**: The `npx skills add` command requires the npm registry and network access if executed for real installation; it is documented as an invocation command rather than executed in this read-only investigation.
- No other caveats.

---

## 4. Conclusion

`sources/addy-external/debugging-and-error-recovery.md` is a 23,705-byte, 20-line HTML external documentation snapshot published by Addy Osmani at `skills.addy.ie/skills/debugging-and-error-recovery/`. It places the skill in `addy:Verify` and provides installation commands via the Vercel Labs open `skills` CLI.

Crucially, it exhibits **four significant doc-drift defects** relative to the source repository:
1. It describes a **5-step triage** (`reproduce, localize, reduce, fix, guard`), omitting `Step 6: Verify End-to-End` (`SKILL.md:154-170`).
2. It asserts a standardized 6-part anatomy with a non-existent `Process` section while omitting the `Treating Error Output as Untrusted Data` security section.
3. It truncates the 6 operational trigger conditions of `SKILL.md:14-19` into a single 3-part sentence.
4. It associates the skill with `Command /test` (`commands/test.toml`), whereas in the repo `debugging-and-error-recovery` is actually invoked by `Command /build` (`commands/build.toml:36, 42`).

The complete, verified inventory entry is ready to be written to `docs/analysis/inventory/addy/external-debugging-and-error-recovery-md.md`.

---

## 5. Verification Method

1. **Verify File Stats**:
   ```bash
   bun -e 'const f = await Bun.file("sources/addy-external/debugging-and-error-recovery.md").text(); console.log({byteLength: Buffer.byteLength(f), lines: f.split("\n").length})'
   ```
   *Expected Output*: `{ byteLength: 23705, lines: 20 }`.

2. **Verify Verbatim Purpose**:
   ```bash
   grep -n "Guides systematic root-cause debugging" sources/addy-external/debugging-and-error-recovery.md
   ```
   *Expected Output*: Lines 1 and 5 matching the quoted purpose.

3. **Verify Doc-Drift against SKILL.md**:
   Inspect line 5 of `sources/addy-external/debugging-and-error-recovery.md` against line 154 of `sources/addy/skills/debugging-and-error-recovery/SKILL.md` to confirm the absence of "Verify End-to-End" in the external summary.
