# Handoff Report: Explorer 3 — inv-addy-22 (test-driven-development.md)

## 1. Observation
- Target File: `sources/addy-external/test-driven-development.md` (26,483 bytes, 20 lines, HTML format).
- Complete file inspection confirmed the file is an Astro-built static HTML landing page representing `https://skills.addy.ie/skills/test-driven-development/` (line 1, canonical link).
- Verbatim summary statement (`sources/addy-external/test-driven-development.md:5`):
  > "Drives development with tests. Red-Green-Refactor, test pyramid (80/15/5), test sizes, DAMP over DRY, the Beyoncé Rule, and browser testing. Tests are proof, not an afterthought."
- Comparison with upstream repository skill (`sources/addy/skills/test-driven-development/SKILL.md`):
  - Description in `SKILL.md:3`: `"Drives development with tests. Use when implementing any logic, fixing any bug, or changing any behavior. Use when you need to prove that code works, when a bug report arrives, or when you're about to modify existing functionality."`
  - When to use in `SKILL.md:12-20`: Lists 5 positive bullet points plus an explicit `"When NOT to use"` boundary. In `test-driven-development.md:5`, this is collapsed to `"Implementing logic, fixing bugs, or changing behavior."`
  - Anatomy in `test-driven-development.md:10`: Outlines a 6-step template (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`). In `SKILL.md:24-387`, there is no `Process` heading, but rather technical domain sections (`Discover the Stack First`, `The TDD Cycle`, `The Prove-It Pattern`, `The Test Pyramid`, `Writing Good Tests`, etc.), and the rationalizations section is named `## Common Rationalizations`.
  - Phase and command badges: `test-driven-development.md:5` displays detail command badge `/test` and crumb `Build phase`. Adjacent sidebar (`test-driven-development.md:12`) displays `Build phase` with command `/build`.
  - Orthography: `test-driven-development.md:1, 5` uses `Beyoncé Rule` (with acute accent é), whereas `SKILL.md:161` uses `Beyonce Rule` (unaccented e).
- In-scope references: No file in `sources/addy` links to or references `https://skills.addy.ie/skills/test-driven-development/` or `sources/addy-external/test-driven-development.md`.

## 2. Logic Chain
1. Per `METHOD.md` §1.1 and §3 (R1-R6), all external documentation pages listed in `docs/analysis/manifest/addy.md` are in scope as `external-doc` and must be read in full (line 1 to 20 verified).
2. The purpose statement is extracted verbatim from the page's `<p class="detail-summary">` and `<meta name="description">` at line 5 (Observation 1).
3. Comparing `sources/addy-external/test-driven-development.md` to `sources/addy/skills/test-driven-development/SKILL.md` reveals documentation drift in three areas: (a) summary/description text, (b) omission of triggering boundaries and "When NOT to use" criteria, and (c) structural divergence between the generic 6-step website template schema and the actual technical sections of `SKILL.md` (Observation 2).
4. An internal contradiction exists on the page between the `/test` badge in the header and the `/build` command in the phase sidebar card (Observation 2).
5. Cross-file consistency analysis with `sources/addy/skills/using-agent-skills/SKILL.md:180` reveals phase classification drift: external doc and README place `test-driven-development` in `Build`, while `using-agent-skills` classifies it under `Verify`.
6. Because no file in `sources/addy` references or invokes `skills.addy.ie` or this snapshot, it is classified as `orphan` in `Invoked by` per METHOD.md rules (Observation 3).
7. Exhaustive extraction of named concepts yields 50 named entities covering techniques, artifacts, frameworks, and tools (Observation 2).

## 3. Caveats
- The file is HTML produced by an Astro build pipeline; embedded JavaScript event listeners and Netlify analytics scripts were inspected but not executed in a browser engine.
- External stylesheets (`/_astro/*.css`) and remote CDN assets (`fonts.googleapis.com`) are referenced but not present locally in the workspace.

## 4. Conclusion
The file `sources/addy-external/test-driven-development.md` has been completely inventoried. A fully compliant draft inventory entry has been produced and saved to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_22_3/analysis.md`. All required fields, verbatim extractions, exhaustive concept cards candidates, and defects are fully documented.

## 5. Verification Method
- Inspect the generated draft: `cat /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_22_3/analysis.md`
- Verify line count of the source file: `wc -l /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/test-driven-development.md` (20 lines, 26,483 bytes)
- Invalidation conditions: Any discrepancy in cited line numbers (e.g. line 5 for summary, line 10 for anatomy, line 12 for sidebar), unquoted verbatim text, or omitted concepts.
