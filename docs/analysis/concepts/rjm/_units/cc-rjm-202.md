---
unit: cc-rjm-202
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-202

## Files assigned
- [x] sources/rjm/.claude/skills/skillforge/scripts/discover_skills.py
- [x] sources/rjm/.claude/skills/skillforge/scripts/frontmatter.py
- [x] sources/rjm/.claude/skills/skillforge/scripts/init_skill.py
- [x] sources/rjm/.claude/skills/skillforge/scripts/package_skill.py
- [x] sources/rjm/.claude/skills/skillforge/scripts/quick_validate.py
- [x] sources/rjm/.claude/skills/skillforge/scripts/skill_modularity_audit.py
- [x] sources/rjm/.claude/skills/skillforge/scripts/validate-skill.py
- [x] sources/rjm/.claude/skills/taste-lints/SKILL.md
- [x] sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py
- [x] sources/rjm/scripts/github_core/comment_classification.py
- [x] sources/rjm/scripts/validation/check_rule_activation_coverage.py
- [x] sources/rjm/scripts/validation/check_shipped_skill_routes.py
- [x] sources/rjm/scripts/validation/check_skill_skip_clauses.py
- [x] sources/rjm/scripts/validation/command_size.py

## Outputs produced
- docs/analysis/concepts/rjm/get-version.md (957 bytes)
- docs/analysis/concepts/rjm/extract-triggers.md (930 bytes)
- docs/analysis/concepts/rjm/extract-keywords.md (921 bytes)
- docs/analysis/concepts/rjm/classify-domain.md (1077 bytes)
- docs/analysis/concepts/rjm/parse-skill-file.md (1169 bytes)
- docs/analysis/concepts/rjm/discover-skills.md (1097 bytes)
- docs/analysis/concepts/rjm/get-index-path.md (855 bytes)
- docs/analysis/concepts/rjm/save-index.md (898 bytes)
- docs/analysis/concepts/rjm/has-size-exception.md (1019 bytes)
- docs/analysis/concepts/rjm/codex.md (875 bytes)
- docs/analysis/concepts/rjm/result-dataclass-pattern.md (1439 bytes)
- docs/analysis/concepts/rjm/workflow-based.md (1372 bytes)
- docs/analysis/concepts/rjm/task-based.md (1297 bytes)
- docs/analysis/concepts/rjm/reference-guidelines.md (1298 bytes)
- docs/analysis/concepts/rjm/capabilities-based.md (1371 bytes)
- docs/analysis/concepts/rjm/kebab-case.md (1130 bytes)
- docs/analysis/concepts/rjm/title-case.md (863 bytes)
- docs/analysis/concepts/rjm/skill-file.md (1352 bytes)
- docs/analysis/concepts/rjm/packageresult.md (889 bytes)
- docs/analysis/concepts/rjm/skillignore.md (1292 bytes)
- docs/analysis/concepts/rjm/parse-frontmatter-fallback.md (1162 bytes)
- docs/analysis/concepts/rjm/pathmodule.md (896 bytes)
- docs/analysis/concepts/rjm/commonpath.md (911 bytes)
- docs/analysis/concepts/rjm/splitdrive.md (924 bytes)
- docs/analysis/concepts/rjm/is-within.md (977 bytes)
- docs/analysis/concepts/rjm/contained-realpath.md (977 bytes)
- docs/analysis/concepts/rjm/validate-skill.md (949 bytes)
- docs/analysis/concepts/rjm/hyphen-case.md (1108 bytes)
- docs/analysis/concepts/rjm/line-limit.md (895 bytes)
- docs/analysis/concepts/rjm/line-warning.md (918 bytes)

## Scripts executed
- bun scripts/synthesis/quote-check.ts <cards> (exit 0, 30 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.skill file` combines occurrences from `package_skill.py:3` and `check_shipped_skill_routes.py:196` (`SKILL_FILE`) which resolved to the same slug `skill-file`.
- Four skill organization patterns (`workflow-based`, `task-based`, `reference-guidelines`, `capabilities-based`) are defined in `init_skill.py` PATTERNS_GUIDE under Phase 0: Skill Triage.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000; approximate tokens of output written: ~8,000.
