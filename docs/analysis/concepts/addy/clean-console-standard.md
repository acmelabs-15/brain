---
package: addy
name: Clean Console Standard
slug: clean-console-standard
kind: gate
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

# Clean Console Standard

## Definition — verbatim
> "A production-quality page should have **zero** console errors and warnings. If the console isn't clean, fix the warnings before shipping." — skills/browser-testing-with-devtools/SKILL.md:258

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/browser-testing-with-devtools/SKILL.md | 256 | defined here | Production quality standard mandating zero console errors and warnings before shipping |

## Consumes
Browser runtime console logs and warnings during test execution.

## Produces
Verification verdict: pass (zero console errors and warnings) or block/remediate.

## When applied
Before shipping any browser-facing code or marking a browser verification task complete.

## Sub-concepts
none

## Part of
browser-testing-with-devtools

## Implementation status
clean

## Design notes
In addy, the Clean Console Standard establishes a strict zero-tolerance gate for console warnings and errors. Recognizing that unaddressed console warnings frequently degrade into breaking bugs, memory leaks, or deprecation failures, this standard requires every console warning to be resolved before deployment.
