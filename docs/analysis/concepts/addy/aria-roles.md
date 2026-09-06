---
package: addy
name: ARIA roles
slug: aria-roles
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

# ARIA roles

## Definition — verbatim
(used, not defined)
> "ARIA roles or semantic elements are used correctly" — evals/cases/frontend-ui-engineering.json:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/frontend-ui-engineering.json | 46 | used here | Expectation in frontend eval case requiring correct application of ARIA roles or semantic elements. |

## Consumes
Custom UI components that lack built-in semantic meaning in standard HTML elements.

## Produces
Accurate assistive technology announcements and accessible accessibility tree representations.

## When applied
When native HTML semantic elements cannot provide the required interaction semantics or widget roles.

## Sub-concepts
none

## Part of
- frontend-ui-engineering

## Implementation status
clean

## Design notes
ARIA roles communicate component structure and interaction semantics to assistive technology, bridging gaps when native HTML elements cannot natively represent complex UI widgets (e.g. tablists, treeviews, comboboxes).
