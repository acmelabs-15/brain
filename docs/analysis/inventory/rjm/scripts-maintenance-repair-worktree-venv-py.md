---
package: rjm
path: scripts/maintenance/repair_worktree_venv.py
type: script
bytes: 12725
unit: inv-rjm-252
in_scope_via: .claude/skills/git-advanced-workflows/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/maintenance/repair_worktree_venv.py, sha256: cd05ba426c3cb9d88b1ffef12885c1bc5a0485b9b1a6db3413769625d1ee5d91}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/maintenance/repair_worktree_venv.py

## Purpose — required, verbatim
> "Repair stale uv virtual-environment shebangs after moving a git worktree." — scripts/maintenance/repair_worktree_venv.py:2

## Design intent — required
When a git worktree is moved or renamed, the `.venv` launcher scripts (`.venv/bin/*` on POSIX or `.venv/Scripts/*` on Windows) retain the absolute filesystem paths from their creation time in their first-line shebangs (issue #3170). Invoking tools directly via `.venv/bin/<tool>` (such as pytest) fails immediately with "bad interpreter: No such file or directory". `repair_worktree_venv.py` inspects launcher script headers, detects absolute paths pointing outside the current worktree's `.venv`, and provides either an advisory report with the remediation command (`--check`) or automatically executes `uv sync --frozen --extra dev --reinstall` to recreate the launchers while preserving developer dependencies and locked package versions.

## Phase — required
cross-phase

## Inputs — required
- CLI option `--check`: `parser.add_argument` — scripts/maintenance/repair_worktree_venv.py:253
- CLI option `--json`: `parser.add_argument` — scripts/maintenance/repair_worktree_venv.py:258
- Worktree top-level path resolution via git: `["git", "rev-parse", "--show-toplevel"]` — scripts/maintenance/repair_worktree_venv.py:82
- Launcher directory detection (`bin` or `Scripts`): `venv / name` — scripts/maintenance/repair_worktree_venv.py:99
- First line shebang from launcher script files: `first = handle.readline(4096)` — scripts/maintenance/repair_worktree_venv.py:114
- Standard environment repair command definition: `_REPAIR_COMMAND = "uv sync --frozen --extra dev --reinstall"` — scripts/maintenance/repair_worktree_venv.py:52

## Outputs — required
- Human-readable summary printed to stdout via `format_report(report, check=args.check)` — scripts/maintenance/repair_worktree_venv.py:311
- JSON-formatted scan results printed to stdout via `_report_to_json(report)` — scripts/maintenance/repair_worktree_venv.py:309
- Tool execution chatter from uv forwarded to stderr: `print(result.stdout, file=sys.stderr, end="")` — scripts/maintenance/repair_worktree_venv.py:226
- Error output on stderr: `print(f"error: {exc}", file=sys.stderr)` — scripts/maintenance/repair_worktree_venv.py:292
- Subprocess invocation of `uv sync` to rewrite `.venv` launcher scripts: `subprocess.run` — scripts/maintenance/repair_worktree_venv.py:213
- Process exit codes: 0 on success/clean, 1 on check-mode finding, 2 on git/worktree config failure, 3 on external repair failure

## Invokes — required
none

## Invoked by — required
- skill git-advanced-workflows — .claude/skills/git-advanced-workflows/SKILL.md:115
- skill ai-agents-build-and-env — .claude/skills/ai-agents-build-and-env/SKILL.md:147

## Concepts named — required, verbatim
- `ADR-035` — scripts/maintenance/repair_worktree_venv.py:30 — used here
- `Issue #3170` — scripts/maintenance/repair_worktree_venv.py:38 — used here
- `_REPAIR_COMMAND` — scripts/maintenance/repair_worktree_venv.py:52 — defined here
- `StaleShebang` — scripts/maintenance/repair_worktree_venv.py:57 — defined here
- `RepairReport` — scripts/maintenance/repair_worktree_venv.py:65 — defined here
- `repair_command` — scripts/maintenance/repair_worktree_venv.py:73 — defined here
- `worktree_root` — scripts/maintenance/repair_worktree_venv.py:78 — defined here
- `find_launcher_dir` — scripts/maintenance/repair_worktree_venv.py:96 — defined here
- `read_shebang` — scripts/maintenance/repair_worktree_venv.py:105 — defined here
- `interpreter_of_shebang` — scripts/maintenance/repair_worktree_venv.py:125 — defined here
- `is_stale` — scripts/maintenance/repair_worktree_venv.py:142 — defined here
- `scan_launcher_dir` — scripts/maintenance/repair_worktree_venv.py:163 — defined here
- `build_report` — scripts/maintenance/repair_worktree_venv.py:180 — defined here
- `run_repair` — scripts/maintenance/repair_worktree_venv.py:189 — defined here
- `format_report` — scripts/maintenance/repair_worktree_venv.py:231 — defined here
- `parse_args` — scripts/maintenance/repair_worktree_venv.py:248 — defined here
- `_report_to_json` — scripts/maintenance/repair_worktree_venv.py:266 — defined here
- `main` — scripts/maintenance/repair_worktree_venv.py:283 — defined here

## Structure
- Module docstring describing stale interpreter shebangs, CLI flags, exit codes, and issue references (scripts/maintenance/repair_worktree_venv.py:1-39)
- Imports and module constants (scripts/maintenance/repair_worktree_venv.py:41-54)
- Dataclass models `StaleShebang` and `RepairReport` (scripts/maintenance/repair_worktree_venv.py:56-71)
- Discovery utilities `repair_command`, `worktree_root`, and `find_launcher_dir` (scripts/maintenance/repair_worktree_venv.py:73-103)
- File parsing and shebang staleness analysis: `read_shebang`, `interpreter_of_shebang`, `is_stale`, `scan_launcher_dir` (scripts/maintenance/repair_worktree_venv.py:105-178)
- Scanner orchestration `build_report` and environment repair executor `run_repair` (scripts/maintenance/repair_worktree_venv.py:180-229)
- Human and machine report serializers `format_report` and `_report_to_json` (scripts/maintenance/repair_worktree_venv.py:231-281)
- Argument parsing `parse_args`, main handler `main`, and launcher check (scripts/maintenance/repair_worktree_venv.py:248-327)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/maintenance/repair_worktree_venv.py`, language: Python, lines: 327
- documented invocation:
  `uv run python scripts/maintenance/repair_worktree_venv.py --check` — scripts/maintenance/repair_worktree_venv.py:25
- executed: yes
- actual command run: `python3 scripts/maintenance/repair_worktree_venv.py --check`
- abridged stdout:
```
venv repair: OK, all launcher shebangs point inside /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.venv.
```
- actual exit code: 0
- documented exit codes:
  - "0 - No stale shebangs (or a default-mode repair cleared them)" — scripts/maintenance/repair_worktree_venv.py:31
  - "1 - Stale shebangs found in --check mode (repair needed, nothing mutated)" — scripts/maintenance/repair_worktree_venv.py:32
  - "2 - Configuration error: not inside a git worktree (or git unavailable)" — scripts/maintenance/repair_worktree_venv.py:33
  - "3 - External error: `uv sync` failed, or it returned success yet a default-mode repair left the shebangs stale (the external repair did not take effect)" — scripts/maintenance/repair_worktree_venv.py:34-35
- actual exit paths in code:
  - `return 2` — scripts/maintenance/repair_worktree_venv.py:293
  - `return 3` — scripts/maintenance/repair_worktree_venv.py:305
  - `return 1` — scripts/maintenance/repair_worktree_venv.py:316
  - `return 3` — scripts/maintenance/repair_worktree_venv.py:321
  - `return 0` — scripts/maintenance/repair_worktree_venv.py:322
  - `sys.exit(main())` — scripts/maintenance/repair_worktree_venv.py:326
- for validators/gates: can exit 1 in `--check` mode when stale shebangs exist, 2 outside a worktree, 3 if uv repair fails; exits 0 on a valid environment.
- does output match documentation: yes, reports OK when all launcher shebangs point inside the worktree's `.venv`.

## Defects — required
none

## Observations
- Clear rationale for the exact repair flags: `--reinstall` forces uv to regenerate launchers that already exist on disk; `--extra dev` ensures test runners like pytest are not pruned; `--frozen` uses the pinned lockfile without re-resolving dependencies.
- Output channel cleanliness: uv's verbose subprocess output is piped to stderr, preserving stdout exclusively for JSON or formatted reports to avoid breaking downstream pipeline parsers.

## Context cost
12725 bytes (~3200 tokens); standalone maintenance script with subprocess dependencies on git and uv.
