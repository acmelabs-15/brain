---
package: rjm
name: retrospective-policy
slug: retrospective-policy
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# retrospective-policy

## Definition — verbatim
> "lefthook `retrospective-policy` job." — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:493

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 493 | used here | Formalizes the Retrospective gate (Phase 3.5) enforced on `git push` via the Lefthook retrospective-policy job. |

## Consumes
Completed session logs, commit history, and retrospective reflection artifacts.

## Produces
A push-level gate verdict permitting or rejecting branch push operations to remote repositories.

## When applied
Triggered automatically by Lefthook during `git push` to verify that required retrospective reflection and learning logs have been completed.

## Sub-concepts
none

## Part of
routing-level-enforcement-gates

## Implementation status
defects: doc-drift, missing-path

## Design notes
An automated pre-push enforcement gate running as a Lefthook job that verifies completion of Phase 3.5 retrospective artifacts before code changes can be pushed to remote repositories, preventing agents from skipping continuous learning capture.
