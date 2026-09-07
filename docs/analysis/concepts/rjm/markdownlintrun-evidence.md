---
package: rjm
name: markdownLintRun.Evidence
slug: markdownlintrun-evidence
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-060-rework-warning-session-log-persistence.md, sha256: ac709bb1d9ab072581f6f1fcaa31e89f028312a0f28c3123ce47edfb84604826}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# markdownLintRun.Evidence

## Definition — verbatim
(used, not defined)

> "follows the same pattern as `markdownLintRun.Evidence` (informational, string" — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-060-rework-warning-session-log-persistence.md | 85 | used here | Cited as the existing precedent pattern for storing informational string evidence in session logs |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
markdownLintRun.Evidence is a JSON schema property path in session logs representing informational markdownlint run evidence, classified as name-only per D-023.
