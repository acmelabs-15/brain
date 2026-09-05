---
package: rjm
path: .agents/architecture/ADR-020-feature-request-review-step.md
type: agent
bytes: 16370
unit: inv-rjm-9
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-020-feature-request-review-step.md, sha256: 935688cbbdc1cfa16ddef11f8e27c832b51e558ae3fd9cd23a5f80b260c663c6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-020-feature-request-review-step.md

## Purpose — required, verbatim
> "The current `ai-issue-triage.yml` workflow has three main steps:" — .agents/architecture/ADR-020-feature-request-review-step.md:24
(no explicit purpose statement)

## Design intent — required
Defines the architectural placement and agent assignment for an automated feature request review step within the GitHub issue triage workflow (`ai-issue-triage.yml`). It selects Option 1, which adds a new conditional step executed only when `category=enhancement`, assigning it to the `analyst` agent rather than creating a new agent or misusing the `critic` agent. This keeps workflows thin and compliant with ADR-006 while standardizing structured output parsing (`RECOMMENDATION`, `ASSIGNEES`, `LABELS`) in reusable PowerShell modules (`AIReviewCommon.psm1`) with Pester test coverage. Without this decision, feature requests would either receive shallow triage without substantive evidence-based assessment, or risk agent role confusion and bloated workflow YAML.

## Phase — required
none

## Inputs — required
- Issue content and repository context: `Issue title and body` — .agents/architecture/ADR-020-feature-request-review-step.md:175
- Triage workflow context: `The current `ai-issue-triage.yml` workflow has three main steps:` — .agents/architecture/ADR-020-feature-request-review-step.md:24
- Agent definition: `.github/agents/analyst.agent.md` — .agents/architecture/ADR-020-feature-request-review-step.md:492
- Design tracking issue: `Issue #110` — .agents/architecture/ADR-020-feature-request-review-step.md:497

## Outputs — required
- Architectural decision: `Chosen option: Option 1 - New Conditional Step with Analyst Agent` — .agents/architecture/ADR-020-feature-request-review-step.md:146
- Workflow configuration snippet: `Review Feature Request (Analyst Agent)` — .agents/architecture/ADR-020-feature-request-review-step.md:195
- Parsing step definition: `Parse Feature Review Results` — .agents/architecture/ADR-020-feature-request-review-step.md:208
- Output token definition: `RECOMMENDATION: PROCEED|DEFER|REQUEST_EVIDENCE|NEEDS_RESEARCH|DECLINE` — .agents/architecture/ADR-020-feature-request-review-step.md:393
- Output token assignees: `ASSIGNEES: user1,user2 (or "none" if no suggestion)` — .agents/architecture/ADR-020-feature-request-review-step.md:394
- Output token labels: `LABELS: label1,label2 (or "none" if no additional labels)` — .agents/architecture/ADR-020-feature-request-review-step.md:395
- Evaluation prompt template: `issue-feature-review.md` — .agents/architecture/ADR-020-feature-request-review-step.md:400

## Invokes — required
- agent analyst — .agents/architecture/ADR-020-feature-request-review-step.md:63
- doc ADR-005 — .agents/architecture/ADR-020-feature-request-review-step.md:484
- doc ADR-006 — .agents/architecture/ADR-020-feature-request-review-step.md:485
- script AIReviewCommon.psm1 — .agents/architecture/ADR-020-feature-request-review-step.md:215
- script AIReviewCommon.Tests.ps1 — .agents/architecture/ADR-020-feature-request-review-step.md:326
- template issue-feature-review.md — .agents/architecture/ADR-020-feature-request-review-step.md:65
- config ai-issue-triage.yml — .agents/architecture/ADR-020-feature-request-review-step.md:190

## Invoked by — required
- doc README.md — .agents/architecture/README.md:164

## Concepts named — required, verbatim
- `Categorize Issue` — .agents/architecture/ADR-020-feature-request-review-step.md:26 — used here
- `Align to Roadmap` — .agents/architecture/ADR-020-feature-request-review-step.md:27 — used here
- `Generate PRD` — .agents/architecture/ADR-020-feature-request-review-step.md:28 — used here
- `Feature Request Review` — .agents/architecture/ADR-020-feature-request-review-step.md:49 — defined here
- `User Impact` — .agents/architecture/ADR-020-feature-request-review-step.md:34 — defined here
- `Strategic Alignment` — .agents/architecture/ADR-020-feature-request-review-step.md:427 — defined here
- `Trade-offs` — .agents/architecture/ADR-020-feature-request-review-step.md:34 — defined here
- `RECOMMENDATION` — .agents/architecture/ADR-020-feature-request-review-step.md:393 — defined here
- `ASSIGNEES` — .agents/architecture/ADR-020-feature-request-review-step.md:394 — defined here
- `LABELS` — .agents/architecture/ADR-020-feature-request-review-step.md:395 — defined here
- `analyst agent` — .agents/architecture/ADR-020-feature-request-review-step.md:26 — used here
- `roadmap agent` — .agents/architecture/ADR-020-feature-request-review-step.md:27 — used here
- `explainer agent` — .agents/architecture/ADR-020-feature-request-review-step.md:28 — used here
- `critic agent` — .agents/architecture/ADR-020-feature-request-review-step.md:131 — used here

## Structure
- ## Context and Problem Statement — .agents/architecture/ADR-020-feature-request-review-step.md:22
- ## Decision Drivers — .agents/architecture/ADR-020-feature-request-review-step.md:41
- ## Considered Options — .agents/architecture/ADR-020-feature-request-review-step.md:51
- ## Decision Outcome — .agents/architecture/ADR-020-feature-request-review-step.md:144
- ## Implementation — .agents/architecture/ADR-020-feature-request-review-step.md:186
- ## Prompt Output Format — .agents/architecture/ADR-020-feature-request-review-step.md:386
- ## Consequences — .agents/architecture/ADR-020-feature-request-review-step.md:451
- ## Validation Checklist — .agents/architecture/ADR-020-feature-request-review-step.md:471
- ## Related Decisions — .agents/architecture/ADR-020-feature-request-review-step.md:482
- ## References — .agents/architecture/ADR-020-feature-request-review-step.md:489
- ## Related Issues — .agents/architecture/ADR-020-feature-request-review-step.md:495
- ## Review History — .agents/architecture/ADR-020-feature-request-review-step.md:499

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .agents/architecture/ADR-020-feature-request-review-step.md:190,490 · Workflow file `.github/workflows/ai-issue-triage.yml` does not exist on disk.
- `doc-drift` · .agents/architecture/ADR-020-feature-request-review-step.md:18 · File header comment states the ADR is 502 lines, but the file contains 505 lines.

## Observations
Documents a multi-agent review history (Session 93, 6 agents) that rejected an earlier proposal to use the `critic` agent for feature evaluation due to role boundary violations (critic is scoped strictly to pre-implementation plan validation). It also documents the correction that Copilot CLI supports MCP tools, but intentionally chooses not to require them for issue triage reliability.

## Context cost
16370 bytes (~4100 tokens). Includes inline YAML workflow configurations and PowerShell implementation code.
