---
package: rjm
name: tests/
slug: tests
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/SKILL-STANDARDS-RECONCILED.md, sha256: 519c3146eb8bc63670a8219a2b2beb598d871658825c757990b0715cc12de505}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tests/

## Definition — verbatim
(used, not defined)
> "Pester test files (.Tests.ps1)" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 82 | defined here | Directory path specification for Pester test suites (.Tests.ps1) within skill directories. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
ai-agents-project-extensions

## Implementation status
defects: cross-file-contradiction, doc-drift (reconciles ADR-040 comma-separated allowed-tools and ADR-080 model field supersession)

## Design notes
A directory path for Pester test suites within skill directories rather than an independent development lifecycle concept.
