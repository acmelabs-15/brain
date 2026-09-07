---
unit: cc-rjm-320
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-320

## Files assigned
- [x] sources/rjm/scripts/update_reviewer_signal_stats.py
- [x] sources/rjm/scripts/utils/__init__.py
- [x] sources/rjm/scripts/utils/markdown_parser.py
- [x] sources/rjm/scripts/validation/check_adr_lifecycle.py
- [x] sources/rjm/scripts/validation/check_adr_links.py
- [x] sources/rjm/scripts/validation/check_plugin_frontmatter_self_containment.py
- [x] sources/rjm/scripts/validation/check_skill_md_portability.py
- [x] sources/rjm/scripts/validation/skill_md_portability_baseline.json

## Outputs produced
- docs/analysis/concepts/rjm/commentdata.md (927 bytes)
- docs/analysis/concepts/rjm/actionabilityresult.md (974 bytes)
- docs/analysis/concepts/rjm/reviewerstats.md (938 bytes)
- docs/analysis/concepts/rjm/signalstats.md (940 bytes)
- docs/analysis/concepts/rjm/is-same-actor.md (942 bytes)
- docs/analysis/concepts/rjm/get-comments-by-reviewer.md (993 bytes)
- docs/analysis/concepts/rjm/get-actionability-score.md (983 bytes)
- docs/analysis/concepts/rjm/locked-append.md (994 bytes)
- docs/analysis/concepts/rjm/get-reviewer-signal-stats.md (975 bytes)
- docs/analysis/concepts/rjm/update-serena-memory.md (962 bytes)
- docs/analysis/concepts/rjm/ai-agents.md (834 bytes)
- docs/analysis/concepts/rjm/ast-based-markdown-parsing.md (992 bytes)
- docs/analysis/concepts/rjm/session-validation.md (973 bytes)
- docs/analysis/concepts/rjm/checklistmatch.md (926 bytes)
- docs/analysis/concepts/rjm/tablerow.md (867 bytes)
- docs/analysis/concepts/rjm/parsedtable.md (881 bytes)
- docs/analysis/concepts/rjm/cellsegment.md (928 bytes)
- docs/analysis/concepts/rjm/tablecell.md (891 bytes)
- docs/analysis/concepts/rjm/markdownnestingerror.md (1115 bytes)
- docs/analysis/concepts/rjm/maxnesting.md (917 bytes)
- docs/analysis/concepts/rjm/check-skill-md-portability-py.md (1400 bytes)
- docs/analysis/concepts/rjm/check-adr-lifecycle-py.md (1112 bytes)
- docs/analysis/concepts/rjm/blank-code-block-lines.md (1151 bytes)
- docs/analysis/concepts/rjm/blank-non-prose-block-lines.md (1140 bytes)
- docs/analysis/concepts/rjm/parse-tables.md (931 bytes)
- docs/analysis/concepts/rjm/cwe-400.md (965 bytes)
- docs/analysis/concepts/rjm/extract-lookup-references.md (1001 bytes)
- docs/analysis/concepts/rjm/iter-table-cell-text.md (980 bytes)
- docs/analysis/concepts/rjm/find-checklist-item.md (988 bytes)
- docs/analysis/concepts/rjm/find-section.md (967 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-320.md (3650 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, `bun scripts/synthesis/quote-check.ts <cards>`, exit code: 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
All 30 concepts in this unit are script-level Python functions, dataclasses, exception classes, taxonomy entries, or internal helper/configuration identifiers from reviewer statistics, markdown parsing, and repository validation scripts. Per D-023, each concept is classified as `kind: name-only` with `(used, not defined)` definitions citing byte-exact source lines.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~78,000 tokens across 8 assigned files; approximate tokens of output written: ~7,200 tokens (30 concept cards + unit report).
