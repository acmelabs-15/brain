---
package: addy
name: Project
slug: project
kind: gate
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

# Project

## Definition — verbatim
> "- **Project** — your lint rules, your layer boundaries. A human owns the file." — skills/constraint-driven-development/SKILL.md:221

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/SKILL.md | 221 | defined here | Classifies checks based on human-owned repository configurations and architectural boundaries |

## Consumes
Human-authored repository configuration files, linter rules, and architectural boundary definitions.

## Produces
Automated enforcement of team conventions and module boundaries.

## When applied
Evaluated during constraint design and executed across the edit and review loops.

## Sub-concepts
none

## Part of
constraint-driven-development

## Implementation status
defects: doc-drift

## Design notes
The intermediate constraint category in constraint-driven development. Project constraints (linter rules, module boundaries, architectural layers) are defined in configuration files owned and modified by human developers, ensuring that agents cannot alter codebase conventions without detection.
