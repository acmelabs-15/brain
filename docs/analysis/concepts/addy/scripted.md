---
package: addy
name: Scripted
slug: scripted
kind: pattern
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Scripted

## Definition — verbatim
> "2. **Scripted.** An `npm run check` (or `make check`) that runs the fast checks, wired into your agent's post-edit hook and your CI. Deterministic, no new dependency." — skills/constraint-driven-development/SKILL.md:257

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/SKILL.md | 257 | defined here | Second tier of the constraint escalation path automating checks via package scripts and hooks |

## Consumes
Package scripts (e.g. `npm run check`, `make check`), fast linter and test commands, and agent post-edit hooks.

## Produces
Deterministic automated check execution without introducing external dependencies.

## When applied
Recommended default stopping point for most projects seeking automated constraint enforcement.

## Sub-concepts
none

## Part of
escalation-path, constraint-driven-development

## Implementation status
defects: doc-drift

## Design notes
The second tier of the constraint escalation path. Quality checks are packaged into standard scripts (`npm run check` or `make check`) and triggered via agent post-edit hooks and CI pipelines. It provides deterministic, mechanical verification without requiring external services or specialized runner tools.
