---
package: rjm
name: Internal automation
slug: internal-automation
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

# Internal automation

## Definition — verbatim
> "**Internal automation** (Python-first applies):" — .agents/architecture/ADR-042-python-migration-strategy.md:188

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-042-python-migration-strategy.md | 188 | defined here | Defines the operational boundary where Python-first implementation mandates apply. |

## Consumes
Repository script inventory and workflow tooling requirements.

## Produces
Language boundary governance classifying internal scripts as Python-mandated.

## When applied
Applied when implementing new developer tooling, CI/CD scripts, skill scripts, and hooks.

## Sub-concepts
none

## Part of
python-migration-strategy

## Implementation status
clean

## Design notes
Internal automation designates the architectural boundary within rjm where the Python-first migration mandate applies strictly (CI/CD scripts, hooks, internal skills), contrasting with user-facing distribution surfaces where TypeScript is permitted.
