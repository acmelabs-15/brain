---
package: rjm
path: .claude/skills/github-url-intercept/scripts/test_url_routing.py
type: script
bytes: 14073
unit: inv-rjm-122
in_scope_via: .claude/skills/github-url-intercept/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/github-url-intercept/scripts/test_url_routing.py, sha256: 0d7c3d86de7c4172a02a6600c687f75049fd2854cf1b0c9bf33494930bcc84d6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/github-url-intercept/scripts/test_url_routing.py

## Purpose — required, verbatim
> "Parse GitHub URLs and route to efficient API calls." — .claude/skills/github-url-intercept/scripts/test_url_routing.py:2

## Design intent — required
Serves as the primary routing and validation entry point for the `github-url-intercept` skill. It parses arbitrary `github.com` and `gist.github.com` URLs into structured components (owner, repo, type, resource ID, ref, path, and fragment details), validates against CWE-78 command injection and CWE-20 control characters, and selects the optimal retrieval method: routing to structured Python scripts in the `github` skill where available (PRs, issues, checks) or falling back to constructed `gh api` CLI commands. Without it, agents would either manually construct error-prone API calls or fall back to high-overhead HTML web fetches that deplete the context window.

## Phase — required
cross-phase

## Inputs — required
- `--url`: "The GitHub URL to route" — .claude/skills/github-url-intercept/scripts/test_url_routing.py:411
- URL types parsed:
  - Gists: "gist.github.com/{owner}/{id}" — .claude/skills/github-url-intercept/scripts/test_url_routing.py:9
  - Pull requests: "/pull/{n}, /pull/{n}/checks, /pull/{n}/files," — .claude/skills/github-url-intercept/scripts/test_url_routing.py:10
  - Issues: "/issues/{n}" — .claude/skills/github-url-intercept/scripts/test_url_routing.py:12
  - Discussions: "/discussions/{n}" — .claude/skills/github-url-intercept/scripts/test_url_routing.py:13
  - Actions: "/actions/runs/{run_id}, /actions/runs/{run_id}/job/{job_id}" — .claude/skills/github-url-intercept/scripts/test_url_routing.py:14
  - Files: "/blob/{ref}/{path}, /tree/{ref}/{path}" — .claude/skills/github-url-intercept/scripts/test_url_routing.py:15
  - Commits: "/commit/{sha}" — .claude/skills/github-url-intercept/scripts/test_url_routing.py:16
  - Comparisons: "/compare/{base}...{head}" — .claude/skills/github-url-intercept/scripts/test_url_routing.py:17

## Outputs — required
- JSON structure printed to stdout with keys `success`, `parsed_url`, `recommended_route`, and optional `error` (.claude/skills/github-url-intercept/scripts/test_url_routing.py:423-428, 435-440, 444-448)

## Invokes — required
- script gist_routing — .claude/skills/github-url-intercept/scripts/test_url_routing.py:41
- script url_validation — .claude/skills/github-url-intercept/scripts/test_url_routing.py:42
- script get_pr_context.py — .claude/skills/github-url-intercept/scripts/test_url_routing.py:78
- script get_issue_context.py — .claude/skills/github-url-intercept/scripts/test_url_routing.py:82
- script get_pr_checks.py — .claude/skills/github-url-intercept/scripts/test_url_routing.py:89

## Invoked by — required
- skill github-url-intercept — .claude/skills/github-url-intercept/SKILL.md:363
- skill github-url-intercept — .claude/skills/github-url-intercept/SKILL.md:382

## Concepts named — required, verbatim
- `ADR-035` — .claude/skills/github-url-intercept/scripts/test_url_routing.py:19 — used here
- `UrlType` — .claude/skills/github-url-intercept/scripts/test_url_routing.py:54 — defined here
- `RouteMethod` — .claude/skills/github-url-intercept/scripts/test_url_routing.py:67 — defined here
- `SCRIPT_ROUTES` — .claude/skills/github-url-intercept/scripts/test_url_routing.py:76 — defined here
- `CHECKS_SCRIPT_PATH` — .claude/skills/github-url-intercept/scripts/test_url_routing.py:87 — defined here
- `gh api` — .claude/skills/github-url-intercept/scripts/test_url_routing.py:6 — used here
- `github` — .claude/skills/github-url-intercept/scripts/test_url_routing.py:5 — used here
- `parse_github_url` — .claude/skills/github-url-intercept/scripts/test_url_routing.py:237 — defined here
- `get_recommended_route` — .claude/skills/github-url-intercept/scripts/test_url_routing.py:290 — defined here
- `get_pr_context.py` — .claude/skills/github-url-intercept/scripts/test_url_routing.py:78 — used here
- `get_issue_context.py` — .claude/skills/github-url-intercept/scripts/test_url_routing.py:82 — used here
- `get_pr_checks.py` — .claude/skills/github-url-intercept/scripts/test_url_routing.py:89 — used here

## Structure
none (python script; classes and definitions: `UrlType`, `RouteMethod`, `SCRIPT_ROUTES`, `CHECKS_SCRIPT_PATH`, `ResourceParseResult`, `FRAGMENT_PATTERNS`, `_parse_fragment`, `_parse_blob`, `_parse_tree`, `_parse_resource`, `_has_disallowed_control_characters`, `_parse_github_split`, `_parse_repo_path`, `_fragment_matches_url_type`, `parse_github_url`, `get_recommended_route`, `build_parser`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/github-url-intercept/scripts/test_url_routing.py`, language: Python 3, lines: 454
- documented invocation:
  - `python3 "${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/github-url-intercept/scripts/test_url_routing.py" --url <github-url>` — .claude/skills/github-url-intercept/SKILL.md:363
  - `python3 "${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/github-url-intercept/scripts/test_url_routing.py" --url "$GITHUB_URL"` — .claude/skills/github-url-intercept/SKILL.md:382
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/github-url-intercept/scripts/test_url_routing.py --url "https://github.com/owner/repo/pull/123"`
  abridged stdout:
  ```json
  {
    "success": true,
    "parsed_url": {
      "owner": "owner",
      "repo": "repo",
      "url_type": "Pull",
      "resource_id": "123",
      "subroute": null,
      "secondary_id": null,
      "ref": null,
      "path": null,
      "fragment_type": null,
      "fragment_id": null
    },
    "recommended_route": {
      "method": "Script",
      "command": "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/github/scripts/pr/get_pr_context.py\" --pull-request \"123\" --owner \"owner\" --repo \"repo\"",
      "script_path": "${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/github/scripts/pr/get_pr_context.py",
      "reason": "Use github skill script for structured output"
    }
  }
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0 - Success" — .claude/skills/github-url-intercept/scripts/test_url_routing.py:20
  - "1 - Invalid URL format" — .claude/skills/github-url-intercept/scripts/test_url_routing.py:21
  Actual exit paths in code:
  - `return 0` (.claude/skills/github-url-intercept/scripts/test_url_routing.py:449) on successful parse and recommendation.
  - `return 1` (.claude/skills/github-url-intercept/scripts/test_url_routing.py:429) when `parse_github_url` returns `None` (invalid URL format, control characters, or unparseable path).
  - `return 1` (.claude/skills/github-url-intercept/scripts/test_url_routing.py:441) when `recommended["command"] == "unknown"` (unroutable URL type).
  - `raise SystemExit(main())` (.claude/skills/github-url-intercept/scripts/test_url_routing.py:453).
- for validators/gates: can it exit non-zero? Yes, returns exit 1 for invalid URLs or unroutable targets. Does it fail on the source repo's own default branch? No, exits 0 on valid URLs.
- does the output match what the documentation claims? Yes, produces JSON output matching schema in SKILL.md.

## Defects — required
none

## Observations
- The script name `test_url_routing.py` is misleadingly prefixed with `test_` even though it serves as the core production routing CLI and programmatic parser rather than a test suite.
- Uses dynamic sys.path bootstrapping at lines 35-37 to ensure `gist_routing` and `url_validation` can be resolved when executed via varying harness plugin root configurations (`COPILOT_PLUGIN_ROOT` vs `CLAUDE_PLUGIN_ROOT`).

## Context cost
14073 bytes (~3518 tokens). Loads `gist_routing.py` (8769 bytes) and `url_validation.py` (1947 bytes). Total context cost: 24789 bytes (~6197 tokens).
