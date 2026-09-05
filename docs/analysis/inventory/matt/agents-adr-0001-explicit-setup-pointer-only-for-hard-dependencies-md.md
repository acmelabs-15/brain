---
package: matt
path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md
type: agent
bytes: 1154
unit: inv-matt-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md, sha256: 8f60cf9bf19f1ee8cc09a15c2e06e1d7a9cb51f79d9a273dd9b20b8a2a494f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md

## Purpose — required, verbatim
> "The split keeps soft-dependency skills token-light and avoids cargo-culting the setup pointer into places where it isn't load-bearing." — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:10

## Design intent — required
Architectural decision record establishing the operational distinction between hard-dependency skills (which strictly require per-repo config seeded by `/setup-matt-pocock-skills` to function) and soft-dependency skills (which merely use domain glossaries and ADR awareness to sharpen output and degrade gracefully without it). Keeps soft-dependency skill prompts token-light and prevents unnecessary setup reminders from cluttering contexts.

## Phase — required
none

## Inputs — required
Per-repo configuration requirements (issue tracker, triage label vocabulary, domain doc layout) and failure mode analysis of skill prompts.

## Outputs — required
Decision classifying skills into hard-dependency vs soft-dependency tiers and defining prompt rules for setup pointers.

## Invokes — required
- skill to-tickets — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7
- skill to-spec — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7
- skill triage — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7
- skill diagnose — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8
- skill tdd — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8
- skill improve-codebase-architecture — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `hard-dependency` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:5 — defined here
- `soft-dependency` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:5 — defined here
- `per-repo config` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3 — used here
- `issue tracker` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3 — used here
- `triage label vocabulary` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3 — used here
- `domain doc layout` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3 — used here
- `ADR awareness` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3 — used here
- `Hard dependency` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7 — defined here
- `Soft dependency` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8 — defined here
- `domain glossary` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8 — used here
- `ADRs` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8 — used here

## Structure
- Explicit `/setup-matt-pocock-skills` pointer only for hard dependencies — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8 · references skill "diagnose" which does not exist in the repository (actual skill path is skills/engineering/diagnosing-bugs).

## Observations
Provides a concrete rationale for avoiding token bloat: soft-dependency skills do not nag the user or agent to run configuration skills if they can degrade gracefully with general domain knowledge.

## Context cost
1154 bytes, ~250 tokens. Loads no external files.
