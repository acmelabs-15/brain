# Handoff Report: `sources/addy/skills/interview-me/SKILL.md`

**Work Unit**: inv-addy-18  
**Agent**: Explorer 1 (`teamwork_preview_explorer`)  
**Working Directory**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_18_1`  
**Handoff Type**: Hard (Task Complete)  

---

## 1. Observation
1. **Target File Integrity**: `sources/addy/skills/interview-me/SKILL.md` was read in full from line 1 to line 226 without truncation (size: 14,359 bytes).
2. **Skill Purpose Statement**:
   - `skills/interview-me/SKILL.md:3`: `"Extracts what the user actually wants instead of what they think they should want. Achieves this through one-question-at-a-time interview until ~95% confidence about the underlying intent. Use when an ask is underspecified (\"build me X\" without \"for whom\" or \"why now\"), when the user explicitly invokes (\"interview me\", \"grill me\", \"are we sure?\", \"stress-test my thinking\"), or when you catch yourself silently filling in ambiguous requirements before any plan, spec, or code exists."`
   - `skills/interview-me/SKILL.md:14`: `"This skill closes the gap before it costs anything. The other Define-phase skills assume you already know roughly what you want: idea-refine generates variations from an idea, spec-driven-development writes the requirements down, doubt-driven-development stress-tests a plan after you've drafted one. Interview-me is the part before all of those, where you ask one question at a time, with your best guess attached, until you can predict what the user is going to say before they say it."`
3. **Scripts & Validation**:
   - `sources/addy/skills/interview-me/` contains no scripts or code directories (single markdown file).
   - Validation script execution: `bun sources/addy/scripts/validate-skills.js` exited 0 with `✓  interview-me` across 25 skills checked.
   - Eval suite verification: `sources/addy/evals/cases/interview-me.json` defines a dialogue eval (`kind: "dialogue"`, `top_k: 3`). Test suite `bun test ./sources/addy/scripts/run-evals-test.js` passed 15/15 tests with exit code 0.
4. **Path & Artifact Existence**:
   - Referenced skills `idea-refine`, `spec-driven-development`, `doubt-driven-development`, `planning-and-task-breakdown`, and `source-driven-development` all exist in `sources/addy/skills/`.
   - `docs/intent/[topic].md` (`skills/interview-me/SKILL.md:138`): Directory `docs/intent/` does not exist in `sources/addy/`.
   - `validate-artifact-paths.js:35-40`: `ARTIFACT_ALLOWLIST` enforces only `SPEC.md`, `docs/SPEC.md`, `tasks/plan.md`, `tasks/todo.md`, omitting `docs/intent/[topic].md`.
5. **Documentation Drift Findings**:
   - `docs/comparison.md:92` claims `interview-me` is "gaining an opt-in collaborative mode", but no collaborative mode exists in `skills/interview-me/SKILL.md`.
   - `sources/addy-external/interview-me.md:12` renders `Command: /spec` in the Define phase sidebar, but `interview-me` has no command binding and `/spec` strictly binds to `spec-driven-development`.

---

## 2. Logic Chain
1. **Observation 1 & 2** establish that `interview-me` is an interactive conversational intake protocol for the `addy:Define` phase, operating chronologically prior to any spec, plan, or code generation.
2. **Observation 3** confirms that the skill has no code execution scripts of its own, but complies fully with repository skill schema standards and passes all validation tests (`validate-skills.js` and `run-evals-test.js`).
3. **Observation 4** indicates that while the downstream skills exist, `docs/intent/` was never provisioned in the repository, making persistent intent saving an informal path convention rather than an enforced repo artifact.
4. **Observation 5** demonstrates documentation drift between the high-level comparison documentation, the external web representation, and the concrete skill implementation.
5. Consequently, all 5 defects found are non-fatal documentation or path omissions (per METHOD.md R5, defects do not disqualify design intent).

---

## 3. Caveats
- No eval execution against a live LLM endpoint was run; dialogue evaluation schemas were validated via the test runner mocks in `run-evals-test.js`.
- The external doc `sources/addy-external/interview-me.md` was fetched during Phase 0 as a static HTML snapshot from `https://skills.addy.ie/skills/interview-me/`; any post-snapshot modifications to Addy's website are out of scope.

---

## 4. Conclusion
`sources/addy/skills/interview-me/SKILL.md` is an exceptionally cohesive, well-structured, and complete conversational discovery skill. It establishes rigorous gates against premature agent coding (one-question-at-a-time, attached guesses, 70% confidence justification threshold, 95% predictive stop condition, mandatory "Out of scope" restatement, and explicit confirmation gate).
The complete inventory entry has been drafted in full compliance with `docs/plan/templates/inventory-entry.md` and saved in `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_18_1/report.md`.

---

## 5. Verification Method
To independently verify these findings:
1. View the report and draft inventory:
   `view_file` at `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_18_1/report.md`
2. Run skill validation:
   `bun sources/addy/scripts/validate-skills.js` (exits 0, confirms `interview-me` passes skill schema checks)
3. Run evals test suite:
   `bun test ./sources/addy/scripts/run-evals-test.js` (exits 0, confirms 15 tests pass)
4. Confirm absence of `docs/intent`:
   `ls sources/addy/docs/intent` (returns `No such file or directory`)
5. Check repo glossary and coverage scripts:
   `bun scripts/synthesis/glossary-lint.ts` (clean)
