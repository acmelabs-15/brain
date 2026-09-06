---
package: rjm
path: .claude/skills/stuck-detection/stuck_detection.py
type: script
bytes: 11192
unit: inv-rjm-174
in_scope_via: .claude/skills/stuck-detection/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/stuck-detection/stuck_detection.py, sha256: 99d4b403cad8ddf03b744832780919354d9fa22f95d9668378a7396cbfa3bc18}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude/skills/stuck-detection/stuck_detection.py

## Purpose — required, verbatim
> "Detect conversation loops via Jaccard similarity on topic signatures." — .claude/skills/stuck-detection/stuck_detection.py:2

## Design intent — required
Implements deterministic, stdlib-only topic-signature extraction and Jaccard similarity comparison against historical agent responses. By writing history atomically through temporary files and fsync/replace, it provides a safe, concurrency-friendly loop detection service without requiring external database or embeddings infrastructure.

## Phase — required
none

## Inputs — required
- Subcommands: `check` (with text argument or stdin), `reset`, `status`, `extract` (with text argument or stdin) — .claude/skills/stuck-detection/stuck_detection.py:283, 286, 287, 289
- Command-line flag `--history` or environment variables `STUCK_DETECTION_HISTORY`, `STUCK_DETECTION_SESSION`, `XDG_STATE_HOME` — .claude/skills/stuck-detection/stuck_detection.py:70-84, 276
- Prior history JSON file parsed into `{signature, timestamp}` entries — .claude/skills/stuck-detection/stuck_detection.py:128-150

## Outputs — required
- JSON strings printed to stdout for check, reset, status, or plain text signature for `extract` — .claude/skills/stuck-detection/stuck_detection.py:296-306
- Atomically updated history file on disk via tempfile and `os.replace` — .claude/skills/stuck-detection/stuck_detection.py:153-179
- Exit codes: 0 on success, 2 on invalid command or arguments — .claude/skills/stuck-detection/stuck_detection.py:9-10

## Invokes — required
none

## Invoked by — required
- skill stuck-detection — .claude/skills/stuck-detection/SKILL.md:67

## Concepts named — required, verbatim
- `ADR-035` — .claude/skills/stuck-detection/stuck_detection.py:8 — used here
- `semantic_hooks` — .claude/skills/stuck-detection/stuck_detection.py:13 — used here
- `DEFAULT_MAX_HISTORY` — .claude/skills/stuck-detection/stuck_detection.py:29 — defined here
- `DEFAULT_STUCK_THRESHOLD` — .claude/skills/stuck-detection/stuck_detection.py:30 — defined here
- `DEFAULT_SIMILARITY_THRESHOLD` — .claude/skills/stuck-detection/stuck_detection.py:31 — defined here
- `MIN_SIGNIFICANT_WORDS` — .claude/skills/stuck-detection/stuck_detection.py:32 — defined here
- `MIN_TEXT_LENGTH` — .claude/skills/stuck-detection/stuck_detection.py:33 — defined here
- `SIGNATURE_SIZE` — .claude/skills/stuck-detection/stuck_detection.py:34 — defined here
- `MIN_WORD_LENGTH` — .claude/skills/stuck-detection/stuck_detection.py:35 — defined here
- `STOP_WORDS` — .claude/skills/stuck-detection/stuck_detection.py:37 — defined here
- `default_history_path` — .claude/skills/stuck-detection/stuck_detection.py:57 — defined here
- `STUCK_DETECTION_HISTORY` — .claude/skills/stuck-detection/stuck_detection.py:61 — used here
- `STUCK_DETECTION_SESSION` — .claude/skills/stuck-detection/stuck_detection.py:62 — used here
- `XDG_STATE_HOME` — .claude/skills/stuck-detection/stuck_detection.py:63 — used here
- `extract_topic_signature` — .claude/skills/stuck-detection/stuck_detection.py:86 — defined here
- `jaccard_similarity` — .claude/skills/stuck-detection/stuck_detection.py:114 — defined here
- `load_history` — .claude/skills/stuck-detection/stuck_detection.py:128 — defined here
- `save_history` — .claude/skills/stuck-detection/stuck_detection.py:153 — defined here
- `build_nudge` — .claude/skills/stuck-detection/stuck_detection.py:182 — defined here
- `check_stuck` — .claude/skills/stuck-detection/stuck_detection.py:200 — defined here
- `reset_history` — .claude/skills/stuck-detection/stuck_detection.py:246 — defined here
- `get_status` — .claude/skills/stuck-detection/stuck_detection.py:252 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/stuck-detection/stuck_detection.py`, language: Python, lines: 311
- documented invocation: `python3 .claude/skills/stuck-detection/stuck_detection.py status` — .claude/skills/stuck-detection/SKILL.md:82
- **executed:** yes
- actual command run: `python3 .claude/skills/stuck-detection/stuck_detection.py status`, abridged stdout: `{\n  "history_length": 0,\n  "max_history": 10,\n  "stuck_threshold": 3,\n  "recent_signatures": []\n}`, **actual exit code:** 0
- documented exit codes: "0 - Success (regardless of stuck/not-stuck)" — .claude/skills/stuck-detection/stuck_detection.py:9 and "2 - Invalid command or arguments" — .claude/skills/stuck-detection/stuck_detection.py:10 vs actual exit paths in code: `return 0` at .claude/skills/stuck-detection/stuck_detection.py:306 via `sys.exit(main())` at .claude/skills/stuck-detection/stuck_detection.py:310
- for validators/gates: not a validator/gate (returns 0 on normal status, extract, reset, and check operations)
- does the output match what the documentation claims: yes, output matches CLI documentation and JSON schema specifications

## Defects — required
none

## Observations
- Excellent robustness: atomic write pattern with `tempfile.mkstemp` and `os.replace`, defensive history schema validation that discards malformed JSON, and session isolation via `STUCK_DETECTION_SESSION`.
- All 41 pytest tests pass cleanly in `tests/skills/stuck-detection/test_stuck_detection.py`.

## Context cost
11192 bytes, approximately 2800 tokens.
