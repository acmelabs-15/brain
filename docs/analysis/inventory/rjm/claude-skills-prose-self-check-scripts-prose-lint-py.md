---
package: rjm
path: .claude/skills/prose-self-check/scripts/prose_lint.py
type: script
bytes: 65128
unit: inv-rjm-143
in_scope_via: .claude/skills/prose-self-check/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/prose-self-check/scripts/prose_lint.py

## Purpose — required, verbatim
> "Deterministic Layer 1 and Layer 2 checks for the prose-self-check skill." — .claude/skills/prose-self-check/scripts/prose_lint.py:19
> "The banned-word list is parsed from the voice rule at runtime, never copied" — .claude/skills/prose-self-check/scripts/prose_lint.py:25

## Design intent — required
Deterministic linting engine implementing Layer 1 (lexical: em/en dashes, banned vocabulary parsed from repository voice rules, and low-signal vs high-signal keyword tiering) and Layer 2 (structural: contrast framing, manufactured trailing offers, signposting openers, and model-identity phrases) of the `prose-self-check` skill. Eliminates the token overhead and cognitive burden of having LLM agents visually inspect their own emitted prose for AI-vernacular writing tells that erode reader trust. Incorporates a CommonMark-compliant block and container parser (`_ListContainers`) that blanks out fenced code blocks, inline code spans, and non-prose identifier tokens to prevent false positives in code snippets, measures inspected line coverage to flag unclosed code fences that mask document content, and falls back gracefully when external voice rules are unreachable.

## Phase — required
cross-phase

## Inputs — required
- Command-line arguments:
  - `files`: "Files to check, or - for stdin" — .claude/skills/prose-self-check/scripts/prose_lint.py:1407
  - `--rules`: "Path to the voice rule (default: auto-discover)" — .claude/skills/prose-self-check/scripts/prose_lint.py:1408
  - `--json`: "Emit machine-readable output" — .claude/skills/prose-self-check/scripts/prose_lint.py:1409
- Input files or stdin (`sys.stdin`): UTF-8 encoded text with optional UTF-8 BOM (.claude/skills/prose-self-check/scripts/prose_lint.py:1312-1314)
- Repository voice rule files providing the "Banned Vocabulary" section:
  - Explicit file path via `--rules`
  - Auto-discovered candidates: `$CLAUDE_PLUGIN_ROOT/rules/voice.md`, `$COPILOT_PLUGIN_ROOT/instructions/voice.instructions.md`, `.claude/rules/voice.md`, `.github/instructions/voice.instructions.md`, `<install_root>/rules/voice.md`, or `<install_root>/instructions/voice.instructions.md` (.claude/skills/prose-self-check/scripts/prose_lint.py:64-70, 1005-1025)

## Outputs — required
- Standard output text:
  - Formatted finding reports: `{name}:{finding.line}:{finding.column}: {finding.severity}: {finding.kind}: {finding.match!r} ({finding.note})` (.claude/skills/prose-self-check/scripts/prose_lint.py:1325-1327)
  - Coverage summary: "Layers 1-2 clean: 0 findings in" — .claude/skills/prose-self-check/scripts/prose_lint.py:1335
  - Violation count: "high severity, in" — .claude/skills/prose-self-check/scripts/prose_lint.py:1337
  - Next-step prompt: "Layer 4 (emptiness gate) is still yours to run." — .claude/skills/prose-self-check/scripts/prose_lint.py:1338
- Standard output JSON when `--json` flag is provided:
  - Structured dictionary with keys `rules_file`, `banned_word_count`, `high_severity_count`, and `files` containing per-file findings and coverage metadata (.claude/skills/prose-self-check/scripts/prose_lint.py:1378-1399)
- Standard error messages:
  - Discovery fallback: "Warning: no voice rule found; running dash and structural checks only." — .claude/skills/prose-self-check/scripts/prose_lint.py:1355
  - Flag hint: "Pass --rules PATH to enable the banned-word check." — .claude/skills/prose-self-check/scripts/prose_lint.py:1356
  - Missing section warning: "Warning: no 'Banned Vocabulary' section in" — .claude/skills/prose-self-check/scripts/prose_lint.py:1369
  - Degraded mode: "running dash and structural checks only." — .claude/skills/prose-self-check/scripts/prose_lint.py:1370
  - Rules read error: "Error: cannot read rules file" — .claude/skills/prose-self-check/scripts/prose_lint.py:1362
  - Target file read error: "Error: cannot read" — .claude/skills/prose-self-check/scripts/prose_lint.py:1422
- Process exit codes:
  - `0`: "0 - No high-severity findings. Info findings may still be present." — .claude/skills/prose-self-check/scripts/prose_lint.py:30
  - `1`: "1 - At least one high-severity finding." — .claude/skills/prose-self-check/scripts/prose_lint.py:31
  - `2`: "2 - Configuration error: a named file does not exist or cannot be read." — .claude/skills/prose-self-check/scripts/prose_lint.py:32

## Invokes — required
none

## Invoked by — required
- skill prose-self-check — .claude/skills/prose-self-check/SKILL.md:51
- skill prose-self-check — .claude/skills/prose-self-check/SKILL.md:182
- skill prose-self-check — .claude/skills/prose-self-check/SKILL.md:183
- skill prose-self-check — .claude/skills/prose-self-check/SKILL.md:184
- skill prose-self-check — .claude/skills/prose-self-check/SKILL.md:185
- skill prose-self-check — .claude/skills/prose-self-check/SKILL.md:240

## Concepts named — required, verbatim
- `Layer 1` — .claude/skills/prose-self-check/scripts/prose_lint.py:19 — used here
- `Layer 2` — .claude/skills/prose-self-check/scripts/prose_lint.py:19 — used here
- `prose-self-check` — .claude/skills/prose-self-check/scripts/prose_lint.py:19 — used here
- `burstiness.py` — .claude/skills/prose-self-check/scripts/prose_lint.py:23 — used here
- `Layer 3` — .claude/skills/prose-self-check/scripts/prose_lint.py:23 — used here
- `Layer 4` — .claude/skills/prose-self-check/scripts/prose_lint.py:23 — used here
- `voice rule` — .claude/skills/prose-self-check/scripts/prose_lint.py:25 — used here
- `unterminated fence` — .claude/skills/prose-self-check/scripts/prose_lint.py:27 — used here
- `ADR-035` — .claude/skills/prose-self-check/scripts/prose_lint.py:29 — used here
- `HIGH` — .claude/skills/prose-self-check/scripts/prose_lint.py:46 — defined here
- `INFO` — .claude/skills/prose-self-check/scripts/prose_lint.py:47 — defined here
- `UNTERMINATED_FENCE` — .claude/skills/prose-self-check/scripts/prose_lint.py:49 — defined here
- `EM_DASH` — .claude/skills/prose-self-check/scripts/prose_lint.py:53 — defined here
- `EN_DASH` — .claude/skills/prose-self-check/scripts/prose_lint.py:54 — defined here
- `LOW_SIGNAL_WORDS` — .claude/skills/prose-self-check/scripts/prose_lint.py:58 — defined here
- `Banned Vocabulary` — .claude/skills/prose-self-check/scripts/prose_lint.py:72 — used here
- `CommonMark` — .claude/skills/prose-self-check/scripts/prose_lint.py:83 — used here
- `indented code block` — .claude/skills/prose-self-check/scripts/prose_lint.py:84 — used here
- `_MAX_FENCE_INDENT` — .claude/skills/prose-self-check/scripts/prose_lint.py:104 — defined here
- `_ATX_HEADING` — .claude/skills/prose-self-check/scripts/prose_lint.py:113 — defined here
- `_THEMATIC_BREAK` — .claude/skills/prose-self-check/scripts/prose_lint.py:114 — defined here
- `_BLOCK_QUOTE` — .claude/skills/prose-self-check/scripts/prose_lint.py:115 — defined here
- `_SETEXT_UNDERLINE` — .claude/skills/prose-self-check/scripts/prose_lint.py:119 — defined here
- `link reference definition` — .claude/skills/prose-self-check/scripts/prose_lint.py:120 — used here
- `_Definition` — .claude/skills/prose-self-check/scripts/prose_lint.py:277 — defined here
- `_ListContainers` — .claude/skills/prose-self-check/scripts/prose_lint.py:383 — defined here
- `markdown-it-py` — .claude/skills/prose-self-check/scripts/prose_lint.py:398 — used here
- `thematic break` — .claude/skills/prose-self-check/scripts/prose_lint.py:411 — used here
- `setext underline` — .claude/skills/prose-self-check/scripts/prose_lint.py:428 — used here
- `lazy continuation` — .claude/skills/prose-self-check/scripts/prose_lint.py:578 — used here
- `contrast_framing` — .claude/skills/prose-self-check/scripts/prose_lint.py:920 — defined here
- `trailing_offer` — .claude/skills/prose-self-check/scripts/prose_lint.py:921 — defined here
- `signposting` — .claude/skills/prose-self-check/scripts/prose_lint.py:922 — defined here
- `model_identity` — .claude/skills/prose-self-check/scripts/prose_lint.py:923 — defined here
- `Finding` — .claude/skills/prose-self-check/scripts/prose_lint.py:983 — defined here
- `discover_rules_file` — .claude/skills/prose-self-check/scripts/prose_lint.py:1005 — defined here
- `parse_banned_words` — .claude/skills/prose-self-check/scripts/prose_lint.py:1028 — defined here
- `Scan` — .claude/skills/prose-self-check/scripts/prose_lint.py:1161 — defined here
- `em_dash` — .claude/skills/prose-self-check/scripts/prose_lint.py:1184 — defined here
- `en_dash` — .claude/skills/prose-self-check/scripts/prose_lint.py:1184 — defined here
- `banned_word` — .claude/skills/prose-self-check/scripts/prose_lint.py:1217 — defined here
- `banned_word_low_signal` — .claude/skills/prose-self-check/scripts/prose_lint.py:1217 — defined here
- `scan_prose` — .claude/skills/prose-self-check/scripts/prose_lint.py:1268 — defined here
- `lint_prose` — .claude/skills/prose-self-check/scripts/prose_lint.py:1298 — defined here
- `emptiness gate` — .claude/skills/prose-self-check/scripts/prose_lint.py:1338 — used here

## Structure
none (python script; functions and definitions: `HIGH`, `INFO`, `UNTERMINATED_FENCE`, `EM_DASH`, `EN_DASH`, `LOW_SIGNAL_WORDS`, `_RULE_CANDIDATES`, `_PLUGIN_MARKER`, `_BANNED_HEADING`, `_NEXT_HEADING`, `_CODE_TOKEN`, `_WORD_ONLY`, `_TOKEN`, `_NON_PROSE_NEIGHBORS`, `_FENCE`, `_MAX_FENCE_INDENT`, `_LIST_MARKER`, `_ATX_HEADING`, `_THEMATIC_BREAK`, `_BLOCK_QUOTE`, `_SETEXT_UNDERLINE`, `_LINK_TITLE`, `_LINK_LABEL`, `_LINK_TITLE_ONLY`, `_LINK_LABEL_ONLY`, `_LINK_LABEL_COLON`, `_angle_destination_end`, `_link_destination_end`, `_TITLE_CLOSERS`, `_title_end`, `_label_opens`, `_Definition`, `_link_tail`, `_bare_title`, `_link_reference`, `_MAX_LIST_PAD`, `_indent_width`, `_fence_match`, `_starts_fence`, `_is_blank`, `_container_closed`, `_ListContainers`, `_INLINE_CODE`, `_GAP`, `_WRAP`, `_NOTES`, `_STRUCTURAL_PATTERNS`, `Finding`, `_plugin_install_root`, `discover_rules_file`, `parse_banned_words`, `_fence_in_item`, `_LINE_SPLIT_RE`, `_source_lines`, `_blank_fenced_blocks`, `_mask_inline_code`, `Scan`, `_prose_lines`, `_lexical_findings`, `_locate`, `_structural_findings`, `scan_prose`, `lint_prose`, `_read`, `_emit_text`, `_resolve_banned_words`, `_emit_json`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/prose-self-check/scripts/prose_lint.py`, language: Python 3, lines: 1440
- documented invocation:
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/prose_lint.py\" FILE [FILE ...]" — .claude/skills/prose-self-check/SKILL.md:182
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/prose_lint.py\" - < draft.md" — .claude/skills/prose-self-check/SKILL.md:183
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/prose_lint.py\" FILE --json" — .claude/skills/prose-self-check/SKILL.md:184
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/prose_lint.py\" FILE --rules PATH" — .claude/skills/prose-self-check/SKILL.md:185
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/prose_lint.py\" FILE" — .claude/skills/prose-self-check/SKILL.md:240
- **executed:** yes
- actual command run:
  `python3 sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py sources/rjm/.claude/skills/prose-self-check/SKILL.md`
  abridged stdout:
  ```
  Layers 1-2 clean: 0 findings in 187 prose line(s) of 277 in 1 file(s).
  Layer 4 (emptiness gate) is still yours to run.
  ```
  **actual exit code**: 0
  Additional test with stdin containing violations:
  `python3 sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py -`
  abridged stdout:
  ```
  -:1:20: high: em_dash: '—' (banned by the universal rule; restructure or use a comma)
  -:2:1: high: contrast_framing: "This is not about speed, it's" (contrast framing; state the claim directly)
  -:3:1: high: trailing_offer: 'Would you like me to' (manufactured trailing offer; delete it)
  -:4:1: high: signposting: 'Honestly,' (signposting opener; lead with the point)
  -:5:1: high: model_identity: 'As an AI language model' (model-identity phrase; remove it)
  -:5:42: high: banned_word: 'crucial' (banned vocabulary; be specific instead)

  6 finding(s), 6 high severity, in 5 prose line(s) of 5 in 1 file(s)
  Layer 4 (emptiness gate) is still yours to run.
  ```
  **actual exit code**: 1
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0 - No high-severity findings. Info findings may still be present." — .claude/skills/prose-self-check/scripts/prose_lint.py:30
  - "1 - At least one high-severity finding." — .claude/skills/prose-self-check/scripts/prose_lint.py:31
  - "2 - Configuration error: a named file does not exist or cannot be read." — .claude/skills/prose-self-check/scripts/prose_lint.py:32
  Actual exit paths in code:
  - `sys.exit(main())` — .claude/skills/prose-self-check/scripts/prose_lint.py:1439
  - `return 0` (.claude/skills/prose-self-check/scripts/prose_lint.py:1435) from `main()` when no findings have severity `HIGH`.
  - `return 1` (.claude/skills/prose-self-check/scripts/prose_lint.py:1435) from `main()` when `any(f.severity == HIGH for s in results.values() for f in s.findings)`.
  - `return 2` (.claude/skills/prose-self-check/scripts/prose_lint.py:1414) when `_resolve_banned_words(args.rules)` returns `None` due to unreadable rules file (:1363).
  - `return 2` (.claude/skills/prose-self-check/scripts/prose_lint.py:1423) when input file cannot be read due to `OSError` or `UnicodeDecodeError` in `_read()` (:1421).
- for validators/gates: can it exit non-zero? Yes, exits 1 on high-severity findings (`em_dash`, `en_dash`, `banned_word`, `contrast_framing`, `trailing_offer`, `signposting`, `model_identity`, `unterminated_fence`) and exits 2 on unreadable input files or rules files. Does it fail on the source repo's own default branch? Exits 0 on clean files including `sources/rjm/.claude/skills/prose-self-check/SKILL.md`.
- does the output match what the documentation claims? Yes, generates line/column findings matching `FILE:LINE:COLUMN: SEVERITY: KIND: MATCH (note)`, prose coverage counts, and JSON format declared in `SKILL.md:188-195`.

## Defects — required
- `script-bug` · .claude/skills/prose-self-check/scripts/prose_lint.py:937 · Contrast framing regex for noun phrase patterns matches past-tense verbs in the opening clause (`was not`, `were not`) but only matches present-tense forms (`'s`, `'re`, `is`, `are`) in the resolution clause, failing to detect past-tense contrast framing such as "This was not about speed, it was about accuracy."
- `script-bug` · .claude/skills/prose-self-check/scripts/prose_lint.py:80 · `_NON_PROSE_NEIGHBORS` contains `>` but omits `<`, causing opening HTML/XML tag names like `<crucial attribute="val">` to trigger false positive `banned_word` findings when containing banned terms.
- `script-bug` · .claude/skills/prose-self-check/scripts/prose_lint.py:1043 · Banned vocabulary parser uses `_WORD_ONLY` (`^[a-z][a-z'-]*$`), silently discarding any multi-word banned phrase that may be defined in the rules file.
- `doc-drift` · .claude/skills/prose-self-check/scripts/prose_lint.py:95 · Inline comment cites `skills/fix-markdown-fences/scripts/fix_fences.py lines 500-502`, but the path in the repository is `.claude/skills/fix-markdown-fences/scripts/fix_fences.py` (or `src/copilot-cli/...`).
- `other` · .claude/skills/prose-self-check/scripts/prose_lint.py:8 · Lines 383–904 (`_ListContainers` class, ~520 lines) plus CommonMark helper functions are duplicated verbatim from `fix-markdown-fences`, as noted in the file's header comments.

## Observations
- CommonMark block parser implementation: Employs an extensive, custom stateful parser (`_ListContainers`) that accurately models CommonMark specification quirks including container content column calculation, 3-space indentation ceiling (`_MAX_FENCE_INDENT`), link reference definitions, multi-line link labels and titles, and lazy continuation lines.
- Graceful degradation: When no voice rule file is reachable, `_resolve_banned_words()` warns on stderr and falls back to running character-level dash and structural checks only, preventing vendored installs from breaking completely.
- Coverage transparency: In compliance with repo CI standards (`.claude/rules/ci-scripts.md` MUST-12), `scan_prose()` reports total examined prose lines and source lines alongside findings, preventing files masked by unterminated fences from appearing deceptively clean.
- Encoding robustness: Uses `utf-8-sig` when reading files and explicitly strips leading `\ufeff` from stdin to prevent UTF-8 BOM from corrupting line-start regex anchors (`_read()` lines 1312-1314).

## Context cost
65128 bytes (~16282 tokens). Self-contained Python script importing only standard library modules (`argparse`, `bisect`, `json`, `os`, `re`, `sys`, `dataclasses`, `pathlib`). Loads voice rule file (`rules/voice.md`) at runtime if available (~18142 bytes, ~4535 tokens), giving a total context cost of ~83270 bytes (~20817 tokens).
