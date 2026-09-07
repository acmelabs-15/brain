---
package: rjm
name: Exposure of Sensitive Information
slug: exposure-of-sensitive-information
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

# Exposure of Sensitive Information

## Definition — verbatim
> "Unauthorized exposure of sensitive data." — .agents/security/static-analysis-checklist.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/static-analysis-checklist.md | 96 | defined here | Priority vulnerability category addressing sensitive data leaks in logs, error responses, and source code. |

## Consumes
Application logging statements, exception handlers, error response payloads, source code configuration blocks.

## Produces
Information leakage findings, exception handling refactoring recommendations, and PII masking configurations.

## When applied
Applied during static analysis, security code review, and log configuration audits to prevent credential and secret exposure.

## Sub-concepts
none

## Part of
static-analysis-checklist

## Implementation status
clean

## Design notes
A security flaw pattern where confidential information (such as passwords, API keys, session tokens, or internal stack traces) is unintentionally revealed to unauthorized observers through logging, error messages, or hardcoding.
