---
package: rjm
name: Halt Triggers
slug: halt-triggers
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md, sha256: bada92fac80c619ad829da39e28a6a11b87601aa8487d5f8cfd46edbb0d7637b}
  - {path: .claude/skills/spec-generator/references/spec-step0-gates.md, sha256: 4a8aacb665f1475a6d2da319dcafb8c7cba55d6f65149bdefb6d682f7d1a1bb0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Halt Triggers

## Definition — verbatim
> "### Halt Triggers (canonical)" — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:212

## Also called — verbatim
> "**Halt triggers** (any one fires the halt):" — .claude/skills/spec-generator/references/spec-step0-gates.md:64

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 212 | defined here | Canonical section heading defining the five halt conditions (H1-H5) that block the specification pipeline in Step 0. |
| .claude/skills/spec-generator/references/spec-step0-gates.md | 64 | defined here | Specification table mapping trigger IDs H1 through H5 to operational test failures that halt spec execution. |

## Consumes
step-0-answers

## Produces
step0-halt

## When applied
> "When any trigger fires, halt and do not proceed to Step 1." — .claude/skills/spec-generator/references/spec-step0-gates.md:74

## Sub-concepts
halt-message-schema

## Part of
step-0-first-principles-gate

## Implementation status
defects: doc-drift, missing-path

## Design notes
The canonical set of five deterministic blocking conditions (H1 hedge phrase match, H2 speculative observation, H3 aspirational demand, H4 non-specific blocked entity, H5 partial question completion) that immediately halt the `/spec` pipeline before any downstream design work begins. They replace subjective reviewer discretion with objective string and entity checks.
