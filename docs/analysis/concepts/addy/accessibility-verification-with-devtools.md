---
package: addy
name: Accessibility Verification with DevTools
slug: accessibility-verification-with-devtools
kind: checklist
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/browser-testing-with-devtools/SKILL.md, sha256: 4e3aacd6a380cd25bc6c2d67fdd1c926a9b22535b8a62109ecd33cefd909e3d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Accessibility Verification with DevTools

## Definition — verbatim
> "## Accessibility Verification with DevTools" — skills/browser-testing-with-devtools/SKILL.md:260

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/browser-testing-with-devtools/SKILL.md | 260 | defined here | Five-step DevTools inspection checklist verifying accessibility tree, headings, focus order, contrast, and dynamic content |

## Consumes
Live browser page DOM, accessibility tree, computed CSS styles, and keyboard tab flow.

## Produces
Accessibility verification results confirming accessible names, heading hierarchy, logical focus sequence, 4.5:1 contrast, and ARIA live regions.

## When applied
When verifying any interactive or user-facing web interface component via Chrome DevTools.

## Sub-concepts
none

## Part of
browser-testing-with-devtools

## Implementation status
clean

## Design notes
In addy, Accessibility Verification with DevTools provides a concise runtime checklist for auditing web accessibility through Chrome DevTools. By evaluating the accessibility tree, heading structure, keyboard tab navigation, color contrast ratios, and dynamic live regions, it operationalizes WCAG compliance verification directly within the browser testing workflow.
