---
unit: inv-rjm-122
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-122

## Files assigned
- [x] `.claude/skills/github-url-intercept/references/patterns.md` — read in full
- [x] `.claude/skills/github-url-intercept/scripts/gist_routing.py` — read in full
- [x] `.claude/skills/github-url-intercept/scripts/test_url_routing.py` — read in full
- [x] `.claude/skills/github-url-intercept/scripts/url_validation.py` — read in full
- [x] `.claude/skills/github-url-intercept/SKILL.md` — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-github-url-intercept-references-patterns-md.md` (7730 bytes)
- `docs/analysis/inventory/rjm/claude-skills-github-url-intercept-scripts-gist-routing-py.md` (5039 bytes)
- `docs/analysis/inventory/rjm/claude-skills-github-url-intercept-scripts-test-url-routing-py.md` (8261 bytes)
- `docs/analysis/inventory/rjm/claude-skills-github-url-intercept-scripts-url-validation-py.md` (4467 bytes)
- `docs/analysis/inventory/rjm/claude-skills-github-url-intercept-skill-md.md` (11356 bytes)

## Scripts executed
- `.claude/skills/github-url-intercept/scripts/test_url_routing.py`: `python3 sources/rjm/.claude/skills/github-url-intercept/scripts/test_url_routing.py --url "https://github.com/owner/repo/pull/123"`, exit code: 0
- `.claude/skills/github-url-intercept/scripts/test_url_routing.py`: `python3 sources/rjm/.claude/skills/github-url-intercept/scripts/test_url_routing.py --url "invalid"`, exit code: 1
- `.claude/skills/github-url-intercept/scripts/test_url_routing.py`: `python3 sources/rjm/.claude/skills/github-url-intercept/scripts/test_url_routing.py --url "https://gist.github.com/owner/0123456789abcdef0123"`, exit code: 0
- `.claude/skills/github-url-intercept/scripts/gist_routing.py`: `python3 sources/rjm/.claude/skills/github-url-intercept/scripts/gist_routing.py`, exit code: 0
- `.claude/skills/github-url-intercept/scripts/url_validation.py`: `python3 sources/rjm/.claude/skills/github-url-intercept/scripts/url_validation.py`, exit code: 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `github-url-intercept` is a blocking intercept gate preventing agents from executing `web_fetch`, `curl`, or browser navigations on `github.com` URLs (which return 5–10MB HTML consuming 1–2.5M tokens), replacing them with 1–50KB structured API calls.
- Routing routes to Python scripts in the `github` skill (`.claude/skills/github/scripts/pr/get_pr_context.py`, `get_pr_checks.py`, and `.claude/skills/github/scripts/issue/get_issue_context.py`), falling back to `gh api` for non-scripted types (gists, commits, compare, blob/tree, fragments).
- `references/patterns.md` is an orphan reference within `.claude/skills/github-url-intercept/` that is never linked or referenced from `SKILL.md`.
- `references/patterns.md` contains legacy PowerShell artifact `$false` at line 190.
- `test_url_routing.py` is named with a `test_` prefix despite being the core production CLI parser and routing engine rather than a pytest suite.

## Blocked or uncertain
none

## Time and size
- Approximate source read: 45817 bytes (~11454 tokens)
- Approximate output written: 36853 bytes (~9213 tokens across 5 inventory cards)
