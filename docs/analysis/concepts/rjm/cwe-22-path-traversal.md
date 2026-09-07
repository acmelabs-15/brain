---
package: rjm
name: CWE-22: Path Traversal
slug: cwe-22-path-traversal
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

# CWE-22: Path Traversal

## Definition — verbatim
(used, not defined)

> "- CWE-22: Path Traversal - Improper limitation of pathname to restricted directory" — .claude/agents/security.md:241

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 241 | used here | Checklist item under Injection and Code Execution identifying failure to restrict file paths to authorized directories. |

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
CWE-22: Path Traversal is an external Common Weakness Enumeration taxonomy entry for pathname restriction failures rather than an operational lifecycle concept, classified as name-only per D-023.
