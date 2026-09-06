---
package: addy
name: gates
slug: gates
kind: gate
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# gates

## Definition — verbatim
> "Quality, security and performance gates before merge." — external/code-review-and-quality.md:12

## Also called — verbatim
> "quality gates" — README.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review-and-quality.md | 12 | used here | Sidebar description summarizing the Review phase purpose as gates before merge |
| external/performance-optimization.md | 12 | used here | Sidebar blurb defining the Review phase role as quality, security, and performance gates |
| external/security-and-hardening.md | 12 | used here | Sidebar summary describing merge gates in the Review phase |

## Consumes
Automated test and lint results, multi-axis review verdicts, security vulnerability scans, performance audits.

## Produces
Enforced go/no-go decisions controlling whether code is approved to merge into the trunk or advance between lifecycle phases.

## When applied
Enforced before merging pull requests to main, cutting releases, or deploying to production.

## Sub-concepts
`quality-gate-pipelines`

## Part of
none

## Implementation status
defects: doc-drift, orphan

## Design notes
Gates represent explicit checkpoints in Addy's lifecycle that require positive verification of quality, correctness, security, or performance before work is permitted to progress, preventing defects from leaking downstream.
