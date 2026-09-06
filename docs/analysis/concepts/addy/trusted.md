---
package: addy
name: Trusted
slug: trusted
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Trusted

## Definition — verbatim
> "- **Trusted:** Source code, test files, type definitions authored by the project team" — skills/context-engineering/SKILL.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 99 | defined here | First trust level designating high-reliability project assets authored by the team |

## Consumes
Internal repository source code, unit/integration tests, and type definitions authored by the project team.

## Produces
High-trust context directives and architectural patterns that the agent can execute directly.

## When applied
When loading internal codebase source files and tests for editing or reference.

## Sub-concepts
none

## Part of
trust-levels, context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
The highest tier in the context trust model, covering internal team-authored code and tests that agents can safely execute against without risk of adversarial prompt injection.
