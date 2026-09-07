---
package: rjm
name: Conventions
slug: conventions
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/API.template.md, sha256: 3492d04b69ed7d24618b208ea66caf4b3009d49c3df7a87bd16bcf81d4e3bdc3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Conventions

## Definition — verbatim
(used, not defined)

> "## Conventions" — .claude/skills/codebase-documenter/assets/templates/API.template.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/API.template.md | 18 | defined here | Section template establishing cross-cutting API communication rules such as versioning, content types, and time formatting. |

## Consumes
System-wide API governance decisions and communication protocols.

## Produces
A unified bulleted list of interface conventions establishing consistent API behavior.

## When applied
Applied in API.template.md to define baseline REST communication standards before detailing individual endpoints.

## Sub-concepts
versioning, content-type, status-codes, pagination

## Part of
api-reference

## Implementation status
clean

## Design notes
Conventions groups cross-cutting interface rules into a single predictable location within API documentation. By standardizing versioning formats, JSON UTF-8 content types, standard HTTP status semantics, ISO 8601 UTC timestamps, and cursor pagination upfront, it eliminates repetitive boilerplate across endpoint definitions and establishes coherent expectations for API consumers.
