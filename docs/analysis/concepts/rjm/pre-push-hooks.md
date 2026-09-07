---
package: rjm
name: Pre-Push Hooks
slug: pre-push-hooks
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-Push Hooks

## Definition — verbatim
> "The pre-push hook validates files in the push range." — CONTRIBUTING.md:561

## Also called — verbatim
> "## Pre-Push Hooks" — CONTRIBUTING.md:559

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 559 | used here | Section heading specifying push-range validation via Lefthook before commits reach the remote origin. |

## Consumes
Committed changes within the outgoing push revision range.

## Produces
Comprehensive validation verdict covering tests, drift checks, and security scans gating the push operation.

## When applied
Executed automatically on `git push` via Lefthook shims.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Pre-remote gate validating test suites, template generation drift, and security scans across all outgoing commits to prevent broken state from entering CI workflows.
