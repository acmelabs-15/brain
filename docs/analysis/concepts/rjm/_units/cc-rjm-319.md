---
unit: cc-rjm-319
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-319

## Files assigned
- [x] sources/rjm/scripts/traceability/spec_utils.py
- [x] sources/rjm/scripts/traceability/traceability_cache.py
- [x] sources/rjm/scripts/traceability/update_spec_references.py
- [x] sources/rjm/scripts/update_memory_index_tokens.py
- [x] sources/rjm/scripts/update_reviewer_signal_stats.py
- [x] sources/rjm/scripts/validation/check_adr_lifecycle.py
- [x] sources/rjm/scripts/validation/yaml_utils.py

## Outputs produced
- docs/analysis/concepts/rjm/parse-yaml-frontmatter.md (1146 bytes)
- docs/analysis/concepts/rjm/parse-frontmatter-with-content.md (1109 bytes)
- docs/analysis/concepts/rjm/memory-cache.md (847 bytes)
- docs/analysis/concepts/rjm/cache-dir.md (866 bytes)
- docs/analysis/concepts/rjm/initialize-cache.md (864 bytes)
- docs/analysis/concepts/rjm/get-cache-key.md (897 bytes)
- docs/analysis/concepts/rjm/clear-cache.md (1020 bytes)
- docs/analysis/concepts/rjm/get-cache-stats.md (877 bytes)
- docs/analysis/concepts/rjm/update-yaml-references.md (910 bytes)
- docs/analysis/concepts/rjm/get-memory-token-count.md (935 bytes)
- docs/analysis/concepts/rjm/has-tiktoken.md (860 bytes)
- docs/analysis/concepts/rjm/link-with-count.md (884 bytes)
- docs/analysis/concepts/rjm/link-without-count.md (903 bytes)
- docs/analysis/concepts/rjm/memory-link-target.md (896 bytes)
- docs/analysis/concepts/rjm/duplicatememoryindexentryerror.md (948 bytes)
- docs/analysis/concepts/rjm/update-line.md (897 bytes)
- docs/analysis/concepts/rjm/memory-link-targets.md (914 bytes)
- docs/analysis/concepts/rjm/collapse-duplicate-rows.md (933 bytes)
- docs/analysis/concepts/rjm/check-memory-index.md (942 bytes)
- docs/analysis/concepts/rjm/update-memory-index.md (937 bytes)
- docs/analysis/concepts/rjm/self-comment-excluded-authors.md (912 bytes)
- docs/analysis/concepts/rjm/heuristics.md (876 bytes)
- docs/analysis/concepts/rjm/memory-path.md (905 bytes)
- docs/analysis/concepts/rjm/trend-thresholds.md (885 bytes)
- docs/analysis/concepts/rjm/fixed-pattern.md (869 bytes)
- docs/analysis/concepts/rjm/wontfix-pattern.md (875 bytes)
- docs/analysis/concepts/rjm/high-severity-pattern.md (907 bytes)
- docs/analysis/concepts/rjm/low-severity-pattern.md (885 bytes)
- docs/analysis/concepts/rjm/null-pattern.md (866 bytes)
- docs/analysis/concepts/rjm/unused-pattern.md (875 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-319.md (3529 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, `bun scripts/synthesis/quote-check.ts <cards>`, exit code: 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
All 30 concepts in this unit are script-level Python functions, constants, exception classes, or internal helpers from traceability, validation, memory index maintenance, and reviewer signal stats scripts. Per D-023, each is classified as `kind: name-only` with `(used, not defined)` definitions citing exact source lines.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~27,000 tokens across 7 assigned files; approximate tokens of output written: ~7,000 tokens (30 concept cards + unit report).
