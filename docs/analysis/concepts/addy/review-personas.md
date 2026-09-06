---
package: addy
name: "review personas"
slug: review-personas
kind: role
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# review personas

## Definition — verbatim
(used, not defined)

> "Run via /ship to fan out review personas, then merge into a go/no-go." — external/shipping-and-launch.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/shipping-and-launch.md | 1 | defined here | Described in shipping-and-launch metadata as specialized reviewer agents fanned out by the /ship command. |

## Consumes
Release candidate pull requests, diffs, test logs, and architecture documentation.

## Produces
Specialized review evaluations across security, performance, test coverage, and code quality.

## When applied
Fanned out during the Ship phase via `/ship` prior to issuing a final go/no-go decision.

## Sub-concepts
none

## Part of
shipping-and-launch

## Implementation status
defects: doc-drift

## Design notes
Review personas represent specialized automated agent perspectives (e.g. security-auditor, test-engineer, code-reviewer) executed in parallel to inspect release candidates from distinct domain viewpoints.
