---
package: addy
name: "severity labels"
slug: severity-labels
kind: artifact
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

# severity labels

## Definition — verbatim
(used, not defined)

> "Five-axis review, ~100-line change sizing, severity labels, review-speed norms." — external/performance-optimization.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/performance-optimization.md | 12 | used here | Referenced on the code-review-and-quality cross-reference card as standard review taxonomy. |

## Consumes
Code review comments, discovered issues, security findings, and style suggestions.

## Produces
Standardized review annotations indicating whether an issue is blocking (e.g. Blocker, Warning, Nit, Question).

## When applied
Applied during the Review phase when submitting feedback on pull requests.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
Standardized severity labels prevent misunderstandings between authors and reviewers by cleanly separating non-negotiable blocking issues from optional suggestions or informational comments.
