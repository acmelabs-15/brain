---
package: rjm
path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py
type: script
bytes: 47394
unit: inv-rjm-116
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py, sha256: e2a6c5623a7e91beaa30b099757c63e1648f530db3e3d2b4d2281dc34f4cc2f8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/doc-accuracy/scripts/doc_accuracy.py

## Purpose — required, verbatim
> "Documentation Accuracy Scanner - Phases 1-3." — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:2
> "Treats code as the source of truth and documentation as the subject under test." — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:4

## Design intent — required
Deterministic verification engine implementing Phases 1–3 of the `doc-accuracy` documentation verification workflow. Operationalizes the asymmetric principle that "code is truth; docs are the subject under test" by enumerating and indexing public symbols from source files (C#, Python, JavaScript, TypeScript), extracting verifiable claims from Markdown files (code examples, behavioral claims, quantitative statements, method signatures), and verifying code example symbols against the source index to catch unresolved symbols and phantom parameters without incurring LLM token costs. Generates structured JSON artifacts (`assessment.json`, `claims.json`, `compilability-findings.json`, `gate-result.json`) and summary reports for downstream agent phases (Phases 4–6), while enforcing Git-aware diff scoping and configurable gate thresholds.

## Phase — required
rjm:build

## Inputs — required
- Command-line arguments:
  - `--target` / `-t`: "Repository root to scan" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1229
  - `--output-dir` / `-o`: "Output directory for JSON artifacts " — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1233
  - `--phases`: "Comma-separated phases to run (default: 1,2,3)" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1238
  - `--diff-base`: "Git ref for incremental mode (only report changed files)" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1242
  - `--severity-threshold`: "Minimum severity for non-zero exit code (default: high)" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1247
  - `--format` / `-f`: "Output format (default: json)" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1252
- Target repository filesystem:
  - Source files matching `SOURCE_EXTENSIONS`: `.cs`, `.py`, `.js`, `.ts`, `.jsx`, `.tsx`, `.go`, `.rs`, `.java` (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:139-149)
  - Documentation files matching `DOC_GLOBS`: "docs/**/*.md", "**/*.md" (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:151)
  - Excluded paths matching `EXCLUDE_DIRS`: `.git`, `node_modules`, `__pycache__`, `.venv`, `venv`, `target`, `dist`, `build`, `bin`, `obj`, `.doc-accuracy` (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:153-165)
- Git index and revision trees queried via subprocess (`git ls-files`, `git rev-parse`, `git cat-file`, `git diff`) (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:271, 483, 529, 601)
- Intermediate phase artifacts when running subset phases: `assessment.json` (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:1325), `claims.json` (:1351)

## Outputs — required
- JSON artifacts written to output directory (default `<target>/.doc-accuracy`):
  - `assessment.json`: Phase 1 documentation inventory, indexed public symbols, coverage summary, and benchmark files (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:1311)
  - `claims.json`: Phase 2 verifiable claims extracted from documentation (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:1332)
  - `compilability-findings.json`: Phase 3 status and compilability findings (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:1358)
  - `gate-result.json`: Gate verdict (`PASS`, `FAIL`, `DID_NOT_RUN`), threshold, blocking findings count, and counts by severity (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:1377)
- Optional Markdown report: `report.md` written to output directory when `--format markdown` (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:1387)
- Formatted summary text printed to stdout when `--format summary` (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:1174, 1383)
- Process exit codes: 0 (pass), 1 (error or inconclusive/`DID_NOT_RUN`), 2 (configuration error), 3 (external dependency failure), 10 (blocking findings at or above threshold) (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:12-16, 1395-1399)

## Invokes — required
- External executable `git` via `_git_command` (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:224) executing `ls-files` (:271), `rev-parse` (:483, 502, 544), `cat-file` (:529, 554, 581), and `diff` (:601)
- Python standard library: `argparse`, `json`, `logging`, `os`, `re`, `subprocess`, `sys`, `dataclasses`, `pathlib`, `typing`

## Invoked by — required
- skill doc-accuracy — .claude/skills/doc-accuracy/SKILL.md:81
- skill doc-accuracy — .claude/skills/doc-accuracy/SKILL.md:87
- skill doc-accuracy — .claude/skills/doc-accuracy/SKILL.md:126
- skill doc-accuracy — .claude/skills/doc-accuracy/SKILL.md:214
- script pr_snapshot — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:542

## Concepts named — required, verbatim
- `Documentation Accuracy Scanner` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:2 — defined here
- `source of truth` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:4 — used here
- `subject under test` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:4 — used here
- `Assessment` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:7 — defined here
- `Claim Extraction` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:8 — defined here
- `Compilability` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:9 — defined here
- `severity threshold` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:12 — used here
- `source symbols` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:13 — used here
- `SourceSymbol` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:37 — defined here
- `public` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:38 — used here
- `DocFile` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:59 — defined here
- `code_blocks` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:65 — defined here
- `Claim` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:82 — defined here
- `code_example` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:87 — defined here
- `method_signature` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:87 — defined here
- `behavioral` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:87 — defined here
- `quantitative` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:87 — defined here
- `Finding` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:107 — defined here
- `critical` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:112 — used here
- `high` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:112 — used here
- `medium` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:112 — used here
- `low` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:112 — used here
- `ADR-035` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:238 — used here
- `phantom_parameter` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:988 — defined here
- `unresolved_symbol` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1031 — defined here
- `DID_NOT_RUN` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:931 — defined here
- `COMPLETED` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1050 — defined here
- `PASS` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1095 — defined here
- `FAIL` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1095 — defined here
- `Documentation Accuracy Report` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1114 — defined here
- `CWE-22` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1262 — used here
- `assessment.json` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1311 — defined here
- `claims.json` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1332 — defined here
- `compilability-findings.json` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1358 — defined here
- `gate-result.json` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1377 — defined here
- `report.md` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1387 — defined here

## Structure
none (python script; functions and definitions: `SourceSymbol`, `DocFile`, `Claim`, `Finding`, `SOURCE_EXTENSIONS`, `DOC_GLOBS`, `EXCLUDE_DIRS`, `_GIT_TIMEOUT`, `_GIT_ENV_DENY_EXACT`, `_GIT_ENV_DENY_PREFIXES`, `_GIT_ENV_FORCE`, `_git_env`, `_git_command`, `_repo_relative`, `_GitError`, `_decode_stderr`, `_iter_git_files`, `_should_exclude`, `_extract_csharp_symbols`, `_extract_python_symbols`, `_extract_js_symbols`, `SYMBOL_EXTRACTORS`, `_find_referenced_symbols`, `_map_doc_to_source`, `_count_code_blocks`, `_get_changed_files`, `run_assessment`, `_detect_language`, `_extract_identifiers`, `_extract_quantitative_claims`, `run_claim_extraction`, `run_compilability_check`, `SEVERITY_ORDER`, `check_gate`, `generate_markdown_report`, `_print_summary`, `_load_json_artifact`, `_build_parser`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/doc-accuracy/scripts/doc_accuracy.py`, language: Python 3, lines: 1404
- documented invocation:
  - "python3 scripts/doc_accuracy.py --target /path/to/repo" — .claude/skills/doc-accuracy/SKILL.md:87
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --phases 3" — .claude/skills/doc-accuracy/SKILL.md:90
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --diff-base main" — .claude/skills/doc-accuracy/SKILL.md:93
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --output-dir .doc-accuracy" — .claude/skills/doc-accuracy/SKILL.md:96
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --severity-threshold critical" — .claude/skills/doc-accuracy/SKILL.md:99
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --format markdown" — .claude/skills/doc-accuracy/SKILL.md:102
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --format summary" — .claude/skills/doc-accuracy/SKILL.md:105
- **executed:** yes
- actual command run:
  `python3 sources/rjm/.claude/skills/doc-accuracy/scripts/doc_accuracy.py --target sources/rjm --diff-base 12bea5f59 --output-dir /tmp/rjm-diff-test-2 --format summary`
  abridged stdout:
  ```
  Phase 1: Assessment...
    Found 10 doc files, 36782 source symbols
  Phase 2: Claim Extraction...
    Extracted 54 claims
  Phase 3: Compilability Check...
    Found 9 compilability issues

  --- Documentation Accuracy Summary ---
  Symbols: 182/36782 (0.5% coverage)
  Claims: 54 total
    code_example: 45
    quantitative: 9
  Findings: 9 total
    high: 9
  Gate: FAIL (threshold: high)
  ```
  **actual exit code**: 10
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0: No findings at or above severity threshold" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:12
  - "1: Error or inconclusive run, including no source symbols for Phase 3" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:13
  - "2: Configuration error, including an invalid --diff-base" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:14
  - "3: External dependency failure, including unavailable or failed Git" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:15
  - "10: Findings at or above severity threshold" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:16
  Actual exit paths in code:
  - `sys.exit(main())` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1403
  - `return 0` (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:1399) when gate verdict is `PASS`.
  - `return 1` on invalid target directory (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:1266), output path traversal (:1284), missing/corrupt JSON artifacts (:1328, :1347, :1354), or gate verdict `DID_NOT_RUN` (:1397).
  - `return 2` on unknown or non-commit revision via `_GitError(2, ...)` handled at line 1301 (raised at :511, :564).
  - `return 3` on git repository error, index error, timeout, or missing git binary via `_GitError(3, ...)` or `OSError` / `subprocess.TimeoutExpired` handled at lines 1301, 1304, 1310.
  - `return 10` (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:1395) when gate verdict is `FAIL`.
- for validators/gates: can it exit non-zero? yes, exits 1 on invalid target or missing symbols, 2 on invalid diff-base, 3 on git failure, and 10 on blocking findings. Does it fail on the source repo's own default branch? Exits 0 (PASS) with `--diff-base HEAD`; exits 10 (FAIL) when diff-base touches docs containing uppercase constant tokens.
- does the output match what the documentation claims? Yes, generates valid `assessment.json`, `claims.json`, `compilability-findings.json`, and `gate-result.json` matching the schema declared in `SKILL.md:110-119`.

## Defects — required
- `script-bug` · .claude/skills/doc-accuracy/scripts/doc_accuracy.py:766 · Identifier extraction regex `\b([A-Z][a-zA-Z0-9]+)\b` fails to extract snake_case identifiers despite inline comment claiming `# Match CamelCase and snake_case identifiers (3+ chars)`.
- `script-bug` · .claude/skills/doc-accuracy/scripts/doc_accuracy.py:821 · Code block parsing does not strip comments or string literals before identifier extraction, causing English words starting with capital letters in code comments (e.g. `# Pass the tree...`) or constant strings (`TODO`, `TBD`) to be extracted and flagged as `unresolved_symbol` false positives.
- `internal-contradiction` · .claude/skills/doc-accuracy/scripts/doc_accuracy.py:146 · `SOURCE_EXTENSIONS` includes `.go`, `.rs`, and `.java`, but `SYMBOL_EXTRACTORS` at line 415 defines extractors only for `csharp`, `python`, `javascript`, and `typescript`, leaving Go, Rust, and Java source files unindexed without warning.
- `doc-drift` · .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1011 · Phase 3 compilability check skips any symbol not matching `^[A-Z][a-zA-Z0-9]+$`, silently omitting all standard snake_case Python functions extracted in Phase 1 from compilability verification against documentation claims.

## Observations
- Comprehensive Git subprocess isolation: `_git_env()` sanitizes all ambient repository, config, and work-tree environment variables (`GIT_DIR`, `GIT_WORK_TREE`, `GIT_CONFIG_*`, etc.) and forces `GIT_CONFIG_NOSYSTEM=1`, `core.fsmonitor=false`, and `--no-replace-objects` to prevent host configuration from hijacking Git execution (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:207-220).
- Security hardening: Enforces directory traversal protection (`CWE-22`) by validating that relative output paths must resolve within the target repository (`output_dir.relative_to(target)` at line 1277).
- Quadratic complexity bottleneck in `run_assessment`: Iterating over every documentation file (4,548 files in rjm) and performing linear substring searches against all indexed source symbols (36,782 symbols) creates an unindexed O(D * S) computational bottleneck (>167M string comparisons), causing full-repo non-diff runs to stall unless `--diff-base` is supplied.
- Fails closed with graceful degradation: When no source symbols are found in Phase 1, Phase 3 marks the gate status as `DID_NOT_RUN` and exits with code 1 instead of throwing unhandled exceptions or falsely reporting 100% passing compilability (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:931, 1397).

## Context cost
47394 bytes (~11848 tokens). Self-contained Python script importing only standard library modules and executing system Git.
