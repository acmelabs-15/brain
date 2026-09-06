---
package: addy
name: RUM
slug: rum
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/performance-optimization/SKILL.md, sha256: 00694d0c69bbde674d0e39de24052d90afea32d9fef9553eaee21a50a7e9b8cf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# RUM

## Definition — verbatim
> "- **RUM (web-vitals library, CrUX):** Real user data in real conditions. Required to validate that a fix actually improved user experience." — skills/performance-optimization/SKILL.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/performance-optimization/SKILL.md | 45 | defined here | Defined as Real User Monitoring capturing real user metrics across field conditions to validate actual user impact. |

## Consumes
Client-side telemetry libraries (e.g. `web-vitals`), real user traffic, and Chrome User Experience Report (CrUX) datasets.

## Produces
Real-world field performance distributions across varying devices, network connections, and user interactions.

## When applied
Continuously in production and post-deployment to verify whether lab optimizations translate into tangible user experience improvements.

## Sub-concepts
none

## Part of
- the-optimization-workflow
- performance-optimization

## Implementation status
clean

## Design notes
Real User Monitoring telemetry capturing actual field performance metrics under unconstrained user conditions, acting as the ultimate validator of whether performance improvements genuinely benefited end users.
