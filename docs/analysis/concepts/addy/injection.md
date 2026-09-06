---
package: addy
name: Injection
slug: injection
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Injection

## Definition — verbatim
> "// GOOD: Parameterized query" — skills/security-and-hardening/SKILL.md:85

## Also called — verbatim
"Injection (SQL, NoSQL, OS Command)" — skills/security-and-hardening/SKILL.md:79

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 181 | references | Listed as OWASP #3 risk requiring parameterized database queries and input validation. |
| skills/security-and-hardening/SKILL.md | 79 | defines | Section outlining prevention patterns using parameterized queries and ORMs instead of string concatenation. |

## Consumes
User-supplied parameters intended for database queries, search engines, or shell commands.

## Produces
Parameterized database statements and input sanitization preventing command injection.

## When applied
When executing database queries, calling external system commands, or querying NoSQL stores.

## Sub-concepts
none

## Part of
owasp-top-10-quick-reference, security-and-hardening

## Implementation status
clean

## Design notes
Injection vulnerabilities (OWASP A03) arise when untrusted user input is concatenated directly into structured interpreters (SQL, NoSQL, OS commands), enabling an attacker to alter command syntax. Addy enforces strict parameterized queries and ORM usage across all database operations, treating direct query string interpolation as a critical anti-pattern.
