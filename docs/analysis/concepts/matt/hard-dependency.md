---
package: matt
name: hard-dependency
slug: hard-dependency
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

# hard-dependency

## Definition — verbatim
> "We split these into **hard-dependency** and **soft-dependency** skills:" — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:5
> "- **Hard dependency** (`to-tickets`, `to-spec`, `triage`): include an explicit one-liner: _"… should have been provided to you; run `/setup-matt-pocock-skills` if not."_ Without the mapping, output is wrong, not just fuzzy." — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7

## Also called — verbatim
> "# Explicit `/setup-matt-pocock-skills` pointer only for hard dependencies" — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:1

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md | 5 | defined here | Defined in architectural decision splitting skills into hard and soft dependencies |

## Consumes
Setup configuration in `docs/agents/issue-tracker.md` and `docs/agents/triage-labels.md`.

## Produces
Accurate issue creation, ticket publication, and label applications in tracking systems.

## When applied
When an engineering skill cannot function properly without repository configuration because missing configuration creates incorrect outputs.

## Sub-concepts
to-tickets, to-spec, triage

## Part of
setup-matt-pocock-skills

## Implementation status
clean

## Design notes
An engineering skill classification governing instructions for setup pointers. Skills designated as hard-dependency (`to-tickets`, `to-spec`, `triage`) mandate an explicit instruction telling the model to run `/setup-matt-pocock-skills` if configuration is missing, preventing corrupted issue states and misapplied labels.
