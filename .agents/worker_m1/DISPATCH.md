## 2026-09-02T11:15:45Z
You are worker_m1. Your working directory is /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_m1.

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
Extract complete, high-fidelity inventory entries for the 9 Gemini slash command files in `inv-addy-1` (`sources/addy/.gemini/commands/*.toml`):
1. `sources/addy/.gemini/commands/ship.toml` (4,780 bytes)
2. `sources/addy/.gemini/commands/webperf.toml` (1,884 bytes)
3. `sources/addy/.gemini/commands/planning.toml` (635 bytes)
4. `sources/addy/.gemini/commands/review.toml` (844 bytes)
5. `sources/addy/.gemini/commands/constraints.toml` (2,775 bytes)
6. `sources/addy/.gemini/commands/build.toml` (3,840 bytes)
7. `sources/addy/.gemini/commands/spec.toml` (911 bytes)
8. `sources/addy/.gemini/commands/code-simplify.toml` (1,066 bytes)
9. `sources/addy/.gemini/commands/test.toml` (650 bytes)

Requirements:
- Read every assigned file completely from line 1 to EOF (R1).
- Every claim must cite exact `path:line` (R2).
- Verbatim fields must be quoted exact text from source (R3).
- Use `addy:<term>` prefix for unaligned terms (R4).
- Record defects in `Defects` field or explicitly write `none` (R5).
- Capture all named techniques, roles, artifacts, gates in `Concepts named` (R6).
- Follow `docs/plan/templates/inventory-entry.md` exactly. All 13 sections must be present, no empty fields (write `none` where empty).
- Run `bun run sources/addy/scripts/validate-commands.js` to verify command validity and document command & output.

Save each inventory entry file into:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_m1/entries/<slug>.md`
(e.g., `gemini-commands-ship-toml.md`, etc.).
Write a summary and self-contained handoff to:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_m1/handoff.md`.
Send a completion message when done.
