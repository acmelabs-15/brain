---
package: addy
name: Trap focus
slug: trap-focus
kind: technique
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

# Trap focus

## Definition — verbatim
> "// Trap focus inside dialog when open" — skills/frontend-ui-engineering/SKILL.md:212

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 212 | defined here | Code example comment requiring modal dialogs to confine keyboard focus within their boundary. |

## Consumes
Modal dialog components, keyboard focus events, DOM elements.

## Produces
Focus-contained modal experience preventing tab navigation from escaping to background content.

## When applied
When a modal dialog or overlay is opened.

## Sub-concepts
none

## Part of
frontend-ui-engineering, keyboard-navigation

## Implementation status
clean

## Design notes
Focus trapping prevents keyboard navigation from tabbing outside an active modal dialog into hidden or disabled background elements, fulfilling essential WCAG modal interaction requirements.
