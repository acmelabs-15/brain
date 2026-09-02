## 2026-09-02T11:15:45Z
You are worker_m2. Your working directory is /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_m2.

Read the following files before starting:
1. /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
2. /Users/peterkloss/Dev/ACMElabs/brain-v2/PROJECT.md
3. /Users/peterkloss/Dev/ACMElabs/brain-v2/TEST_INFRA.md
4. docs/plan/METHOD.md (specifically §3 Rules R1-R6, §4 Inventory extraction checklist, §5 Deliverables)
5. docs/plan/templates/inventory-entry.md
6. /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_1/survey_spec.md
7. /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_1/survey_files.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Your assignment:
Extract complete, high-fidelity inventory entries for the first 10 eval cases (Batch A) in `inv-addy-1` (`sources/addy/evals/cases/*.json`):
1. `sources/addy/evals/cases/code-review-and-quality.json` (1,374 bytes)
2. `sources/addy/evals/cases/source-driven-development.json` (1,287 bytes)
3. `sources/addy/evals/cases/interview-me.json` (1,197 bytes)
4. `sources/addy/evals/cases/ci-cd-and-automation.json` (1,349 bytes)
5. `sources/addy/evals/cases/test-driven-development.json` (3,981 bytes)
6. `sources/addy/evals/cases/security-and-hardening.json` (1,311 bytes)
7. `sources/addy/evals/cases/doubt-driven-development.json` (1,274 bytes)
8. `sources/addy/evals/cases/spec-driven-development.json` (2,657 bytes)
9. `sources/addy/evals/cases/idea-refine.json` (1,269 bytes)
10. `sources/addy/evals/cases/incremental-implementation.json` (1,942 bytes)

Requirements:
- Read every assigned file completely from line 1 to EOF (R1).
- Every claim must cite exact `path:line` (R2).
- Verbatim fields must be quoted exact text from source (R3).
- Use `addy:<term>` prefix for unaligned terms (R4).
- Record defects in `Defects` field or explicitly write `none` (R5).
- Capture all named techniques, roles, artifacts, gates in `Concepts named` (R6).
- Follow `docs/plan/templates/inventory-entry.md` exactly. All 13 sections must be present, no empty fields (write `none` where empty).
- Run `bun run sources/addy/scripts/run-evals.js` to verify eval case validity and document command & output.

Save each inventory entry file into:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_m2/entries/<slug>.md`
(e.g., `evals-cases-code-review-and-quality-json.md`, etc.).
Write a summary and self-contained handoff to:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_m2/handoff.md`.
Send a completion message when done.
