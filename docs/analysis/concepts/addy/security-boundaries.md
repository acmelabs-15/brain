---
package: addy
name: Security Boundaries
slug: security-boundaries
kind: pattern
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

# Security Boundaries

## Definition — verbatim
> "The blast radius of every rule below depends on which browser the agent is attached to." — skills/browser-testing-with-devtools/SKILL.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/browser-testing-with-devtools/SKILL.md | 60 | defined here | Section heading establishing four core defense-in-depth boundaries for browser testing |

## Consumes
Browser connection options, untrusted web content, agent execution capabilities.

## Produces
Security containment policies preventing credential leakage and prompt injection exploitation.

## When applied
During any browser automation, debugging, or testing session using DevTools MCP.

## Sub-concepts
profile-isolation, treat-all-browser-content-as-untrusted-data, javascript-execution-constraints, content-boundary-markers

## Part of
browser-testing-with-devtools

## Implementation status
clean

## Design notes
Security Boundaries establishes defense-in-depth principles governing AI agent access to web browsers. It restricts browser attachment to isolated profiles, enforces strict separation between trusted user instructions and untrusted page content, and tightly constrains JavaScript execution to prevent prompt injection and unauthorized credential access.
