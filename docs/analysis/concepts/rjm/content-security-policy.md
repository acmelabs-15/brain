---
package: rjm
name: Content Security Policy
slug: content-security-policy
kind: technique
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

# Content Security Policy

## Definition — verbatim
(used, not defined)

> "- Implement Content Security Policy (CSP)" — .agents/security/static-analysis-checklist.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/static-analysis-checklist.md | 67 | used here | Prescribed as a defense-in-depth remediation to mitigate Cross-Site Scripting (XSS) risks. |

## Consumes
HTTP response headers, web server configuration, allowed script/style/media origins.

## Produces
HTTP header directives restricting executable resource sources in user browser sessions.

## When applied
Applied during web application security hardening to mitigate cross-site scripting impact.

## Sub-concepts
csp

## Part of
cross-site-scripting

## Implementation status
clean

## Design notes
An HTTP header security standard that restricts the origins and types of executable resources that browsers are permitted to load, serving as a vital defense-in-depth remediation against XSS flaws.
