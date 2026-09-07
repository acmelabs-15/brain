---
package: rjm
name: path abstraction contract
slug: path-abstraction-contract
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# path abstraction contract

## Definition — verbatim
> "4. **Path abstraction contract**: Define env vars, validation utilities, containment checks" — .agents/projects/v0.4.0/PLAN.md:217

## Also called — verbatim
"Path Abstraction Contract" — .agents/projects/v0.4.0/PLAN.md:306

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/projects/v0.4.0/PLAN.md | 217 | defined here | Key foundation deliverable in Phase 0 defining environment variables and traversal protection. |

## Consumes
Project root directory and consumer environment variable configurations.

## Produces
Sanitized and validated absolute file paths within project boundaries.

## When applied
Applied whenever extracted framework scripts or agents access consumer workspace paths.

## Sub-concepts
none

## Part of
awesome-ai

## Implementation status
defects: missing-path, doc-drift

## Design notes
The path abstraction contract is an architectural pattern in rjm enabling framework plugins to run against any consumer repository without hard-coding internal directory structures while enforcing strict path traversal validation.
