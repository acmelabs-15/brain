---
unit: cc-rjm-363
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-363

## Files assigned
- [x] sources/rjm/scripts/validation/pre_pr.py
- [x] sources/rjm/scripts/validation/pre_pr_sequence.py
- [x] sources/rjm/scripts/validation/push_lock_resolver.py
- [x] sources/rjm/scripts/validation/shell_text.py
- [x] docs/analysis/inventory/rjm/scripts-validation-pre-pr-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pre-pr-sequence-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-push-lock-resolver-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-shell-text-py.md

## Outputs produced
- docs/analysis/concepts/rjm/active-plan-closeout-advisory.md (1273 bytes)
- docs/analysis/concepts/rjm/yaml-style-validation.md (1154 bytes)
- docs/analysis/concepts/rjm/planning-artifacts.md (1423 bytes)
- docs/analysis/concepts/rjm/install-parity-agents-and-rules.md (1225 bytes)
- docs/analysis/concepts/rjm/agent-content-parity-claude-agents-vs-src-claude.md (1356 bytes)
- docs/analysis/concepts/rjm/plugin-version-bump.md (1200 bytes)
- docs/analysis/concepts/rjm/hook-anchoring-claude-copilot.md (1248 bytes)
- docs/analysis/concepts/rjm/copilot-agent-frontmatter.md (1166 bytes)
- docs/analysis/concepts/rjm/argument-hint-frontmatter.md (1263 bytes)
- docs/analysis/concepts/rjm/git-hook-health-core-hookspath.md (1314 bytes)
- docs/analysis/concepts/rjm/lefthook-installed.md (1187 bytes)
- docs/analysis/concepts/rjm/workflow-local-run.md (1149 bytes)
- docs/analysis/concepts/rjm/review-marker-sha-bound-review.md (1221 bytes)
- docs/analysis/concepts/rjm/instruction-budget-always-on.md (1280 bytes)
- docs/analysis/concepts/rjm/always-on-corpus-claims.md (1254 bytes)
- docs/analysis/concepts/rjm/shift-left-validation.md (1254 bytes)
- docs/analysis/concepts/rjm/markdown-lint.md (1289 bytes)
- docs/analysis/concepts/rjm/workflow-yaml.md (1184 bytes)
- docs/analysis/concepts/rjm/yaml-style.md (1169 bytes)
- docs/analysis/concepts/rjm/validationrecord.md (888 bytes)
- docs/analysis/concepts/rjm/validationstate.md (888 bytes)
- docs/analysis/concepts/rjm/run-validation.md (882 bytes)
- docs/analysis/concepts/rjm/is-canonical.md (929 bytes)
- docs/analysis/concepts/rjm/statements.md (974 bytes)
- docs/analysis/concepts/rjm/split-statements.md (1089 bytes)
- docs/analysis/concepts/rjm/lock-path.md (888 bytes)
- docs/analysis/concepts/rjm/canonical-path.md (925 bytes)
- docs/analysis/concepts/rjm/exec-redirect.md (921 bytes)
- docs/analysis/concepts/rjm/assignment.md (899 bytes)
- docs/analysis/concepts/rjm/bare-variable.md (908 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-363.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/active-plan-closeout-advisory.md docs/analysis/concepts/rjm/yaml-style-validation.md docs/analysis/concepts/rjm/planning-artifacts.md docs/analysis/concepts/rjm/install-parity-agents-and-rules.md docs/analysis/concepts/rjm/agent-content-parity-claude-agents-vs-src-claude.md docs/analysis/concepts/rjm/plugin-version-bump.md docs/analysis/concepts/rjm/hook-anchoring-claude-copilot.md docs/analysis/concepts/rjm/copilot-agent-frontmatter.md docs/analysis/concepts/rjm/argument-hint-frontmatter.md docs/analysis/concepts/rjm/git-hook-health-core-hookspath.md docs/analysis/concepts/rjm/lefthook-installed.md docs/analysis/concepts/rjm/workflow-local-run.md docs/analysis/concepts/rjm/review-marker-sha-bound-review.md docs/analysis/concepts/rjm/instruction-budget-always-on.md docs/analysis/concepts/rjm/always-on-corpus-claims.md docs/analysis/concepts/rjm/shift-left-validation.md docs/analysis/concepts/rjm/markdown-lint.md docs/analysis/concepts/rjm/workflow-yaml.md docs/analysis/concepts/rjm/yaml-style.md docs/analysis/concepts/rjm/validationrecord.md docs/analysis/concepts/rjm/validationstate.md docs/analysis/concepts/rjm/run-validation.md docs/analysis/concepts/rjm/is-canonical.md docs/analysis/concepts/rjm/statements.md docs/analysis/concepts/rjm/split-statements.md docs/analysis/concepts/rjm/lock-path.md docs/analysis/concepts/rjm/canonical-path.md docs/analysis/concepts/rjm/exec-redirect.md docs/analysis/concepts/rjm/assignment.md docs/analysis/concepts/rjm/bare-variable.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-363 completes 30 concept cards spanning pre-PR validation sequence gates, shift-left test execution runner structures, and shell lock file path resolution:
  1. Pre-PR sequence gates (`active-plan-closeout-advisory`, `yaml-style-validation`, `planning-artifacts`, `install-parity-agents-and-rules`, `agent-content-parity-claude-agents-vs-src-claude`, `plugin-version-bump`, `hook-anchoring-claude-copilot`, `copilot-agent-frontmatter`, `argument-hint-frontmatter`, `git-hook-health-core-hookspath`, `lefthook-installed`, `workflow-local-run`, `review-marker-sha-bound-review`, `instruction-budget-always-on`, `always-on-corpus-claims`) defined in `pre_pr_sequence.py`.
  2. Core shift-left validation architecture and CLI runner gates/helpers (`shift-left-validation`, `markdown-lint`, `workflow-yaml`, `yaml-style`, `validationrecord`, `validationstate`, `run-validation`) in `pre_pr.py`.
  3. Shell lock resolution functions and token matching regexes (`is-canonical`, `statements`, `split-statements`, `lock-path`, `canonical-path`, `exec-redirect`, `assignment`, `bare-variable`) in `push_lock_resolver.py` and `shell_text.py`.
- Concepts representing code identifiers, functions, dataclasses, and regex patterns are categorized as `kind: name-only` per D-023.
- Core validation gates are categorized as `kind: gate`, and `shift-left validation` as `kind: technique`.
- All 32 occurrences recorded in `facts/cc-rjm-363.txt` are included in the cards' Where used tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`clean` or `defects: doc-drift`).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~20,000 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~11,000 tokens across 30 concept cards and 1 unit report.
