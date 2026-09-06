---
package: addy
name: Rendering / JavaScript
slug: rendering-javascript
kind: checklist
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Rendering / JavaScript

## Definition — verbatim
(used, not defined)
> "### 3. Rendering / JavaScript" — agents/web-performance-auditor.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/web-performance-auditor.md | 83 | defines | Section heading structuring audit checks for client-side re-rendering, layout thrashing, list virtualization, and framework-specific patterns. |

## Consumes
Component render logic, DOM manipulation code, animation CSS/JS, and UI event listeners.

## Produces
Findings identifying main-thread blocking, unnecessary component re-renders, and compositor misses.

## When applied
Applied when analyzing client-side JavaScript execution efficiency and browser rendering performance.

## Sub-concepts
none

## Part of
web-performance-audit

## Implementation status
clean

## Design notes
Rendering / JavaScript focuses audit attention on browser main-thread efficiency, targeting redundant DOM reflows, unvirtualized lists, and expensive framework reactivity patterns.
