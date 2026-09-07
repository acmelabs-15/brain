---
package: rjm
name: modules/
slug: modules
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

# modules/

## Definition — verbatim
(used, not defined)
> "PowerShell .psm1 modules for shared code" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 80 | defined here | Directory path specification designating PowerShell module files (.psm1) for shared code within skills. |

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
A directory path in the skill structure housing reusable PowerShell modules rather than an independent development lifecycle concept.
