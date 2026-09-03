# Handoff Report: Spec Mining `skills/code-review-and-quality/SKILL.md` (inv-addy-16)

## 1. Observation
- Target source file inspected in full: `sources/addy/skills/code-review-and-quality/SKILL.md` (20,555 bytes, 397 lines).
- Verbatim purpose:
  > "Multi-dimensional code review with quality gates. Every change gets reviewed before merge — no exceptions. Review covers five axes: correctness, readability, architecture, security, and performance." — `skills/code-review-and-quality/SKILL.md:10`
- Directory check: `sources/addy/skills/code-review-and-quality/` contains only `SKILL.md` (no `scripts/`, no local `references/`).
- External references cited in `SKILL.md`:
  - `skills/security-and-hardening/SKILL.md` (lines 66, 300)
  - `skills/performance-optimization/SKILL.md` (line 79)
  - `../../references/security-checklist.md` (line 351) -> verified present at `sources/addy/references/security-checklist.md` (4,924 bytes)
  - `../../references/performance-checklist.md` (line 352) -> verified present at `sources/addy/references/performance-checklist.md` (12,637 bytes)
- Invocations of `code-review-and-quality` found across codebase:
  - Commands: `commands/review.toml:4`, `commands/code-simplify.toml:21`, `.claude/commands/review.md:5`, `.claude/commands/code-simplify.md:22`, `.gemini/commands/review.toml:4`, `.gemini/commands/code-simplify.toml:21`.
  - Persona: `agents/code-reviewer.md:49, 101`.
  - Skills: `skills/git-workflow-and-versioning/SKILL.md:113`, `skills/doubt-driven-development/SKILL.md:225`, `skills/constraint-driven-development/SKILL.md:10, 33, 307`, `skills/using-agent-skills/SKILL.md:33, 137, 156, 164, 183`.
  - Reference docs: `references/definition-of-done.md:35`, `references/orchestration-patterns.md:35`.
  - Project documentation: `README.md:56, 268, 367`, `CLAUDE.md:25`, `AGENTS.md:29, 44`, and setup guides under `docs/`.
  - External documentation snapshot: `sources/addy-external/code-review-and-quality.md:1, 5, 8, 10, 12` (26,687 bytes).
- Eval test case check: `evals/cases/code-review-and-quality.json` (1,374 bytes) and fixture `evals/fixtures/code-review-and-quality/user-search.diff` (513 bytes).
- Script execution test: `bun scripts/run-evals.js` executed from `sources/addy/` returned exit code 0 (`136 checks passed — 0 error(s), 0 warning(s)`).
- Documented defects:
  1. `doc-drift`: `commands/review.toml:14`, `.claude/commands/review.md:15`, `.gemini/commands/review.toml:14` instruct findings to be categorized as "Critical, Important, or Suggestion", contradicting `SKILL.md:181-188` which establishes `*(no prefix)*` (Required), `Critical:`, `Nit:`, `Optional: / Consider:`, and `FYI`.
  2. `doc-drift`: `README.md:268` describes severity labels as `(Nit/Optional/FYI)`, omitting the merge-blocking categories `Critical` and `Required`.
  3. `doc-drift`: `agents/code-reviewer.md:101` and `references/orchestration-patterns.md:35` claim `/review` routes to the `code-reviewer` agent persona, whereas `commands/review.toml:4` and `.claude/commands/review.md:5` directly invoke `code-review-and-quality` skill.
  4. `internal-contradiction`: `SKILL.md:181-188` defines required findings as having `*(no prefix)*`, whereas the prompt template on line 228 specifies "Critical, Required, Optional, or Nit".
  5. `cross-file-contradiction`: `SKILL.md:113` identifies 1,000 total lines in a file as the decomposition inspection signal, whereas `skills/code-simplification/SKILL.md:25` sets the "Rule of 500" (500 lines warning, 1,000 lines crisis).

## 2. Logic Chain
1. From direct full-text reading of `sources/addy/skills/code-review-and-quality/SKILL.md` (lines 1–397), the skill specifies a multi-dimensional code review process spanning five axes (correctness, readability, architecture, security, performance).
2. Comparing the section headers, prompt examples, and tables across `SKILL.md`, `commands/review.toml`, `README.md`, and `agents/code-reviewer.md` revealed distinct documentation drift regarding severity labels and persona orchestration.
3. Checking disk contents via `list_dir` established that `skills/code-review-and-quality/` contains no scripts or local references.
4. Comparing file size references established that `SKILL.md` is 20,555 bytes (~5,140 tokens) standalone, and 38,116 bytes (~9,530 tokens) when combined with referenced checklists.
5. All 10 required fields of `docs/plan/templates/inventory-entry.md` were extracted with exact verbatim text and line citations, satisfying METHOD.md rules R1–R6.

## 3. Caveats
No caveats. The entire target file, related commands, eval cases, referenced checklists, and documentation references were directly inspected and verified against the pinned repository checkout.

## 4. Conclusion
The specification mining for `skills/code-review-and-quality/SKILL.md` is complete, thoroughly evidenced, and fully documented in `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_16_crq/report.md`. The inventory entry draft is ready for synthesis into `docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md`.

## 5. Verification Method
1. Inspect report: `view_file` on `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_16_crq/report.md`.
2. Verify line numbers: compare cited lines against `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/code-review-and-quality/SKILL.md`.
3. Verify test pass: run `bun scripts/run-evals.js` in `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy` to observe 136 checks passing.
4. Invalidation conditions: Any re-pinning of `sources/addy` that alters line numbers or content in `skills/code-review-and-quality/SKILL.md`.
