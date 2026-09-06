---
package: rjm
path: .claude/skills/retrospective/scripts/run_retrospective.py
type: script
bytes: 16716
unit: inv-rjm-149
in_scope_via: .claude/skills/retrospective/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/retrospective/scripts/run_retrospective.py

## Purpose — required, verbatim
> "Orchestrate the retrospective workflow and persist an artifact." — .claude/skills/retrospective/scripts/run_retrospective.py:2

## Design intent — required
Deterministic CLI orchestrator bridging Phase 0 evidence extraction, Phase 4 atomicity scoring, and canonical markdown scaffold generation for the retrospective lifecycle process. It leaves subjective interpretative sections (Five Whys, fishbone analysis, diagnosis prose) as structured placeholders for the human or agent reviewer, while automatically populating data-bearing sections (session log work items, outcomes, commit history, and scored learnings). Supports generating new dated retrospective documents under `.agents/retrospective/` or filling existing auto-retrospective skeleton files (`--fill`), enforcing ADR-035 semantic exit codes and cross-platform artifact resolution rules without altering repository state beyond writing a single markdown artifact.

## Phase — required
rjm:support

## Inputs — required
- CLI argument `--scope` (Retrospective scope label; defaults to host_session_date()) — .claude/skills/retrospective/scripts/run_retrospective.py:435-438
- CLI argument `--project-dir` (Repository root; defaults to current directory) — .claude/skills/retrospective/scripts/run_retrospective.py:440-443
- CLI argument `--since` (git log --since value bounding the period) — .claude/skills/retrospective/scripts/run_retrospective.py:445-448
- CLI argument `--learning` (Repeatable candidate learning statement to score and include) — .claude/skills/retrospective/scripts/run_retrospective.py:450-455
- CLI argument `--fill` (Path to an existing auto-retro skeleton to overwrite) — .claude/skills/retrospective/scripts/run_retrospective.py:457-460
- CLI argument `--output` (Explicit output path override) — .claude/skills/retrospective/scripts/run_retrospective.py:462-465
- Phase 0 evidence gathered via `gather_evidence(project_dir, args.scope, args.since)` — .claude/skills/retrospective/scripts/run_retrospective.py:483
- Target skeleton file content inspected for UNFILLED banner — .claude/skills/retrospective/scripts/run_retrospective.py:19

## Outputs — required
- Retrospective markdown artifact: `.agents/retrospective/YYYY-MM-DD-[scope].md` — .claude/skills/retrospective/scripts/run_retrospective.py:16
- stdout: Path to written artifact file — .claude/skills/retrospective/scripts/run_retrospective.py:513
- stderr: Error diagnostic messages on validation or runtime failures — .claude/skills/retrospective/scripts/run_retrospective.py:476,485,491,503,510
- exit code: 0 (artifact written), 1 (a supplied learning scored below persistence threshold), 2 (usage/config error), 3 (unexpected external failure) — .claude/skills/retrospective/scripts/run_retrospective.py:25-28,477,486,492,504,511,514

## Invokes — required
- reference learning-template.md — .claude/skills/retrospective/scripts/run_retrospective.py:8
- script extract_evidence — .claude/skills/retrospective/scripts/run_retrospective.py:5
- script score_atomicity — .claude/skills/retrospective/scripts/run_retrospective.py:6

## Invoked by — required
- skill retrospective — .claude/skills/retrospective/SKILL.md:191

## Concepts named — required, verbatim
- `Phase 0..5` — .claude/skills/retrospective/scripts/run_retrospective.py:4 — used here
- `extract_evidence` — .claude/skills/retrospective/scripts/run_retrospective.py:5 — used here
- `score_atomicity` — .claude/skills/retrospective/scripts/run_retrospective.py:6 — used here
- `learning-template.md` — .claude/skills/retrospective/scripts/run_retrospective.py:8 — used here
- `Five Whys` — .claude/skills/retrospective/scripts/run_retrospective.py:10 — used here
- `fishbone` — .claude/skills/retrospective/scripts/run_retrospective.py:10 — used here
- `UNFILLED banner` — .claude/skills/retrospective/scripts/run_retrospective.py:19 — used here
- `UNFILLED SKELETON` — .claude/skills/retrospective/scripts/run_retrospective.py:425 — used here
- `ADR-035` — .claude/skills/retrospective/scripts/run_retrospective.py:24 — used here
- `ADR-047` — .claude/skills/retrospective/scripts/run_retrospective.py:49 — used here
- `PERSISTENCE_THRESHOLD` — .claude/skills/retrospective/scripts/run_retrospective.py:128 — used here
- `Session Info` — .claude/skills/retrospective/scripts/run_retrospective.py:221 — defined here
- `Phase 0: Data Gathering` — .claude/skills/retrospective/scripts/run_retrospective.py:227 — defined here
- `Phase 1: Insights Generated` — .claude/skills/retrospective/scripts/run_retrospective.py:230 — defined here
- `Phase 2: Diagnosis` — .claude/skills/retrospective/scripts/run_retrospective.py:236 — defined here
- `Phase 3: Decisions` — .claude/skills/retrospective/scripts/run_retrospective.py:253 — defined here
- `Phase 4: Extracted Learnings` — .claude/skills/retrospective/scripts/run_retrospective.py:264 — defined here
- `Skillbook Updates` — .claude/skills/retrospective/scripts/run_retrospective.py:268 — defined here
- `Deduplication Check` — .claude/skills/retrospective/scripts/run_retrospective.py:296 — defined here
- `Phase 5: Persist and Close` — .claude/skills/retrospective/scripts/run_retrospective.py:301 — defined here
- `Memory Persistence` — .claude/skills/retrospective/scripts/run_retrospective.py:303 — defined here
- `+/Delta` — .claude/skills/retrospective/scripts/run_retrospective.py:309 — defined here
- `Delta Triage` — .claude/skills/retrospective/scripts/run_retrospective.py:317 — defined here
- `ROTI Assessment` — .claude/skills/retrospective/scripts/run_retrospective.py:343 — defined here
- `Helped, Hindered, Hypothesis` — .claude/skills/retrospective/scripts/run_retrospective.py:355 — defined here
- `RETRO-STATE` — .claude/skills/retrospective/scripts/run_retrospective.py:425 — used here

## Structure
none (python script; functions and classes: `EvidenceLike`, `_resolve_paths_lib_dir`, `_artifact_root_is_set`, `_artifact_dir`, `_load_sibling`, `_render_session_context`, `_scope_date`, `_artifact_date`, `_render_learnings`, `render_artifact`, `_safe_scope_filename`, `_resolve_output_path`, `_require_project_output_path`, `_require_fill_path`, `_require_unfilled_skeleton`, `build_parser`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/retrospective/scripts/run_retrospective.py`, language: Python 3, lines: 519
- documented invocation:
  - "scripts/run_retrospective.py" — .claude/skills/retrospective/SKILL.md:191
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/retrospective/scripts/run_retrospective.py --project-dir /Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-10/.agents/worker_17 --output /Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-10/.agents/worker_17/test-retro.md --scope "2026-09-05-test" --learning "Always run lint before commit to prevent 50% of CI failures"`
  abridged stdout:
  ```
  /Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-10/.agents/worker_17/test-retro.md
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in script docstring and SKILL.md:
  - "0: artifact written" — .claude/skills/retrospective/scripts/run_retrospective.py:25
  - "1: a supplied learning scored below the persistence threshold (still written)" — .claude/skills/retrospective/scripts/run_retrospective.py:26
  - "2: usage or configuration error" — .claude/skills/retrospective/scripts/run_retrospective.py:27
  - "3: unexpected external failure" — .claude/skills/retrospective/scripts/run_retrospective.py:28
  Actual exit paths in code:
  - `return 0` (.claude/skills/retrospective/scripts/run_retrospective.py:514) when all learnings meet or exceed threshold
  - `return 1` (.claude/skills/retrospective/scripts/run_retrospective.py:514) when `any_below` is true
  - `return 2` (.claude/skills/retrospective/scripts/run_retrospective.py:477) when project dir not found
  - `return 2` (.claude/skills/retrospective/scripts/run_retrospective.py:492) on `ValueError` during `render_artifact`
  - `return 2` (.claude/skills/retrospective/scripts/run_retrospective.py:504) on `ValueError` during output path resolution
  - `return 3` (.claude/skills/retrospective/scripts/run_retrospective.py:486) on exception during `gather_evidence`
  - `return 3` (.claude/skills/retrospective/scripts/run_retrospective.py:511) on `OSError` writing artifact
  - `sys.exit(main())` — .claude/skills/retrospective/scripts/run_retrospective.py:518
- for validators/gates: can it exit non-zero? Yes: exits 1 when a learning scores < 70%, 2 on invalid project dir or path escape, 3 on evidence gather failure or write error. Does it fail on the source repo's own default branch? Not a validator gate; runs cleanly and produces structured retrospective markdown artifacts.
- does the output match what the documentation claims? Yes, matches section order and placeholders of learning-template.md.

## Defects — required
none

## Observations
- Uses dynamic module loading via `importlib.util.spec_from_file_location` and registers sibling modules in `sys.modules` (`_load_sibling`) to allow `extract_evidence.py` and `score_atomicity.py` to be invoked both independently as standalone scripts and programmatically by the orchestrator.
- Guards against path traversal vulnerabilities through `_require_project_output_path` and `_require_fill_path`, verifying `path.is_relative_to(...)`.
- Resolves plugin library directory via environment overrides (`COPILOT_PLUGIN_ROOT`, `CLAUDE_PLUGIN_ROOT`, `GITHUB_WORKSPACE`) with fallback to relative traversal `Path(__file__).resolve().parents[3] / "lib"`.

## Context cost
16716 bytes (~4179 tokens) for script itself; plus sibling imports `extract_evidence.py` (15069 bytes) and `score_atomicity.py` (10304 bytes), and library `paths.py` (approx 5000 bytes). Total context cost: ~47089 bytes (~11772 tokens).
