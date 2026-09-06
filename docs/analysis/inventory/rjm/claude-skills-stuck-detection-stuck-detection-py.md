---
package: rjm
path: .claude/skills/stuck-detection/stuck_detection.py
type: skill
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
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/stuck-detection/stuck_detection.py

## Purpose — required, verbatim
> "Detect conversation loops via Jaccard similarity on topic signatures." — .claude/skills/stuck-detection/stuck_detection.py:2

## Design intent — required
Self-contained, stdlib-only Python module and CLI implementing lexical topic-signature extraction, atomic history management, and Jaccard similarity comparison. It enables deterministic loop detection for LLM orchestrators and emits structured XML nudges (`<stuck-detection>`) without external dependencies or semantic embedding models.

## Phase — required
cross-phase

## Inputs — required
- Command-line arguments: subcommands `check`, `reset`, `status`, `extract` with positional text tokens (or reading from standard input) — .claude/skills/stuck-detection/stuck_detection.py:281-291, 263-266
- File path override `--history` or environment variables `STUCK_DETECTION_HISTORY`, `STUCK_DETECTION_SESSION`, `XDG_STATE_HOME` — .claude/skills/stuck-detection/stuck_detection.py:60-84, 276-280
- JSON history file parsed as a list of `{signature, timestamp}` entries — .claude/skills/stuck-detection/stuck_detection.py:128-150

## Outputs — required
- JSON object printed to stdout with keys `stuck`, `signature`, `similar_count` (and `nudge` when stuck) for `check` (.claude/skills/stuck-detection/stuck_detection.py:237-243); status dictionary for `status` (.claude/skills/stuck-detection/stuck_detection.py:256-260); reset confirmation for `reset` (.claude/skills/stuck-detection/stuck_detection.py:249); signature string for `extract` — .claude/skills/stuck-detection/stuck_detection.py:303-305
- Atomically written JSON history file on disk via temporary file and `os.replace` — .claude/skills/stuck-detection/stuck_detection.py:162-180
- Process exit code 0 (or 2 on invalid CLI arguments) — .claude/skills/stuck-detection/stuck_detection.py:9-10, 307

## Invokes — required
none

## Invoked by — required
- skill stuck-detection — .claude/skills/stuck-detection/SKILL.md:67

## Concepts named — required, verbatim
- `Jaccard similarity` — .claude/skills/stuck-detection/stuck_detection.py:2 — used here
- `topic signatures` — .claude/skills/stuck-detection/stuck_detection.py:2 — used here
- `nudge payload` — .claude/skills/stuck-detection/stuck_detection.py:5 — used here
- `ADR-035` — .claude/skills/stuck-detection/stuck_detection.py:8 — used here
- `DEFAULT_MAX_HISTORY` — .claude/skills/stuck-detection/stuck_detection.py:29 — defined here
- `DEFAULT_STUCK_THRESHOLD` — .claude/skills/stuck-detection/stuck_detection.py:30 — defined here
- `DEFAULT_SIMILARITY_THRESHOLD` — .claude/skills/stuck-detection/stuck_detection.py:31 — defined here
- `MIN_SIGNIFICANT_WORDS` — .claude/skills/stuck-detection/stuck_detection.py:32 — defined here
- `MIN_TEXT_LENGTH` — .claude/skills/stuck-detection/stuck_detection.py:33 — defined here
- `SIGNATURE_SIZE` — .claude/skills/stuck-detection/stuck_detection.py:34 — defined here
- `MIN_WORD_LENGTH` — .claude/skills/stuck-detection/stuck_detection.py:35 — defined here
- `STOP_WORDS` — .claude/skills/stuck-detection/stuck_detection.py:37 — defined here

## Structure
none (python script; functions: `default_history_path`, `extract_topic_signature`, `jaccard_similarity`, `load_history`, `save_history`, `build_nudge`, `check_stuck`, `reset_history`, `get_status`, `_read_text`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/stuck-detection/stuck_detection.py`, language: Python 3, lines: 311
- documented invocation:
  - "python3 .claude/skills/stuck-detection/stuck_detection.py check \"your response text\"" — .claude/skills/stuck-detection/SKILL.md:78
- **executed:** yes
- actual command run: `python3 .claude/skills/stuck-detection/stuck_detection.py --history /tmp/test_stuck_history.json check "This is a test response text that needs to be more than fifty characters long to pass the minimum text length."`
- abridged stdout:
  ```json
  {
    "stuck": false,
    "signature": "characters,fifty,length,long,text",
    "reason": "warming-up"
  }
  ```
- **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - "0 - Success (regardless of stuck/not-stuck)" — .claude/skills/stuck-detection/stuck_detection.py:9
  - "2 - Invalid command or arguments" — .claude/skills/stuck-detection/stuck_detection.py:10
  Actual code paths: `return 0` at line 307 and `sys.exit(main())` at line 310; `argparse` exits with code 2 on invalid arguments or missing subcommands.
- for validators/gates: can it exit non-zero? Exits with code 2 on invalid CLI arguments.
- does the output match what the documentation claims? Yes, returns JSON output conforming to documented schema.

## Defects — required
none

## Observations
- Employs atomic write operations via `tempfile.mkstemp` and `os.replace` to ensure concurrent CLI calls never corrupt the JSON history file.
- Empty token check in `jaccard_similarity` returns 0.0 instead of 1.0 when inputs have no tokens.

## Context cost
11192 bytes, ~2800 tokens.
