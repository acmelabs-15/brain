---
package: addy
name: JavaScript Execution Constraints
slug: javascript-execution-constraints
kind: checklist
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

# JavaScript Execution Constraints

## Definition — verbatim
> "The JavaScript execution tool runs code in the page context. Constrain its use:" — skills/browser-testing-with-devtools/SKILL.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/browser-testing-with-devtools/SKILL.md | 82 | defined here | Checklist of security constraints restricting agent JavaScript execution in the browser |

## Consumes
Agent evaluation requests within browser page contexts.

## Produces
Enforced read-only state inspections without external network exfiltration, credential access, or unauthorized DOM mutations.

## When applied
When executing JavaScript snippets in browser contexts during debugging.

## Sub-concepts
none

## Part of
security-boundaries, browser-testing-with-devtools

## Implementation status
clean

## Design notes
JavaScript Execution Constraints restricts agent-initiated script execution in the browser to read-only state inspection, strictly forbidding external network requests, cookie/token theft, or unauthorized DOM mutations without user confirmation.
