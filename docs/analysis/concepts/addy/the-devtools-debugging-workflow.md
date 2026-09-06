---
package: addy
name: The DevTools Debugging Workflow
slug: the-devtools-debugging-workflow
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: skills/browser-testing-with-devtools/SKILL.md, sha256: 4e3aacd6a380cd25bc6c2d67fdd1c926a9b22535b8a62109ecd33cefd909e3d9}
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# The DevTools Debugging Workflow

## Definition — verbatim
> "1. REPRODUCE: Navigate to the page, trigger the bug, screenshot" — skills/test-driven-development/SKILL.md:319

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/browser-testing-with-devtools/SKILL.md | 109 | defined here | Section heading establishing 5-step debugging workflows for UI, network, and performance issues |
| skills/test-driven-development/SKILL.md | 316 | defined here | Outlines the 5-step cycle (Reproduce, Inspect, Diagnose, Fix, Verify) for browser runtime testing |

## Consumes
Bug reports, reproducible browser scenarios, application source code.

## Produces
Verified bug fixes supported by visual screenshots, clean console logs, and passing test suites.

## When applied
When investigating and diagnosing defects that manifest within web browsers.

## Sub-concepts
for-ui-bugs, for-network-issues, for-performance-issues

## Part of
browser-testing-with-devtools, test-driven-development

## Implementation status
clean

## Design notes
A 5-step structured methodology (Reproduce, Inspect, Diagnose, Fix, Verify) guiding agents through evidence-based browser debugging. It replaces guesswork with runtime inspection using screenshots, console analysis, and network traces.
