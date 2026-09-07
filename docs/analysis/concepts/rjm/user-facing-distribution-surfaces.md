---
package: rjm
name: User-facing distribution surfaces
slug: user-facing-distribution-surfaces
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-042-python-migration-strategy.md, sha256: cfab3df343cee127a80f7dc1fb5e9cedc7052c9abe8e684d5f1f9693c0a45e2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# User-facing distribution surfaces

## Definition — verbatim
> "**User-facing distribution surfaces** (TypeScript permitted):" — .agents/architecture/ADR-042-python-migration-strategy.md:197

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-042-python-migration-strategy.md | 197 | defined here | Defines the boundary category where TypeScript is permitted to preserve consumer ecosystem fit. |

## Consumes
Target distribution channel requirements and end-user package ecosystem constraints.

## Produces
Architecture boundary policy permitting non-Python technologies (e.g. TypeScript for npm) for external consumers.

## When applied
Applied when designing artifacts consumed directly by external users rather than internal repository automation.

## Sub-concepts
none

## Part of
python-migration-strategy

## Implementation status
clean

## Design notes
User-facing distribution surfaces defines the category of deliverables (such as npm packages and npx-invoked CLI tools) exempted from the internal Python mandate to align with target consumer ecosystem conventions.
