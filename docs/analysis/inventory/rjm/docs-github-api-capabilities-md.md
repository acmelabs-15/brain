---
package: rjm
path: docs/github-api-capabilities.md
type: doc
bytes: 12018
unit: inv-rjm-191
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: docs/github-api-capabilities.md, sha256: ba3d6e9563db20b6b305b98637896d233aa22c3caeea83f79ff21be7769a23b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/github-api-capabilities.md

## Purpose — required, verbatim
> "A reference guide documenting capability differences between GitHub's REST and GraphQL APIs to help developers choose the right API for each operation." — docs/github-api-capabilities.md:3

## Design intent — required
Provides an exhaustive technical capability matrix and operational decision guide comparing GitHub's REST and GraphQL APIs for agent skill and script authors. Identifies exclusive GraphQL operations (such as review thread resolution via `resolveReviewThread`, nested PR discussions, and Projects v2 queries) versus REST-preferred operations (simple CRUD, file operations, webhooks, releases). Catalogues project scripts in `.claude/skills/github/` implemented in Python (for Claude Code) and Bash (for Copilot CLI to avoid PowerShell spawn overhead). Without this reference guide, agent developers would encounter runtime failures attempting impossible REST operations (such as resolving review comments) or introduce performance bottlenecks by executing dozens of round-trip REST calls where a single GraphQL query suffices.

## Phase — required
rjm:cross-phase

## Inputs — required
- GitHub CLI `gh` API commands ("gh api repos/{owner}/{repo}/pulls/{number}" — docs/github-api-capabilities.md:110)
- GitHub GraphQL mutations ("resolveReviewThread(input: {" — docs/github-api-capabilities.md:94)
- Python subprocess execution environment ("import subprocess" — docs/github-api-capabilities.md:255)

## Outputs — required
- Structured API response JSON ("data = json.loads(result.stdout)" — docs/github-api-capabilities.md:262)
- Resolved review thread mutation payload ("resolveReviewThread(input: {" — docs/github-api-capabilities.md:94)
- Pull request and issue artifacts ("Create pull request" — docs/github-api-capabilities.md:205; "Manage issue labels" — docs/github-api-capabilities.md:221)

## Invokes — required
- file get_pr_context.py — docs/github-api-capabilities.md:203
- file get_pull_requests.py — docs/github-api-capabilities.md:204
- file new_pr.py — docs/github-api-capabilities.md:205
- file close_pr.py — docs/github-api-capabilities.md:206
- file merge_pr.py — docs/github-api-capabilities.md:207
- file get_pr_checks.py — docs/github-api-capabilities.md:208
- file get_pr_check_logs.py — docs/github-api-capabilities.md:209
- file get_pr_reviewers.py — docs/github-api-capabilities.md:210
- file get_pr_review_comments.py — docs/github-api-capabilities.md:211
- file get_pr_comments_by_reviewer.py — docs/github-api-capabilities.md:212
- file get_unaddressed_comments.py — docs/github-api-capabilities.md:213
- file post_pr_comment_reply.py — docs/github-api-capabilities.md:214
- file set_pr_auto_merge.py — docs/github-api-capabilities.md:215
- file validate_pr_description.py — docs/github-api-capabilities.md:216
- file test_pr_merge_ready.py — docs/github-api-capabilities.md:217
- file get_issue_context.py — docs/github-api-capabilities.md:218
- file new_issue.py — docs/github-api-capabilities.md:219
- file post_issue_comment.py — docs/github-api-capabilities.md:220
- file set_issue_labels.py — docs/github-api-capabilities.md:221
- file set_issue_milestone.py — docs/github-api-capabilities.md:222
- file set_issue_assignee.py — docs/github-api-capabilities.md:223
- file set_item_milestone.py — docs/github-api-capabilities.md:224
- file get_latest_semantic_milestone.py — docs/github-api-capabilities.md:225
- file add_comment_reaction.py — docs/github-api-capabilities.md:226
- file get-pr-context.sh — docs/github-api-capabilities.md:232
- file set-issue-labels.sh — docs/github-api-capabilities.md:233
- file set-issue-milestone.sh — docs/github-api-capabilities.md:234
- file post-issue-comment.sh — docs/github-api-capabilities.md:235
- file add-comment-reaction.sh — docs/github-api-capabilities.md:236
- file resolve_pr_review_thread.py — docs/github-api-capabilities.md:244
- file get_pr_review_threads.py — docs/github-api-capabilities.md:245
- file get_unresolved_review_threads.py — docs/github-api-capabilities.md:246
- file detect_stale_pr_comments.py — docs/github-api-capabilities.md:247

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `REST API` — docs/github-api-capabilities.md:9 — used here
- `GraphQL API` — docs/github-api-capabilities.md:10 — used here
- `Review thread resolution` — docs/github-api-capabilities.md:35 — used here
- `resolveReviewThread` — docs/github-api-capabilities.md:35 — used here
- `Project boards v2` — docs/github-api-capabilities.md:37 — used here
- `Repository discussions` — docs/github-api-capabilities.md:38 — used here
- `Branch protection rules` — docs/github-api-capabilities.md:45 — used here
- `Pull request management` — docs/github-api-capabilities.md:46 — used here
- `Issue management` — docs/github-api-capabilities.md:47 — used here
- `Repository management` — docs/github-api-capabilities.md:48 — used here
- `gh-native` — docs/github-api-capabilities.md:238 — defined here
- `GitHub MCP` — docs/github-api-capabilities.md:238 — used here

## Structure
- ## Overview — docs/github-api-capabilities.md:5
- ## Quick Reference: API Selection — docs/github-api-capabilities.md:14
- ## Capability Matrix — docs/github-api-capabilities.md:27
- ### Operations Requiring GraphQL — docs/github-api-capabilities.md:29
- ### Operations Available in Both APIs — docs/github-api-capabilities.md:41
- ### Operations Preferring REST — docs/github-api-capabilities.md:51
- ## When to Use Each API — docs/github-api-capabilities.md:60
- ### Use REST API For — docs/github-api-capabilities.md:62
- ### Use GraphQL API For — docs/github-api-capabilities.md:71
- ## Implementation Examples — docs/github-api-capabilities.md:80
- ### Example 1: Review Thread Resolution — docs/github-api-capabilities.md:82
- ### Example 2: Getting PR with Nested Data — docs/github-api-capabilities.md:106
- ### Example 3: Projects v2 (GraphQL Only) — docs/github-api-capabilities.md:139
- ## Trade-offs — docs/github-api-capabilities.md:164
- ### GraphQL Advantages — docs/github-api-capabilities.md:166
- ### GraphQL Disadvantages — docs/github-api-capabilities.md:172
- ### REST Advantages — docs/github-api-capabilities.md:178
- ### REST Disadvantages — docs/github-api-capabilities.md:185
- ## Project Skills Using Each API — docs/github-api-capabilities.md:191
- ### REST API Skills — docs/github-api-capabilities.md:193
- #### Python Scripts (Full-Featured, Hook-Integrated) — docs/github-api-capabilities.md:195
- #### Bash Scripts (Copilot CLI Optimized) — docs/github-api-capabilities.md:228
- ### GraphQL API Skills — docs/github-api-capabilities.md:240
- ## Common Patterns — docs/github-api-capabilities.md:249
- ### Pattern 1: Check REST First, Fall Back to GraphQL — docs/github-api-capabilities.md:251
- ### Pattern 2: Use GraphQL for Complex Data Gathering — docs/github-api-capabilities.md:273
- ## Related Resources — docs/github-api-capabilities.md:305
- ## Discovery Notes — docs/github-api-capabilities.md:312
- ## Related Memories — docs/github-api-capabilities.md:320

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan: File is not referenced or linked by any other in-scope documentation or workflow file in the repository.

## Observations
- Documents critical architectural constraint: GitHub's REST API cannot resolve review threads; only GraphQL mutation `resolveReviewThread` can resolve threads.
- Contrasts Python script implementation (for Claude Code) with `gh-native` Bash scripts (for Copilot CLI) to eliminate PowerShell spawn latency (183-416ms vs 50-80ms).
- References excluded `.serena/memories/` entries (`graphql-vs-rest`, `graphql-pr-operations`, etc.) and excluded PR automation skills (`.claude/skills/github/`).

## Context cost
12,018 bytes. Approximately 3,000 tokens.
