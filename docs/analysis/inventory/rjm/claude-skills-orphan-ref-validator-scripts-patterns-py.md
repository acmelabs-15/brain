---
package: rjm
path: .claude/skills/orphan-ref-validator/scripts/patterns.py
type: script
bytes: 10933
unit: inv-rjm-129
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/patterns.py, sha256: dfb52ef98707034cd271dbc3877e9fa6d17bfb16a9ac96e2cf121b47c3582410}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/orphan-ref-validator/scripts/patterns.py

## Purpose — required, verbatim
> "Reference patterns + line-level extractors for orphan-ref-validator." — .claude/skills/orphan-ref-validator/scripts/patterns.py:2

## Design intent — required
Defines the regular expressions and line-level extraction generators used to parse markdown, YAML, JSON, and source code files for candidate references to skills, scripts, rules, and instruction documents. It handles ignore directives (`<!-- orphan-ref-ignore -->`), skips example and placeholder lines, extracts markdown link targets, and captures explicitly typed skill references ("the `foo` skill") to ensure rigorous validation without false positives from non-reference prose.

## Phase — required
rjm:build

## Inputs — required
- Text content strings passed to extractor functions:
  - `text: str` passed to `extract_skill_refs()`, `extract_single_word_skill_refs()`, `extract_script_refs()`, `extract_skill_script_refs()`, `extract_rule_refs()`, `extract_instruction_refs()`, `extract_directive_suppressed_refs()`, `extract_all_reference_candidates()`, and `extract_typed_skill_refs()` (.claude/skills/orphan-ref-validator/scripts/patterns.py:107, 115, 131, 139, 166, 179, 192, 200, 224)
  - `line: str` and `lineno: int` passed to line-level helpers `line_has_ignore_directive()`, `line_has_example_placeholder()`, `_iter_line_path_matches()`, and `extract_line_reference_candidates()` (.claude/skills/orphan-ref-validator/scripts/patterns.py:97, 102, 155, 208)

## Outputs — required
- Generator and collection return values:
  - `line_has_ignore_directive(line)` returns `bool` (.claude/skills/orphan-ref-validator/scripts/patterns.py:97, 99)
  - `line_has_example_placeholder(line)` returns `bool` (.claude/skills/orphan-ref-validator/scripts/patterns.py:102, 104)
  - `extract_skill_refs(text)` yields `Iterable[tuple[int, str]]` (.claude/skills/orphan-ref-validator/scripts/patterns.py:107, 112)
  - `extract_single_word_skill_refs(text)` yields `Iterable[tuple[int, str]]` (.claude/skills/orphan-ref-validator/scripts/patterns.py:115, 128)
  - `extract_script_refs(text)` yields `Iterable[tuple[int, str]]` (.claude/skills/orphan-ref-validator/scripts/patterns.py:131, 136)
  - `extract_skill_script_refs(text)` yields `Iterable[tuple[int, str]]` (.claude/skills/orphan-ref-validator/scripts/patterns.py:139, 152)
  - `extract_rule_refs(text)` yields `Iterable[tuple[int, str]]` (.claude/skills/orphan-ref-validator/scripts/patterns.py:166, 176)
  - `extract_instruction_refs(text)` yields `Iterable[tuple[int, str]]` (.claude/skills/orphan-ref-validator/scripts/patterns.py:179, 189)
  - `extract_directive_suppressed_refs(text)` yields `Iterable[tuple[int, str]]` (.claude/skills/orphan-ref-validator/scripts/patterns.py:192, 197)
  - `extract_all_reference_candidates(text)` yields `Iterable[tuple[int, str]]` (.claude/skills/orphan-ref-validator/scripts/patterns.py:200, 205)
  - `extract_line_reference_candidates(lineno, line)` yields `Iterable[tuple[int, str]]` (.claude/skills/orphan-ref-validator/scripts/patterns.py:208, 221)
  - `extract_typed_skill_refs(text)` returns `set[tuple[int, str]]` (.claude/skills/orphan-ref-validator/scripts/patterns.py:224, 241)

## Invokes — required
none

## Invoked by — required
- script patterns — .claude/skills/orphan-ref-validator/scripts/scan.py:95
- skill orphan-ref-validator — .claude/skills/orphan-ref-validator/SKILL.md:190

## Concepts named — required, verbatim
- `orphan-ref-validator` — .claude/skills/orphan-ref-validator/scripts/patterns.py:2 — used here
- `SKILL_REF_RE` — .claude/skills/orphan-ref-validator/scripts/patterns.py:13 — defined here
- `incoherence` — .claude/skills/orphan-ref-validator/scripts/patterns.py:15 — used here
- `workflow` — .claude/skills/orphan-ref-validator/scripts/patterns.py:16 — used here
- `memory` — .claude/skills/orphan-ref-validator/scripts/patterns.py:16 — used here
- `reflect` — .claude/skills/orphan-ref-validator/scripts/patterns.py:16 — used here
- `analyze` — .claude/skills/orphan-ref-validator/scripts/patterns.py:16 — used here
- `session` — .claude/skills/orphan-ref-validator/scripts/patterns.py:16 — used here
- `KNOWN_SINGLE_WORD_SKILLS` — .claude/skills/orphan-ref-validator/scripts/patterns.py:21 — used here
- `SINGLE_WORD_SKILL_REF_RE` — .claude/skills/orphan-ref-validator/scripts/patterns.py:24 — defined here
- `SCRIPT_REF_RE` — .claude/skills/orphan-ref-validator/scripts/patterns.py:31 — defined here
- `SKILL_SCRIPT_REF_RE` — .claude/skills/orphan-ref-validator/scripts/patterns.py:42 — defined here
- `RULE_REF_RE` — .claude/skills/orphan-ref-validator/scripts/patterns.py:52 — defined here
- `INSTRUCTION_REF_RE` — .claude/skills/orphan-ref-validator/scripts/patterns.py:56 — defined here
- `MARKDOWN_LINK_TARGET_RE` — .claude/skills/orphan-ref-validator/scripts/patterns.py:61 — defined here
- `IGNORE_DIRECTIVE_RE` — .claude/skills/orphan-ref-validator/scripts/patterns.py:63 — defined here
- `REQ-009` — .claude/skills/orphan-ref-validator/scripts/patterns.py:67 — used here
- `SKILL_TYPED_REF_RE` — .claude/skills/orphan-ref-validator/scripts/patterns.py:83 — defined here
- `FILE_IGNORE_DIRECTIVE_RE` — .claude/skills/orphan-ref-validator/scripts/patterns.py:89 — defined here
- `EXAMPLE_PLACEHOLDER_RE` — .claude/skills/orphan-ref-validator/scripts/patterns.py:90 — defined here
- `line_has_ignore_directive` — .claude/skills/orphan-ref-validator/scripts/patterns.py:97 — defined here
- `line_has_example_placeholder` — .claude/skills/orphan-ref-validator/scripts/patterns.py:102 — defined here
- `extract_skill_refs` — .claude/skills/orphan-ref-validator/scripts/patterns.py:107 — defined here
- `extract_single_word_skill_refs` — .claude/skills/orphan-ref-validator/scripts/patterns.py:115 — defined here
- `extract_script_refs` — .claude/skills/orphan-ref-validator/scripts/patterns.py:131 — defined here
- `extract_skill_script_refs` — .claude/skills/orphan-ref-validator/scripts/patterns.py:139 — defined here
- `extract_rule_refs` — .claude/skills/orphan-ref-validator/scripts/patterns.py:166 — defined here
- `extract_instruction_refs` — .claude/skills/orphan-ref-validator/scripts/patterns.py:179 — defined here
- `extract_directive_suppressed_refs` — .claude/skills/orphan-ref-validator/scripts/patterns.py:192 — defined here
- `extract_all_reference_candidates` — .claude/skills/orphan-ref-validator/scripts/patterns.py:200 — defined here
- `extract_line_reference_candidates` — .claude/skills/orphan-ref-validator/scripts/patterns.py:208 — defined here
- `extract_typed_skill_refs` — .claude/skills/orphan-ref-validator/scripts/patterns.py:224 — defined here

## Structure
none (python library module; regex patterns and extractor functions: `SKILL_REF_RE`, `SINGLE_WORD_SKILL_REF_RE`, `SCRIPT_REF_RE`, `SKILL_SCRIPT_REF_RE`, `RULE_REF_RE`, `INSTRUCTION_REF_RE`, `MARKDOWN_LINK_TARGET_RE`, `IGNORE_DIRECTIVE_RE`, `SKILL_TYPED_REF_RE`, `FILE_IGNORE_DIRECTIVE_RE`, `EXAMPLE_PLACEHOLDER_RE`, `line_has_ignore_directive`, `line_has_example_placeholder`, `extract_skill_refs`, `extract_single_word_skill_refs`, `extract_script_refs`, `extract_skill_script_refs`, `_iter_line_path_matches`, `extract_rule_refs`, `extract_instruction_refs`, `extract_directive_suppressed_refs`, `extract_all_reference_candidates`, `extract_line_reference_candidates`, `extract_typed_skill_refs`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/orphan-ref-validator/scripts/patterns.py`, language: Python 3, lines: 242
- documented invocation:
  - "from patterns import (" — .claude/skills/orphan-ref-validator/scripts/scan.py:95
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/orphan-ref-validator/scripts/patterns.py`
  abridged stdout: `(empty)`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (support module without CLI entrypoint).
  Actual exit paths in code: no `sys.exit` or `exit` calls in code; exits 0 implicitly.
- for validators/gates: can it exit non-zero? no (regex and text extraction library). Does it fail on the source repo's own default branch? no, exits 0.
- does the output match what the documentation claims? yes, successfully defines regex patterns and extraction iterators matching documented grammar.

## Defects — required
none

## Observations
- Uses negative lookahead in `SKILL_TYPED_REF_RE` (`(?!\\s+(?:field|fields|mechanism|key|keys|...)\\b)` at line 85) to prevent misidentifying field names as skill names in noun-adjunct phrases like "the skill `description` field" (issue #3727).
- Supports both backticked and unbackticked invocations in `SKILL_SCRIPT_REF_RE` (e.g. `python3 .../get_unresolved_review_threads.py` at lines 35-46) following issue #1987 where a bare unbackticked script path caused silent CI failures.
- Extracts Markdown link targets in `_iter_line_path_matches` (lines 155-164) and strips URL anchors (`#`) so referenced rule and instruction links are properly validated against filesystem targets.

## Context cost
10933 bytes (~2733 tokens). Python standard library only (`re`, `collections.abc`).
