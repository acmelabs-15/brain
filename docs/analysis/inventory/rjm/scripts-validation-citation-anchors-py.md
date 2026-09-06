---
package: rjm
path: scripts/validation/citation_anchors.py
type: script
bytes: 13465
unit: inv-rjm-294
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/citation_anchors.py, sha256: 9165c77d0218b1888a3f3efb6db925e7236f33a16b75c3b12419edad1a1ae50c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/citation_anchors.py

## Purpose — required, verbatim
> "Anchor semantics for the citation-freshness gate (issue #5337)." — scripts/validation/citation_anchors.py:2

## Design intent — required
Extracts and isolates anchor parsing, matching, and segment isolation semantics for the citation-freshness gate (`check_citation_freshness.py`) to keep the primary gate under the repository file-size ceiling while maintaining modular validation logic. It defines what constitutes a code citation (file path with line number/range) and what constitutes an author-asserted anchor (backtick code spans of 3+ chars, double-quoted contract phrases of 4+ chars, underscore identifiers of 5+ chars, or indented continuation quotes), enforcing a deliberate noise floor to avoid false-failing short variable names. It also implements precise same-line segmentation and sentence continuation heuristics so sibling citations on the same or adjacent lines do not cross-contaminate or pool anchors. Without it, the citation-freshness validator would exceed size limits, or lack the sophisticated linguistic and syntactic boundaries needed to reliably verify that cited line references actually contain what the citing author claims.

## Phase — required
rjm:test

## Inputs — required
- Citing text lines, line indices, and line segments passed to helper functions (`context_lines: list[str]`, `citation_text: str`, `citing_lines: list[str]`, `cited_text: str`, lines 85, 123, 172, 218, 296).
- Regex pattern matching against repo extensions (`_EXTENSIONS`, line 25-27), citations (`_CITATION`, line 40-43), and anchors (`_BACKTICK_SPAN`, `_DQUOTE_SPAN`, `_IDENTIFIER`, `_PATHLIKE`, lines 46-58).

## Outputs — required
- Extracted anchor candidate lists: `list[str]` (lines 85, 94, 120).
- Anchor match booleans: `bool` (lines 123, 134, 137, 138).
- Line segments and context lines: `list[str]` (lines 224, 234), `str` (lines 296, 306, 315).
- Continuation quote strings: `str | None` (lines 172, 205).

## Invokes — required
none

## Invoked by — required
- script citation_anchors — scripts/validation/check_citation_freshness.py:52

## Concepts named — required, verbatim
- `_EXTENSIONS` — scripts/validation/citation_anchors.py:25 — defined here
- `_CITATION` — scripts/validation/citation_anchors.py:40 — defined here
- `_BACKTICK_SPAN` — scripts/validation/citation_anchors.py:46 — defined here
- `_DQUOTE_SPAN` — scripts/validation/citation_anchors.py:50 — defined here
- `_IDENTIFIER` — scripts/validation/citation_anchors.py:51 — defined here
- `_PATHLIKE` — scripts/validation/citation_anchors.py:52 — defined here
- `_strip_prose_decorations` — scripts/validation/citation_anchors.py:61 — defined here
- `_span_anchor` — scripts/validation/citation_anchors.py:66 — defined here
- `_anchor_candidates` — scripts/validation/citation_anchors.py:85 — defined here
- `_anchor_matches` — scripts/validation/citation_anchors.py:123 — defined here
- `_atx_heading` — scripts/validation/citation_anchors.py:151 — defined here
- `_continuation_quote` — scripts/validation/citation_anchors.py:172 — defined here
- `_context_lines` — scripts/validation/citation_anchors.py:218 — defined here
- `_gap_split` — scripts/validation/citation_anchors.py:284 — defined here
- `_same_line_segment` — scripts/validation/citation_anchors.py:296 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/citation_anchors.py`, language: Python, lines: 316
- documented invocation: none (helper module extracted from `check_citation_freshness.py`; has shebang line 1 `#!/usr/bin/env python3` but no CLI `__main__` entry point)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/validation/citation_anchors.py`, abridged stdout: `(empty)`, **actual exit code**: 0
- documented exit codes: none (module defines pure functions and regexes; no `sys.exit` calls) vs. actual exit paths in code: none (no exit calls in file)
- for validators/gates: can it exit non-zero? N/A (module library; contains parsing helper functions). does it fail on the source repo's own default branch? no (exits 0 when executed standalone).
- does the output match what the documentation claims? yes (executes cleanly as an importable module without side effects).

## Defects — required
none

## Observations
- Implements noise-floor heuristics: backtick spans >= 3 chars, double-quoted phrases >= 4 chars, bare identifiers >= 5 chars, preventing 1-2 char variables from causing false citation failures.
- Normalizes whitespace across multi-line wrapped contracts before matching anchors (`_anchor_matches`).
- Uses CommonMark ATX heading detection (`_atx_heading`) to prevent headings from merging sentence contexts with neighboring text.
- Quoted verbatim in `src/copilot-cli/instructions/canonical-source-mirror.instructions.md:80`.

## Context cost
File: 13,465 bytes (~3,366 tokens). Loads standard library `re` only.
