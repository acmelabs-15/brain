---
package: addy
name: Review phase
slug: review-phase
kind: phase
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

# Review phase

## Definition — verbatim
> "Quality, security and performance gates before merge." — external/code-review-and-quality.md:12

## Also called — verbatim
> "Review" — external/code-review-and-quality.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review-and-quality.md | 5 | used here | Identifies code-review-and-quality within the Review phase via header chip |
| external/performance-optimization.md | 5 | used here | Displays phase chip categorizing performance-optimization in Review phase |
| external/security-and-hardening.md | 5 | used here | Badges security-and-hardening under the Review phase |

## Consumes
Completed implementation code, test suites, and pull requests ready for evaluation.

## Produces
Multi-axis review findings, code simplification diffs, security audits, performance profiling results, merge approvals.

## When applied
Triggered before merging any branch or pull request into the main trunk.

## Sub-concepts
`multi-axis-code-review`, `change-sizing`, `rule-of-500`, `gates`

## Part of
none

## Implementation status
defects: doc-drift, orphan

## Design notes
The Review phase acts as the quality firewall in Addy's development lifecycle, subjecting completed code to multi-axis review (correctness, readability, architecture, security, performance) and simplification before it is permitted to merge.
