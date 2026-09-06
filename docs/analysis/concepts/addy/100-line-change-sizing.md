---
package: addy
name: "~100-line change sizing"
slug: 100-line-change-sizing
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# ~100-line change sizing

## Definition — verbatim
(used, not defined)

> "Five-axis review, ~100-line change sizing, severity labels, review-speed norms." — external/performance-optimization.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/performance-optimization.md | 12 | used here | Summarized on the cross-reference card for code-review-and-quality as a best practice sizing limit. |

## Consumes
Task decomposition, pull requests, diff sizes, and proposed commits.

## Produces
Small, reviewable, single-purpose pull requests sized around 100 lines of functional diff.

## When applied
Applied during task planning and code review before opening or merging pull requests.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
An engineering sizing heuristic stating that PRs should target approximately 100 lines of diff. Smaller changes are reviewed faster and with significantly higher defect-detection accuracy compared to large batches.
