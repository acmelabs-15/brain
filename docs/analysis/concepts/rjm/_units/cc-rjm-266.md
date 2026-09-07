---
unit: cc-rjm-266
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-266

## Files assigned
- [x] sources/rjm/scripts/README.md
- [x] sources/rjm/scripts/detect_scope_explosion.py
- [x] sources/rjm/scripts/detect_skill_violation.py
- [x] sources/rjm/scripts/detect_test_coverage_gaps.py
- [x] sources/rjm/scripts/dev/dogfood_copilot_plugin.py
- [x] sources/rjm/scripts/error_classification.py
- [x] sources/rjm/scripts/new_validated_pr.py
- [x] sources/rjm/scripts/normalize_line_endings.py
- [x] sources/rjm/scripts/scope_pr_base.py

## Outputs produced
Every file written, one per line, with byte count.
- docs/analysis/concepts/rjm/resolve-pr-base-branch.md (1096 bytes)
- docs/analysis/concepts/rjm/strip-remote-prefix.md (1019 bytes)
- docs/analysis/concepts/rjm/gh.md (823 bytes)
- docs/analysis/concepts/rjm/github-skills.md (902 bytes)
- docs/analysis/concepts/rjm/phase-1-guardrail.md (880 bytes)
- docs/analysis/concepts/rjm/issue-230.md (998 bytes)
- docs/analysis/concepts/rjm/detect-skillviolation-ps1.md (971 bytes)
- docs/analysis/concepts/rjm/exit-code-standardization.md (1402 bytes)
- docs/analysis/concepts/rjm/gh-patterns.md (859 bytes)
- docs/analysis/concepts/rjm/valid-extensions.md (941 bytes)
- docs/analysis/concepts/rjm/capability-gaps.md (926 bytes)
- docs/analysis/concepts/rjm/staged-only.md (1102 bytes)
- docs/analysis/concepts/rjm/tests-ps1.md (872 bytes)
- docs/analysis/concepts/rjm/issue-3391.md (901 bytes)
- docs/analysis/concepts/rjm/default-ignore-patterns.md (935 bytes)
- docs/analysis/concepts/rjm/ignore-file.md (961 bytes)
- docs/analysis/concepts/rjm/issue-3247.md (877 bytes)
- docs/analysis/concepts/rjm/adr-083.md (876 bytes)
- docs/analysis/concepts/rjm/3252.md (775 bytes)
- docs/analysis/concepts/rjm/refs-3222.md (790 bytes)
- docs/analysis/concepts/rjm/plugin-name.md (850 bytes)
- docs/analysis/concepts/rjm/dogfood-uninstall.md (907 bytes)
- docs/analysis/concepts/rjm/dogfood-status.md (903 bytes)
- docs/analysis/concepts/rjm/dogfood-check.md (939 bytes)
- docs/analysis/concepts/rjm/issue-3256.md (855 bytes)
- docs/analysis/concepts/rjm/recovery-hints.md (931 bytes)
- docs/analysis/concepts/rjm/default-error-log.md (926 bytes)
- docs/analysis/concepts/rjm/graduation-threshold.md (1013 bytes)
- docs/analysis/concepts/rjm/tool-failure.md (863 bytes)
- docs/analysis/concepts/rjm/reasoning-drift.md (883 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-266.md (3673 bytes)

## Scripts executed
One per line: path, command, exit code. `none` if the unit had no scripts.
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `Exit Code Standardization` spans multiple script files (detect_skill_violation.py, detect_test_coverage_gaps.py, new_validated_pr.py, normalize_line_endings.py).
- `staged-only` spans detect_skill_violation.py and detect_test_coverage_gaps.py.
- `Issue #230` spans detect_skill_violation.py and scripts/README.md.
- `resolve_pr_base_branch` and `strip_remote_prefix` span scripts/scope_pr_base.py and scripts/detect_scope_explosion.py.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~23,000 tokens
Approximate tokens of output written: ~7,500 tokens
