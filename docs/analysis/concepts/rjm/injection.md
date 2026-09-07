---
package: rjm
name: Injection
slug: injection
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-owasp-top-10.md, sha256: c84e707337731a44229ec09a5a162f88474a205262ad3a0ef9041b6ae9899533}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Injection

## Definition — verbatim
> "| A03 | Injection | Malicious data injected into commands/queries |" — .claude/skills/threat-modeling/references/security-owasp-top-10.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-owasp-top-10.md | 17 | defined here | Defined in OWASP Top 10 reference table as vulnerability category A03 with parameterized query examples. |

## Consumes
External input interfaces, database queries, operating system commands, and interpreter environments.

## Produces
Parameterized query rules, input validation and sanitization constraints, and allowlist controls.

## When applied
Evaluated during threat modeling and code review whenever untrusted input reaches an interpreter, parser, or query engine.

## Sub-concepts
none

## Part of
- owasp-top-10

## Implementation status
defects: missing-path

## Design notes
Injection (OWASP A03) is a vulnerability pattern where untrusted input is interpreted as execution code or structured query syntax; mitigated in rjm through parameterized queries, ORM usage, and allowlist validation.
