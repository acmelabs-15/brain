---
package: rjm
path: .claude/skills/github-url-intercept/references/patterns.md
type: reference
bytes: 6123
unit: inv-rjm-122
in_scope_via: .claude/skills/github-url-intercept/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/github-url-intercept/references/patterns.md, sha256: 06b2c777aaf19693918da842130ca7682818a4b8a38fb1f6fe69fb651a601752}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/github-url-intercept/references/patterns.md

## Purpose — required, verbatim
> "# URL Routing Patterns" — .claude/skills/github-url-intercept/references/patterns.md:1 (no explicit purpose statement)

## Design intent — required
Catalog of URL pattern mappings and script selection guidelines for converting browser/HTML URLs (PRs, issues, blobs, commits, comparisons, gists, and specific comment/review fragments) into efficient GitHub API endpoints or specialized helper scripts. It establishes rules for context optimization, detailing dramatic payload reductions (50–100x savings, dropping 5–10MB HTML down to 10–100KB JSON) to prevent context window exhaustion. Without this reference, agents encountering pasted GitHub URLs would lack exact routing formulas for granular fragments (such as `#pullrequestreview-`, `#discussion_r`, `#issuecomment-`) or guidelines on choosing between structured Python helper scripts and raw `gh api` calls.

## Phase — required
cross-phase

## Inputs — required
- GitHub URLs and URI fragments across categories:
  - PR URLs (`/pull/{n}`, `/pull/{n}#pullrequestreview-{id}`, `/pull/{n}#discussion_r{id}`, `/pull/{n}#issuecomment-{id}`, `/pull/{n}/files`, `/pull/{n}/changes#r{id}`, `/pull/{n}/commits`, `/pull/{n}/checks`) — .claude/skills/github-url-intercept/references/patterns.md:8-39
  - Issue and discussion URLs (`/issues/{n}`, `/issues/{n}#issuecomment-{id}`, `/discussions/{n}`, `/actions/runs/{id}`, `/actions/runs/{id}/job/{id}`) — .claude/skills/github-url-intercept/references/patterns.md:44-62
  - File/Tree URLs (`/blob/{ref}/{path}`, `/tree/{ref}/{path}`) — .claude/skills/github-url-intercept/references/patterns.md:68-78
  - Commit URLs (`/commit/{sha}`) — .claude/skills/github-url-intercept/references/patterns.md:84-86
  - Compare URLs (`/compare/{base}...{head}`) — .claude/skills/github-url-intercept/references/patterns.md:92-98
  - Gist URLs (`gist.github.com/{owner}/{id}`, `gist.github.com/{id}`, revisions, `.js` embed, raw content) — .claude/skills/github-url-intercept/references/patterns.md:104-122

## Outputs — required
none

## Invokes — required
- script get_pr_context.py — .claude/skills/github-url-intercept/references/patterns.md:10
- script get_pr_checks.py — .claude/skills/github-url-intercept/references/patterns.md:38
- script get_issue_context.py — .claude/skills/github-url-intercept/references/patterns.md:46
- script get_pr_review_comments.py — .claude/skills/github-url-intercept/references/patterns.md:132
- script get_pr_review_threads.py — .claude/skills/github-url-intercept/references/patterns.md:133

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `URL Routing Patterns` — .claude/skills/github-url-intercept/references/patterns.md:1 — defined here
- `Pattern Recognition` — .claude/skills/github-url-intercept/references/patterns.md:3 — defined here
- `PR URLs` — .claude/skills/github-url-intercept/references/patterns.md:5 — defined here
- `gh api` — .claude/skills/github-url-intercept/references/patterns.md:14 — used here
- `Issue URLs` — .claude/skills/github-url-intercept/references/patterns.md:41 — defined here
- `File/Tree URLs` — .claude/skills/github-url-intercept/references/patterns.md:65 — defined here
- `Commit URLs` — .claude/skills/github-url-intercept/references/patterns.md:81 — defined here
- `Compare URLs` — .claude/skills/github-url-intercept/references/patterns.md:89 — defined here
- `Gist URLs` — .claude/skills/github-url-intercept/references/patterns.md:101 — defined here
- `Script Selection Guide` — .claude/skills/github-url-intercept/references/patterns.md:125 — defined here
- `PR overview` — .claude/skills/github-url-intercept/references/patterns.md:131 — used here
- `Review comments` — .claude/skills/github-url-intercept/references/patterns.md:132 — used here
- `Review threads` — .claude/skills/github-url-intercept/references/patterns.md:133 — used here
- `CI status` — .claude/skills/github-url-intercept/references/patterns.md:134 — used here
- `Issue overview` — .claude/skills/github-url-intercept/references/patterns.md:135 — used here
- `github` — .claude/skills/github-url-intercept/references/patterns.md:143 — used here
- `Context Optimization` — .claude/skills/github-url-intercept/references/patterns.md:148 — defined here
- `Error Handling` — .claude/skills/github-url-intercept/references/patterns.md:175 — defined here

## Structure
- `# URL Routing Patterns` — .claude/skills/github-url-intercept/references/patterns.md:1
- `## Pattern Recognition` — .claude/skills/github-url-intercept/references/patterns.md:3
- `### PR URLs` — .claude/skills/github-url-intercept/references/patterns.md:5
- `### Issue URLs` — .claude/skills/github-url-intercept/references/patterns.md:41
- `### File/Tree URLs` — .claude/skills/github-url-intercept/references/patterns.md:65
- `### Commit URLs` — .claude/skills/github-url-intercept/references/patterns.md:81
- `### Compare URLs` — .claude/skills/github-url-intercept/references/patterns.md:89
- `### Gist URLs` — .claude/skills/github-url-intercept/references/patterns.md:101
- `## Script Selection Guide` — .claude/skills/github-url-intercept/references/patterns.md:125
- `### When to Use Scripts (Primary)` — .claude/skills/github-url-intercept/references/patterns.md:127
- `### When to Use gh api (Fallback)` — .claude/skills/github-url-intercept/references/patterns.md:137
- `## Context Optimization` — .claude/skills/github-url-intercept/references/patterns.md:148
- `### Size Comparison by Method` — .claude/skills/github-url-intercept/references/patterns.md:150
- `### When Size Matters Most` — .claude/skills/github-url-intercept/references/patterns.md:161
- `## Error Handling` — .claude/skills/github-url-intercept/references/patterns.md:175
- `### Common Errors and Recovery` — .claude/skills/github-url-intercept/references/patterns.md:177
- `### Script vs API Error Handling` — .claude/skills/github-url-intercept/references/patterns.md:186

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `orphan` · .claude/skills/github-url-intercept/references/patterns.md:1 · File exists in `references/` directory but is not referenced or linked anywhere in `.claude/skills/github-url-intercept/SKILL.md` or other in-scope documentation.
- `doc-drift` · .claude/skills/github-url-intercept/references/patterns.md:10 · Script commands are listed as bare filenames without execution interpreters or relative paths (e.g. `→ get_pr_context.py --pull-request 123` instead of `python3 $SCRIPTS_DIR/pr/get_pr_context.py`), omitting required directory structure (`pr/`, `issue/`).
- `other` · .claude/skills/github-url-intercept/references/patterns.md:190 · Script error handling documentation states "Return structured Success: $false with error details", using PowerShell boolean literal `$false` despite repository migration to Python scripts.

## Observations
- Quantifies significant token savings across URL types (50–100x for PRs and issues, 20–80x for commits, 2–10x for files and gists).
- Advises fetching specific comment or review fragments (`#pullrequestreview-`, `#discussion_r`, `#issuecomment-`) via targeted API endpoints rather than retrieving entire issue or PR timelines.

## Context cost
6123 bytes (~1531 tokens). Reference document; loads no external files.
