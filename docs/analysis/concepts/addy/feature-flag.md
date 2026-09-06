---
package: addy
name: feature flag
slug: feature-flag
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/incremental-implementation.json, sha256: 3f40c3955e0cccd725711818da2c4e3eac5c6eff0129afadea5cf8b74e558813}
  - {path: evals/fixtures/planning-and-task-breakdown/notifications-spec.md, sha256: 9705170691d53703e42a0494ead60b09c4d7aa0bd48444426ad8fe8ace6f87f4}
  - {path: evals/fixtures/shipping-and-launch/launch-status.md, sha256: da89bcc77b0b92c56452db2138e9518ac46af79ee74f65ec4b4f4885cd49d6e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# feature flag

## Definition — verbatim
(used, not defined)
> "Feature flag: checkout v2 can be disabled without deployment." — evals/fixtures/shipping-and-launch/launch-status.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/incremental-implementation.json | 14 | used here | Eval trigger prompt requesting shipping changes behind a feature flag in thin slices. |
| evals/fixtures/planning-and-task-breakdown/notifications-spec.md | 14 | used here | Specification requirement mandating that sending paths be guarded by a feature flag defaulting to disabled. |
| evals/fixtures/shipping-and-launch/launch-status.md | 8 | used here | Pre-launch checklist item verifying checkout v2 can be disabled dynamically via feature flag. |

## Consumes
Incomplete, experimental, or high-risk code paths requiring controlled rollout.

## Produces
A dynamic conditional toggle in application logic separating code deployment from feature release.

## When applied
When merging incomplete features into trunk or introducing risky changes that require instant rollback capability.

## Sub-concepts
none

## Part of
- incremental-implementation
- shipping-and-launch

## Implementation status
clean

## Design notes
Feature flags decouple code deployment from release to end users. By wrapping new behavior behind a flag with a safe disabled default, developers can continuously integrate code into trunk without exposing unfinished or unstable features.
