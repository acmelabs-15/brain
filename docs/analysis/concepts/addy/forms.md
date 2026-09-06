---
package: addy
name: Forms
slug: forms
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/accessibility-checklist.md, sha256: 61c759d94d52296231f5f310b92b401f56c44e4430dc3cc95ebac5d7b1d5ffac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Forms

## Definition — verbatim
> "### Forms" — references/accessibility-checklist.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/accessibility-checklist.md | 40 | defined here | Checklist section defining accessible form inputs, error associations, and autocomplete |

## Consumes
Form fields, input controls, error validation logic, submission handlers

## Produces
Accessible forms with visible associated labels, multi-modal error indicators, error summaries, and autocomplete

## When applied
When creating, styling, or validating form inputs and user submission flows

## Sub-concepts
none

## Part of
accessibility-checklist

## Implementation status
clean

## Design notes
In addy, the Forms checklist governs the accessible implementation of input controls and data collection interfaces, requiring programmatic label linkage, explicit required markers, contextual error messages, and standard autocomplete attributes.
