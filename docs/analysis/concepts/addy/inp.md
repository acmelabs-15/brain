---
package: addy
name: INP
slug: inp
kind: technique
package_phase: addy:Review
implementation_in_scope: true
memo_inputs:
  - {path: references/performance-checklist.md, sha256: 40f564d1e62341e277c01ba42c42d95264b9ef3b8e5a23249dc6e121a7e70067}
  - {path: skills/performance-optimization/SKILL.md, sha256: 00694d0c69bbde674d0e39de24052d90afea32d9fef9553eaee21a50a7e9b8cf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# INP

## Definition — verbatim
> "| **INP** (Interaction to Next Paint) | ≤ 200ms | ≤ 500ms | > 500ms |" — skills/performance-optimization/SKILL.md:27

## Also called — verbatim
`Interaction to Next Paint` — skills/performance-optimization/SKILL.md:27

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 20 | used here | Listed in the Core Web Vitals targets table with thresholds <= 200ms (Good), <= 500ms (Needs Work), > 500ms (Poor) |
| skills/performance-optimization/SKILL.md | 27 | defines | Core Web Vitals target specifying <= 200ms for interaction responsiveness across page lifecycle |

## Consumes
User interactions (clicks, taps, keystrokes) and main thread event processing latency

## Produces
Interaction responsiveness metric representing page responsiveness throughout the session

## When applied
When profiling UI responsiveness, breaking up long JavaScript tasks, or monitoring field interactions

## Sub-concepts
none

## Part of
core-web-vitals-targets

## Implementation status
clean

## Design notes
The acronym and primary identifier for Interaction to Next Paint, Google's Core Web Vital assessing page responsiveness throughout the entire user session. Addy enforces an INP target of <= 200ms by breaking long tasks with `yieldToMain` and `scheduler.yield()`.
