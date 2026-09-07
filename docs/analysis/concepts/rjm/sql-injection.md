---
package: rjm
name: SQL Injection
slug: sql-injection
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

# SQL Injection

## Definition — verbatim
> "Improper neutralization of SQL commands." — .agents/security/static-analysis-checklist.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/static-analysis-checklist.md | 70 | defined here | Priority vulnerability category covering unparameterized database queries and string concatenation flaws. |

## Consumes
Database query strings, ORM configurations, raw SQL execution points, user-controlled input parameters.

## Produces
SQL injection vulnerability findings, parameterized query recommendations, and ORM binding fixes.

## When applied
Applied during static code analysis, security auditing, and code reviews whenever database operations are introduced or modified.

## Sub-concepts
none

## Part of
static-analysis-checklist

## Implementation status
clean

## Design notes
A severe database security vulnerability pattern occurring when untrusted input is concatenated directly into SQL queries, enabling attackers to execute arbitrary database commands, bypass authentication, or exfiltrate records.
