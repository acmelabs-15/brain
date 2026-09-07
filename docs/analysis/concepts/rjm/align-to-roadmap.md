---
package: rjm
name: Align to Roadmap
slug: align-to-roadmap
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

# Align to Roadmap

## Definition — verbatim
> "2. **Align to Roadmap** (roadmap agent) - determines priority, milestone, escalation" — .agents/architecture/ADR-020-feature-request-review-step.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-020-feature-request-review-step.md | 27 | used here | Identified as step 2 in the issue triage workflow, executed by the roadmap agent. |

## Consumes
Categorized issue details, project roadmap documentation, milestone definitions, and priority guidelines.

## Produces
Priority ranking, assigned target milestone, and escalation recommendations for feature requests.

## When applied
Executed during issue triage after initial categorization to establish strategic priority and scheduling.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift (workflow .github/workflows/ai-issue-triage.yml does not exist on disk)

## Design notes
Triage alignment step executed by the roadmap agent to evaluate inbound issues against roadmap priorities, assign them to release milestones, and flag major strategic additions for escalation.
