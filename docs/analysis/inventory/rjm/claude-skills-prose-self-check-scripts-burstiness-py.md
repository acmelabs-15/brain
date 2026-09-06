---
package: rjm
path: .claude/skills/prose-self-check/scripts/burstiness.py
type: script
bytes: 5394
unit: inv-rjm-142
in_scope_via: .claude/skills/prose-self-check/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/prose-self-check/scripts/burstiness.py, sha256: c6c1c60b5f3e1cdf84bf8d1c3615c8ab4a6d7334a8ba082e1d73db85a5096b06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/prose-self-check/scripts/burstiness.py

## Purpose — required, verbatim
> "Layer 3 burstiness and concreteness proxy for the prose-self-check skill." — .claude/skills/prose-self-check/scripts/burstiness.py:2

## Design intent — required
Computes sentence-length variance (burstiness) and concreteness metrics (counts of numbers, file paths, and multi-word capitalized named entities) for prose artifacts prior to emission. Flat sentence rhythm (uniform length clustering) is empirical research's #2 reader-cited tell of AI-generated text, yet it is completely invisible to lexical keyword scanners. Without this helper, agents would lack an objective, local statistical metric to flag monotone cadence and fluent semantic filler, requiring either human evaluation or external classifier models that cannot run within an agent's execution harness.

## Phase — required
cross-phase

## Inputs — required
- Positional argument `file`: "path to the prose artifact to analyze" — .claude/skills/prose-self-check/scripts/burstiness.py:139
- Optional CLI flag `--json`: "emit machine-readable JSON" — .claude/skills/prose-self-check/scripts/burstiness.py:141
- File read from filesystem via `Path.read_text(encoding="utf-8")` (.claude/skills/prose-self-check/scripts/burstiness.py:115)

## Outputs — required
- Plain text metrics printed to stdout via `_render_human`: sentence count, word count, mean length, standard deviation, coefficient of variation (CV), concreteness count, and optional "WARNING: flat rhythm (low sentence-length variance). " (.claude/skills/prose-self-check/scripts/burstiness.py:129)
- Structured JSON object printed to stdout when `--json` is specified, containing keys `sentence_count`, `word_count`, `mean_sentence_length`, `stddev_sentence_length`, `coefficient_of_variation`, `flat_rhythm_warning`, and `concreteness_count` (.claude/skills/prose-self-check/scripts/burstiness.py:47-53, 156)
- Error string to stderr on missing, inaccessible, or undecodable file: `f"error: {err}"` (.claude/skills/prose-self-check/scripts/burstiness.py:151)
- Process exit code 0 on successful analysis or 2 on file access or argument error (.claude/skills/prose-self-check/scripts/burstiness.py:13-14, 152, 159)

## Invokes — required
none

## Invoked by — required
- skill prose-self-check — .claude/skills/prose-self-check/SKILL.md:52
- skill prose-self-check — .claude/skills/prose-self-check/SKILL.md:120
- skill prose-self-check — .claude/skills/prose-self-check/SKILL.md:224
- skill prose-self-check — .claude/skills/prose-self-check/SKILL.md:242

## Concepts named — required, verbatim
- `prose-self-check` — .claude/skills/prose-self-check/scripts/burstiness.py:2 — used here
- `burstiness` — .claude/skills/prose-self-check/scripts/burstiness.py:4 — defined here
- `concreteness` — .claude/skills/prose-self-check/scripts/burstiness.py:4 — defined here
- `ADR-035` — .claude/skills/prose-self-check/scripts/burstiness.py:12 — used here
- `FLAT_RHYTHM_CV_THRESHOLD` — .claude/skills/prose-self-check/scripts/burstiness.py:31 — defined here
- `MIN_SENTENCES_FOR_RHYTHM` — .claude/skills/prose-self-check/scripts/burstiness.py:34 — defined here
- `ProseStats` — .claude/skills/prose-self-check/scripts/burstiness.py:44 — defined here
- `sentence_count` — .claude/skills/prose-self-check/scripts/burstiness.py:47 — defined here
- `word_count` — .claude/skills/prose-self-check/scripts/burstiness.py:48 — defined here
- `mean_sentence_length` — .claude/skills/prose-self-check/scripts/burstiness.py:49 — defined here
- `stddev_sentence_length` — .claude/skills/prose-self-check/scripts/burstiness.py:50 — defined here
- `coefficient_of_variation` — .claude/skills/prose-self-check/scripts/burstiness.py:51 — defined here
- `flat_rhythm_warning` — .claude/skills/prose-self-check/scripts/burstiness.py:52 — defined here
- `concreteness_count` — .claude/skills/prose-self-check/scripts/burstiness.py:53 — defined here

## Structure
- Module docstring: Layer 3 burstiness and concreteness proxy specification, exit codes, and issue reference (.claude/skills/prose-self-check/scripts/burstiness.py:1-17)
- Imports: standard library modules `argparse`, `json`, `re`, `sys`, `dataclasses`, `pathlib` (.claude/skills/prose-self-check/scripts/burstiness.py:19-26)
- Threshold constants: `FLAT_RHYTHM_CV_THRESHOLD = 0.35` and `MIN_SENTENCES_FOR_RHYTHM = 4` (.claude/skills/prose-self-check/scripts/burstiness.py:28-34)
- Regular expression patterns: sentence splitting, word extraction, numbers, file paths, capitalized multi-word entities (.claude/skills/prose-self-check/scripts/burstiness.py:36-40)
- `ProseStats` dataclass: container for sentence count, word count, mean length, stddev, CV, flat rhythm warning flag, concreteness count (.claude/skills/prose-self-check/scripts/burstiness.py:43-53)
- `_sentence_lengths`: splits text by punctuation and counts words per sentence (.claude/skills/prose-self-check/scripts/burstiness.py:56-59)
- `_mean`: arithmetic mean of sentence length integers (.claude/skills/prose-self-check/scripts/burstiness.py:62-65)
- `_stddev`: population standard deviation of sentence lengths (.claude/skills/prose-self-check/scripts/burstiness.py:68-73)
- `_concreteness_count`: combined count of regex matches for numbers, file paths, and entities (.claude/skills/prose-self-check/scripts/burstiness.py:76-85)
- `analyze`: orchestrates length calculations, CV computation, threshold checking, and returns `ProseStats` (.claude/skills/prose-self-check/scripts/burstiness.py:88-107)
- `_read_target`: file loader with `FileNotFoundError` validation (.claude/skills/prose-self-check/scripts/burstiness.py:110-115)
- `_render_human`: formats metrics lines and optional flat rhythm warning message (.claude/skills/prose-self-check/scripts/burstiness.py:118-132)
- `build_parser`: constructs CLI argument parser with `file` argument and `--json` flag (.claude/skills/prose-self-check/scripts/burstiness.py:135-143)
- `main`: parses arguments, reads target, calls `analyze`, renders text or JSON, handles exceptions (.claude/skills/prose-self-check/scripts/burstiness.py:146-159)
- `if __name__ == "__main__":`: passes `main()` return code to `sys.exit()` (.claude/skills/prose-self-check/scripts/burstiness.py:162-163)

## Scripts — required if type is script or the skill ships scripts
- **path:** `.claude/skills/prose-self-check/scripts/burstiness.py`
- **language:** Python (python3)
- **lines:** 164
- **documented invocation:**
  - `python3 "${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/burstiness.py" FILE` — .claude/skills/prose-self-check/SKILL.md:52
  - `python3 "${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/burstiness.py" FILE --json` — .claude/skills/prose-self-check/SKILL.md:225
- **executed:** yes
- **actual command run:** `python3 sources/rjm/.claude/skills/prose-self-check/scripts/burstiness.py sources/rjm/.claude/skills/prose-self-check/SKILL.md`
- **abridged stdout:**
```
sentences:        112
words:            1996
mean length:      17.82
stddev length:    14.0
variation (CV):   0.786
concreteness:     140
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented: `0  - Analyzed successfully (with or without a flat-rhythm warning)` — .claude/skills/prose-self-check/scripts/burstiness.py:13
  - Documented: `2  - Configuration or input error (missing file, unreadable path)` — .claude/skills/prose-self-check/scripts/burstiness.py:14
  - Documented: `analyzed successfully (with or without a flat-rhythm warning)` — .claude/skills/prose-self-check/SKILL.md:234
  - Documented: `configuration or input error (missing file, unreadable path)` — .claude/skills/prose-self-check/SKILL.md:235
  - Actual code paths:
    - `return 0` — .claude/skills/prose-self-check/scripts/burstiness.py:159 (successful analysis)
    - `return 2` — .claude/skills/prose-self-check/scripts/burstiness.py:152 (on `FileNotFoundError`, `OSError`, or `UnicodeDecodeError`)
    - `sys.exit(main())` — .claude/skills/prose-self-check/scripts/burstiness.py:163 (forwards return code to system exit)
  - Result: Documented exit codes match actual exit paths in code exactly.
- **for validators/gates:** The script is explicitly documented as a proxy rather than a hard gate: "this script surfaces it as a proxy, not a hard gate." — .claude/skills/prose-self-check/scripts/burstiness.py:7; "It is a proxy, not a gate." — .claude/skills/prose-self-check/SKILL.md:219. When executed against valid files on the repository's default branch, it completes with exit code 0. Even when variance is low and the flat rhythm warning is emitted, the return code remains 0. It exits non-zero (code 2) only on missing or unreadable files.
- **does the output match what the documentation claims:** yes, human-readable text and `--json` outputs match all documented metric keys and warning conditions exactly.

## Defects — required
none

## Observations
- Population standard deviation calculation (`_stddev` at lines 68-73) uses `variance = sum((v - mean) ** 2 for v in values) / len(values)`, avoiding sample-variance edge cases on small sentence counts. It explicitly returns 0.0 when sentence count is less than 2.
- Concreteness heuristic combines counts for numbers (`\b\d[\d,.]*\b`), paths (slashes or extensions `py|md|json|ya?ml|ts|js|cs|ps1|txt`), and capitalized multi-word entities (`(?:[A-Z][a-z0-9]+){1,}(?:\s+[A-Z][a-z0-9]+)+`). A near-zero total flags filler prose for manual semantic evaluation in Layer 4.
- Guard threshold of `MIN_SENTENCES_FOR_RHYTHM = 4` prevents false-positive flat rhythm warnings on very short text snippets, commit summaries, or single paragraphs.

## Context cost
- File size: 5394 bytes (164 lines).
- Invokes no external dependencies or skills; relies entirely on Python standard library (`argparse`, `json`, `re`, `sys`, `dataclasses`, `pathlib`).
- Total context cost: 5394 bytes, ~1350 tokens.
