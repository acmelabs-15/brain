---
package: addy
name: Writing Test Plans for Complex UI Bugs
slug: writing-test-plans-for-complex-ui-bugs
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

# Writing Test Plans for Complex UI Bugs

## Definition — verbatim
> "For complex UI issues, write a structured test plan the agent can follow in the browser:" — skills/browser-testing-with-devtools/SKILL.md:186

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/browser-testing-with-devtools/SKILL.md | 184 | defined here | Section heading introducing structured browser test plans with setup, steps, and verification |

## Consumes
Complex UI bug reports, reproducing steps, expected browser behaviors, and local test environment URL.

## Produces
Structured browser test plan containing Setup, numbered Steps with Expected outcomes and console/network checks, and Verification checklists.

## When applied
When investigating or fixing complex UI issues involving multi-step interactions, animations, state reversibility, or rapid user toggles.

## Sub-concepts
none

## Part of
browser-testing-with-devtools

## Implementation status
clean

## Design notes
In addy, Writing Test Plans for Complex UI Bugs provides agents with a repeatable, systematic method for testing user interface interactions in real browsers. Rather than clicking randomly, the agent structures setup conditions, sequential actions, granular assertions on DOM, console, and network states, and a final verification checklist to reliably confirm fixes.
