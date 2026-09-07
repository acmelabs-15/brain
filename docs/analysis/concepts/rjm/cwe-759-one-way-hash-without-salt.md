---
package: rjm
name: CWE-759: One-Way Hash without Salt
slug: cwe-759-one-way-hash-without-salt
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CWE-759: One-Way Hash without Salt

## Definition — verbatim
(used, not defined)

> "CWE-759: One-Way Hash without Salt - Enables rainbow table attacks" — .claude/agents/security.md:271

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 271 | used here | Checklist item under Cryptography flagging unsalted one-way hashes vulnerable to rainbow table attacks. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
CWE-759 is an external Common Weakness Enumeration taxonomy identifier designating unsalted one-way hashes rather than an autonomous lifecycle concept, classified as name-only per D-023.
