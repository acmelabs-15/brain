---
package: rjm
path: scripts/eval/optimize-artifact.py
type: script
bytes: 153486
unit: inv-rjm-235
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/optimize-artifact.py, sha256: 0df36122ac74e0681e0caeb878ed07ab01ce7dea50d1881e6bd1f7c4e998b765}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/optimize-artifact.py

## Purpose — required, verbatim
> "Held-out-gated optimization rails for agents, rules, and hooks." — scripts/eval/optimize-artifact.py:3

## Design intent — required
Provides the command-line driver and enforcement rails for held-out-gated iterative optimization loops over prompts, agents, rules, and hooks. In automated agent tuning and prompt optimization, authors and optimizing agents frequently score proposed edits against the material read while making them, which leaks test signals and overfits evaluation suites. `optimize-artifact.py` separates proposal from acceptance: it converts disparate upstream scorers into uniform `{task_id: bool}` outcomes with extraction provenance; partitions task inventories into optimization (`opt`), selection/gating (`sel`), and untouched evaluation (`test`) groups; derives and enforces step-dependent edit budgets under cosine decay; consults an append-only rejection buffer to prune previously rejected edits; applies bounded atomic patches while preserving protected fences; gates proposed candidate artifacts against incumbents on the held-out selection group using exact McNemar significance testing and consultation caps; and allows a single unmetered reveal of the untouched test group only after optimization converges. Without this CLI, automated prompt and artifact optimization loops lack statistical discipline, suffer from evaluation laundering and test-set contamination, and fail to verify whether prompt edits generalize.

## Phase — required
none

## Inputs — required
Command-line arguments and configuration across 9 subcommands:
- `extract`: `--kind` (`agent`, `rule`, `hook`), `--input` file path(s), `--variant`, `--reduce`, `--pass-threshold`, `--mechanism`, `--min-score`, `--rule-reduce`, `--on-skip`, optional `--split` and `--group` (`opt`, `sel`, `test`), `--upstream-model`, `--upstream-seed` — scripts/eval/optimize-artifact.py:3066-3123
- `split`: `--tasks` path to newline-delimited task IDs (or rejected `--results`), `--seed`, optional `--corpus` SHA-256 digest, `--out` path, `--sel-ratio` (default `0.4`), `--test-ratio` (default `0.0`), `--min-sel` (default 3) — scripts/eval/optimize-artifact.py:3125-3161
- `budget`: `--step`, `--total`, `--max-edits` (default 5), `--min-edits` (default 1) — scripts/eval/optimize-artifact.py:3163-3188
- `score`: `--results` extracted results JSON path, `--split` path, `--group` — scripts/eval/optimize-artifact.py:3205
- `apply`: `--file` target artifact path, `--patches` JSON array path, `--budget`, `--dry-run` — scripts/eval/optimize-artifact.py:3212-3226
- `gate`: `--incumbent` results JSON path, `--candidate` results JSON path, `--split` path, `--max-consultations`, `--incumbent-fingerprint`, optional `--max-p` — scripts/eval/optimize-artifact.py:3228-3265
- `report`: `--results` results JSON path, `--split` path — scripts/eval/optimize-artifact.py:3267-3284
- `buffer-check`: `--buffer` rejection buffer JSON path, `--patches` path, `--artifact` path — scripts/eval/optimize-artifact.py:3286-3290
- `buffer-add`: `--buffer` rejection buffer JSON path, `--patches` path, `--artifact` path, `--reason` string — scripts/eval/optimize-artifact.py:3292-3306
- Environment variables: `EVAL_LEDGER_DIR` (or fallback `XDG_STATE_HOME` / `~/.local/state/ai-agents-eval/ledgers`) for consultation and test ledger persistence — scripts/eval/optimize-artifact.py:1480, 1493-1514

## Outputs — required
Structured JSON payloads emitted to stdout and persisted state files:
- `extract`: JSON object with `schema` (`optimizer-results/1`), `corpus`, `provenance`, and `results` mapping task ID to boolean — scripts/eval/optimize-artifact.py:1258-1267
- `split`: full partition record written to `--out` file (`opt`, `sel`, `test`, `fingerprint`, `seed`, ratios, optional `corpus`), and summary emitted to stdout (`opt`, `n_sel`, `n_test`, `fingerprint`, `seed`, `split`) — scripts/eval/optimize-artifact.py:1353-1379
- `budget`: JSON object with `budget`, `step`, `total` — scripts/eval/optimize-artifact.py:1390
- `score`: JSON object with `score`, `group` (`opt`), `n`, `fingerprint` — scripts/eval/optimize-artifact.py:1433-1440
- `apply`: modified artifact file written in place via `_write_atomic`, emitting JSON summary (`applied`, `written`, `path` or `result` on dry-run, or refusal `error`) — scripts/eval/optimize-artifact.py:1465-1472
- `gate`: consultation ledger updated at `<ledger_root>/<holdout_key>.ledger`, emitting JSON decision (`decision`: `ACCEPT` or `REJECT`, `reason`, `candidate`, `incumbent`, `discordant_gain`, `discordant_loss`, `p_value`, `max_p`, `max_p_per_comparison`, `consultations`, `sel_consultations`, `compared`, `corpus_verified`, `corpus_pinned`, `group`, `fingerprint`) — scripts/eval/optimize-artifact.py:2437-2484
- `report`: test ledger updated at `<ledger_root>/<holdout_key>.test-ledger`, emitting JSON score report (`score`, `group` `test`, `n`, `corpus_verified`, `fingerprint`) or refusal — scripts/eval/optimize-artifact.py:2643-2653
- `buffer-check`: JSON object with `seen`, `fingerprint`, `artifact_fingerprint` — scripts/eval/optimize-artifact.py:2946-2952
- `buffer-add`: appended rejection buffer written to `--buffer` file, emitting `added`, `fingerprint`, `artifact_fingerprint`, `entries` — scripts/eval/optimize-artifact.py:3007-3015
- Exit codes: 0 (`EXIT_OK`), 1 (`EXIT_LOGIC`), 2 (`EXIT_CONFIG`) — scripts/eval/optimize-artifact.py:112-114

## Invokes — required
- script _optimizer_adapters — scripts/eval/optimize-artifact.py:72
- script _optimizer_core — scripts/eval/optimize-artifact.py:87

## Invoked by — required
- doc README.md — scripts/eval/README.md:99
- script _optimizer_core — scripts/eval/_optimizer_core.py:5
- script eval-rule-activation.py — scripts/eval/eval-rule-activation.py:2419

## Concepts named — required, verbatim
- `ADR-035` — scripts/eval/optimize-artifact.py:37 — used here
- `mcnemar_exact` — scripts/eval/optimize-artifact.py:96 — used here
- `_GATE_GROUP` — scripts/eval/optimize-artifact.py:102 — defined here
- `_REPORT_GROUP` — scripts/eval/optimize-artifact.py:108 — defined here
- `EXIT_OK` — scripts/eval/optimize-artifact.py:112 — defined here
- `EXIT_LOGIC` — scripts/eval/optimize-artifact.py:113 — defined here
- `EXIT_CONFIG` — scripts/eval/optimize-artifact.py:114 — defined here
- `ConfigError` — scripts/eval/optimize-artifact.py:119 — defined here
- `LedgerMismatchError` — scripts/eval/optimize-artifact.py:123 — defined here
- `_DuplicateKeyError` — scripts/eval/optimize-artifact.py:174 — defined here
- `ResultsFile` — scripts/eval/optimize-artifact.py:322 — defined here
- `_RESULTS_SCHEMA` — scripts/eval/optimize-artifact.py:337 — defined here
- `_PROVENANCE_SCHEMA` — scripts/eval/optimize-artifact.py:338 — defined here
- `_EXTRACTOR_VERSION` — scripts/eval/optimize-artifact.py:339 — defined here
- `_LEDGER_DIR_ENV` — scripts/eval/optimize-artifact.py:1480 — defined here
- `_HELD_OUT_PLACEHOLDER` — scripts/eval/optimize-artifact.py:1481 — defined here
- `Bonferroni` — scripts/eval/optimize-artifact.py:2454 — used here
- `ADR-087` — scripts/eval/optimize-artifact.py:2498 — used here
- `_MOVEFILE_REPLACE_EXISTING` — scripts/eval/optimize-artifact.py:2718 — defined here
- `_MOVEFILE_WRITE_THROUGH` — scripts/eval/optimize-artifact.py:2719 — defined here
- `build_parser` — scripts/eval/optimize-artifact.py:3058 — defined here
- `main` — scripts/eval/optimize-artifact.py:3335 — defined here

## Structure
- extract — scripts/eval/optimize-artifact.py:821
- split, budget, score — scripts/eval/optimize-artifact.py:1329
- apply — scripts/eval/optimize-artifact.py:1445
- gate — scripts/eval/optimize-artifact.py:1476
- report — scripts/eval/optimize-artifact.py:2489
- buffer — scripts/eval/optimize-artifact.py:2658
- argument parsing — scripts/eval/optimize-artifact.py:3020

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/optimize-artifact.py`, language: Python, lines: 3410
- documented invocation:
  - `"optimize-artifact.py budget --step 3 --total 12" — scripts/eval/optimize-artifact.py:16`
  - `"optimize-artifact.py extract --kind agent --input report.json > base.json" — scripts/eval/optimize-artifact.py:14`
  - `"optimize-artifact.py split --results base.json --seed run-7 > split.json" — scripts/eval/optimize-artifact.py:15`
  - `"optimize-artifact.py buffer-check --buffer rejected.json --patches p.json \\" — scripts/eval/optimize-artifact.py:17`
  - `"optimize-artifact.py apply --file target.md --patches p.json --budget 3" — scripts/eval/optimize-artifact.py:19`
  - `"optimize-artifact.py gate --incumbent base.json --candidate cand.json \\" — scripts/eval/optimize-artifact.py:21`
  - `"optimize-artifact.py report --results cand.json --split split.json" — scripts/eval/optimize-artifact.py:26`
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - `python3 sources/rjm/scripts/eval/optimize-artifact.py budget --step 3 --total 12`: stdout: `{\n  "budget": 4,\n  "step": 3,\n  "total": 12\n}`, exit code: 0
  - `python3 sources/rjm/scripts/eval/optimize-artifact.py`: stdout: (usage help text on stderr), exit code: 2
  - `python3 sources/rjm/scripts/eval/optimize-artifact.py split --results base.json --seed run-7 --out split.json`: stdout: `{\n  "error": "split must be drawn from an authoritative task inventory with --tasks, not from results being judged",\n  "type": "ConfigError"\n}`, exit code: 2
- documented exit codes:
  - > "0 accept, novel, or plain success" — scripts/eval/optimize-artifact.py:39
  - > "1 reject, already-rejected, or a refused patch" — scripts/eval/optimize-artifact.py:40
  - > "2 bad arguments, unreadable input, or malformed data" — scripts/eval/optimize-artifact.py:41
  vs. actual exit paths in code:
  - `SystemExit`: `raise SystemExit(_final_exit_code(main()))` at scripts/eval/optimize-artifact.py:3409
  - `EXIT_OK = 0` defined at scripts/eval/optimize-artifact.py:112
  - `EXIT_LOGIC = 1` defined at scripts/eval/optimize-artifact.py:113
  - `EXIT_CONFIG = 2` defined at scripts/eval/optimize-artifact.py:114
  - `cmd_extract`: returns `EXIT_OK` (0) at scripts/eval/optimize-artifact.py:1268
  - `cmd_split`: returns `EXIT_OK` (0) at scripts/eval/optimize-artifact.py:1380
  - `cmd_budget`: returns `EXIT_OK` (0) at scripts/eval/optimize-artifact.py:1391
  - `cmd_score`: returns `EXIT_OK` (0) at scripts/eval/optimize-artifact.py:1441
  - `cmd_apply`: returns `EXIT_LOGIC` (1) on ValueError at scripts/eval/optimize-artifact.py:1466; returns `EXIT_OK` (0) at scripts/eval/optimize-artifact.py:1469, 1472
  - `cmd_gate`: returns `EXIT_LOGIC` (1) at scripts/eval/optimize-artifact.py:2150, 2169, 2305, 2323, 2339, 2354, 2376, 2414; in `_gate_decision` returns `EXIT_OK` (0) if ACCEPT else `EXIT_LOGIC` (1) at scripts/eval/optimize-artifact.py:2485
  - `cmd_report`: returns `EXIT_LOGIC` (1) at scripts/eval/optimize-artifact.py:2569, 2597, 2614, 2641; returns `EXIT_OK` (0) at scripts/eval/optimize-artifact.py:2654
  - `cmd_buffer_check`: returns `EXIT_LOGIC` (1) if seen else `EXIT_OK` (0) at scripts/eval/optimize-artifact.py:2953
  - `cmd_buffer_add`: returns `EXIT_OK` (0) at scripts/eval/optimize-artifact.py:3016
  - `_dispatch`: catches `(ConfigError, AdapterError, ValueError)` and returns `EXIT_CONFIG` (2) at scripts/eval/optimize-artifact.py:3331; returns `EXIT_CONFIG` (2) if no command at scripts/eval/optimize-artifact.py:3316
  - `main`: catches `(OSError, ValueError)` and returns `EXIT_CONFIG` (2) at scripts/eval/optimize-artifact.py:3365
  - `_final_exit_code`: catches `(OSError, ValueError)` on stdout flush and returns `EXIT_CONFIG` (2) at scripts/eval/optimize-artifact.py:3404
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Yes, exits non-zero:
  - Exits 1 (`EXIT_LOGIC`) on `REJECT` decisions, duplicate edits in `buffer-check`, patch application errors, exhausted consultation budgets, or corpus mismatches.
  - Exits 2 (`EXIT_CONFIG`) on invalid arguments, missing input files, malformed JSON, duplicate JSON keys, or corrupted split fingerprints.
  Running the script with no arguments on the default branch exits 2.
- does the output match what the documentation claims?
  Yes for `budget`: executes and emits valid JSON with step, total, and calculated budget.
  However, see defect below regarding the `split` command example in the module docstring.

## Defects — required
- doc-drift · scripts/eval/optimize-artifact.py:15 · The docstring example specifies 'optimize-artifact.py split --results base.json --seed run-7 > split.json', but '--out' is a required argument (scripts/eval/optimize-artifact.py:3142) and passing '--results' is rejected as deprecated by 'cmd_split' (scripts/eval/optimize-artifact.py:1336-1339).
- doc-drift · scripts/eval/optimize-artifact.py:17-18 · The docstring example 'optimize-artifact.py buffer-check --buffer rejected.json --patches p.json --artifact target.md' cites 'rejected.json' as an input, but typical buffer workflows initialize without a pre-existing buffer file ('_read_buffer' handles absence at scripts/eval/optimize-artifact.py:2910-2913).

## Observations
- Atomic replacement and POSIX/Win32 durability: `_write_atomic` and `_durable_replace` combine tempfile creation beside target, `os.fsync`, `os.replace`, and POSIX directory fsync (`_fsync_dir`) or Win32 `MoveFileExW` with `MOVEFILE_WRITE_THROUGH` (0x8) to guarantee durability across host power loss without corrupting state or granting free consultation looks (scripts/eval/optimize-artifact.py:2662-2853).
- Information leakage defense / held-out redaction: Redacts held-out key digest via regex (`_scrub`, `_HELD_OUT_PLACEHOLDER`) in all error messages, ledger paths, and lock notifications using contextvars (`_ACTIVE_HOLDOUT_KEY`), ensuring enumerating callers cannot reconstruct withheld eval task IDs from filesystem paths or tracebacks (scripts/eval/optimize-artifact.py:1481, 1563-1738).
- Duplicate JSON key defense: `_no_duplicate_keys` in `_read_json` overrides Python's default `json.loads` behavior to reject duplicate keys within JSON objects, preventing silent overwriting of verdicts and invalid denominator shrinkage in eval calculations (scripts/eval/optimize-artifact.py:186-220).
- Process-level locking: Serializes consultation ledger accesses and rejected patch buffer modifications using exclusive file descriptors (`os.O_CREAT | os.O_EXCL | os.O_WRONLY`) with PID stamping, preventing race conditions where concurrent runners double-spend consultation budgets (scripts/eval/optimize-artifact.py:1829-1981, 2966-2989).
- Two-tier withheld group architecture: Differentiates between `sel` (selection group used by `gate`, subject to `--max-consultations` budget) and `test` (held-out group used by `report`, strictly capped at `_REPORT_BUDGET = 1` reveal to preserve test independence) (scripts/eval/optimize-artifact.py:102-110, 2493-2655).

## Context cost
153486 bytes. Direct source: ~38371 tokens. Including loaded modules (`_optimizer_adapters.py`: 53932 bytes, `_optimizer_core.py`: 37545 bytes): 244963 bytes total (~61240 tokens).
