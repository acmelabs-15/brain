---
package: addy
name: Screenshot-Based Verification
slug: screenshot-based-verification
kind: technique
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

# Screenshot-Based Verification

## Definition — verbatim
> "Use screenshots for visual regression testing:" — skills/browser-testing-with-devtools/SKILL.md:220

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/browser-testing-with-devtools/SKILL.md | 218 | defined here | Visual regression workflow taking before and after screenshots across code changes |

## Consumes
Browser instance, modified frontend code (CSS, layout, components), and baseline page state.

## Produces
Visual regression comparisons (before and after screenshot captures) verifying visual correctness across viewport sizes and states.

## When applied
For CSS changes, responsive design testing at multiple viewport sizes, loading and transition states, and empty or error states.

## Sub-concepts
none

## Part of
browser-testing-with-devtools

## Implementation status
clean

## Design notes
In addy, Screenshot-Based Verification anchors visual regression testing in objective image comparison rather than mental models. By taking before and after screenshots of the rendered page, agents verify visual fidelity for layout, spacing, typography, and responsive breakpoints, preventing subtle visual regressions that unit tests cannot detect.
