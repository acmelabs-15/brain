---
package: rjm
name: Dependency Risk Matrix
slug: dependency-risk-matrix
kind: artifact
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

# Dependency Risk Matrix

## Definition — verbatim
(used, not defined)

> "### Dependency Risk Matrix" — .agents/security/architecture-security-template.md:190

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/architecture-security-template.md | 190 | defines | Assessment matrix categorizing dependencies into Critical, High, Medium, and Low risk levels based on exploit criteria. |

## Consumes
Dependency scan results, known CVE lists, package maintenance age.

## Produces
Tabular risk matrix quantifying dependency counts across Critical (exploit present), High (CVE present), Medium (>1 year outdated), and Low (maintenance mode) risk tiers.

## When applied
Applied during architecture security audits to quantify and prioritize dependency supply chain risk.

## Sub-concepts
none

## Part of
dependency-security

## Implementation status
defects: missing-path

## Design notes
A structured assessment matrix that classifies third-party software dependencies into risk tiers based on active exploitability, CVE presence, package staleness, and maintenance health.
