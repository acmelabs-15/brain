---
package: rjm
name: Multi-agent debate
slug: multi-agent-debate
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Multi-agent debate

## Definition — verbatim
> "Multi-agent debate pattern for rigorous ADR validation. Orchestrates 6 specialized agents through structured review rounds until consensus or 10 rounds maximum." — .claude/skills/adr-review/SKILL.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/SKILL.md | 24 | defined here | Defines the multi-agent debate orchestration pattern used for ADR validation across 6 specialized agents. |
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 101 | defined here \| used here | Identifies the adr-review multi-agent debate as the mandatory validation gate fired on ADR creation or modification. |

## Consumes
Authored ADR drafts and architecture proposals.

## Produces
Consolidated review verdicts, debate logs, issue lists (P0/P1/P2), and updated ADRs.

## When applied
Triggered automatically whenever an ADR file is created, modified, or submitted for architectural review.

## Sub-concepts
phase-0, phase-4, zimmermann-7-question-checklist, strategic-validation-checklist

## Part of
adr-review

## Implementation status
defects: doc-drift, missing-path

## Design notes
A consensus-seeking review protocol in rjm where six specialized agents (architect, critic, independent-thinker, security, analyst, high-level-advisor) critique proposed decisions across up to 10 rounds to ensure thorough validation and prevent unilateral architectural drift.
