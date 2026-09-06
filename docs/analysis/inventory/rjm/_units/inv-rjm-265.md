---
unit: inv-rjm-265
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-265

## Files assigned
- [x] `scripts/traceability/show_traceability_graph.py`
- [x] `scripts/traceability/spec_utils.py`
- [x] `scripts/traceability/traceability_cache.py`
- [x] `scripts/traceability/update_spec_references.py`
- [x] `scripts/update_memory_index_tokens.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-traceability-show-traceability-graph-py.md` (6715 bytes)
- `docs/analysis/inventory/rjm/scripts-traceability-spec-utils-py.md` (6223 bytes)
- `docs/analysis/inventory/rjm/scripts-traceability-traceability-cache-py.md` (4772 bytes)
- `docs/analysis/inventory/rjm/scripts-traceability-update-spec-references-py.md` (6732 bytes)
- `docs/analysis/inventory/rjm/scripts-update-memory-index-tokens-py.md` (6907 bytes)

## Scripts executed
- `scripts/traceability/show_traceability_graph.py`: `python3 scripts/traceability/show_traceability_graph.py --show-orphans` (exit code: 0)
- `scripts/traceability/spec_utils.py`: `PYTHONPATH=. python3 scripts/traceability/spec_utils.py` (exit code: 0)
- `scripts/traceability/traceability_cache.py`: `python3 scripts/traceability/traceability_cache.py` (exit code: 0)
- `scripts/traceability/update_spec_references.py`: `python3 scripts/traceability/update_spec_references.py --source-id DESIGN-001 --add REQ-002 --specs-path <tmpdir> --dry-run` (exit code: 0)
- `scripts/update_memory_index_tokens.py`: `uv run --frozen python scripts/update_memory_index_tokens.py --check` (exit code: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `spec_utils.py` contains a filename matching defect in `find_spec_file` (line 48): it searches for `base_path / subdir / f"{spec_id}.md"`, failing to locate specifications in `.agents/specs/` which use descriptive slugs (e.g. `DESIGN-001-pr-comment-processing.md`). This defect causes `find_spec_file` to return `None` for all repository specifications, which in turn breaks `update_spec_references.py` (line 122) and peer scripts in adjacent units (`rename_spec_id.py` and `resolve_orphaned_specs.py`).
- `update_memory_index_tokens.py` line 24 reaches into the excluded `.claude/skills/memory/scripts/` directory to import `count_memory_tokens`, linking lifecycle CI ratchets to an excluded memory subsystem component.

## Blocked or uncertain
none

## Time and size
Source read: 35024 bytes (~8756 tokens). Output written: 31349 bytes (~7837 tokens).
