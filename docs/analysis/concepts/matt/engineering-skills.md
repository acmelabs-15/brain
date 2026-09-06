---
package: matt
name: Engineering skills
slug: engineering-skills
kind: pattern
package_phase: matt:engineering
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

# Engineering skills

## Definition — verbatim
(used, not defined)
> "Engineering skills depend on per-repo config (issue tracker, triage label vocabulary, domain doc layout) seeded by `/setup-matt-pocock-skills`." — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3

## Also called — verbatim
> "- `engineering/`: daily code work" — CLAUDE.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md | 3 | used here | Identified as the category of skills that depend on per-repo configuration seeded by setup |

## Consumes
Per-repo configuration in `docs/agents/` seeded by `/setup-matt-pocock-skills`.

## Produces
Code changes, architectural surveys, test suites, triage assessments, specifications, and issues.

## When applied
During daily software engineering code workflows across triage, specification, planning, and implementation.

## Sub-concepts
to-tickets, to-spec, triage, tdd, diagnose, improve-codebase-architecture

## Part of
bucket-folders

## Implementation status
clean

## Design notes
The primary collection of code-focused skills residing in `skills/engineering/` and shipped via the native Claude Code plugin. They cover the active lifecycle of software development, relying either strictly or contextually on repository-specific configuration generated during initial project onboarding.
