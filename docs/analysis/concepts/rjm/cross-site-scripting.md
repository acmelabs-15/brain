---
package: rjm
name: Cross-Site Scripting
slug: cross-site-scripting
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/static-analysis-checklist.md, sha256: ab56a82fcd6d0938a1e9fbb5a75223cddc0110ffccfab3802e2d0166f6720c8f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Cross-Site Scripting

## Definition — verbatim
> "Improper neutralization of user input in web output." — .agents/security/static-analysis-checklist.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/static-analysis-checklist.md | 47 | defined here | Priority vulnerability entry covering unencoded user input rendered into web markup. |

## Consumes
Web application markup, template rendering functions, DOM manipulation code, user input streams.

## Produces
XSS vulnerability findings, context-appropriate output encoding rules, and CSP policy configurations.

## When applied
Applied during static code analysis and security reviews of web user interfaces and server-rendered templates.

## Sub-concepts
content-security-policy

## Part of
static-analysis-checklist

## Implementation status
clean

## Design notes
A client-side security vulnerability pattern where unneutralized user input is injected into web output, enabling malicious script execution within a victim's browser session.
