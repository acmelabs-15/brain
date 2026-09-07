---
package: rjm
name: STEP_0_REQUIRES_ELICITATION
slug: step-0-requires-elicitation
kind: name-only
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

# STEP_0_REQUIRES_ELICITATION

## Definition — verbatim
> "THE SYSTEM SHALL halt and return to the orchestrator with reason `STEP_0_REQUIRES_ELICITATION`, naming each question that needs an answer" — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:159

## Also called — verbatim
> "STEP_0_REQUIRES_ELICITATION" — .claude/skills/spec-generator/references/spec-step0-gates.md:129

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 159 | defined here | Defined in REQ-016-12 as the halt reason returned to orchestrator when /spec runs in auto-mode without human elicitation. |
| .claude/skills/spec-generator/references/spec-step0-gates.md | 129 | defined here | Documented as the auto-mode halt reason string emitted when Step 0 questions cannot be elicited from a human. |

## Consumes
none

## Produces
none

## When applied
> "WHEN `/spec` is invoked under auto-mode (no human elicitation possible)" — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:158

## Sub-concepts
none

## Part of
step-0-first-principles-gate

## Implementation status
defects: doc-drift, missing-path

## Design notes
An error and halt reason identifier returned when the `/spec` command is invoked in automated or non-interactive mode without human elicitation available, blocking automated agents from synthesizing speculative demand answers without real stakeholder input. Classified as name-only per D-023 as it serves as a protocol signal identifier.
