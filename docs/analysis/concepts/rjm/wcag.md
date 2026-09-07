---
package: rjm
name: WCAG
slug: wcag
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# WCAG

## Definition — verbatim
(used, not defined)

> "Contrast ratios (WCAG AA 4.5:1)." — scripts/eval/eval-agents.py:259

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agents.py | 259 | used here | Cited in expected evaluation criteria for QA verification of dark mode accessibility contrast ratios. |

## Consumes
User interface elements, color schemes, and visual designs.

## Produces
Compliance verification against Web Content Accessibility Guidelines.

## When applied
During frontend design, development, and QA verification of visual components and themes.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
The Web Content Accessibility Guidelines, cited as a formal reference standard for color contrast and visual accessibility validation.
