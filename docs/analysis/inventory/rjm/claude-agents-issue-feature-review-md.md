---
package: rjm
path: .claude/agents/issue-feature-review.md
type: agent
bytes: 7846
unit: inv-rjm-68
in_scope_via: .agents/AGENT-SYSTEM.md
aliases: []
memo_inputs:
  - {path: .claude/agents/issue-feature-review.md, sha256: d90505917e29f4e41c12b779d27e9870622dcc8f08fb9b9feb082eae5ad3cd36}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/issue-feature-review.md

## Purpose — required, verbatim
> "Review GitHub feature requests with constructive skepticism. Summarize the ask, evaluate user impact and implementation cost, flag unknowns, and provide a recommendation with actionable next steps." — .claude/agents/issue-feature-review.md:3

## Design intent — required
A triage coordinator agent that evaluates inbound GitHub feature requests and issues with constructive skepticism. It balances respectful engagement with users against software maintenance realities by scoring requests across five dimensions (user impact, implementation complexity, maintenance burden, strategic alignment, trade-offs) and assigning a concrete recommendation (PROCEED, DEFER, REQUEST_EVIDENCE, NEEDS_RESEARCH, or DECLINE) before issues enter roadmap planning. Without it, product backlogs become congested with unvalidated, speculative, or duplicate requests that drain development bandwidth.

## Phase — required
rjm:coordinator

## Inputs — required
- Issue title, issue body, and repository context passed via `argument-hint` ("Provide the issue title, issue body, and any known repository context") or orchestrator prompt.
- Repository contents, file reads, and commit history.
- GitHub issue and pull request read APIs.
- Serena memory tools when available.

## Outputs — required
- Structured markdown triage response synchronized with `.github/prompts/issue-feature-review.md`:
  - Thank You message
  - Summary of the feature request
  - Evaluation table across 5 criteria with confidence ratings (High / Medium / Low / Unknown)
  - Research Findings (What I Could Determine vs. What Requires Manual Research)
  - Questions for Submitter (or explicit statement that none are needed)
  - Recommendation verdict (PROCEED | DEFER | REQUEST_EVIDENCE | NEEDS_RESEARCH | DECLINE) with rationale
  - Suggested Actions (Assignees, Labels, Milestone, Next Steps)

## Invokes — required
- doc .github/prompts/issue-feature-review.md — .claude/agents/issue-feature-review.md:63
- agent milestone-planner — .claude/agents/issue-feature-review.md:151
- agent analyst — .claude/agents/issue-feature-review.md:152
- agent architect — .claude/agents/issue-feature-review.md:153

## Invoked by — required
- agent issue-feature-review — src/claude/orchestrator.md:93
- agent issue-feature-review — README.md:416
- agent issue-feature-review — docs/agent-catalog.md:30

## Concepts named — required, verbatim
- `Issue Feature Review Agent` — .claude/agents/issue-feature-review.md:10 — defined here
- `Core Behavior` — .claude/agents/issue-feature-review.md:14 — defined here
- `Evaluation Criteria` — .claude/agents/issue-feature-review.md:34 — defined here
- `User Impact` — .claude/agents/issue-feature-review.md:40 — defined here
- `Implementation Complexity` — .claude/agents/issue-feature-review.md:41 — defined here
- `Maintenance Burden` — .claude/agents/issue-feature-review.md:42 — defined here
- `Strategic Alignment` — .claude/agents/issue-feature-review.md:43 — defined here
- `Trade-offs` — .claude/agents/issue-feature-review.md:44 — defined here
- `Constructive Skepticism` — .claude/agents/issue-feature-review.md:48 — defined here
- `PROCEED` — .claude/agents/issue-feature-review.md:105 — used here
- `DEFER` — .claude/agents/issue-feature-review.md:105 — used here
- `REQUEST_EVIDENCE` — .claude/agents/issue-feature-review.md:105 — used here
- `NEEDS_RESEARCH` — .claude/agents/issue-feature-review.md:105 — used here
- `DECLINE` — .claude/agents/issue-feature-review.md:105 — used here
- `Suggested Actions` — .claude/agents/issue-feature-review.md:109 — defined here
- `Anti-Patterns` — .claude/agents/issue-feature-review.md:126 — defined here
- `Canonical sync` — .claude/agents/issue-feature-review.md:163 — defined here

## Structure
- # Issue Feature Review Agent — .claude/agents/issue-feature-review.md:10
- ## Core Behavior — .claude/agents/issue-feature-review.md:14
- ## When to Evaluate vs When to Challenge vs When to Decline — .claude/agents/issue-feature-review.md:20
- ## Evaluation Criteria — .claude/agents/issue-feature-review.md:34
- ## Constructive Skepticism — .claude/agents/issue-feature-review.md:48
- ## Output Format — .claude/agents/issue-feature-review.md:61
- ## Constraints — .claude/agents/issue-feature-review.md:119
- ## Anti-Patterns — .claude/agents/issue-feature-review.md:126
- ## Tools — .claude/agents/issue-feature-review.md:137
- ## Handoff — .claude/agents/issue-feature-review.md:143

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Variant relation: shares 91% of distinct lines with `templates/agents/issue-feature-review.shared.md` (ledger V13).
- Explicit canonical synchronization note with `.github/prompts/issue-feature-review.md` ensuring the output format schema remains unified between on-demand interactive review and CI/CD automated prompt workflows.
- Strictly forbids general web search, restricting evidence to the issue body, GitHub API context, and repository files to avoid hallucinations or speculative claims.

## Context cost
7846 bytes (approx. 1960 tokens).
