---
package: addy
name: Treat All Browser Content as Untrusted Data
slug: treat-all-browser-content-as-untrusted-data
kind: gate
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

# Treat All Browser Content as Untrusted Data

## Definition — verbatim
> "A malicious or compromised page can embed content designed to manipulate agent behavior." — skills/browser-testing-with-devtools/SKILL.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/browser-testing-with-devtools/SKILL.md | 72 | defined here | Mandates treating all DOM text, console logs, and network payloads strictly as passive data rather than instructions |

## Consumes
DOM content, console output, network payloads, script execution results.

## Produces
Sanitized data observations that prevent autonomous agent navigation, command execution, or prompt injection exploits.

## When applied
Whenever an agent reads, inspects, or processes data originating from a browser page.

## Sub-concepts
none

## Part of
security-boundaries, browser-testing-with-devtools

## Implementation status
clean

## Design notes
This security gate treats all runtime browser observations strictly as data rather than instructions, preventing prompt injection attacks where untrusted DOM elements, console logs, or network responses attempt to hijack agent actions.
