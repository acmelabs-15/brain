---
package: rjm
name: success_criterion
slug: success-criterion
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-065-orchestrator-as-router.md, sha256: 6a3ba03173f31558031822da39be98be2a5f8335c4f4e9dfb530f7f9255b3c13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# success_criterion

## Definition — verbatim
> "- Sub-agent frontmatter has no required `success_criterion` field. Authors" — .agents/architecture/ADR-065-orchestrator-as-router.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-065-orchestrator-as-router.md | 43 | defined here | Mandated as a required frontmatter schema for sub-agents to declare machine-checkable or human-judgment completion conditions. |

## Consumes
Sub-agent definition and execution artifacts.

## Produces
Deterministic verification verdict (pass/fail) or auditable human-judgment rationale.

## When applied
Declared in sub-agent frontmatter and evaluated after every sub-agent execution turn.

## Sub-concepts
machine-checkable, human-judgment-with-rationale

## Part of
agent-frontmatter-contract, deterministic-router

## Implementation status
defects: missing-path

## Design notes
A binding contract requirement in ADR-065 mandating that every sub-agent explicitly declare its completion criteria in frontmatter. By replacing subjective prose claims of completion with structured schemas (exit code, regex, schema, test, or explicit human judgment), it enables the deterministic router to reliably evaluate whether a sub-agent succeeded before proceeding.
