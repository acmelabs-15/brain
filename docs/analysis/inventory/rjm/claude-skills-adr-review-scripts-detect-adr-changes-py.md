---
package: rjm
path: .claude/skills/adr-review/scripts/detect_adr_changes.py
type: script
bytes: 20126
unit: inv-rjm-78
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/adr-review/scripts/detect_adr_changes.py, sha256: f8916b967a34d2834a234f6223be04d1b04a925ea682850c7b65f2bd63c41805}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/adr-review/scripts/detect_adr_changes.py

## Purpose — required, verbatim
> "Detect ADR file changes (create, update, delete) for automatic skill triggering." — .claude/skills/adr-review/scripts/detect_adr_changes.py:2

## Design intent — required
Automates detection of architectural decision record (ADR) file lifecycle events (creation, modification, deletion) across designated directories to drive the multi-agent `adr-review` debate orchestration. Without it, developers and agents would have to manually monitor ADR file changes and remember to trigger validation debates, risking unvetted architectural deviations and unverified status updates slipping into the codebase. The script also inspects YAML frontmatter to prevent false alarms on non-decision metadata updates (e.g. `implemented` flag flips) while strictly enforcing review debates whenever governance fields or record bodies change.

## Phase — required
cross-phase

## Inputs — required
- `--base-path`: "Repository root path (default: current directory)" — .claude/skills/adr-review/scripts/detect_adr_changes.py:360
- `--since-commit`: "Git commit SHA to compare against (default: HEAD~1)" — .claude/skills/adr-review/scripts/detect_adr_changes.py:365
- `--include-untracked`: "Include untracked new ADR files in detection" — .claude/skills/adr-review/scripts/detect_adr_changes.py:370
- Monitored ADR file paths:
  - ".agents/architecture/ADR-*.md" — .claude/skills/adr-review/scripts/detect_adr_changes.py:35
  - "docs/adr/ADR-*.md" — .claude/skills/adr-review/scripts/detect_adr_changes.py:36
  - "docs/architecture/ADR-*.md" — .claude/skills/adr-review/scripts/detect_adr_changes.py:37
  - "docs/decisions/ADR-*.md" — .claude/skills/adr-review/scripts/detect_adr_changes.py:38
  - "architecture/decisions/ADR-*.md" — .claude/skills/adr-review/scripts/detect_adr_changes.py:39
- Git working tree and commit history inspected via `git diff`, `git ls-files`, and `git show` (.claude/skills/adr-review/scripts/detect_adr_changes.py:333, 395, 423)

## Outputs — required
- Structured JSON output on stdout containing:
  - `Created`: list of newly added ADR file paths (.claude/skills/adr-review/scripts/detect_adr_changes.py:470)
  - `Modified`: list of substantively modified ADR file paths (.claude/skills/adr-review/scripts/detect_adr_changes.py:471)
  - `ModifiedFrontmatterOnly`: list of frontmatter-only modified ADR file paths (.claude/skills/adr-review/scripts/detect_adr_changes.py:472)
  - `Deleted`: list of deleted ADR file paths (.claude/skills/adr-review/scripts/detect_adr_changes.py:473)
  - `DeletedDetails`: list of deletion metadata records including dependents (.claude/skills/adr-review/scripts/detect_adr_changes.py:474)
  - `HasChanges`: boolean flag indicating whether actionable changes exist (.claude/skills/adr-review/scripts/detect_adr_changes.py:477)
  - `RecommendedAction`: suggested action ("review" for created/modified, "archive" for deleted, "none" otherwise) (.claude/skills/adr-review/scripts/detect_adr_changes.py:450, 478)
  - `Timestamp`: ISO 8601 UTC timestamp string (.claude/skills/adr-review/scripts/detect_adr_changes.py:479)
  - `SinceCommit`: git commit SHA compared against (.claude/skills/adr-review/scripts/detect_adr_changes.py:480)
- Filesystem side effect: ensures directory `(base_path / ".agents").mkdir(exist_ok=True)` exists (.claude/skills/adr-review/scripts/detect_adr_changes.py:383)

## Invokes — required
none

## Invoked by — required
- skill adr-review — .claude/skills/adr-review/SKILL.md:34
- skill adr-review — .claude/skills/adr-review/SKILL.md:64
- skill adr-review — .claude/skills/adr-review/SKILL.md:178
- skill adr-review — .claude/skills/adr-review/SKILL.md:183
- skill adr-review — .claude/skills/adr-review/SKILL.md:210
- skill adr-review — .claude/skills/adr-review/SKILL.md:243

## Concepts named — required, verbatim
- `ADR` — .claude/skills/adr-review/scripts/detect_adr_changes.py:2 — used here
- `ADR-035` — .claude/skills/adr-review/scripts/detect_adr_changes.py:14 — used here
- `ADR-073` — .claude/skills/adr-review/scripts/detect_adr_changes.py:88 — used here
- `adr-review` — .claude/skills/adr-review/scripts/detect_adr_changes.py:88 — used here
- `implemented` — .claude/skills/adr-review/scripts/detect_adr_changes.py:95 — used here
- `status` — .claude/skills/adr-review/scripts/detect_adr_changes.py:89 — used here
- `supersedes` — .claude/skills/adr-review/scripts/detect_adr_changes.py:90 — used here
- `superseded-by` — .claude/skills/adr-review/scripts/detect_adr_changes.py:90 — used here
- `proposed` — .claude/skills/adr-review/scripts/detect_adr_changes.py:140 — used here
- `accepted` — .claude/skills/adr-review/scripts/detect_adr_changes.py:91 — used here
- `rejected` — .claude/skills/adr-review/scripts/detect_adr_changes.py:264 — used here
- `deprecated` — .claude/skills/adr-review/scripts/detect_adr_changes.py:264 — used here
- `superseded` — .claude/skills/adr-review/scripts/detect_adr_changes.py:264 — used here
- `unknown` — .claude/skills/adr-review/scripts/detect_adr_changes.py:243 — defined here
- `STATUS_UNKNOWN` — .claude/skills/adr-review/scripts/detect_adr_changes.py:243 — defined here
- `review` — .claude/skills/adr-review/scripts/detect_adr_changes.py:452 — used here
- `archive` — .claude/skills/adr-review/scripts/detect_adr_changes.py:454 — used here

## Structure
none (python script; functions and definitions: `ADR_PATTERNS`, `ADR_DIRECTORIES`, `_get_dependent_adrs`, `_run_git`, `FRONTMATTER_DELIM`, `_NON_DECISION_FRONTMATTER_KEYS`, `_FRONTMATTER_FIELD_RE`, `_parse_frontmatter`, `_has_duplicate_keys`, `_only_non_decision_fields_changed`, `_split_frontmatter`, `STATUS_UNKNOWN`, `_get_adr_status`, `_is_frontmatter_only_change`, `build_parser`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/adr-review/scripts/detect_adr_changes.py`, language: Python 3, lines: 501
- documented invocation:
  - "uv run python .claude/skills/adr-review/scripts/detect_adr_changes.py" — .claude/skills/adr-review/SKILL.md:183
  - "python3 scripts/detect_adr_changes.py --base-path ../../.." — .claude/skills/adr-review/SKILL.md:187
  - "uv run python .claude/skills/adr-review/scripts/detect_adr_changes.py --since-commit abc123" — .claude/skills/adr-review/SKILL.md:191
  - "uv run python .claude/skills/adr-review/scripts/detect_adr_changes.py --include-untracked" — .claude/skills/adr-review/SKILL.md:194
  - "uv run python .claude/skills/adr-review/scripts/detect_adr_changes.py --include-untracked" — .claude/skills/adr-review/SKILL.md:210
- **executed:** yes
- actual command run: `uv run python .claude/skills/adr-review/scripts/detect_adr_changes.py`
  abridged stdout:
  ```json
  {
    "Created": [],
    "Modified": [],
    "ModifiedFrontmatterOnly": [],
    "Deleted": [],
    "DeletedDetails": [],
    "HasChanges": false,
    "RecommendedAction": "none",
    "Timestamp": "2026-09-05T11:19:34.964988+00:00",
    "SinceCommit": "HEAD~1"
  }
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0 - Success (changes detected or no changes found)" — .claude/skills/adr-review/scripts/detect_adr_changes.py:15
  - "1 - Logic or unexpected error during detection" — .claude/skills/adr-review/scripts/detect_adr_changes.py:16
  - "2 - Config/user error (invalid commit SHA, missing file)" — .claude/skills/adr-review/scripts/detect_adr_changes.py:17
  - "3 - External error (I/O failure, git command failure)" — .claude/skills/adr-review/scripts/detect_adr_changes.py:18
  Actual exit paths in code:
  - `raise SystemExit(main())` — .claude/skills/adr-review/scripts/detect_adr_changes.py:500
  - `return 0` (.claude/skills/adr-review/scripts/detect_adr_changes.py:484) on successful JSON output.
  - `return 1` (.claude/skills/adr-review/scripts/detect_adr_changes.py:381) when `.git` is not found, or on generic `Exception` (.claude/skills/adr-review/scripts/detect_adr_changes.py:494).
  - `return 2` (.claude/skills/adr-review/scripts/detect_adr_changes.py:488) on `FileNotFoundError`.
  - `return 3` (.claude/skills/adr-review/scripts/detect_adr_changes.py:403) on `git diff` returncode != 0, or on `OSError` (.claude/skills/adr-review/scripts/detect_adr_changes.py:491).
- for validators/gates: can it exit non-zero? yes, exits 1 on missing `.git` or unexpected error, 2 on FileNotFoundError, and 3 on git failure or OSError. Does it fail on the source repo's own default branch? No, returns 0 with `HasChanges: false`.
- does the output match what the documentation claims? Yes, returns valid JSON matching the documented schema with `Created`, `Modified`, `Deleted`, `HasChanges`, and `RecommendedAction`.

## Defects — required
- `exit-code-mismatch` · .claude/skills/adr-review/scripts/detect_adr_changes.py:17 · Docstring claims exit code 2 is returned for "invalid commit SHA", but invalid commit SHA causes `git diff` failure returning exit code 3 at line 403.
- `exit-code-mismatch` · .claude/skills/adr-review/scripts/detect_adr_changes.py:381 · Missing `.git` directory returns exit code 1 (logic error) rather than exit code 2 (config/user error).
- `missing-dependency` · .claude/skills/adr-review/scripts/detect_adr_changes.py:32 · Script requires `yaml` (PyYAML); executing via system `python3` fails with `ModuleNotFoundError` unless run via `uv run` or in an environment where PyYAML is installed.

## Observations
- Uses custom YAML mapping constructor in `_has_duplicate_keys` (.claude/skills/adr-review/scripts/detect_adr_changes.py:172) to reject duplicate YAML frontmatter keys at any depth, preventing forged governance transitions that exploit PyYAML last-wins resolution.
- Compares git content at `since-commit` against working tree to isolate substantive ADR body edits from metadata-only changes (ADR-073 `implemented` flag), suppressing noisy adr-review triggers for automated lifecycle updates.
- Defensive error handling: wraps file read operations in `_get_dependent_adrs` (.claude/skills/adr-review/scripts/detect_adr_changes.py:61) and `_get_adr_status` (.claude/skills/adr-review/scripts/detect_adr_changes.py:291) to swallow `(OSError, UnicodeDecodeError)` so corrupt or unreadable files do not abort the detection run.

## Context cost
20126 bytes (~5031 tokens). Self-contained Python script importing standard library and PyYAML.
