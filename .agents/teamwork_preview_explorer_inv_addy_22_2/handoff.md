# Handoff Report — inv-addy-22: Explorer 2 (`../addy-external/using-agent-skills.md`)

## 1. Observation
- Target file: `sources/addy-external/using-agent-skills.md` (21,955 bytes, 20 lines). Corresponds to manifest row 195 in `docs/analysis/manifest/addy.md:195` (`| ../addy-external/using-agent-skills.md | 21955 | external-doc | [ ] |`). Read in its entirety from line 1 to line 20.
- Purpose statement: Verbatim from `sources/addy-external/using-agent-skills.md:1, 5`:
  > "Discovers and invokes agent skills. The meta-skill that governs how all other skills are discovered and invoked - load it first and it routes each task to the right workflow."
- Lifecycle Phase: In `sources/addy-external/using-agent-skills.md:5, 12`, explicitly designated as `Meta` and `Meta phase`:
  - `<span class="crumb-phase" data-astro-cid-jrlgpo3w>Meta</span>` (line 5)
  - `<span class="chip phase-chip" data-astro-cid-jrlgpo3w><span class="phase-dot" data-astro-cid-jrlgpo3w></span>Meta phase</span>` (line 5)
  - `<h3 class="side-title" data-astro-cid-jrlgpo3w>Meta phase</h3>` (line 12)
  - `<p class="side-blurb" data-astro-cid-jrlgpo3w>Route work to the right skill and set shared operating rules.</p>` (line 12)
- Structure assertion and anatomy listing: Verbatim from `sources/addy-external/using-agent-skills.md:9-10`:
  - `Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads.` (line 9)
  - Anatomy rows: `01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification` (line 10)
  - Upstream reference link: `<a href="https://github.com/addyosmani/agent-skills/blob/main/skills/using-agent-skills/SKILL.md" target="_blank" rel="noopener" class="btn btn-primary panel-btn">Read the full SKILL.md</a>` (lines 10-11)
- Repository file discrepancy:
  - `sources/addy/skills/using-agent-skills/SKILL.md:1-193` contains sections: `Overview`, `Skill Discovery`, `Core Operating Behaviors` (1. Surface Assumptions, 2. Manage Confusion Actively, 3. Push Back When Warranted, 4. Enforce Simplicity, 5. Maintain Scope Discipline, 6. Verify, Don't Assume), `Failure Modes to Avoid`, `Skill Rules`, `Lifecycle Sequence`, `Quick Reference`. It contains NO `When to Use`, NO `Process`, NO `Rationalizations`, NO `Red Flags`, and NO `Verification`.
  - In `sources/addy/scripts/lib/skill-lint.js:57-60`, `using-agent-skills` is explicitly exempt from section checks:
    ```javascript
    const SECTION_EXEMPT_SKILLS = {
      'using-agent-skills': 'Meta-skill — orchestrates other skills; When-to-Use and Verification are not applicable to a routing document.',
    ...
    ```
  - Execution of `cd sources/addy && bun scripts/validate-skills.js`:
    Result: `✓  using-agent-skills (section checks exempt) ... 25 skills checked — 0 error(s), 0 warning(s) — PASSED` (Exit code: 0).
  - In `sources/addy/docs/skill-anatomy.md:37-73`, standard anatomy is 5 sections (`Overview`, `When to Use`, `Common Rationalizations`, `Red Flags`, `Verification`), omitting `Process` as a numbered section.
  - In `sources/addy/CLAUDE.md:21-26` and `README.md:353-377`, the lifecycle consists only of `Define`, `Plan`, `Build`, `Verify`, `Review`, `Ship`; neither mentions a `Meta` phase or lists `using-agent-skills` in the phase table.
- External installation tooling: `sources/addy-external/using-agent-skills.md:6, 8`:
  - Documents `npx skills add addyosmani/agent-skills --skill using-agent-skills` and points to `https://github.com/vercel-labs/skills` as the "open skills CLI", whereas repository documentation (`docs/getting-started.md:12`, `README.md:46`) documents `npx addy-skills add using-agent-skills`.
- Navigation and link targets:
  - In line 15, `Claude Code`, `Codex`, `Cursor`, and `Antigravity` all link to `/docs/getting-started/`, whereas separate markdown guides exist in `sources/addy/docs/`.
  - Upstream repo link: `https://github.com/addyosmani/agent-skills/blob/main/skills/using-agent-skills/SKILL.md`.

## 2. Logic Chain
1. **Source Nature:** Observation 1 shows that `sources/addy-external/using-agent-skills.md` is an Astro-generated static HTML page (21,955 bytes) mirroring `https://skills.addy.ie/skills/using-agent-skills/`.
2. **Facade Function:** Observation 4 shows that the page does not render the internal markdown content of `SKILL.md` (no routing tables, no assumptions template, no lifecycle sequence). It operates strictly as a web marketing and distribution catalog entry.
3. **Doc-Drift on Anatomy:** Observation 4 and 5 demonstrate that while the web page claims "Every skill follows the same anatomy" and displays 6 sections (`Overview`, `When to Use`, `Process`, `Rationalizations`, `Red Flags`, `Verification`), the underlying skill in `sources/addy/skills/using-agent-skills/SKILL.md` has an entirely distinct structure. Furthermore, the repository's validator (`scripts/lib/skill-lint.js:58`) explicitly acknowledges that these sections are "not applicable to a routing document" and grants an exemption. The external site displays a generic template rather than the actual skill structure.
4. **Doc-Drift on Skill Anatomy Standard:** Comparing `sources/addy-external/using-agent-skills.md:10` to `sources/addy/docs/skill-anatomy.md:37-73` reveals that the website introduced `03 Process` into the top-level anatomy list, whereas repository docs specify 5 sections.
5. **Phase Drift:** Observation 3 shows the website classifies `using-agent-skills` under a standalone `Meta phase` (`addy:Meta`), whereas repository configuration files (`CLAUDE.md`, `README.md`) categorize skills into 6 phases and omit `using-agent-skills` from the phase table entirely, while the skill itself claims `meta-skill` / cross-phase status.
6. **Tooling Divergence:** The website promotes Vercel's `skills CLI` (`vercel-labs/skills`), creating external toolchain coupling outside the Claude Code / npm `addy-skills` ecosystem.

## 3. Caveats
- The external HTML page was fetched during Phase 0 as a static snapshot into `sources/addy-external/using-agent-skills.md`. Dynamic client-side scripts (Netlify RUM, clipboard copy handlers) were inspected as static source code and not executed in a live browser.
- External URLs on `skills.addy.ie` (`/lifecycle/`, `/loops/`, `/teach/`, `/compare/`) are relative paths on the published website; only the downloaded snapshot file was inventoried.

## 4. Conclusion
`sources/addy-external/using-agent-skills.md` is a clean, fully extractable `external-doc` artifact (21,955 bytes) representing the public web catalog facade for Addy's meta-skill. It exhibits 5 distinct documentation drift defects against the repository implementation (false claim of uniform anatomy, 6-part vs 5-part anatomy specification, introduction of an undocumented "Meta phase", installation CLI package discrepancy, and collapsed setup guide links), and is an `orphan` within the repository graph. Its design intent as an external web discoverability facade remains sound and is documented in `analysis.md`.

## 5. Verification Method
1. **Full Line and Byte Verification:**
   ```bash
   bun -e 'const fs = require("fs"); const c = fs.readFileSync("sources/addy-external/using-agent-skills.md", "utf8"); console.log("Bytes:", Buffer.byteLength(c, "utf8"), "Lines:", c.split("\n").length);'
   ```
   *Expected:* `Bytes: 21955 Lines: 20`.
2. **Linter Exemption Verification:**
   ```bash
   cd sources/addy && bun scripts/validate-skills.js
   ```
   *Expected:* Line output confirming `✓  using-agent-skills (section checks exempt)` and `PASSED` with exit code 0.
3. **Reference Link Validation:**
   ```bash
   cd sources/addy && bun scripts/validate-reference-links.js
   ```
   *Expected:* Output confirming `25 skills checked — 0 error(s) — PASSED` with exit code 0.
4. **Inspect Analysis Output:**
   View `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_22_2/analysis.md` to confirm all required inventory fields are non-empty, verbatim quotes match line numbers, and concept names are exhaustive.
