---
unit: inv-rjm-267
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-267

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/utils/markdown_parser.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-utils-markdown-parser-py.md (9116 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-267.md (2945 bytes)

## Scripts executed
- `scripts/utils/markdown_parser.py`, `python3 sources/rjm/scripts/utils/markdown_parser.py`, exit code 1 (`ModuleNotFoundError: No module named 'markdown_it'`)
- `scripts/utils/markdown_parser.py`, `uv run python scripts/utils/markdown_parser.py` (in `sources/rjm`), exit code 0
- `tests/test_markdown_parser.py`, `uv run pytest tests/test_markdown_parser.py` (in `sources/rjm`), exit code 0 (83 passed)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/utils/markdown_parser.py` provides foundational AST-based Markdown parsing using `markdown-it-py` for validation checks and CI gates across the lifecycle:
  - Invoked by `scripts/validation/check_skill_md_portability.py` (line 90) for `MarkdownNestingError` and `blank_code_block_lines`.
  - Invoked by `scripts/validation/check_adr_lifecycle.py` (line 124) for `blank_non_prose_block_lines`.
  - Invoked by `scripts/validation/check_shipped_skill_routes.py` (line 187) for `CellSegment`, `TableCell`, and `iter_table_cell_text`.
  - Invoked by `scripts/validate_memory_tier.py` (line 29) for `extract_lookup_references`.
- Defects and documentation drift:
  - Line 7 claims "Exit codes follow ADR-035 when used as a standalone script.", but the file contains no standalone CLI argument parser, no `if __name__ == "__main__":` entrypoint, and no `sys.exit` calls.
  - Line 16 requires `markdown-it-py`, causing bare `python3` invocations to fail with `ModuleNotFoundError: No module named 'markdown_it'` on runners without locked virtual environment dependencies (noted as a trap in `src/copilot-cli/instructions/ci-scripts.instructions.md:43`).
- Security and robustness:
  - Extensive regression hardening documented in docstrings across PR #5230 and PR #5323 (addressing multiline inline comments, escaped backticks, quadratic scanning CWE-400, HTML entity resolution CWE-20, and recursive nesting DoS protection).
- Duplication ledger:
  - File does not appear in `docs/analysis/manifest/rjm-duplicates.md`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~11,530 tokens (46,123 bytes).
- Approximate tokens of output written: ~2,500 tokens across inventory card and work unit report.
