---
package: matt
name: domain doc layout
slug: domain-doc-layout
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md, sha256: 8f60cf9bf19f1ee8cc09a15c2e06e1d7a9cb51f79d9a273dd9b20b8a2a494f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# domain doc layout

## Definition — verbatim
(used, not defined)
> "Engineering skills depend on per-repo config (issue tracker, triage label vocabulary, domain doc layout) seeded by `/setup-matt-pocock-skills`." — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3

## Also called — verbatim
> "| **Domain docs** | single-context: one `CONTEXT.md` plus `docs/adr/` at the root | only if it spots monorepo signals, and then it offers a multi-context `CONTEXT-MAP.md` |" — docs/engineering/setup-matt-pocock-skills.md:36

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md | 3 | used here | Named as the architectural domain documentation structure seeded by setup |

## Consumes
Repository structure analysis (monorepo packages vs single-context root).

## Produces
Configuration in `docs/agents/domain.md` declaring the paths and reading rules for `CONTEXT.md`, `CONTEXT-MAP.md`, and ADR directories (`docs/adr/`).

## When applied
When engineering skills explore domain glossaries, ubiquitous language, and architectural decision records.

## Sub-concepts
none

## Part of
per-repo-config

## Implementation status
clean

## Design notes
The structural convention for locating ubiquitous language documents and architectural decision records within a repository. Seeded into `docs/agents/domain.md` by `/setup-matt-pocock-skills`, it differentiates between single-context setups (root `CONTEXT.md` and `docs/adr/`) and multi-context monorepos (`CONTEXT-MAP.md`), giving agents deterministic paths to domain models without scanning the whole filesystem.
