---
package: rjm
name: Versioning
slug: versioning
kind: pattern
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

# Versioning

## Definition — verbatim
> "Major version in the path (`/v1`). Breaking changes go to `/v2`." — .claude/skills/codebase-documenter/assets/templates/API.template.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/API.template.md | 20 | defined here | Prescribes URL path major versioning and breaking change migration routing for REST APIs. |

## Consumes
API lifecycle change proposals and breaking change policies.

## Produces
Versioned URL route prefixes preventing breaking change disruptions for consumers.

## When applied
Applied during API design and endpoint route scaffolding.

## Sub-concepts
semver, url-versioning

## Part of
conventions, api-reference

## Implementation status
clean

## Design notes
Versioning dictates that public APIs must isolate major versions within the URL path (e.g., /v1, /v2). This explicit path-based pattern guarantees that backward-incompatible modifications do not silently break existing API consumers and forces deliberate lifecycle management for deprecated capabilities.
