---
package: addy
name: breakpoints
slug: breakpoints
kind: reference
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/frontend-ui-engineering/SKILL.md, sha256: 2b74ac4862be3902ec918dceac9366a6fe83b9e003601c0deaf6be09c1766aca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# breakpoints

## Definition — verbatim
> "Test at these breakpoints: 320px, 768px, 1024px, 1440px." — skills/frontend-ui-engineering/SKILL.md:256

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 256 | defined here | Enumerates mandatory viewport widths for responsive layout testing. |

## Consumes
Responsive CSS media queries, responsive UI layouts.

## Produces
Cross-device viewport test verifications.

## When applied
During layout design, responsive component verification, and visual regression testing.

## Sub-concepts
none

## Part of
mobile-first, frontend-ui-engineering

## Implementation status
clean

## Design notes
Breakpoints define standardized viewport widths (320px mobile, 768px tablet, 1024px desktop, 1440px wide screen) used to verify that layouts adapt seamlessly without horizontal scroll or broken text flow.
