---
package: addy
name: Keyboard Navigation
slug: keyboard-navigation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/accessibility-checklist.md, sha256: 61c759d94d52296231f5f310b92b401f56c44e4430dc3cc95ebac5d7b1d5ffac}
  - {path: skills/frontend-ui-engineering/SKILL.md, sha256: 2b74ac4862be3902ec918dceac9366a6fe83b9e003601c0deaf6be09c1766aca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Keyboard Navigation

## Definition — verbatim
> "### Keyboard Navigation" — references/accessibility-checklist.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/accessibility-checklist.md | 15 | defined here | Checklist section detailing focusability, focus order, visible focus outlines, and modal trapping |
| skills/frontend-ui-engineering/SKILL.md | 169 | defined here | Code standard requiring all interactive UI elements to support Tab, Enter, Space, and Escape |

## Consumes
Interactive UI components, HTML markup, event handlers

## Produces
Keyboard-navigable UI components with visible focus rings, logical tab sequence, and no focus traps

## When applied
When designing, implementing, or auditing any user-facing interactive frontend component

## Sub-concepts
none

## Part of
accessibility-checklist

## Implementation status
clean

## Design notes
In addy, Keyboard Navigation is a foundational WCAG 2.1 AA requirement ensuring that every interactive interface element can be discovered, focused, and triggered without a mouse. It requires semantic elements (<button>), explicit keyboard event handlers (onKeyDown), visible focus styling, and modal focus trapping.
