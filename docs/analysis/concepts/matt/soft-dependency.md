---
package: matt
name: soft-dependency
slug: soft-dependency
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

# soft-dependency

## Definition — verbatim
> "We split these into **hard-dependency** and **soft-dependency** skills:" — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:5
> "- **Soft dependency** (`diagnose`, `tdd`, `improve-codebase-architecture`): reference "the project's domain glossary" and "ADRs in the area you're touching" in vague prose only. If the docs aren't there, the skill still works; output is just less sharp." — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8

## Also called — verbatim
> "The split keeps soft-dependency skills token-light and avoids cargo-culting the setup pointer into places where it isn't load-bearing." — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:10

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md | 5 | defined here | Defined in architectural decision splitting skills into hard and soft dependencies |

## Consumes
Optional domain glossary (`CONTEXT.md`) and architectural decision records (`docs/adr/`).

## Produces
Context-aware code, tests, and architectural deepening proposals.

## When applied
When an engineering skill leverages domain docs to sharpen its output but can still function cleanly without them.

## Sub-concepts
diagnose, tdd, improve-codebase-architecture

## Part of
setup-matt-pocock-skills

## Implementation status
clean

## Design notes
An engineering skill classification for skills that degrade gracefully without repository configuration. Skills in this category (`diagnose`, `tdd`, `improve-codebase-architecture`) omit explicit setup instructions and mention domain glossaries only in vague prose, avoiding cargo-culting and saving context tokens.
