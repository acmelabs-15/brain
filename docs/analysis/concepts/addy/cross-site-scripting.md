---
package: addy
name: Cross-Site Scripting
slug: cross-site-scripting
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Cross-Site Scripting

## Definition — verbatim
(used, not defined)

> "// BAD: Rendering user input as HTML" — skills/security-and-hardening/SKILL.md:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/security-and-hardening/SKILL.md | 116 | defined here | Addressed as an OWASP client vulnerability prevented by framework auto-escaping and DOM sanitization |

## Consumes
Untrusted user inputs, dynamic web content, rendering templates.

## Produces
Context-aware output encoding, automatic framework escaping, and DOM sanitization using DOMPurify when rendering raw HTML is required.

## When applied
When outputting dynamic user data into web documents, templates, or DOM nodes.

## Sub-concepts
none

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
Cross-Site Scripting (XSS) occurs when untrusted user input is rendered directly into HTML without escaping, enabling arbitrary client-side script execution in user browsers. Addy mandates leveraging default framework auto-escaping (e.g. React JSX) and applying explicit DOM sanitizers like DOMPurify whenever raw markup must be injected.
