---
package: rjm
name: Pre-Rollout
slug: pre-rollout
kind: checklist
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-rollout-checklist.md, sha256: 72ef700c707d07c429d84a9776f758a2f8fc5f450b08fedcefe835e8b7376441}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-Rollout

## Definition — verbatim
> "## Pre-Rollout" — docs/codeql-rollout-checklist.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-rollout-checklist.md | 9 | defined here | Section heading and verification checklist for prerequisites prior to CodeQL rollout. |

## Consumes
CodeQL scripts, workflows, configuration files, unit tests, and documentation.

## Produces
Verification sign-off on implementation completeness, passing unit tests, and documentation review.

## When applied
Before initiating deployment or release of the CodeQL integration across repository branches.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: always-failing-gate, missing-path, doc-drift

## Design notes
Pre-Rollout defines the prerequisite verification gate in the CodeQL rollout lifecycle. It mandates confirming that all required scripts, configuration files, and CI workflows exist, that targeted unit tests pass, and that documentation and ADR statuses are understood before attempting any rollout steps.
