---
package: addy
name: review speed norms
slug: review-speed-norms
kind: reference
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# review speed norms

## Definition — verbatim
(used, not defined)
> "Change sizing (~100 lines), severity labels (Critical/Required/Optional/Nit), review speed norms, and splitting strategies." — external/code-review-and-quality.md:5

## Also called — verbatim
> "Review Speed" — skills/code-review-and-quality/SKILL.md:249

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review-and-quality.md | 5 | used here | Listed in overview summary of review standards |
| external/performance-optimization.md | 12 | used here | Cited in related skills grid under code-review-and-quality |

## Consumes
Pull request submissions, notification triggers, reviewer availability.

## Produces
Timely review feedback (targeting response within hours, maximum one business day) that keeps delivery velocity high.

## When applied
When reviewing incoming code changes or responding to review feedback.

## Sub-concepts
none

## Part of
`code-review-and-quality`

## Implementation status
clean

## Design notes
Review speed norms prevent code reviews from becoming asynchronous bottlenecks across teams and agents, recognizing that delayed reviews impose compounding waiting costs that damage engineering momentum.
