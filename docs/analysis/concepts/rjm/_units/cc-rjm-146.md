---
unit: cc-rjm-146
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-146

## Files assigned
- [x] sources/rjm/.claude/skills/git-advanced-workflows/SKILL.md
- [x] sources/rjm/.claude/skills/github-url-intercept/SKILL.md
- [x] sources/rjm/.claude/skills/github-url-intercept/references/patterns.md
- [x] sources/rjm/.claude/skills/github-url-intercept/scripts/gist_routing.py
- [x] sources/rjm/.claude/skills/github-url-intercept/scripts/test_url_routing.py
- [x] sources/rjm/scripts/validation/check_ruleset_params_drift.py
- [x] docs/analysis/inventory/rjm/claude-skills-git-advanced-workflows-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-github-url-intercept-references-patterns-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-github-url-intercept-scripts-gist-routing-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-github-url-intercept-scripts-test-url-routing-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-github-url-intercept-skill-md.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-ruleset-params-drift-py.md

## Outputs produced
- docs/analysis/concepts/rjm/force-with-lease.md (1268 bytes)
- docs/analysis/concepts/rjm/bisecting-on-dirty-working-tree.md (1707 bytes)
- docs/analysis/concepts/rjm/orphaned-worktrees.md (1631 bytes)
- docs/analysis/concepts/rjm/no-backup-before-complex-rebase.md (1720 bytes)
- docs/analysis/concepts/rjm/url-routing-patterns.md (1305 bytes)
- docs/analysis/concepts/rjm/pattern-recognition.md (1282 bytes)
- docs/analysis/concepts/rjm/pr-urls.md (1225 bytes)
- docs/analysis/concepts/rjm/gh-api.md (2503 bytes)
- docs/analysis/concepts/rjm/issue-urls.md (1267 bytes)
- docs/analysis/concepts/rjm/file-tree-urls.md (1285 bytes)
- docs/analysis/concepts/rjm/commit-urls.md (1205 bytes)
- docs/analysis/concepts/rjm/compare-urls.md (1255 bytes)
- docs/analysis/concepts/rjm/gist-urls.md (1245 bytes)
- docs/analysis/concepts/rjm/script-selection-guide.md (1322 bytes)
- docs/analysis/concepts/rjm/pr-overview.md (1328 bytes)
- docs/analysis/concepts/rjm/review-comments.md (1352 bytes)
- docs/analysis/concepts/rjm/review-threads.md (1342 bytes)
- docs/analysis/concepts/rjm/ci-status.md (1329 bytes)
- docs/analysis/concepts/rjm/issue-overview.md (1327 bytes)
- docs/analysis/concepts/rjm/context-optimization.md (1324 bytes)
- docs/analysis/concepts/rjm/gist.md (1244 bytes)
- docs/analysis/concepts/rjm/gist-suffixes.md (1258 bytes)
- docs/analysis/concepts/rjm/gist-hosts.md (1277 bytes)
- docs/analysis/concepts/rjm/parse-gist-url.md (1302 bytes)
- docs/analysis/concepts/rjm/build-gist-command.md (1327 bytes)
- docs/analysis/concepts/rjm/urltype.md (1266 bytes)
- docs/analysis/concepts/rjm/routemethod.md (1307 bytes)
- docs/analysis/concepts/rjm/script-routes.md (1334 bytes)
- docs/analysis/concepts/rjm/checks-script-path.md (1327 bytes)
- docs/analysis/concepts/rjm/parse-github-url.md (1365 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-146.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/force-with-lease.md docs/analysis/concepts/rjm/bisecting-on-dirty-working-tree.md docs/analysis/concepts/rjm/orphaned-worktrees.md docs/analysis/concepts/rjm/no-backup-before-complex-rebase.md docs/analysis/concepts/rjm/url-routing-patterns.md docs/analysis/concepts/rjm/pattern-recognition.md docs/analysis/concepts/rjm/pr-urls.md docs/analysis/concepts/rjm/gh-api.md docs/analysis/concepts/rjm/issue-urls.md docs/analysis/concepts/rjm/file-tree-urls.md docs/analysis/concepts/rjm/commit-urls.md docs/analysis/concepts/rjm/compare-urls.md docs/analysis/concepts/rjm/gist-urls.md docs/analysis/concepts/rjm/script-selection-guide.md docs/analysis/concepts/rjm/pr-overview.md docs/analysis/concepts/rjm/review-comments.md docs/analysis/concepts/rjm/review-threads.md docs/analysis/concepts/rjm/ci-status.md docs/analysis/concepts/rjm/issue-overview.md docs/analysis/concepts/rjm/context-optimization.md docs/analysis/concepts/rjm/gist.md docs/analysis/concepts/rjm/gist-suffixes.md docs/analysis/concepts/rjm/gist-hosts.md docs/analysis/concepts/rjm/parse-gist-url.md docs/analysis/concepts/rjm/build-gist-command.md docs/analysis/concepts/rjm/urltype.md docs/analysis/concepts/rjm/routemethod.md docs/analysis/concepts/rjm/script-routes.md docs/analysis/concepts/rjm/checks-script-path.md docs/analysis/concepts/rjm/parse-github-url.md` — exit code 0 (30 PASS, 0 FAIL, 0 MISSING source across 30 cards)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-146 --model "Gemini 3.8 Flash" --effort high` — exit code 0 (30 cards stamped, 34 inputs)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-146 authored 30 concept cards spanning Git workflow anti-patterns, URL interception routing patterns and guides, gist routing helpers, and URL routing classification structures:
  1. Git operational anti-patterns (`bisecting-on-dirty-working-tree`, `orphaned-worktrees`, `no-backup-before-complex-rebase`) and push safety flag (`force-with-lease`) from `git-advanced-workflows`.
  2. URL pattern recognition references, headings, and retrieval need labels (`url-routing-patterns`, `pattern-recognition`, `pr-urls`, `issue-urls`, `file-tree-urls`, `commit-urls`, `compare-urls`, `gist-urls`, `script-selection-guide`, `pr-overview`, `review-comments`, `review-threads`, `ci-status`, `issue-overview`, `context-optimization`) from `github-url-intercept/references/patterns.md`.
  3. GitHub CLI raw API fallback tool identifier (`gh-api`) mapped across 5 inventory occurrences across patterns, scripts, and validation tooling.
  4. Gist parsing and CLI construction identifiers (`gist`, `gist-suffixes`, `gist-hosts`, `parse-gist-url`, `build-gist-command`) from `gist_routing.py`.
  5. URL routing data structures and entrypoint identifiers (`urltype`, `routemethod`, `script-routes`, `checks-script-path`, `parse-github-url`) from `test_url_routing.py`.
- Non-lifecycle concepts representing identifiers, headings, labels, and constants were classified as `kind: name-only` per D-023.
- All 34 occurrences recorded in `facts/cc-rjm-146.txt` were mapped as exact rows in the respective `Where used` tables.
- All 30 cards pass byte-exact quotation checks via `quote-check.ts` with 0 FAIL and 0 MISSING source.
- All 30 cards were stamped with `memo.ts stamp-unit cc-rjm-146`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens across 6 source files and 6 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 work unit report.
