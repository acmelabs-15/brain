---
package: addy
name: WCAG compliant
slug: wcag-compliant
kind: reference
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/frontend-ui-engineering.json, sha256: ae0d255641d13fe5c8d06b35a12bb388b76a24a4f2dc9d6d801d359753b28f40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# WCAG compliant

## Definition — verbatim
(used, not defined)
> "Make this page responsive and WCAG compliant" — evals/cases/frontend-ui-engineering.json:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/frontend-ui-engineering.json | 6 | used here | Eval trigger prompt establishing WCAG compliance as a criterion for frontend tasks. |

## Consumes
Web interface designs, component markup, color schemes, and interaction models.

## Produces
Accessibility adherence conforming to Web Content Accessibility Guidelines (WCAG 2.1 AA) standards.

## When applied
Whenever implementing or modifying user-facing web pages and components.

## Sub-concepts
none

## Part of
- frontend-ui-engineering

## Implementation status
clean

## Design notes
WCAG compliance represents the industry-standard benchmark for digital accessibility (targeting WCAG 2.1 AA in Addy's skill pack), ensuring interfaces provide adequate color contrast, keyboard accessibility, semantic markup, and assistive technology support.
