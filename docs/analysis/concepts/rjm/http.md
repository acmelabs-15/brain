---
package: rjm
name: http.*
slug: http
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/observability/references/otel-semantic-conventions.md, sha256: 7e2b74749fe4c0049aea726658f344b495cda0e05525d52d149adeaa62316f13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# http.*

## Definition — verbatim
> "- `http.*`: HTTP client and server (`http.response.status_code`, `http.route`)" — .claude/skills/observability/references/otel-semantic-conventions.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/observability/references/otel-semantic-conventions.md | 43 | defined here | Primary definition of `http.*` within otel-semantic-conventions.md. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
An operational technique or artifact (http.*) utilized within the rjm ecosystem to ensure consistency and systematic execution.
