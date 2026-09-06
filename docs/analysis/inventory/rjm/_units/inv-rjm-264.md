---
unit: inv-rjm-264
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-264

## Files assigned
- [x] sources/rjm/scripts/testing/mutation_workspace.py
- [x] sources/rjm/scripts/todo_db.py
- [x] sources/rjm/scripts/traceability/__init__.py
- [x] sources/rjm/scripts/traceability/reconstruct_trace.py
- [x] sources/rjm/scripts/traceability/rename_spec_id.py
- [x] sources/rjm/scripts/traceability/resolve_orphaned_specs.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-testing-mutation-workspace-py.md (6147 bytes)
- docs/analysis/inventory/rjm/scripts-todo-db-py.md (4538 bytes)
- docs/analysis/inventory/rjm/scripts-traceability---init---py.md (2353 bytes)
- docs/analysis/inventory/rjm/scripts-traceability-reconstruct-trace-py.md (4956 bytes)
- docs/analysis/inventory/rjm/scripts-traceability-rename-spec-id-py.md (6185 bytes)
- docs/analysis/inventory/rjm/scripts-traceability-resolve-orphaned-specs-py.md (7001 bytes)

## Scripts executed
- scripts/testing/mutation_workspace.py: `python3 scripts/testing/mutation_workspace.py check` (exit code: 1)
- scripts/todo_db.py: `python3 scripts/todo_db.py ensure /tmp/test_todo.db test-01 "Test Todo"` (exit code: 0)
- scripts/todo_db.py: `python3 scripts/todo_db.py complete /tmp/test_todo.db test-01` (exit code: 0)
- scripts/todo_db.py: `python3 scripts/todo_db.py complete /tmp/test_todo.db nonexistent-01` (exit code: 1)
- scripts/traceability/__init__.py: `python3 -c "import scripts.traceability; print('imported')"` (exit code: 0)
- scripts/traceability/reconstruct_trace.py: `python3 scripts/traceability/reconstruct_trace.py --sessions-dir sources/rjm/.agents/sessions` (exit code: 0)
- scripts/traceability/reconstruct_trace.py: `python3 scripts/traceability/reconstruct_trace.py --trace-id nonexistent` (exit code: 1)
- scripts/traceability/reconstruct_trace.py: `python3 scripts/traceability/reconstruct_trace.py --sessions-dir nonexistent_dir` (exit code: 2)
- scripts/traceability/rename_spec_id.py: `python3 scripts/traceability/rename_spec_id.py --specs-path .agents/specs --old-id REQ-999 --new-id REQ-998 --dry-run` (exit code: 1)
- scripts/traceability/resolve_orphaned_specs.py: `python3 scripts/traceability/resolve_orphaned_specs.py --action list` (exit code: 2)
- scripts/traceability/resolve_orphaned_specs.py: `python3 scripts/traceability/resolve_orphaned_specs.py --action archive --dry-run` (exit code: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (none written where nothing to report)
- [x] Every path:line cited was confirmed against the file
- [x] Every referenced path was checked with ls
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/traceability/rename_spec_id.py` depends on `spec_utils.find_spec_file` from `scripts/traceability/spec_utils.py` (unit inv-rjm-265), which expects `{spec_id}.md` without a slug. Because repo specs use `{spec_id}-{slug}.md`, `find_spec_file` fails on all existing specs in `.agents/specs/`. In contrast, `scripts/traceability/resolve_orphaned_specs.py` uses `spec_utils.load_all_specs`, which scans all `*.md` files and matches frontmatter IDs, successfully identifying 15 orphaned specs.
- `scripts/testing/mutation_workspace.py` depends on `scripts/testing/mutation_workspace_git.py` (unit inv-rjm-263).
- `scripts/testing/mutation_workspace.py check` failed with exit code 1 because a marker (`.git/mutation-active/9e9286dc3e164885b92dcf5c0068b92c.json`) was present on the source checkout, proving the fail-closed pre-push gate functionality.

## Blocked or uncertain
none

## Time and size
Source read: 44,259 bytes (~11,065 tokens). Output written: 31,180 bytes (~7,795 tokens across 6 cards) plus unit report.
