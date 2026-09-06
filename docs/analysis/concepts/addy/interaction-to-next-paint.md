---
package: addy
name: Interaction to Next Paint
slug: interaction-to-next-paint
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

# Interaction to Next Paint

## Definition — verbatim
> "| **INP** (Interaction to Next Paint) | ≤ 200ms | ≤ 500ms | > 500ms |" — skills/performance-optimization/SKILL.md:27

## Also called — verbatim
`INP` — skills/performance-optimization/SKILL.md:27

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 20 | used here | Full metric name in the Core Web Vitals target table mapping <= 200ms to good responsiveness |
| skills/performance-optimization/SKILL.md | 27 | defines | Core Web Vitals metric evaluating the full interaction lifecycle duration across click, tap, and keyboard events |

## Consumes
User input events, input delay, processing time, and presentation delay

## Produces
Responsiveness duration metric (milliseconds)

## When applied
When diagnosing sluggish UI components or heavy event handlers

## Sub-concepts
none

## Part of
core-web-vitals-targets

## Implementation status
clean

## Design notes
The full name for INP, evaluating overall page responsiveness by measuring the longest interaction latency from user action to visual frame update.
