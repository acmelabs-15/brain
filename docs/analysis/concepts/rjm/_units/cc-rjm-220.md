---
unit: cc-rjm-220
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-220

## Files assigned
- [x] sources/rjm/.claude/skills/style-enforcement/SKILL.md
- [x] sources/rjm/.claude/skills/style-enforcement/scripts/check_style.py
- [x] sources/rjm/.claude/skills/taste-lints/SKILL.md
- [x] sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py
- [x] sources/rjm/scripts/validation/check_adr_lifecycle.py
- [x] sources/rjm/scripts/validation/check_doc_interpreter_portability.py
- [x] sources/rjm/scripts/validation/check_plugin_frontmatter_self_containment.py
- [x] sources/rjm/scripts/validation/check_skill_md_portability.py
- [x] sources/rjm/scripts/validation/check_subprocess_encoding.py
- [x] sources/rjm/scripts/validation/check_vendor_portability.py
- [x] sources/rjm/scripts/validation/pre_pr_sequence.py
- [x] docs/analysis/inventory/rjm/claude-skills-style-enforcement-scripts-check-style-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-style-enforcement-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-taste-lints-scripts-taste-lints-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-taste-lints-skill-md.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-lifecycle-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-doc-interpreter-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-plugin-frontmatter-self-containment-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-md-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-subprocess-encoding-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-vendor-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pre-pr-sequence-py.md

## Outputs produced
- docs/analysis/concepts/rjm/asyncnamingconvention.md (944 bytes)
- docs/analysis/concepts/rjm/moq-analyzers.md (925 bytes)
- docs/analysis/concepts/rjm/editorconfig.md (893 bytes)
- docs/analysis/concepts/rjm/stylecop-json.md (875 bytes)
- docs/analysis/concepts/rjm/directory-build-props.md (880 bytes)
- docs/analysis/concepts/rjm/dotnet-naming-rule.md (913 bytes)
- docs/analysis/concepts/rjm/dotnet-naming-style.md (910 bytes)
- docs/analysis/concepts/rjm/configuration-discovery.md (1248 bytes)
- docs/analysis/concepts/rjm/rule-compilation.md (1171 bytes)
- docs/analysis/concepts/rjm/file-scanning.md (1203 bytes)
- docs/analysis/concepts/rjm/github-actions.md (878 bytes)
- docs/analysis/concepts/rjm/agent-pre-submission.md (1131 bytes)
- docs/analysis/concepts/rjm/taste-invariant-linter.md (1393 bytes)
- docs/analysis/concepts/rjm/remediation-instructions.md (1540 bytes)
- docs/analysis/concepts/rjm/file-size.md (2763 bytes)
- docs/analysis/concepts/rjm/naming.md (1188 bytes)
- docs/analysis/concepts/rjm/scannable-extensions.md (897 bytes)
- docs/analysis/concepts/rjm/file-size-exempt-suffix.md (948 bytes)
- docs/analysis/concepts/rjm/file-size-exempt-segments.md (952 bytes)
- docs/analysis/concepts/rjm/lintresult.md (892 bytes)
- docs/analysis/concepts/rjm/is-safe-path.md (922 bytes)
- docs/analysis/concepts/rjm/get-diff-files.md (928 bytes)
- docs/analysis/concepts/rjm/get-diff-line-numbers.md (971 bytes)
- docs/analysis/concepts/rjm/get-base-file-line-count.md (933 bytes)
- docs/analysis/concepts/rjm/get-files-from-directory.md (963 bytes)
- docs/analysis/concepts/rjm/check-file-size.md (934 bytes)
- docs/analysis/concepts/rjm/check-naming.md (939 bytes)
- docs/analysis/concepts/rjm/check-complexity.md (937 bytes)
- docs/analysis/concepts/rjm/cyclomatic-complexity.md (1468 bytes)
- docs/analysis/concepts/rjm/check-skill-size.md (967 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-220.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/asyncnamingconvention.md docs/analysis/concepts/rjm/moq-analyzers.md docs/analysis/concepts/rjm/editorconfig.md docs/analysis/concepts/rjm/stylecop-json.md docs/analysis/concepts/rjm/directory-build-props.md docs/analysis/concepts/rjm/dotnet-naming-rule.md docs/analysis/concepts/rjm/dotnet-naming-style.md docs/analysis/concepts/rjm/configuration-discovery.md docs/analysis/concepts/rjm/rule-compilation.md docs/analysis/concepts/rjm/file-scanning.md docs/analysis/concepts/rjm/github-actions.md docs/analysis/concepts/rjm/agent-pre-submission.md docs/analysis/concepts/rjm/taste-invariant-linter.md docs/analysis/concepts/rjm/remediation-instructions.md docs/analysis/concepts/rjm/file-size.md docs/analysis/concepts/rjm/naming.md docs/analysis/concepts/rjm/scannable-extensions.md docs/analysis/concepts/rjm/file-size-exempt-suffix.md docs/analysis/concepts/rjm/file-size-exempt-segments.md docs/analysis/concepts/rjm/lintresult.md docs/analysis/concepts/rjm/is-safe-path.md docs/analysis/concepts/rjm/get-diff-files.md docs/analysis/concepts/rjm/get-diff-line-numbers.md docs/analysis/concepts/rjm/get-base-file-line-count.md docs/analysis/concepts/rjm/get-files-from-directory.md docs/analysis/concepts/rjm/check-file-size.md docs/analysis/concepts/rjm/check-naming.md docs/analysis/concepts/rjm/check-complexity.md docs/analysis/concepts/rjm/cyclomatic-complexity.md docs/analysis/concepts/rjm/check-skill-size.md` (exit code 0, 33 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-220 completes 30 concept cards across two main skill domains: `style-enforcement` and `taste-lints`:
  1. Style enforcement mechanisms and configurations (`AsyncNamingConvention`, `moq.analyzers`, `.editorconfig`, `.stylecop.json`, `Directory.Build.props`, `dotnet_naming_rule`, `dotnet_naming_style`, `Configuration Discovery`, `Rule Compilation`, `File Scanning`, `GitHub Actions`, `Agent Pre-Submission`).
  2. Taste invariant linting rules, AST checks, and remediation architecture (`Taste invariant linter`, `remediation instructions`, `file-size`, `naming`, `SCANNABLE_EXTENSIONS`, `FILE_SIZE_EXEMPT_SUFFIX`, `FILE_SIZE_EXEMPT_SEGMENTS`, `LintResult`, `is_safe_path`, `get_diff_files`, `get_diff_line_numbers`, `get_base_file_line_count`, `get_files_from_directory`, `check_file_size`, `check_naming`, `check_complexity`, `cyclomatic complexity`, `check_skill_size`).
- Non-lifecycle concepts representing filenames, constants, configuration keys, or Python functions were classified as `kind: name-only` per D-023.
- `file-size` maps across 9 distinct files (including 7 repository validation scripts carrying `# taste-lint: ignore file-size` suppression directives at line 2).
- All 40 occurrences recorded in `facts/cc-rjm-220.txt` are faithfully mapped into `Where used` rows.
- Inventory defect classes (`doc-drift`, `exit-code-mismatch`, `missing-path`, `script-bug`, `other`) were correctly reflected in each card's `Implementation status`.
- Independent verification with `bun scripts/synthesis/quote-check.ts` yielded zero FAILs across all 30 cards.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 11 source files and 11 inventory cards.
Approximate tokens of output written: ~16,000 tokens across 30 authored concept cards and 1 unit report.
