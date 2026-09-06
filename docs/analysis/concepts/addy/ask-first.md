---
package: addy
name: Ask First
slug: ask-first
kind: gate
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

# Ask First

## Definition — verbatim
(used, not defined)

> "### Ask First (Requires Human Approval)" — skills/security-and-hardening/SKILL.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/security-and-hardening/SKILL.md | 55 | defined here | Defines an explicit human-in-the-loop authorization gate for sensitive architectural security decisions |

## Consumes
Proposed code modifications altering authentication logic, sensitive data storage, CORS policy, file uploads, rate limiting, or permission models.

## Produces
Human authorization requests and documented approval decisions prior to executing sensitive changes.

## When applied
Triggered whenever an autonomous agent encounters tasks involving high-risk security changes or permission alterations.

## Sub-concepts
none

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
Ask First is an indispensable human-in-the-loop gate in addy's security architecture that restricts autonomous agent agency. By requiring explicit human approval before modifying authentication schemes, CORS configurations, rate limits, file upload handlers, or permission tiers, it prevents agents from unilaterally introducing severe systemic security vulnerabilities.
