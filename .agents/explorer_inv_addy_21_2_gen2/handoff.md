# Handoff Report: `sources/addy-external/idea-refine.md`

**Unit:** `inv-addy-21`  
**Agent Role:** Explorer 2 (Source File Deep-Dive Explorer)  
**Target File:** `sources/addy-external/idea-refine.md` (24,943 bytes, 20 lines)  
**Manifest Entry:** `docs/analysis/manifest/addy.md:193` (`| ../addy-external/idea-refine.md | 24943 | external-doc | [ ] |`)  
**Deliverable Output Path:** `docs/analysis/inventory/addy/external-idea-refine-md.md`  

---

## 1. Observation

1. **Exact File Dimensions and Format:**
   - Path: `sources/addy-external/idea-refine.md`
   - Exact size: 24,943 bytes (`wc -c`: 24,943).
   - Exact lines: 20 lines (`wc -l`: 19 newlines, 20 lines total).
   - Format: Full-page compiled HTML from an Astro SSG deployment, containing inline scoped CSS (`data-astro-cid-*`), SVG icons, and a Netlify RUM script (`sources/addy-external/idea-refine.md:1-20`).

2. **Verbatim Purpose Statement:**
   - `<meta name="description" content="Refines raw ideas into sharp, actionable concepts through structured divergent and convergent thinking. Stress-test assumptions and expand options before converging on one.">` — `sources/addy-external/idea-refine.md:1`
   - `<p class="detail-summary" data-astro-cid-jrlgpo3w>Refines raw ideas into sharp, actionable concepts through structured divergent and convergent thinking. Stress-test assumptions and expand options before converging on one.</p>` — `sources/addy-external/idea-refine.md:5`

3. **Lifecycle Phase & Navigation:**
   - Rendered breadcrumbs and chips: `<span class="crumb-phase" data-astro-cid-jrlgpo3w>Define</span>` and `<span class="chip phase-chip" data-astro-cid-jrlgpo3w><span class="phase-dot" data-astro-cid-jrlgpo3w></span>Define phase</span>` (`sources/addy-external/idea-refine.md:5`).
   - Sidebar block: `<h3 class="side-title" data-astro-cid-jrlgpo3w>Define phase</h3><p class="side-blurb" data-astro-cid-jrlgpo3w>Clarify what to build before a line of code is written.</p><div class="side-row" data-astro-cid-jrlgpo3w><span data-astro-cid-jrlgpo3w>Command</span><code class="mono" data-astro-cid-jrlgpo3w>/spec</code></div>` (`sources/addy-external/idea-refine.md:12`).
   - Related skills listed: `interview-me` and `spec-driven-development` (`sources/addy-external/idea-refine.md:12`).

4. **Skill Anatomy Assertion:**
   - `<p class="panel-lede" data-astro-cid-jrlgpo3w>Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads.</p>` (`sources/addy-external/idea-refine.md:9`).
   - Standard 6-part list: `01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification` (`sources/addy-external/idea-refine.md:10`).

5. **Actual Repository Skill Headings:**
   - In `sources/addy/skills/idea-refine/SKILL.md:10-179`:
     - `# Idea Refine` (line 6)
     - `## How It Works` (line 10)
     - `## Usage` (line 16)
     - `## Output` (line 30)
     - `## Detailed Instructions` (line 39)
       - `### Philosophy` (line 43)
       - `### Process` (line 52)
       - `### Anti-patterns to Avoid` (line 142)
       - `### Tone` (line 153)
     - `## Red Flags` (line 158)
     - `## Verification` (line 168)
   - Linter exception in `sources/addy/scripts/lib/skill-lint.js:59`:
     `'idea-refine': 'Legacy structure predating skill-anatomy.md — uses How-It-Works/Usage/Anti-patterns instead of standard headings. Tracked for conformance in https://github.com/addyosmani/agent-skills/issues'`

6. **Slash Command Mapping:**
   - `sources/addy/commands/spec.toml:4` and `sources/addy/.claude/commands/spec.md:4` explicitly state: `Invoke the spec-driven-development skill.`
   - No slash command exists for `idea-refine` in `commands/` or `.claude/commands/`.

7. **Documented CLI Invocations and Execution Results:**
   - `sources/addy-external/idea-refine.md:8`: `npx skills add addyosmani/agent-skills --skill idea-refine`
   - Command run: `npx --yes skills add addyosmani/agent-skills --skill idea-refine --list`
   - Output: Exited with code `0`. Successfully queried package and listed `idea-refine` with its description.
   - Script run: `cd sources/addy && bash skills/idea-refine/scripts/idea-refine.sh`
   - Output: Exited with code `0`. Produced `Created directory: docs/ideas\n{"status": "ready", "directory": "docs/ideas"}`.

---

## 2. Logic Chain

1. **Document Classification and Origin:**
   From Observation 1, the file is a captured HTML snapshot of `https://skills.addy.ie/skills/idea-refine/` generated using the Astro static site builder, served via Netlify (`sources/addy-external/idea-refine.md:19`). It is classified as an `external-doc` per `docs/analysis/manifest/addy.md:193`.

2. **Phase Determination:**
   From Observation 3, the document renders breadcrumb navigation, status chips, and a sidebar card explicitly labeling `idea-refine` as part of the `Define phase` (`addy:Define`).

3. **Detection of Structural Doc-Drift:**
   From Observation 4, the external page asserts that "Every skill follows the same anatomy" and displays 6 sections including `04 Rationalizations`. From Observation 5, `sources/addy/skills/idea-refine/SKILL.md` does not have an Overview, When to Use, or Rationalizations section, and is formally documented in `sources/addy/scripts/lib/skill-lint.js:59` as using a legacy structure predating `skill-anatomy.md`. Therefore, the external web page presents an inaccurate representation of `idea-refine`'s actual markdown structure.

4. **Detection of Command Association Doc-Drift:**
   From Observation 3, the sidebar for `idea-refine` displays `Command: /spec`. From Observation 6, `/spec` is dedicated exclusively to `spec-driven-development`, while `idea-refine` has no slash command in the Addy package. Associating `/spec` directly with `idea-refine` on this page creates a misleading impression of the invocation contract.

5. **Operational Shell vs Execution Engine:**
   Comparing `sources/addy-external/idea-refine.md` with `sources/addy/skills/idea-refine/SKILL.md` shows that the external page is an installation and marketing wrapper. It omits the 7 divergent ideation lenses, 3 convergent evaluation criteria, 6 frameworks (`frameworks.md`), evaluation rubric (`refinement-criteria.md`), 3 transcripts (`examples.md`), interactive prompt tool (`AskUserQuestion`), and output template (`docs/ideas/[idea-name].md`), directing all detailed execution to GitHub (`sources/addy-external/idea-refine.md:11`).

6. **Context Cost Impact:**
   Out of 24,943 bytes, over 23,000 bytes (~92%) consist of CSS layout styles, SVG icons, site navigation, and Netlify tracking scripts. The semantic information content is less than 2,000 bytes.

---

## 3. Caveats

1. **Static Snapshot:** The file reflects the state of `skills.addy.ie` at the time of Phase 0 snapshotting. If the upstream website is re-deployed, this pinned local file remains immutable for all Phase 1 analysis.
2. **HTML Representation in Markdown File:** The file extension is `.md`, but the content is raw HTML. No markdown parser or post-processing has been applied to normalize it into clean markdown text.
3. **External Website Routes:** Links like `/tutorials/`, `/lifecycle/`, `/loops/`, and `/compare/` refer to routes on `skills.addy.ie`, not local directories within the repository.

---

## 4. Conclusion

`sources/addy-external/idea-refine.md` is an `external-doc` of 24,943 bytes representing the public web catalog page for `idea-refine` at `https://skills.addy.ie/skills/idea-refine/`. It assigns the skill to `addy:Define` and provides functional installation commands via Vercel's `skills` CLI (`npx skills add addyosmani/agent-skills --skill idea-refine`).

The investigation revealed three significant defects per METHOD.md §4 checklist:
1. `doc-drift` (Structural): Claims `idea-refine` follows the 6-part standardized anatomy including Rationalizations, whereas the repository file uses a legacy structure exempted in `skill-lint.js`.
2. `doc-drift` (Command): Pairs `Command: /spec` with the Define phase sidebar on this skill page, whereas `/spec` strictly invokes `spec-driven-development` and `idea-refine` lacks a slash command.
3. `doc-drift` (Trigger/Operational Omission): Flattens rich triggers and omits all sub-references, tools, scripts, and output templates.

All required fields for the inventory entry have been extracted and verified in `analysis.md` and are ready for compilation into `docs/analysis/inventory/addy/external-idea-refine-md.md`.

---

## 5. Verification Method

To independently verify these findings:

1. **Verify File Stats:**
   ```bash
   wc -c -l sources/addy-external/idea-refine.md
   # Expected: 19 newlines (20 lines), 24943 bytes
   ```

2. **Verify Verbatim Purpose and Headings:**
   ```bash
   grep -n "Refines raw ideas" sources/addy-external/idea-refine.md
   grep -n "Every skill follows the same anatomy" sources/addy-external/idea-refine.md
   grep -n "Define phase" sources/addy-external/idea-refine.md
   ```

3. **Verify Slash Command Binding in Repo:**
   ```bash
   grep -n "spec-driven-development" sources/addy/commands/spec.toml sources/addy/.claude/commands/spec.md
   grep -rn "idea-refine" sources/addy/commands/ sources/addy/.claude/commands/
   # Expected: /spec binds to spec-driven-development; no command binds to idea-refine
   ```

4. **Verify Linter Exemption:**
   ```bash
   sed -n '58,62p' sources/addy/scripts/lib/skill-lint.js
   # Expected: Explicit note of legacy structure predating skill-anatomy.md
   ```

5. **Verify CLI and Script Execution:**
   ```bash
   npx --yes skills add addyosmani/agent-skills --skill idea-refine --list
   cd sources/addy && bash skills/idea-refine/scripts/idea-refine.sh && rm -rf docs/ideas
   # Expected: Both commands exit with code 0
   ```
