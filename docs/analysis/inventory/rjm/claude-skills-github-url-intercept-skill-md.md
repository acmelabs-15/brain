---
package: rjm
path: .claude/skills/github-url-intercept/SKILL.md
type: skill
bytes: 14905
unit: inv-rjm-122
in_scope_via: docs/skill-reference.md
aliases: []
memo_inputs:
  - {path: .claude/skills/github-url-intercept/SKILL.md, sha256: 598a7fda8d4d2d6d3308524266285eeec763778d3f7998d49ff35b39054abbd8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/github-url-intercept/SKILL.md

## Purpose — required, verbatim
> "BLOCKING INTERCEPT: When ANY github.com URL appears in user input, STOP and use this skill. Never fetch GitHub HTML pages directly - they are 5-10MB and will exhaust your context window. This skill routes URLs to efficient API calls (1-50KB)." — .claude/skills/github-url-intercept/SKILL.md:4

## Design intent — required
Serves as an automatic blocking gate that intercepts any `github.com` or `gist.github.com` URL in user input, preventing the agent from fetching raw HTML pages via `web_fetch`, `curl`, or browser tools. GitHub web pages carry 5–10MB of DOM, scripts, and markup (consuming 1–2.5 million tokens), which immediately floods the LLM context window and derails the session. The skill parses the URL and routes it to low-overhead API endpoints or pre-packaged GitHub skill scripts (yielding 1–50KB clean JSON), reducing token usage by 100–1000x while maintaining safe command construction and CWE-78 protection.

## Phase — required
cross-phase

## Inputs — required
- User prompt containing any `github.com` or `gist.github.com` URL — .claude/skills/github-url-intercept/SKILL.md:4, 19, 59
- URL categories:
  - PR URLs (`/pull/{n}`, `/pull/{n}/checks`, `/pull/{n}/files`, `/pull/{n}/changes`, `/pull/{n}/commits`) — .claude/skills/github-url-intercept/SKILL.md:83-85, 167-171
  - Issue URLs (`/issues/{n}`) — .claude/skills/github-url-intercept/SKILL.md:86, 172
  - Actions URLs (`/actions/runs/{run_id}/job/{job_id}`) — .claude/skills/github-url-intercept/SKILL.md:87, 188-189
  - Blob / Tree URLs (`/blob/{ref}/{path}`, `/tree/{ref}/{path}`) — .claude/skills/github-url-intercept/SKILL.md:88-89, 190-191
  - Commit / Compare URLs (`/commit/{sha}`, `/compare/{base}...{head}`) — .claude/skills/github-url-intercept/SKILL.md:90-91, 192-193
  - Gist URLs (`gist.github.com/...`, `gist.githubusercontent.com/...`) — .claude/skills/github-url-intercept/SKILL.md:92-93, 194
  - URL fragments (`#discussion_r{id}`, `#issuecomment-{id}`, `#pullrequestreview-{id}`, `#r{id}`) — .claude/skills/github-url-intercept/SKILL.md:94-97, 182-185

## Outputs — required
- Structured JSON response from routed API calls or helper scripts — .claude/skills/github-url-intercept/SKILL.md:23, 156
- Structured JSON response with "success: true" — .claude/skills/github-url-intercept/SKILL.md:392

## Invokes — required
- script test_url_routing.py — .claude/skills/github-url-intercept/SKILL.md:363
- script get_pr_context.py — .claude/skills/github-url-intercept/SKILL.md:35
- script get_issue_context.py — .claude/skills/github-url-intercept/SKILL.md:38
- skill github — .claude/skills/github-url-intercept/SKILL.md:74
- skill pr-comment-responder — .claude/skills/github-url-intercept/SKILL.md:373

## Invoked by — required
- doc docs/skill-reference.md — docs/skill-reference.md:48

## Concepts named — required, verbatim
- `github-url-intercept` — .claude/skills/github-url-intercept/SKILL.md:2 — defined here
- `github` — .claude/skills/github-url-intercept/SKILL.md:15 — used here
- `Quick Reference` — .claude/skills/github-url-intercept/SKILL.md:27 — defined here
- `Triggers` — .claude/skills/github-url-intercept/SKILL.md:55 — defined here
- `When to Use` — .claude/skills/github-url-intercept/SKILL.md:66 — defined here
- `URL Patterns` — .claude/skills/github-url-intercept/SKILL.md:79 — defined here
- `Decision Flow` — .claude/skills/github-url-intercept/SKILL.md:101 — defined here
- `Process` — .claude/skills/github-url-intercept/SKILL.md:131 — defined here
- `URL Routing Table` — .claude/skills/github-url-intercept/SKILL.md:161 — defined here
- `URL Parsing Pattern` — .claude/skills/github-url-intercept/SKILL.md:198 — defined here
- `Anti-Patterns` — .claude/skills/github-url-intercept/SKILL.md:334 — defined here
- `test_url_routing.py` — .claude/skills/github-url-intercept/SKILL.md:358 — defined here
- `Related Skills` — .claude/skills/github-url-intercept/SKILL.md:368 — defined here
- `pr-comment-responder` — .claude/skills/github-url-intercept/SKILL.md:373 — used here
- `Verification` — .claude/skills/github-url-intercept/SKILL.md:377 — defined here
- `get_pr_context.py` — .claude/skills/github-url-intercept/SKILL.md:35 — used here
- `get_issue_context.py` — .claude/skills/github-url-intercept/SKILL.md:38 — used here
- `gh api` — .claude/skills/github-url-intercept/SKILL.md:41 — used here
- `get_pr_review_comments.py` — .claude/skills/github-url-intercept/SKILL.md:169 — used here
- `get_pr_review_threads.py` — .claude/skills/github-url-intercept/SKILL.md:170 — used here
- `get_pr_checks.py` — .claude/skills/github-url-intercept/SKILL.md:171 — used here

## Structure
- `# GitHub URL Intercept` — .claude/skills/github-url-intercept/SKILL.md:17
- `## Quick Reference (Copy-Paste Commands)` — .claude/skills/github-url-intercept/SKILL.md:27
- `## Triggers` — .claude/skills/github-url-intercept/SKILL.md:55
- `## When to Use` — .claude/skills/github-url-intercept/SKILL.md:66
- `## URL Patterns (Detailed Reference)` — .claude/skills/github-url-intercept/SKILL.md:79
- `## Decision Flow` — .claude/skills/github-url-intercept/SKILL.md:101
- `## Process` — .claude/skills/github-url-intercept/SKILL.md:131
- `### Phase 1: URL Detection and Parsing` — .claude/skills/github-url-intercept/SKILL.md:133
- `### Phase 2: Route Selection` — .claude/skills/github-url-intercept/SKILL.md:142
- `### Phase 3: Execution` — .claude/skills/github-url-intercept/SKILL.md:151
- `## URL Routing Table` — .claude/skills/github-url-intercept/SKILL.md:161
- `### Primary: Use GitHub Skill Scripts` — .claude/skills/github-url-intercept/SKILL.md:163
- `### Fallback: Raw gh Commands` — .claude/skills/github-url-intercept/SKILL.md:176
- `## URL Parsing Pattern` — .claude/skills/github-url-intercept/SKILL.md:198
- `## Why This Matters (CRITICAL)` — .claude/skills/github-url-intercept/SKILL.md:223
- `## Examples` — .claude/skills/github-url-intercept/SKILL.md:246
- `### Bare URL Pasted (Most Common!)` — .claude/skills/github-url-intercept/SKILL.md:248
- `### Gist URL` — .claude/skills/github-url-intercept/SKILL.md:258
- `### URL with Question After It` — .claude/skills/github-url-intercept/SKILL.md:272
- `### Multiple URLs in One Prompt` — .claude/skills/github-url-intercept/SKILL.md:283
- `### Research/Analyze Pattern` — .claude/skills/github-url-intercept/SKILL.md:294
- `### CI/Actions Run URL` — .claude/skills/github-url-intercept/SKILL.md:304
- `### PR URL → Script` — .claude/skills/github-url-intercept/SKILL.md:314
- `### File URL → API` — .claude/skills/github-url-intercept/SKILL.md:323
- `## Anti-Patterns (NEVER DO THESE)` — .claude/skills/github-url-intercept/SKILL.md:334
- `## Scripts` — .claude/skills/github-url-intercept/SKILL.md:356
- `### test_url_routing.py` — .claude/skills/github-url-intercept/SKILL.md:358
- `## Related Skills` — .claude/skills/github-url-intercept/SKILL.md:368
- `## Verification` — .claude/skills/github-url-intercept/SKILL.md:377

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
  Documented in SKILL.md:
  - "# must be 0; exit 1 means invalid URL or no routing available" — .claude/skills/github-url-intercept/SKILL.md:383
  Actual exit paths in code:
  - `return 0` (.claude/skills/github-url-intercept/scripts/test_url_routing.py:449) on valid URL route recommendation.
  - `return 1` (.claude/skills/github-url-intercept/scripts/test_url_routing.py:429) on invalid URL format.
  - `return 1` (.claude/skills/github-url-intercept/scripts/test_url_routing.py:441) on unknown routing.
- for validators/gates: can it exit non-zero? Yes, exits 1 on invalid URLs. Does it fail on the source repo's own default branch? No, exits 0 for valid URLs.
- does the output match what the documentation claims? Yes, returns exit code 0 and JSON with `success: true`.

## Defects — required
- `doc-drift` · .claude/skills/github-url-intercept/SKILL.md:174 · States "Script location: `.claude/skills/github/scripts/`" but referenced scripts actually reside in subdirectories (`pr/`, `issue/`), though commands at lines 35 and 38 correctly include the subdirectories.
- `missing-path` · .claude/skills/github-url-intercept/SKILL.md:74 · Markdown link `[github](../github/SKILL.md)` uses a relative path that assumes execution from within `.claude/skills/github-url-intercept/`, which fails when evaluated relative to repository root.
- `missing-path` · .claude/skills/github-url-intercept/SKILL.md:373 · Markdown link `[pr-comment-responder](../pr-comment-responder/SKILL.md)` points to a non-existent skill file in `.claude/skills/` (pr-comment-responder is only an agent in `.claude/agents/` or excluded).

## Observations
- Emphasizes blocking interception with strict anti-patterns forbidding `web_fetch`, `curl`, and browser tools on GitHub URLs to avoid 1–2.5M token context consumption per HTML page.
- Distinguishes between read interception (`github-url-intercept`) and mutation operations (`github` skill).
- The skill includes standalone sibling scripts `gist_routing.py` and `url_validation.py` that are imported by `test_url_routing.py`, but does not mention them in its `## Scripts` section (only lists `test_url_routing.py`).

## Context cost
14905 bytes (~3726 tokens). Followed invokes: `test_url_routing.py` (14073 bytes), `gist_routing.py` (8769 bytes), `url_validation.py` (1947 bytes). Total skill package context: 39694 bytes (~9923 tokens).
