---
package: rjm
path: .agents/architecture/DESIGN-REVIEW-template.md
type: agent
bytes: 3860
unit: inv-rjm-50
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/DESIGN-REVIEW-template.md, sha256: 3947f73b5d221b539be5cfd5ca6638fca645c3bc560206046d63da1098c7828e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/DESIGN-REVIEW-template.md

## Purpose — required, verbatim
> "[One-paragraph summary of the review outcome and overall assessment]" — .agents/architecture/DESIGN-REVIEW-template.md:17 (no explicit purpose statement)

## Design intent — required
Standardizes the structure and machine-readable metadata of architectural reviews produced by the architect agent in rjm. By providing structured YAML frontmatter (`status`, `priority`, `reviewer`, `date`) and explicit sections for architectural fit, pattern consistency, quality assessment, and blocking versus non-blocking recommendations, it enables automated CI gating on PR merges while ensuring consistent review quality. Without it, architectural reviews would lack uniform structure and automated merge enforcement, permitting blocked or unapproved architectural changes to merge without detection.

## Phase — required
cross-phase

## Inputs — required
- "reviewer: architect           # agent performing review" — .agents/architecture/DESIGN-REVIEW-template.md:5
- "pr-branch: feature/example    # (optional) git branch being reviewed" — .agents/architecture/DESIGN-REVIEW-template.md:7
- "scope: [Review scope]         # (optional) brief description of review scope" — .agents/architecture/DESIGN-REVIEW-template.md:8
- "[Evaluate how well the change fits within the existing architecture]" — .agents/architecture/DESIGN-REVIEW-template.md:28
- "[Assess consistency with existing project patterns and conventions]" — .agents/architecture/DESIGN-REVIEW-template.md:39
- "[Evaluate code quality, testing, documentation]" — .agents/architecture/DESIGN-REVIEW-template.md:50

## Outputs — required
- "**VERDICT**: [APPROVED | NEEDS_CHANGES | BLOCKED]" — .agents/architecture/DESIGN-REVIEW-template.md:15
- "Required Changes (Blocking)" — .agents/architecture/DESIGN-REVIEW-template.md:77
- "Recommendations (Non-Blocking)" — .agents/architecture/DESIGN-REVIEW-template.md:89
- "Risks and Mitigations" — .agents/architecture/DESIGN-REVIEW-template.md:96
- "If (`status: NEEDS_CHANGES` OR `status: BLOCKED`) AND (`priority: P0` OR `priority: P1`): **merge blocked**" — .agents/architecture/DESIGN-REVIEW-template.md:120
- "If `status: APPROVED`: **merge allowed**" — .agents/architecture/DESIGN-REVIEW-template.md:121

## Invokes — required
none

## Invoked by — required
- doc ADR-051 — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:187

## Concepts named — required, verbatim
`status` — .agents/architecture/DESIGN-REVIEW-template.md:2 — defined here
`priority` — .agents/architecture/DESIGN-REVIEW-template.md:3 — defined here
`blocking` — .agents/architecture/DESIGN-REVIEW-template.md:4 — defined here
`reviewer` — .agents/architecture/DESIGN-REVIEW-template.md:5 — defined here
`architect` — .agents/architecture/DESIGN-REVIEW-template.md:5 — used here
`date` — .agents/architecture/DESIGN-REVIEW-template.md:6 — defined here
`pr-branch` — .agents/architecture/DESIGN-REVIEW-template.md:7 — defined here
`scope` — .agents/architecture/DESIGN-REVIEW-template.md:8 — defined here
`Architectural Review` — .agents/architecture/DESIGN-REVIEW-template.md:11 — defined here
`Executive Summary` — .agents/architecture/DESIGN-REVIEW-template.md:13 — defined here
`VERDICT` — .agents/architecture/DESIGN-REVIEW-template.md:15 — defined here
`APPROVED` — .agents/architecture/DESIGN-REVIEW-template.md:15 — defined here
`NEEDS_CHANGES` — .agents/architecture/DESIGN-REVIEW-template.md:15 — defined here
`BLOCKED` — .agents/architecture/DESIGN-REVIEW-template.md:15 — defined here
`Design Quality` — .agents/architecture/DESIGN-REVIEW-template.md:19 — defined here
`ADR Compliance` — .agents/architecture/DESIGN-REVIEW-template.md:20 — defined here
`Test Coverage` — .agents/architecture/DESIGN-REVIEW-template.md:21 — defined here
`Risk Level` — .agents/architecture/DESIGN-REVIEW-template.md:22 — defined here
`Design Coherence Assessment` — .agents/architecture/DESIGN-REVIEW-template.md:24 — defined here
`Architectural Fit` — .agents/architecture/DESIGN-REVIEW-template.md:26 — defined here
`Principle alignment` — .agents/architecture/DESIGN-REVIEW-template.md:30 — defined here
`Pattern consistency` — .agents/architecture/DESIGN-REVIEW-template.md:31 — defined here
`Isolation` — .agents/architecture/DESIGN-REVIEW-template.md:32 — defined here
`Extensibility` — .agents/architecture/DESIGN-REVIEW-template.md:33 — defined here
`Pattern Consistency` — .agents/architecture/DESIGN-REVIEW-template.md:37 — defined here
`Quality Assessment` — .agents/architecture/DESIGN-REVIEW-template.md:48 — defined here
`Code clarity` — .agents/architecture/DESIGN-REVIEW-template.md:52 — defined here
`Error handling` — .agents/architecture/DESIGN-REVIEW-template.md:53 — defined here
`Detailed Analysis` — .agents/architecture/DESIGN-REVIEW-template.md:59 — defined here
`Required Changes (Blocking)` — .agents/architecture/DESIGN-REVIEW-template.md:77 — defined here
`Recommendations (Non-Blocking)` — .agents/architecture/DESIGN-REVIEW-template.md:89 — defined here
`Risks and Mitigations` — .agents/architecture/DESIGN-REVIEW-template.md:96 — defined here
`Conclusion` — .agents/architecture/DESIGN-REVIEW-template.md:102 — defined here
`Frontmatter Reference` — .agents/architecture/DESIGN-REVIEW-template.md:108 — defined here
`CI Gate Rules` — .agents/architecture/DESIGN-REVIEW-template.md:119 — defined here

## Structure
- # Architectural Review: [Title] — .agents/architecture/DESIGN-REVIEW-template.md:11
- ## Executive Summary — .agents/architecture/DESIGN-REVIEW-template.md:13
- ## Design Coherence Assessment — .agents/architecture/DESIGN-REVIEW-template.md:24
- ### Architectural Fit — .agents/architecture/DESIGN-REVIEW-template.md:26
- ### Pattern Consistency — .agents/architecture/DESIGN-REVIEW-template.md:37
- ### Quality Assessment — .agents/architecture/DESIGN-REVIEW-template.md:48
- ## Detailed Analysis — .agents/architecture/DESIGN-REVIEW-template.md:59
- ### [Analysis Area 1] — .agents/architecture/DESIGN-REVIEW-template.md:61
- ### [Analysis Area 2] — .agents/architecture/DESIGN-REVIEW-template.md:69
- ## Required Changes (Blocking) — .agents/architecture/DESIGN-REVIEW-template.md:77
- ## Recommendations (Non-Blocking) — .agents/architecture/DESIGN-REVIEW-template.md:89
- ## Risks and Mitigations — .agents/architecture/DESIGN-REVIEW-template.md:96
- ## Conclusion — .agents/architecture/DESIGN-REVIEW-template.md:102
- ## Frontmatter Reference — .agents/architecture/DESIGN-REVIEW-template.md:108

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `internal-contradiction` · .agents/architecture/DESIGN-REVIEW-template.md:4 — frontmatter comment cites status values `NEEDS_ADR` and `REJECTED` that contradict the allowed enum values `APPROVED`, `NEEDS_CHANGES`, `BLOCKED` defined at lines 2 and 112, and the `blocking` field present in frontmatter at line 4 is omitted entirely from the Frontmatter Reference table at lines 110-117.
- `cross-file-contradiction` · .agents/architecture/DESIGN-REVIEW-template.md:4 — frontmatter includes `blocking: false`, which is absent from the canonical frontmatter schema in `.agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:46-54` and does not participate in the CI gate logic evaluated in either file.

## Observations
Standardized template for architect agent synthesis panels implementing ADR-051's mandate for structured frontmatter and formal architectural coherence evaluation. Directly documents CI gate rules determining PR merge blocking status based on combinations of status and priority.

## Context cost
3860 bytes, approximately 965 tokens.
