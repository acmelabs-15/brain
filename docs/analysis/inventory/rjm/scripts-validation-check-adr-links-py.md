---
package: rjm
path: scripts/validation/check_adr_links.py
type: script
bytes: 53014
unit: inv-rjm-275
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_adr_links.py

## Purpose — required, verbatim
> "Detect ADR markdown links that do not resolve or that name the wrong ADR number." — scripts/validation/check_adr_links.py:13

## Design intent — required
Validates architectural documentation integrity across all tracked markdown files in the repository by detecting broken, unreachable, or misleading ADR cross-references. It enforces four distinct violation classes: unresolved paths (stale slugs against git tracking rather than local filesystem state), absolute paths (leading slashes that break on GitHub blob trees), ADR number mismatches (where link text cites one ADR number but target points to another), and malformed syntax (unclosed or bracket-polluted destinations). To eliminate false positives and false negatives, it strictly adheres to CommonMark specifications for code fences (run length and whitespace matching) and reference links (full, collapsed, and shortcut references with label normalization), as well as RFC 3986 URI parsing to ignore external schemes and network-path references. It integrates with a version-controlled baseline ratchet (`scripts/validation/check_adr_links_baseline.txt`) enforcing entry shape, preventing branches from adding new allowances without base-ref provenance, and purging stale entries. Without it, broken or misleading ADR cross-references would quietly accumulate, stale slugs would lead readers to dead ends or unrelated decisions, and contributors could bypass link validation with broad or unratcheted exemptions.

## Phase — required
rjm:test

## Inputs — required
- Tracked markdown files from `git ls-files -z *.md` via `git_ls_markdown` (`scripts/validation/check_adr_links.py:231`)
- Baseline allowance file (`scripts/validation/check_adr_links_baseline.txt` via `DEFAULT_BASELINE` and `load_allowlist` at `scripts/validation/check_adr_links.py:102,861`)
- Git revision metadata and merge base from `git rev-parse`, `git merge-base`, `git cat-file`, `git show` (`scripts/validation/check_adr_links.py:283,298,347,349`)
- CLI options: `--repo-root`, `--baseline`, `--base-ref` (`scripts/validation/check_adr_links.py:1030-1046`)

## Outputs — required
- Formatted finding lines on stdout: `<file>:<line>: <kind>: <target> (<detail>)` (`scripts/validation/check_adr_links.py:193,1019,1101`)
- Summary count line on stdout: `check_adr_links: <count> violation(s) across <count> tracked markdown file(s)` (`scripts/validation/check_adr_links.py:1021-1022,1103-1104`)
- Error messages on stderr for empty file set, missing ADR corpus, malformed baseline entries, branch additions absent at base ref, or exceptions (`scripts/validation/check_adr_links.py:374-377,384-387,821-823,831-835,1002-1003,1008-1009,1080-1081,1086-1087,1097`)
- Exit codes: 0 (clean), 1 (violations found), 2 (configuration error or unhandled exception) (`scripts/validation/check_adr_links.py:78,1082,1088,1098,1107`)

## Invokes — required
- script scripts/validation/stale_script_refs.py — scripts/validation/check_adr_links.py:97
- script scripts/validation/check_adr_links_baseline.txt — scripts/validation/check_adr_links.py:102

## Invoked by — required
- script check_adr_links — scripts/validation/pre_pr.py:73
- script check_adr_links — scripts/validation/pre_pr_sequence.py:44
- script check_adr_links.py — scripts/validation/check_adr_links_baseline.txt:24

## Concepts named — required, verbatim
- `taste-lint` — scripts/validation/check_adr_links.py:2 — used here
- `RFC 3986` — scripts/validation/check_adr_links.py:4 — used here
- `CommonMark` — scripts/validation/check_adr_links.py:6 — used here
- `ADR` — scripts/validation/check_adr_links.py:13 — used here
- `unresolved` — scripts/validation/check_adr_links.py:25 — defined here
- `absolute` — scripts/validation/check_adr_links.py:34 — defined here
- `number-mismatch` — scripts/validation/check_adr_links.py:41 — defined here
- `malformed` — scripts/validation/check_adr_links.py:49 — defined here
- `check_adr_links_baseline.txt` — scripts/validation/check_adr_links.py:63 — used here
- `ADR-035` — scripts/validation/check_adr_links.py:78 — used here
- `HISTORICAL_ROOTS` — scripts/validation/check_adr_links.py:97 — used here
- `stale_script_refs.py` — scripts/validation/check_adr_links.py:97 — used here
- `load_allowlist` — scripts/validation/check_adr_links.py:98 — used here
- `stale_script_refs` — scripts/validation/check_adr_links.py:100 — used here
- `DEFAULT_BASELINE` — scripts/validation/check_adr_links.py:102 — defined here
- `FENCE` — scripts/validation/check_adr_links.py:113 — defined here
- `LINK` — scripts/validation/check_adr_links.py:114 — defined here
- `UNTERMINATED` — scripts/validation/check_adr_links.py:115 — defined here
- `LINK_DEFINITION` — scripts/validation/check_adr_links.py:135 — defined here
- `REFERENCE_LINK` — scripts/validation/check_adr_links.py:136 — defined here
- `SHORTCUT_LINK` — scripts/validation/check_adr_links.py:137 — defined here
- `ADR_BASENAME` — scripts/validation/check_adr_links.py:138 — defined here
- `ADR_ANYWHERE` — scripts/validation/check_adr_links.py:139 — defined here
- `TEXT_ADR_NUMBER` — scripts/validation/check_adr_links.py:140 — defined here
- `FILE_ADR_NUMBER` — scripts/validation/check_adr_links.py:141 — defined here
- `EXTERNAL_SCHEME_RE` — scripts/validation/check_adr_links.py:151 — defined here
- `BASELINE_KINDS` — scripts/validation/check_adr_links.py:159 — defined here
- `Finding` — scripts/validation/check_adr_links.py:163 — defined here
- `is_historical_path` — scripts/validation/check_adr_links.py:196 — defined here
- `git_ls_markdown` — scripts/validation/check_adr_links.py:201 — defined here
- `check_subprocess_encoding.py` — scripts/validation/check_adr_links.py:205 — used here
- `resolve_base_ref` — scripts/validation/check_adr_links.py:265 — defined here
- `checks_common.py` — scripts/validation/check_adr_links.py:269 — used here
- `memory_index.py` — scripts/validation/check_adr_links.py:292 — used here
- `baseline_entries_at_ref` — scripts/validation/check_adr_links.py:327 — defined here
- `base_allowances_for_run` — scripts/validation/check_adr_links.py:356 — defined here
- `split_destination` — scripts/validation/check_adr_links.py:391 — defined here
- `is_adr_target` — scripts/validation/check_adr_links.py:420 — defined here
- `adr_number` — scripts/validation/check_adr_links.py:447 — defined here
- `text_adr_number` — scripts/validation/check_adr_links.py:453 — defined here
- `normalize_label` — scripts/validation/check_adr_links.py:459 — defined here
- `scan_file` — scripts/validation/check_adr_links.py:760 — defined here
- `_validate_allowances` — scripts/validation/check_adr_links.py:794 — defined here
- `find_broken_adr_links` — scripts/validation/check_adr_links.py:838 — defined here
- `stale-allowance` — scripts/validation/check_adr_links.py:903 — defined here
- `_has_adr_corpus` — scripts/validation/check_adr_links.py:932 — defined here
- `check_adr_lifecycle.py` — scripts/validation/check_adr_links.py:953 — used here
- `validate_adr_links` — scripts/validation/check_adr_links.py:972 — defined here
- `pre_pr.py` — scripts/validation/check_adr_links.py:975 — used here
- `build_parser` — scripts/validation/check_adr_links.py:1027 — defined here
- `main` — scripts/validation/check_adr_links.py:1050 — defined here

## Structure
- "class Finding:" — scripts/validation/check_adr_links.py:163
- "def is_historical_path(path: str) -> bool:" — scripts/validation/check_adr_links.py:196
- "def git_ls_markdown(repo_root: Path) -> list[str]:" — scripts/validation/check_adr_links.py:201
- "def _run_git(repo_root: Path, args: list[str]) -> subprocess.CompletedProcess[str]:" — scripts/validation/check_adr_links.py:252
- "def resolve_base_ref(repo_root: Path) -> str | None:" — scripts/validation/check_adr_links.py:265
- "def _merge_base(repo_root: Path, base_ref: str) -> str:" — scripts/validation/check_adr_links.py:288
- "def _parse_allowlist(text: str) -> set[str]:" — scripts/validation/check_adr_links.py:303
- "def baseline_entries_at_ref(repo_root: Path, base_ref: str, baseline_path: Path) -> set[str] | None:" — scripts/validation/check_adr_links.py:327
- "def base_allowances_for_run(" — scripts/validation/check_adr_links.py:356
- "def split_destination(raw: str) -> str:" — scripts/validation/check_adr_links.py:391
- "def is_adr_target(path: str) -> bool:" — scripts/validation/check_adr_links.py:420
- "def adr_number(value: str) -> int | None:" — scripts/validation/check_adr_links.py:447
- "def text_adr_number(text: str) -> int | None:" — scripts/validation/check_adr_links.py:453
- "def normalize_label(label: str) -> str:" — scripts/validation/check_adr_links.py:459
- "def _malformed_findings(file: str, line_number: int, line: str) -> list[Finding]:" — scripts/validation/check_adr_links.py:475
- "def _malformed_baseline_entries(entries: set[str]) -> list[str]:" — scripts/validation/check_adr_links.py:499
- "def _resolves_to_tracked_file(file: str, path: str, tracked: frozenset[str]) -> bool:" — scripts/validation/check_adr_links.py:524
- "def _target_findings(" — scripts/validation/check_adr_links.py:545
- "def _link_findings(" — scripts/validation/check_adr_links.py:584
- "def _link_definitions(lines: list[tuple[int, str]]) -> dict[str, str]:" — scripts/validation/check_adr_links.py:602
- "def _reference_link_pairs(line: str) -> list[tuple[str, str]]:" — scripts/validation/check_adr_links.py:634
- "def _reference_link_findings(" — scripts/validation/check_adr_links.py:661
- "def _live_lines(body: str) -> list[tuple[int, str]]:" — scripts/validation/check_adr_links.py:689
- "def scan_file(repo_root: Path, file: str, tracked: frozenset[str]) -> list[Finding]:" — scripts/validation/check_adr_links.py:760
- "def _validate_allowances(allowed: set[str], base_allowances: set[str] | None) -> None:" — scripts/validation/check_adr_links.py:794
- "def find_broken_adr_links(" — scripts/validation/check_adr_links.py:838
- "def _scannable_files(repo_root: Path) -> list[str]:" — scripts/validation/check_adr_links.py:913
- "def _has_adr_corpus(scanned: list[str]) -> bool:" — scripts/validation/check_adr_links.py:932
- "def validate_adr_links(repo_root: Path, base_ref: str = \"auto\") -> bool:" — scripts/validation/check_adr_links.py:972
- "def build_parser() -> argparse.ArgumentParser:" — scripts/validation/check_adr_links.py:1027
- "def main(argv: list[str] | None = None) -> int:" — scripts/validation/check_adr_links.py:1050
- "if __name__ == \"__main__\":" — scripts/validation/check_adr_links.py:1110

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_adr_links.py`, language: Python 3, lines: 1112
- documented invocation:
  - "check_adr_links.py" — scripts/validation/check_adr_links_baseline.txt:24
  - "from check_adr_links import validate_adr_links" — scripts/validation/pre_pr.py:73
  - "--repo-root" — scripts/validation/check_adr_links.py:1030
- **executed:** yes
- actual command run: `python3 scripts/validation/check_adr_links.py`, abridged stdout: `check_adr_links: 0 violation(s) across 1591 tracked markdown file(s)`, **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented: "Exit codes follow ADR-035: 0 clean, 1 violations found, 2 configuration error." — scripts/validation/check_adr_links.py:78
  - actual exit paths:
    - exit 0: clean run (`return 1 if findings else 0`) at `scripts/validation/check_adr_links.py:1107`
    - exit 1: violations found (`return 1 if findings else 0`) at `scripts/validation/check_adr_links.py:1107`
    - exit 2: no tracked markdown files found at `scripts/validation/check_adr_links.py:1082`
    - exit 2: no ADR records found in corpus at `scripts/validation/check_adr_links.py:1088`
    - exit 2: caught `(OSError, subprocess.CalledProcessError, UnicodeDecodeError, ValueError)` at `scripts/validation/check_adr_links.py:1098`
    - top-level exit: `raise SystemExit(main())` at `scripts/validation/check_adr_links.py:1111`
- for validators/gates:
  - can it exit non-zero? yes: exit 1 on detected ADR-link violations or stale baseline allowances (`scripts/validation/check_adr_links.py:1107`); exit 2 on missing files, missing ADR corpus, git failures, decode errors, malformed baseline entries, or unratcheted branch additions (`scripts/validation/check_adr_links.py:1082,1088,1098`).
  - does it fail on the source repo's own default branch? no, executing `python3 scripts/validation/check_adr_links.py` in `sources/rjm` produces `check_adr_links: 0 violation(s) across 1591 tracked markdown file(s)` and exits 0.
- does the output match what the documentation claims? yes — passes with 0 violations across 1591 tracked markdown files on the default branch under the active baseline.

## Defects — required
none

## Observations
- Taste-lint annotation at line 2 (`# taste-lint: ignore file-size.`) documents why logic and extensive docstrings are intentionally kept in a single cohesive module rather than split.
- Implements comprehensive CommonMark compliance: fence run length matching and trailing whitespace checking (`_live_lines`), reference link parsing (`[text][label]`, `[text][]`, `[label]`) with definitions collected before line scans (`_link_definitions`), and label normalization via Unicode case-folding (`normalize_label`).
- Enforces a three-axis baseline ratchet: exact `<kind>:<file>:<target>` entry shape (`_malformed_baseline_entries`), base-ref provenance preventing branches from adding unratcheted exemptions (`_validate_allowances`), and full-corpus staleness detection (`stale-allowance` findings when allowances remain unmatched).
- Lexical resolution against `git ls-files` (`_resolves_to_tracked_file`) prevents untracked local files from masking dead links in clean checkouts.
- Corpus sentinels (`_scannable_files`, `_has_adr_corpus`) fail loudly (exit 2) if run against empty directories or repositories lacking ADR records, preventing empty scans from manufacturing green passes.

## Context cost
53014 bytes, approximately 13253 tokens. With imported modules (`stale_script_refs.py`: 6298 bytes, `check_adr_links_baseline.txt`: 5725 bytes), total context is 65037 bytes (~16259 tokens).
