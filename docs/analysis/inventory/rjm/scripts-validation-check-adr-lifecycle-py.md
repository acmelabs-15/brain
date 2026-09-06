---
package: rjm
path: scripts/validation/check_adr_lifecycle.py
type: script
bytes: 59943
unit: inv-rjm-273
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_adr_lifecycle.py

## Purpose — required, verbatim
> "Ratcheted lifecycle gate over `.agents/architecture/ADR-NNN-*.md` (issue #5191)." — scripts/validation/check_adr_lifecycle.py:24

## Design intent — required
Establishes an automated, ratcheted lifecycle verification gate for Architectural Decision Records (ADRs under `.agents/architecture/`) to ensure metadata integrity and prevent lifecycle drift. While file-naming uniqueness was verified, ADR frontmatter and prose lifecycle statuses were previously unvalidated, allowing unparsed frontmatter, invalid status enums, broken supersession chains, conflicting declarations between frontmatter and prose, or dangling references to reach `main`. By validating ADR-073 frontmatter schemas, checking reciprocal bidirectional supersession graph consistency, detecting supersession cycles, verifying status-edge consistency, and enforcing a per-check ratchet ceiling (`adr_lifecycle_baseline.json`) that can only fall and never rise, the script guarantees that legacy records pass while preventing any regression or new defects in lifecycle tracking. Without it, architectural decisions could silently drift into inconsistent, contradictory, or orphaned states, breaking automated index generation, downstream agent tooling, and human comprehension of architectural evolution.

## Phase — required
rjm:test

## Inputs — required
- CLI arguments parsed via `build_parser()`:
  - `--repo-root` (default: two levels above script, `Path(__file__).resolve().parents[2]` — scripts/validation/check_adr_lifecycle.py:1245)
  - `--baseline` (default: `adr_lifecycle_baseline.json` beside script — scripts/validation/check_adr_lifecycle.py:185, 1225)
  - `--write-baseline` (flag: record current per-check counts as new ceiling — scripts/validation/check_adr_lifecycle.py:1230)
  - `--show-all` (flag: print every violation, not only regressed checks — scripts/validation/check_adr_lifecycle.py:1235)
  - `--limit` (default: 40, max violations to print — scripts/validation/check_adr_lifecycle.py:1237)
- On-disk ADR files:
  - Scans `.agents/architecture/ADR-*.md` matching `ADR_FILENAME_RE` (`r"^ADR-(\d{2,})-[^/]+\.md$"`) via `collect_records` (scripts/validation/check_adr_lifecycle.py:161, 418, 1247)
- On-disk baseline file:
  - `adr_lifecycle_baseline.json` read via `read_baseline` and parsed via `_parse_baseline_payload` (scripts/validation/check_adr_lifecycle.py:185, 879, 908)
- Git repository state (during `--write-baseline`):
  - Resolves default base ref via `_resolve_default_base_ref(repo_root)` (scripts/validation/check_adr_lifecycle.py:1146)
  - Refreshes remote base via `_refresh_remote_base(base_ref, repo_root)` (scripts/validation/check_adr_lifecycle.py:1148)
  - Checks baseline existence at ref via `baseline_absent_at_ref` (scripts/validation/check_adr_lifecycle.py:1149)
  - Reads baseline content at base ref via `git show <ref>:<rel>` in `_counts_at_ref` (scripts/validation/check_adr_lifecycle.py:947)
- Module imports and helpers:
  - `baseline_absent_at_ref` from `scripts.ci.count_ratchet` (scripts/validation/check_adr_lifecycle.py:123)
  - `blank_non_prose_block_lines` from `scripts.utils.markdown_parser` (scripts/validation/check_adr_lifecycle.py:124)
  - `_refresh_remote_base`, `_resolve_default_base_ref`, `_run_subprocess` from `checks_common` (scripts/validation/check_adr_lifecycle.py:130)
  - `_parse_yaml_frontmatter` from `yaml_utils` (scripts/validation/check_adr_lifecycle.py:135)

## Outputs — required
- Formatted stdout reports:
  - Status header and per-check counts: `ADR lifecycle checks (current / baseline):` (scripts/validation/check_adr_lifecycle.py:1024)
  - Per-check status lines: `  <name>  <counts> / <baseline>  <marker>` with markers `RAISED`, `improved, record with --write-baseline`, `clean, ready for zero-tolerance`, `at baseline` (scripts/validation/check_adr_lifecycle.py:998, 1026)
  - Zero-tolerance recommendations: `Checks at zero and flippable to zero-tolerance: ...` or `No check is at zero yet; none can be flipped to zero-tolerance.` (scripts/validation/check_adr_lifecycle.py:1185, 1187)
  - Pass report: `[PASS] <count> violation(s) across <examined> ADR record(s), no check above its baseline.` (scripts/validation/check_adr_lifecycle.py:1195)
  - Fail report: `[FAIL] <count> check(s) rose above the baseline:` (scripts/validation/check_adr_lifecycle.py:1200)
  - Violation details: `  - <path>: [<check>] <detail>` (scripts/validation/check_adr_lifecycle.py:203, 993)
  - Baseline rewrite summary: `[OK] Wrote <baseline_path> from <violations> violation(s) across <examined> ADR record(s):` (scripts/validation/check_adr_lifecycle.py:1171)
- Diagnostic stderr messages:
  - Config error for missing ADR directory: `[CONFIG] ADR directory not found: <adr_dir>` (scripts/validation/check_adr_lifecycle.py:1249)
  - Config error for empty ADR records: `[CONFIG] no ADR records found: <adr_dir>` (scripts/validation/check_adr_lifecycle.py:1259)
  - Config error for invalid limit: `[CONFIG] --limit must be at least 1` (scripts/validation/check_adr_lifecycle.py:1262)
  - Config error when cwd outside repo root: `[CONFIG] current directory is outside repo root <repo_root>: <cwd>` (scripts/validation/check_adr_lifecycle.py:1108)
  - Config error on unreadable baseline at base ref: `[CONFIG] could not read the baseline <baseline_path> at <base_ref>...` (scripts/validation/check_adr_lifecycle.py:1153)
  - Config error on baseline raise attempt: `[CONFIG] --write-baseline would raise <raised> above <base_ref>'s recorded baseline...` (scripts/validation/check_adr_lifecycle.py:1162)
  - Config error on baseline parse failure: `[CONFIG] <baseline>` (scripts/validation/check_adr_lifecycle.py:1180)
- Files written (when `--write-baseline` passed):
  - `adr_lifecycle_baseline.json` rewritten atomically via temporary file and `os.replace` (scripts/validation/check_adr_lifecycle.py:956)
- Process exit codes (ADR-035):
  - `0` (`EXIT_OK`): no check exceeds baseline, or successful baseline write (scripts/validation/check_adr_lifecycle.py:137, 1176, 1198)
  - `1` (`EXIT_REGRESSION`): at least one check rose above its baseline (scripts/validation/check_adr_lifecycle.py:138, 1210)
  - `2` (`EXIT_CONFIG`): configuration error, missing ADR dir/corpus, outside repo root, or baseline validation error (scripts/validation/check_adr_lifecycle.py:139, 1112, 1158, 1168, 1181, 1250, 1260, 1263)
- Function return values:
  - `validate_adr_lifecycle(repo_root)` returns `bool`: `True` if `main(["--repo-root", str(repo_root)]) == EXIT_OK`, else `False` (scripts/validation/check_adr_lifecycle.py:1280)

## Invokes — required
- script count_ratchet — scripts/validation/check_adr_lifecycle.py:123
- script markdown_parser — scripts/validation/check_adr_lifecycle.py:124
- script checks_common — scripts/validation/check_adr_lifecycle.py:130
- script yaml_utils — scripts/validation/check_adr_lifecycle.py:135
- config adr_lifecycle_baseline.json — scripts/validation/check_adr_lifecycle.py:185

## Invoked by — required
- script check_adr_lifecycle — scripts/validation/pre_pr.py:72
- script check_adr_lifecycle — scripts/validation/pre_pr_sequence.py:43
- config check_adr_lifecycle.py — scripts/validation/adr_lifecycle_baseline.json:3
- script check_adr_lifecycle.py — build/scripts/generate_adr_index.py:94
- script check_adr_lifecycle.py — scripts/validation/check_adr_links.py:953

## Concepts named — required, verbatim
- `taste-lint` — scripts/validation/check_adr_lifecycle.py:2 — used here
- `file-size` — scripts/validation/check_adr_lifecycle.py:2 — used here
- `ratchet` — scripts/validation/check_adr_lifecycle.py:11 — used here
- `ADR-073` — scripts/validation/check_adr_lifecycle.py:18 — used here
- `_split_frontmatter` — scripts/validation/check_adr_lifecycle.py:18 — defined here
- `check_doc_interpreter_portability.py` — scripts/validation/check_adr_lifecycle.py:20 — used here
- `lifecycle gate` — scripts/validation/check_adr_lifecycle.py:24 — defined here
- `check_adr_uniqueness.py` — scripts/validation/check_adr_lifecycle.py:26 — used here
- `frontmatter-parses` — scripts/validation/check_adr_lifecycle.py:32 — defined here
- `supersession-target-exists` — scripts/validation/check_adr_lifecycle.py:32 — defined here
- `ADR-098` — scripts/validation/check_adr_lifecycle.py:34 — used here
- `prose-frontmatter-agree` — scripts/validation/check_adr_lifecycle.py:35 — defined here
- `ADR-073-adr-lifecycle-frontmatter.md` — scripts/validation/check_adr_lifecycle.py:39 — used here
- `RATCHET` — scripts/validation/check_adr_lifecycle.py:60 — used here
- `adr_lifecycle_baseline.json` — scripts/validation/check_adr_lifecycle.py:61 — used here
- `id-matches-filename` — scripts/validation/check_adr_lifecycle.py:67 — defined here
- `status-enum` — scripts/validation/check_adr_lifecycle.py:68 — defined here
- `supersession-reciprocal` — scripts/validation/check_adr_lifecycle.py:69 — defined here
- `proposed-cannot-supersede` — scripts/validation/check_adr_lifecycle.py:72 — defined here
- `status-edge-consistency` — scripts/validation/check_adr_lifecycle.py:74 — defined here
- `implemented-implies-decided` — scripts/validation/check_adr_lifecycle.py:85 — used here
- `_check_lifecycle_rules` — scripts/validation/check_adr_lifecycle.py:89 — defined here
- `ADR-035` — scripts/validation/check_adr_lifecycle.py:101 — used here
- `count_ratchet` — scripts/validation/check_adr_lifecycle.py:123 — used here
- `baseline_absent_at_ref` — scripts/validation/check_adr_lifecycle.py:123 — used here
- `blank_non_prose_block_lines` — scripts/validation/check_adr_lifecycle.py:124 — used here
- `checks_common` — scripts/validation/check_adr_lifecycle.py:130 — used here
- `yaml_utils` — scripts/validation/check_adr_lifecycle.py:135 — used here
- `_parse_yaml_frontmatter` — scripts/validation/check_adr_lifecycle.py:135 — used here
- `EXIT_OK` — scripts/validation/check_adr_lifecycle.py:137 — defined here
- `EXIT_REGRESSION` — scripts/validation/check_adr_lifecycle.py:138 — defined here
- `EXIT_CONFIG` — scripts/validation/check_adr_lifecycle.py:139 — defined here
- `CHECKS` — scripts/validation/check_adr_lifecycle.py:141 — defined here
- `LIFECYCLE_STATUSES` — scripts/validation/check_adr_lifecycle.py:154 — defined here
- `ADR_FILENAME_RE` — scripts/validation/check_adr_lifecycle.py:161 — defined here
- `_ADR_REFERENCE_RE` — scripts/validation/check_adr_lifecycle.py:164 — defined here
- `_STATUS_HEADING_RE` — scripts/validation/check_adr_lifecycle.py:170 — defined here
- `_INLINE_STATUS_RE` — scripts/validation/check_adr_lifecycle.py:175 — defined here
- `_LEVEL_TWO_HEADING_RE` — scripts/validation/check_adr_lifecycle.py:179 — defined here
- `_LEAD_WORD_RE` — scripts/validation/check_adr_lifecycle.py:183 — defined here
- `_BASELINE_PATH` — scripts/validation/check_adr_lifecycle.py:185 — defined here
- `Violation` — scripts/validation/check_adr_lifecycle.py:195 — defined here
- `Record` — scripts/validation/check_adr_lifecycle.py:207 — defined here
- `_split_frontmatter` — scripts/validation/check_adr_lifecycle.py:216 — defined here
- `_frontmatter_reason` — scripts/validation/check_adr_lifecycle.py:243 — defined here
- `_DuplicateKey` — scripts/validation/check_adr_lifecycle.py:285 — defined here
- `_StrictLoader` — scripts/validation/check_adr_lifecycle.py:293 — defined here
- `_reject_duplicate_keys` — scripts/validation/check_adr_lifecycle.py:297 — defined here
- `generate_adr_index.py` — scripts/validation/check_adr_lifecycle.py:298 — used here
- `_duplicate_key` — scripts/validation/check_adr_lifecycle.py:332 — defined here
- `_read_record` — scripts/validation/check_adr_lifecycle.py:376 — defined here
- `collect_records` — scripts/validation/check_adr_lifecycle.py:414 — defined here
- `_frontmatter_of` — scripts/validation/check_adr_lifecycle.py:433 — defined here
- `_status_of` — scripts/validation/check_adr_lifecycle.py:440 — defined here
- `_normalize_reference` — scripts/validation/check_adr_lifecycle.py:448 — defined here
- `_supersedes_entries` — scripts/validation/check_adr_lifecycle.py:460 — defined here
- `_check_identity` — scripts/validation/check_adr_lifecycle.py:477 — defined here
- `_record_header` — scripts/validation/check_adr_lifecycle.py:499 — defined here
- `_status_prose` — scripts/validation/check_adr_lifecycle.py:528 — defined here
- `_check_prose` — scripts/validation/check_adr_lifecycle.py:604 — defined here
- `_check_lifecycle_rules` — scripts/validation/check_adr_lifecycle.py:658 — defined here
- `_edge_targets` — scripts/validation/check_adr_lifecycle.py:686 — defined here
- `_Graph` — scripts/validation/check_adr_lifecycle.py:710 — defined here
- `_build_graph` — scripts/validation/check_adr_lifecycle.py:718 — defined here
- `_find_cycles` — scripts/validation/check_adr_lifecycle.py:745 — defined here
- `_reciprocity_findings` — scripts/validation/check_adr_lifecycle.py:774 — defined here
- `_status_edge_findings` — scripts/validation/check_adr_lifecycle.py:804 — defined here
- `scan` — scripts/validation/check_adr_lifecycle.py:853 — defined here
- `tally` — scripts/validation/check_adr_lifecycle.py:871 — defined here
- `_parse_baseline_payload` — scripts/validation/check_adr_lifecycle.py:879 — defined here
- `read_baseline` — scripts/validation/check_adr_lifecycle.py:908 — defined here
- `_counts_at_ref` — scripts/validation/check_adr_lifecycle.py:923 — defined here
- `write_baseline` — scripts/validation/check_adr_lifecycle.py:956 — defined here
- `_print_violations` — scripts/validation/check_adr_lifecycle.py:990 — defined here
- `_marker` — scripts/validation/check_adr_lifecycle.py:998 — defined here
- `_report` — scripts/validation/check_adr_lifecycle.py:1006 — defined here
- `run` — scripts/validation/check_adr_lifecycle.py:1036 — defined here
- `build_parser` — scripts/validation/check_adr_lifecycle.py:1213 — defined here
- `main` — scripts/validation/check_adr_lifecycle.py:1241 — defined here
- `validate_adr_lifecycle` — scripts/validation/check_adr_lifecycle.py:1273 — defined here

## Structure
- "class Violation:" — scripts/validation/check_adr_lifecycle.py:195
- "class Record:" — scripts/validation/check_adr_lifecycle.py:207
- "def _split_frontmatter(text: str) -> tuple[str | None, str]:" — scripts/validation/check_adr_lifecycle.py:216
- "def _frontmatter_reason(raw: str | None, text: str) -> str:" — scripts/validation/check_adr_lifecycle.py:243
- "class _DuplicateKey(yaml.YAMLError):" — scripts/validation/check_adr_lifecycle.py:285
- "class _StrictLoader(yaml.SafeLoader):" — scripts/validation/check_adr_lifecycle.py:293
- "def _reject_duplicate_keys(loader: yaml.SafeLoader, node: yaml.MappingNode) -> dict[Any, Any]:" — scripts/validation/check_adr_lifecycle.py:297
- "def _duplicate_key(raw: str | None) -> str | None:" — scripts/validation/check_adr_lifecycle.py:332
- "def _read_record(path: Path, number: int, rel: str) -> tuple[Record, Violation | None]:" — scripts/validation/check_adr_lifecycle.py:376
- "def collect_records(adr_dir: Path, repo_root: Path) -> tuple[list[Record], list[Violation]]:" — scripts/validation/check_adr_lifecycle.py:414
- "def _frontmatter_of(record: Record) -> dict[str, Any]:" — scripts/validation/check_adr_lifecycle.py:433
- "def _status_of(record: Record) -> str:" — scripts/validation/check_adr_lifecycle.py:440
- "def _normalize_reference(value: object) -> int | None:" — scripts/validation/check_adr_lifecycle.py:448
- "def _supersedes_entries(record: Record) -> list[Any] | None:" — scripts/validation/check_adr_lifecycle.py:460
- "def _check_identity(record: Record) -> list[Violation]:" — scripts/validation/check_adr_lifecycle.py:477
- "def _record_header(body: str) -> str:" — scripts/validation/check_adr_lifecycle.py:499
- "def _status_prose(body: str) -> str | None:" — scripts/validation/check_adr_lifecycle.py:528
- "def _check_prose(record: Record) -> list[Violation]:" — scripts/validation/check_adr_lifecycle.py:604
- "def _check_lifecycle_rules(record: Record) -> list[Violation]:" — scripts/validation/check_adr_lifecycle.py:658
- "def _edge_targets(" — scripts/validation/check_adr_lifecycle.py:686
- "class _Graph:" — scripts/validation/check_adr_lifecycle.py:710
- "def _build_graph(by_number: dict[int, Record], known: set[int]) -> _Graph:" — scripts/validation/check_adr_lifecycle.py:718
- "def _find_cycles(successor: dict[int, int]) -> list[list[int]]:" — scripts/validation/check_adr_lifecycle.py:745
- "def _reciprocity_findings(by_number: dict[int, Record], graph: _Graph) -> list[Violation]:" — scripts/validation/check_adr_lifecycle.py:774
- "def _status_edge_findings(by_number: dict[int, Record], graph: _Graph) -> list[Violation]:" — scripts/validation/check_adr_lifecycle.py:804
- "def scan(adr_dir: Path, repo_root: Path) -> list[Violation]:" — scripts/validation/check_adr_lifecycle.py:853
- "def tally(violations: list[Violation]) -> dict[str, int]:" — scripts/validation/check_adr_lifecycle.py:871
- "def _parse_baseline_payload(text: str, source: str) -> dict[str, int] | str:" — scripts/validation/check_adr_lifecycle.py:879
- "def read_baseline(path: Path) -> dict[str, int] | str:" — scripts/validation/check_adr_lifecycle.py:908
- "def _counts_at_ref(repo_root: Path, ref: str, baseline_path: Path) -> dict[str, int] | None:" — scripts/validation/check_adr_lifecycle.py:923
- "def write_baseline(path: Path, counts: dict[str, int]) -> None:" — scripts/validation/check_adr_lifecycle.py:956
- "def _print_violations(violations: list[Violation], checks: set[str], limit: int) -> None:" — scripts/validation/check_adr_lifecycle.py:990
- "def _marker(current: int, allowed: int) -> str:" — scripts/validation/check_adr_lifecycle.py:998
- "def _report(counts: dict[str, int], baseline: dict[str, int]) -> tuple[set[str], set[str]]:" — scripts/validation/check_adr_lifecycle.py:1006
- "def run(" — scripts/validation/check_adr_lifecycle.py:1036
- "def build_parser() -> argparse.ArgumentParser:" — scripts/validation/check_adr_lifecycle.py:1213
- "def main(argv: list[str] | None = None) -> int:" — scripts/validation/check_adr_lifecycle.py:1241
- "def validate_adr_lifecycle(repo_root: Path) -> bool:" — scripts/validation/check_adr_lifecycle.py:1273
- "sys.exit(main())" — scripts/validation/check_adr_lifecycle.py:1284

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_adr_lifecycle.py`, language: Python 3, lines: 1285
- documented invocation:
  - "python3" — scripts/validation/check_adr_lifecycle.py:1
  - "scripts/validation/check_adr_lifecycle.py --write-baseline" — scripts/validation/check_adr_lifecycle.py:190
  - "uv run python scripts/validation/pre_pr.py" — .claude/skills/ai-agents-change-control/SKILL.md:75
- **executed:** yes
- actual command run: `uv run --project sources/rjm python sources/rjm/scripts/validation/check_adr_lifecycle.py`, abridged stdout: `ADR lifecycle checks (current / baseline):\n  frontmatter-parses            0 / 0    clean, ready for zero-tolerance\n  id-matches-filename           0 / 0    clean, ready for zero-tolerance\n  status-enum                   0 / 0    clean, ready for zero-tolerance\n  supersession-reciprocal       0 / 0    clean, ready for zero-tolerance\n  supersession-target-exists    0 / 0    clean, ready for zero-tolerance\n  proposed-cannot-supersede     0 / 0    clean, ready for zero-tolerance\n  prose-frontmatter-agree       0 / 0    clean, ready for zero-tolerance\n  status-edge-consistency       0 / 0    clean, ready for zero-tolerance\nChecks at zero and flippable to zero-tolerance: frontmatter-parses, id-matches-filename, proposed-cannot-supersede, prose-frontmatter-agree, status-edge-consistency, status-enum, supersession-reciprocal, supersession-target-exists\n\n[PASS] 0 violation(s) across 104 ADR record(s), no check above its baseline.`, **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - no check exceeds its baseline (improvements pass and are reported)" — scripts/validation/check_adr_lifecycle.py:102
    - "1 - at least one check rose above its baseline" — scripts/validation/check_adr_lifecycle.py:103
    - "2 - config error (ADR directory missing, baseline missing/malformed/stale)" — scripts/validation/check_adr_lifecycle.py:104
  - actual exit paths:
    - exit code 0 (`EXIT_OK = 0` at line 137): `return EXIT_OK` on `--write-baseline` success at line 1176; `return EXIT_OK` on clean scan at line 1198
    - exit code 1 (`EXIT_REGRESSION = 1` at line 138): `return EXIT_REGRESSION` when check count rose above baseline at line 1210
    - exit code 2 (`EXIT_CONFIG = 2` at line 139): `return EXIT_CONFIG` on cwd outside repo root at line 1112; on baseline unreadable at base ref at line 1158; on write baseline raising count at line 1168; on unreadable baseline payload at line 1181; on missing ADR directory at line 1250; on no ADR records found at line 1260; on `--limit < 1` at line 1263
    - process exit via `sys.exit(main())` at line 1284
- for validators/gates: can it exit non-zero? yes — returns 1 on ratchet regressions and 2 on configuration errors or corpus anomalies. Does it fail on the source repo's own default branch? no — reports 0 violations across 104 ADR records and exits 0.
- does the output match what the documentation claims? yes — prints per-check current vs baseline counts, identifies flippable zero-tolerance checks, reports pass/fail status, and follows ADR-035 exit code conventions.

## Defects — required
none

## Observations
- Defensive engineering: includes strict duplicate key detection in YAML (`_StrictLoader` / `_reject_duplicate_keys`) because PyYAML silently takes the last key, which would be a forgery/drift vector where the human-visible status differs from the parser-enforced status.
- Prevents false-pass on empty/narrowed corpus: `main()` confirms that at least one `ADR-*.md` matching `ADR_FILENAME_RE` exists (excluding templates), and `run()` tracks `examined` ADR records.
- Comprehensive supersession graph analysis: builds a directed supersession graph, validates bidirectional reciprocity (`X.superseded-by == Y` <=> `Y.supersedes contains X`), validates that edge targets exist, prevents self-supersession and proposals declaring supersession, detects directed graph cycles via cycle permutation canonicalization, and validates status-edge consistency.
- Robust markdown parsing: utilizes `blank_non_prose_block_lines` to prevent code fences or HTML comments containing `## Status` from spoofing real status sections.
- Atomic baseline updates: writes baseline updates through sibling temporary files with `os.replace` to prevent corrupted JSON on interrupted writes, and validates against git base-ref to enforce that `--write-baseline` can only lower or maintain check counts, never raise them.

## Context cost
59943 bytes in source file, plus 12128 bytes (`count_ratchet.py`), 18342 bytes (`markdown_parser.py`), 10452 bytes (`checks_common.py`), 3180 bytes (`yaml_utils.py`), and 702 bytes (`adr_lifecycle_baseline.json`) when invoked = 104747 bytes total. Approximately 26187 tokens.
