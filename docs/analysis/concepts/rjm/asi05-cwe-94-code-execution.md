---
package: rjm
name: "ASI05/CWE-94: Code Execution"
slug: asi05-cwe-94-code-execution
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

# ASI05/CWE-94: Code Execution

## Definition — verbatim
(used, not defined)

> "ASI05/CWE-94: Code Execution - ExpandString or Invoke-Expression with input" — .claude/agents/security.md:319

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 319 | defined here | Vulnerability taxonomy item defining Code Execution via dynamic evaluation with user input. |

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
ASI05/CWE-94: Code Execution is a vulnerability classification taxonomy entry targeting dangerous dynamic evaluation patterns (e.g. ExpandString or Invoke-Expression) rather than an operational lifecycle concept, classified as name-only per D-023.
