---
package: rjm
path: scripts/consolidate_skills.py
type: script
bytes: 19533
unit: inv-rjm-213
in_scope_via: scripts/README.md
aliases: []
memo_inputs:
  - {path: scripts/consolidate_skills.py, sha256: 14ba13d8d34815bfa54c2286f6383f005cba9ed1aae7c57810f669bd8399bfc9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/consolidate_skills.py

## Purpose — required, verbatim
> "Auto-consolidate recurring patterns from session logs into skill candidates." — scripts/consolidate_skills.py:2

## Design intent — required
Automates continuous skill discovery and crystallization by scanning historical agent session logs (`.agents/sessions/*.json`) for recurring actions across a configurable lookback window (default 7 days). It aggregates normalized action patterns, computes success rates by inspecting session outcomes and MUST-level protocol compliance, filters candidates meeting usage frequency and reliability thresholds (default >=3 uses, >=70% success rate), performs deduplication against existing memory skills, and generates structured markdown skill memory artifacts (`.serena/memories/*.md`) or JSON reports. Without it, agent workflows would rely on manual retrospective analysis to identify reusable automation opportunities and capture institutional operational knowledge.

## Phase — required
cross-phase

## Inputs — required
- CLI arguments: `--sessions-dir` — scripts/consolidate_skills.py:518, `--memories-dir` — scripts/consolidate_skills.py:524, `--min-uses` — scripts/consolidate_skills.py:530, `--min-success-rate` — scripts/consolidate_skills.py:536, `--lookback-days` — scripts/consolidate_skills.py:542, `--dry-run` — scripts/consolidate_skills.py:548, `--format` — scripts/consolidate_skills.py:553, `--project-root` — scripts/consolidate_skills.py:559
- Session log files: `.agents/sessions/*.json` loaded via `load_sessions` — scripts/consolidate_skills.py:230
- Existing memory files: `.serena/memories/**/*.md` loaded via `load_existing_skill_titles` — scripts/consolidate_skills.py:317

## Outputs — required
- Consolidated skill markdown files: `.serena/memories/<category>-auto-<skill_id>.md` written via `write_skills` — scripts/consolidate_skills.py:490
- Console reports: formatted table via `_print_table` — scripts/consolidate_skills.py:611 or JSON via `json.dumps` — scripts/consolidate_skills.py:597

## Invokes — required
none

## Invoked by — required
- doc scripts/README.md — scripts/README.md:222

## Concepts named — required, verbatim
- `ADR-035 Exit Code Standardization` — scripts/consolidate_skills.py:13 — used here
- `ConsolidationConfig` — scripts/consolidate_skills.py:29 — defined here
- `PatternOccurrence` — scripts/consolidate_skills.py:38 — defined here
- `PatternStats` — scripts/consolidate_skills.py:48 — defined here
- `SkillCandidate` — scripts/consolidate_skills.py:84 — defined here
- `ConsolidationReport` — scripts/consolidate_skills.py:107 — defined here
- `Serena memory` — scripts/consolidate_skills.py:436 — used here
- `CWE-22` — scripts/consolidate_skills.py:575 — used here

## Structure
- class ConsolidationConfig — scripts/consolidate_skills.py:29
- class PatternOccurrence — scripts/consolidate_skills.py:38
- class PatternStats — scripts/consolidate_skills.py:48
- class SkillCandidate — scripts/consolidate_skills.py:84
- class ConsolidationReport — scripts/consolidate_skills.py:107
- def normalize_action — scripts/consolidate_skills.py:147
- def classify_category — scripts/consolidate_skills.py:160
- def infer_success — scripts/consolidate_skills.py:169
- def extract_actions — scripts/consolidate_skills.py:203
- def load_sessions — scripts/consolidate_skills.py:230
- def find_patterns — scripts/consolidate_skills.py:279
- def load_existing_skill_titles — scripts/consolidate_skills.py:317
- def generate_skill_id — scripts/consolidate_skills.py:341
- def build_skill_title — scripts/consolidate_skills.py:351
- def check_duplicates — scripts/consolidate_skills.py:368
- def consolidate — scripts/consolidate_skills.py:388
- def render_skill_markdown — scripts/consolidate_skills.py:435
- def write_skills — scripts/consolidate_skills.py:490
- def main — scripts/consolidate_skills.py:512
- def _print_table — scripts/consolidate_skills.py:611

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/consolidate_skills.py`, Python 3, 642 lines
- documented invocation (verbatim, path:line):
  > "uv run python scripts/consolidate_skills.py --help" — scripts/README.md:222
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `python3 scripts/consolidate_skills.py --help`
  Abridged stdout: `usage: consolidate_skills.py [-h] [--sessions-dir SESSIONS_DIR] [--memories-dir MEMORIES_DIR] [--min-uses MIN_USES] [--min-success-rate MIN_SUCCESS_RATE] [--lookback-days LOOKBACK_DAYS] [--dry-run] [--format {json,table}] [--project-root PROJECT_ROOT]`
  **actual exit code:** 0
- documented exit codes (verbatim) vs. actual exit paths in code:
  Documented in `scripts/consolidate_skills.py:9-11`:
  > "0  - Success: Consolidation completed" — scripts/consolidate_skills.py:9
  > "1  - Error: Logic or validation error" — scripts/consolidate_skills.py:10
  > "2  - Error: Configuration or path error" — scripts/consolidate_skills.py:11
  Actual exit paths in code:
  - Exit 0: `return 0` — scripts/consolidate_skills.py:608
  - Exit 1: `return 1` — scripts/consolidate_skills.py:594
  - Exit 2: `return 2` — scripts/consolidate_skills.py:582
  - Invocation wrapper: `sys.exit(main())` — scripts/consolidate_skills.py:641
- for validators/gates: can exit non-zero (exits 2 on path traversal, exits 1 on unhandled exception during consolidation); tested with `--dry-run` on default branch (exited 0 with empty report since `.agents/sessions` had no recent logs).
- does the output match what the documentation claims: yes, prints human-readable table or structured JSON summary conforming to documented schema.

## Defects — required
none

## Observations
Implements defensive CWE-22 path traversal prevention before resolving user-supplied session or memory directories (`if ".." in dir_path.parts`). Employs regex-based action normalization (`_SHA_RE`, `_ISSUE_RE`, `_FILE_PATH_RE`, `_DATE_RE`, `_SESSION_NUM_RE`) to collapse volatile parameter strings into generic tokens like `<sha>`, `<path>`, and `<date>`, enabling accurate frequency clustering.

## Context cost
19533 bytes (approximately 4883 tokens). Loads no internal scripts or references directly.
