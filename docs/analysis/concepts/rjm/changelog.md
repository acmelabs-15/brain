---
package: rjm
name: Changelog
slug: changelog
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

# Changelog

## Definition — verbatim
(used, not defined)

> "## Changelog" — .claude/skills/codebase-documenter/assets/templates/API.template.md:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/API.template.md | 148 | defined here | Template section maintaining a reverse-chronological table of API version updates and modifications. |

## Consumes
Release notes, version increments, and breaking or non-breaking API changes.

## Produces
Tabular revision history linking dates, versions, and change descriptions.

## When applied
Maintained across the lifecycle of an API specification upon each published release.

## Sub-concepts
release-history, semver

## Part of
api-reference

## Implementation status
clean

## Design notes
Changelog maintains an audit trail of API modifications directly inside the documentation. Structuring releases into a standardized table (Date, Version, Change) ensures consumers can rapidly identify when specific endpoints or behaviors were introduced, altered, or deprecated.
