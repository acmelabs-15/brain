---
package: rjm
path: scripts/validation/check_vendor_portability.py
type: script
bytes: 24904
unit: inv-rjm-290
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_vendor_portability.py

## Purpose — required, verbatim
> "Fail CI when a vendor-shipped script hard-codes an upstream-only path." — scripts/validation/check_vendor_portability.py:3

## Design intent — required
Prevents regression and silent runtime failures in vendored skill installations by detecting hard-coded upstream-only paths (`.agents/`, `.claude/lib/`, and `scripts/`) that do not exist in consumer checkouts. To make skills portable across repositories, Phase 1 introduced the `.claude/lib/paths.py` helper (`resolve_artifact_root`, `artifact_dir`, and `resolve_skill_resource`). This gate enforces that all non-docstring path references in Python files under `.claude/skills` route through that portability helper, while allowing known legacy debt tracked in `vendor_portability_baseline.txt`. It employs AST parsing and lexical token inspection to avoid false positives on raw-string regexes, CLI prose keywords (`help`, `description`, etc.), diagnostic print calls, multi-line templates, and test files. Without this check, new skills or modifications would silently re-introduce upstream path assumptions, breaking plugin distribution and external consumers.

## Phase — required
rjm:test

## Inputs — required
- CLI arguments parsed via `parse_args()`:
  - `--repo-root` (default: script grandparent's parent `_REPO_ROOT = _SCRIPT_DIR.parent.parent` — scripts/validation/check_vendor_portability.py:78)
  - `--update-baseline` (flag: regenerate the baseline file from current offenders and exit 0 — scripts/validation/check_vendor_portability.py:549)
- Directory scanning:
  - Scans directories returned by `scan_roots(repo_root)` (`_SCAN_ROOTS` — scripts/validation/check_vendor_portability.py:141)
  - Inspects all `*.py` files in scanned roots, excluding `__pycache__` and `tests/` directories (scripts/validation/check_vendor_portability.py:439, 441, 443)
- Baseline configuration:
  - Allowlist file `scripts/validation/vendor_portability_baseline.txt` (`BASELINE_FILENAME` — scripts/validation/check_vendor_portability.py:145)
  - Parsed via `load_baseline(path)` (scripts/validation/check_vendor_portability.py:162)
- Module imports and baseline safety checks:
  - `refuse_oversized_baseline`, `refuse_symlinked_baseline`, `refuse_undiffable_baseline` from `portability_baseline` (scripts/validation/check_vendor_portability.py:88, 577, 579, 581)

## Outputs — required
- Formatted stdout reports:
  - Pass report: `[PASS] No new vendor-portability offenders.` (scripts/validation/check_vendor_portability.py:479)
  - Tracked known debt notice: `       {len(known)} known offender(s) tracked in the baseline (Issue #2050 migration debt).` (scripts/validation/check_vendor_portability.py:482)
  - Failure report: `[FAIL] {len(new)} new vendor-portability offender(s) found.` (scripts/validation/check_vendor_portability.py:487)
  - Offender locations and lines: `  - {off.relpath}:{off.line}` and `      {off.excerpt!r}` (scripts/validation/check_vendor_portability.py:506, 507)
  - Skip notice when roots are absent: `[SKIP] no scan roots present (.claude/skills).` (scripts/validation/check_vendor_portability.py:570)
  - Baseline rewrite confirmation: `[OK] wrote baseline: {bpath} ({len(offenders)} entr(ies))` (scripts/validation/check_vendor_portability.py:589)
- Stderr messages:
  - Symlink refusal outside repo: `Refusing scan root ...` (scripts/validation/check_vendor_portability.py:191)
  - Missing repository root: `[FAIL] repo root not found: {repo_root}` (scripts/validation/check_vendor_portability.py:565)
  - Baseline write failure: `[FAIL] cannot write baseline {bpath}: {exc}` (scripts/validation/check_vendor_portability.py:587)
- Files written (when `--update-baseline` is specified):
  - Rewrites `scripts/validation/vendor_portability_baseline.txt` via `write_baseline(path, offenders)` (scripts/validation/check_vendor_portability.py:517, 585)
- Process exit codes (ADR-035):
  - `0`: Success (no new offenders, no scan roots present, or baseline regenerated — scripts/validation/check_vendor_portability.py:58, 571, 590, 595)
  - `1`: One or more new offenders found not in baseline (scripts/validation/check_vendor_portability.py:62, 595)
  - `2`: Configuration or baseline error (scripts/validation/check_vendor_portability.py:63, 566, 578, 580, 582, 588)

## Invokes — required
- script portability_baseline — scripts/validation/check_vendor_portability.py:88
- config vendor_portability_baseline.txt — scripts/validation/check_vendor_portability.py:145

## Invoked by — required
- script checks_spec — scripts/validation/checks_spec.py:100
- doc plugin-self-containment — src/copilot-cli/instructions/plugin-self-containment.instructions.md:169
- config vendor_portability_baseline.txt — scripts/validation/vendor_portability_baseline.txt:3

## Concepts named — required, verbatim
- `taste-lint` — scripts/validation/check_vendor_portability.py:2 — used here
- `file-size` — scripts/validation/check_vendor_portability.py:2 — used here
- `paths.py` — scripts/validation/check_vendor_portability.py:9 — used here
- `resolve_artifact_root` — scripts/validation/check_vendor_portability.py:9 — used here
- `artifact_dir` — scripts/validation/check_vendor_portability.py:10 — used here
- `resolve_skill_resource` — scripts/validation/check_vendor_portability.py:11 — used here
- `ADR-035` — scripts/validation/check_vendor_portability.py:57 — used here
- `portability_baseline` — scripts/validation/check_vendor_portability.py:80 — used here
- `portability_floor` — scripts/validation/check_vendor_portability.py:80 — used here
- `refuse_oversized_baseline` — scripts/validation/check_vendor_portability.py:89 — used here
- `refuse_symlinked_baseline` — scripts/validation/check_vendor_portability.py:90 — used here
- `refuse_undiffable_baseline` — scripts/validation/check_vendor_portability.py:91 — used here
- `_BANNED_PATH` — scripts/validation/check_vendor_portability.py:114 — defined here
- `_HELPER_FUNCTIONS` — scripts/validation/check_vendor_portability.py:124 — defined here
- `_PROSE_KWARGS` — scripts/validation/check_vendor_portability.py:135 — defined here
- `_PROSE_CALLS` — scripts/validation/check_vendor_portability.py:136 — defined here
- `_SCAN_ROOTS` — scripts/validation/check_vendor_portability.py:141 — defined here
- `BASELINE_FILENAME` — scripts/validation/check_vendor_portability.py:145 — defined here
- `Offender` — scripts/validation/check_vendor_portability.py:149 — defined here
- `baseline_path` — scripts/validation/check_vendor_portability.py:157 — defined here
- `load_baseline` — scripts/validation/check_vendor_portability.py:162 — defined here
- `scan_roots` — scripts/validation/check_vendor_portability.py:175 — defined here
- `_routes_through_helper` — scripts/validation/check_vendor_portability.py:202 — defined here
- `_docstring_lines` — scripts/validation/check_vendor_portability.py:232 — defined here
- `_call_name` — scripts/validation/check_vendor_portability.py:263 — defined here
- `_node_lines` — scripts/validation/check_vendor_portability.py:272 — defined here
- `_prose_lines` — scripts/validation/check_vendor_portability.py:281 — defined here
- `_RAW_STRING_PREFIX` — scripts/validation/check_vendor_portability.py:327 — defined here
- `_REGEX_METACHAR` — scripts/validation/check_vendor_portability.py:339 — defined here
- `_is_raw_string_regex` — scripts/validation/check_vendor_portability.py:342 — defined here
- `_is_prose_string` — scripts/validation/check_vendor_portability.py:373 — defined here
- `_first_banned_line` — scripts/validation/check_vendor_portability.py:394 — defined here
- `collect_offenders` — scripts/validation/check_vendor_portability.py:429 — defined here
- `split_offenders` — scripts/validation/check_vendor_portability.py:463 — defined here
- `format_report` — scripts/validation/check_vendor_portability.py:475 — defined here
- `write_baseline` — scripts/validation/check_vendor_portability.py:517 — defined here
- `parse_args` — scripts/validation/check_vendor_portability.py:537 — defined here
- `main` — scripts/validation/check_vendor_portability.py:556 — defined here

## Structure
- "class Offender:" — scripts/validation/check_vendor_portability.py:149
- "def baseline_path(repo_root: Path) -> Path:" — scripts/validation/check_vendor_portability.py:157
- "def load_baseline(path: Path) -> set[str]:" — scripts/validation/check_vendor_portability.py:162
- "def scan_roots(repo_root: Path) -> list[Path]:" — scripts/validation/check_vendor_portability.py:175
- "def _routes_through_helper(content: str) -> bool:" — scripts/validation/check_vendor_portability.py:202
- "def _docstring_lines(content: str) -> set[int]:" — scripts/validation/check_vendor_portability.py:232
- "def _call_name(node: ast.Call) -> str | None:" — scripts/validation/check_vendor_portability.py:263
- "def _node_lines(node: ast.AST) -> range:" — scripts/validation/check_vendor_portability.py:272
- "def _prose_lines(content: str) -> set[int]:" — scripts/validation/check_vendor_portability.py:281
- "def _is_raw_string_regex(" — scripts/validation/check_vendor_portability.py:342
- "def _is_prose_string(token_text: str) -> bool:" — scripts/validation/check_vendor_portability.py:373
- "def _first_banned_line(content: str) -> tuple[int, str] | None:" — scripts/validation/check_vendor_portability.py:394
- "def collect_offenders(repo_root: Path) -> list[Offender]:" — scripts/validation/check_vendor_portability.py:429
- "def split_offenders(" — scripts/validation/check_vendor_portability.py:463
- "def format_report(new: list[Offender], known: list[Offender]) -> str:" — scripts/validation/check_vendor_portability.py:475
- "def write_baseline(path: Path, offenders: list[Offender]) -> None:" — scripts/validation/check_vendor_portability.py:517
- "def parse_args(argv: list[str] | None = None) -> argparse.Namespace:" — scripts/validation/check_vendor_portability.py:537
- "def main(argv: list[str] | None = None) -> int:" — scripts/validation/check_vendor_portability.py:556
- "raise SystemExit(main())" — scripts/validation/check_vendor_portability.py:599

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_vendor_portability.py`, language: Python 3, lines: 600
- documented invocation:
  - "python3" — scripts/validation/check_vendor_portability.py:1
  - "python3 scripts/validation/check_vendor_portability.py --update-baseline" — scripts/validation/check_vendor_portability.py:523
  - "uv run python scripts/validation/check_vendor_portability.py" — src/copilot-cli/instructions/plugin-self-containment.instructions.md:169
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/validation/check_vendor_portability.py --repo-root sources/rjm`, abridged stdout: `[PASS] No new vendor-portability offenders.\n       18 known offender(s) tracked in the baseline (Issue #2050 migration debt).`, **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - Success: no new offenders (baseline-listed debt is allowed); OR" — scripts/validation/check_vendor_portability.py:58
    - "1 - One or more NEW offenders found (not in the baseline)." — scripts/validation/check_vendor_portability.py:62
    - "2 - Configuration error (repo root or baseline path invalid)." — scripts/validation/check_vendor_portability.py:63
  - actual exit paths:
    - exit code 0: `return 0` on no scan roots present at line 571; `return 0` on `--update-baseline` success at line 590; `return 1 if new else 0` at line 595 when `new` is empty
    - exit code 1: `return 1 if new else 0` at line 595 when `new` contains new offenders
    - exit code 2: `return 2` on repo root not found at line 566; on symlinked baseline at line 578; on undiffable baseline at line 580; on oversized baseline at line 582; on baseline write error at line 588
    - process exit via `raise SystemExit(main())` at line 599
- for validators/gates: can it exit non-zero? yes — returns 1 when new unlisted offenders are detected and 2 on configuration or baseline validation errors. Does it fail on the source repo's own default branch? no — reports 0 new offenders (18 known baseline offenders) and exits 0.
- does the output match what the documentation claims? yes — outputs pass message indicating no new offenders and lists tracked baseline debt count.

## Defects — required
- `doc-drift` — `scripts/validation/check_vendor_portability.py:49` — Module docstring states "131 files across 30+ skills already hard-code these paths (Issue #2050)", but the current baseline file `vendor_portability_baseline.txt` contains 18 entries as historical migration debt was resolved.

## Observations
- AST and token-based hybrid scanner: AST resolves lexical scopes, docstring ranges, prose calls, and keyword argument line boundaries, while the Python tokenizer parses raw string tokens and f-string components to detect banned literals.
- False-positive filtering: raw regex strings with metacharacters (including anchors, quantifiers, groups, and escapes) are exempted because they match paths rather than accessing the filesystem.
- CLI prose parameter exemption: parameters passed to standard CLI keywords (`help`, `description`, `epilog`, `metavar`, `usage`) or logging/diagnostic functions (`print`, `warning`, `info`, etc.) are recognized as documentation and exempted from path enforcement.
- Baseline integrity enforcement: delegates to `portability_baseline` routines (`refuse_symlinked_baseline`, `refuse_undiffable_baseline`, `refuse_oversized_baseline`) to ensure baseline file tampering or invalid git attributes cause gate failure.

## Context cost
24904 bytes in source file, plus 20208 bytes (`portability_baseline.py`) and 1645 bytes (`vendor_portability_baseline.txt`) when invoked = 46757 bytes total. Approximately 11689 tokens.
