---
package: rjm
name: roadmap agent
slug: roadmap-agent
kind: role
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

# roadmap agent

## Definition — verbatim
(used, not defined)

> "2. **Align to Roadmap** (roadmap agent) - determines priority, milestone, escalation" — .agents/architecture/ADR-020-feature-request-review-step.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-020-feature-request-review-step.md | 27 | used here | Designated as step 2 in the issue triage workflow responsible for evaluating priority, milestone, and escalation. |

## Consumes
Categorized GitHub issues, strategic product roadmap, milestone release plans, and escalation criteria.

## Produces
Roadmap alignment assessments, milestone assignments, and escalation flags for complex feature requests.

## When applied
Executed during automated issue triage (`ai-issue-triage.yml`) following initial issue categorization.

## Sub-concepts
none

## Part of
agent-team

## Implementation status
defects: missing-path, doc-drift (workflow .github/workflows/ai-issue-triage.yml does not exist on disk)

## Design notes
Specialist triage agent role in rjm's issue processing pipeline responsible for evaluating inbound enhancement requests against project roadmap priorities and scheduling them into appropriate release milestones.
