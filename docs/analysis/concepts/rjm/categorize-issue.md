---
package: rjm
name: Categorize Issue
slug: categorize-issue
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

# Categorize Issue

## Definition — verbatim
> "1. **Categorize Issue** (analyst agent) - determines category and labels" — .agents/architecture/ADR-020-feature-request-review-step.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-020-feature-request-review-step.md | 26 | used here | Identified as step 1 in the issue triage workflow, executed by the analyst agent. |

## Consumes
Inbound GitHub issue title, body text, and submitter metadata.

## Produces
Issue category determination (e.g., bug, enhancement, documentation) and appropriate triage labels.

## When applied
Triggered upon opening or updating an issue in the issue triage workflow (`ai-issue-triage.yml`).

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift (workflow .github/workflows/ai-issue-triage.yml does not exist on disk)

## Design notes
Initial triage step executed by the analyst agent to classify newly submitted GitHub issues into standardized categories and apply baseline labels, routing feature enhancements to downstream review.
