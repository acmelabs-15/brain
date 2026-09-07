---
package: rjm
name: Generate PRD
slug: generate-prd
kind: technique
package_phase: rjm:coordinator
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-020-feature-request-review-step.md, sha256: 935688cbbdc1cfa16ddef11f8e27c832b51e558ae3fd9cd23a5f80b260c663c6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Generate PRD

## Definition — verbatim
> "3. **Generate PRD** (explainer agent) - only for escalated issues" — .agents/architecture/ADR-020-feature-request-review-step.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-020-feature-request-review-step.md | 28 | used here | Identified as step 3 in the issue triage workflow, executed by the explainer agent on escalated issues. |

## Consumes
Categorized and prioritized feature requests that received an escalation determination from triage.

## Produces
Product Requirements Document (PRD) drafting user stories, acceptance criteria, and technical constraints.

## When applied
Triggered conditionally during issue triage only when a feature request is escalated for detailed product specification.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift (workflow .github/workflows/ai-issue-triage.yml does not exist on disk)

## Design notes
Downstream triage specification step where the explainer agent synthesizes complex or high-priority feature requests into comprehensive Product Requirements Documents before implementation begins.
