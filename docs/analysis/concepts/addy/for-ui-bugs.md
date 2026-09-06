---
package: addy
name: For UI Bugs
slug: for-ui-bugs
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: skills/browser-testing-with-devtools/SKILL.md, sha256: 4e3aacd6a380cd25bc6c2d67fdd1c926a9b22535b8a62109ecd33cefd909e3d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# For UI Bugs

## Definition — verbatim
> "└── Take a screenshot to confirm visual state" — skills/browser-testing-with-devtools/SKILL.md:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/browser-testing-with-devtools/SKILL.md | 111 | defined here | Specialized 5-step workflow focusing on visual reproduction, DOM inspection, styling diagnosis, and screenshot verification |

## Consumes
Reported UI defects, visual layout expectations.

## Produces
Corrected CSS, HTML, or component logic verified through comparative before-and-after screenshots.

## When applied
When debugging layout anomalies, styling defects, or visual component regressions.

## Sub-concepts
none

## Part of
the-devtools-debugging-workflow, browser-testing-with-devtools

## Implementation status
clean

## Design notes
A specialized adaptation of the DevTools debugging workflow tailored for layout and rendering defects, emphasizing screenshot-based visual capture, computed style inspection, and DOM comparison.
