---
package: rjm
name: ASSIGNEES
slug: assignees
kind: name-only
package_phase: none
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

# ASSIGNEES

## Definition — verbatim
(used, not defined)

> "ASSIGNEES: user1,user2 (or \"none\" if no suggestion)" — .agents/architecture/ADR-020-feature-request-review-step.md:394

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-020-feature-request-review-step.md | 394 | defined here | Required output token format defining suggested assignees for triage processing. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
feature-request-review

## Implementation status
defects: missing-path, doc-drift (workflow .github/workflows/ai-issue-triage.yml does not exist on disk)

## Design notes
Structured output token label in issue feature request review specifying suggested issue assignees rather than a development lifecycle concept.
