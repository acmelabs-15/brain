---
package: rjm
name: Feature Request Review
slug: feature-request-review
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

# Feature Request Review

## Definition — verbatim
> "Analyst agent already defines Feature Request Review template" — .agents/architecture/ADR-020-feature-request-review-step.md:49

> "A new capability is requested: sophisticated feature request review that:" — .agents/architecture/ADR-020-feature-request-review-step.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-020-feature-request-review-step.md | 49 | defined here | Defined as an analyst agent capability for structured feature request evaluation. |

## Consumes
Inbound GitHub feature requests, issue descriptions, and repository codebase context.

## Produces
Structured evaluation report covering user impact, implementation complexity, maintenance burden, strategic alignment, trade-offs, and a concrete recommendation verdict.

## When applied
Executed conditionally during issue triage whenever an issue is categorized as an enhancement (`category=enhancement`).

## Sub-concepts
user-impact, strategic-alignment, trade-offs, recommendation, assignees, labels

## Part of
none

## Implementation status
defects: missing-path, doc-drift (workflow .github/workflows/ai-issue-triage.yml does not exist on disk)

## Design notes
Comprehensive evaluation workflow executed by the analyst agent that assesses incoming feature requests with constructive skepticism, balancing user demand against implementation and maintenance costs before backlog entry.
