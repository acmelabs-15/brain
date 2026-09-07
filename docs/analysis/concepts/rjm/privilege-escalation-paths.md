---
package: rjm
name: Privilege Escalation Paths
slug: privilege-escalation-paths
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/architecture-security-template.md, sha256: 05ed96c8675d7c953c030e2eca5d3546182f60ec9e873ef7e55f9e2c6a231c5c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Privilege Escalation Paths

## Definition — verbatim
(used, not defined)

> "### Privilege Escalation Paths" — .agents/security/architecture-security-template.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/architecture-security-template.md | 38 | defines | Analysis table mapping transitions between privilege tiers and identifying associated risk points. |

## Consumes
Identified privilege levels, authentication flows, authorization rules, admin role assignment mechanisms.

## Produces
Escalation matrix documenting legitimate paths, forbidden transitions, and specific vulnerability risk points.

## When applied
Applied during privilege boundary analysis to identify potential flaws such as brute force, IDOR, or illegitimate administrative transitions.

## Sub-concepts
none

## Part of
privilege-boundary-analysis

## Implementation status
defects: missing-path

## Design notes
An analytical modeling pattern that examines transitions between adjacent privilege levels to verify that only authorized, authenticated paths exist and that transitions between higher tiers (such as Privileged to System) are forbidden.
