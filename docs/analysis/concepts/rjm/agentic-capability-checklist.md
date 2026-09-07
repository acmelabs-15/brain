---
package: rjm
name: Agentic Capability Checklist
slug: agentic-capability-checklist
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/regression-questions.md, sha256: 8b258798fe9db38d01862e82c5bfecccb5890bfac02b77679b932a176d2b7719}
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agentic Capability Checklist

## Definition — verbatim
> "**Agentic Capability Checklist:**" — .claude/skills/skillforge/references/regression-questions.md:191

## Also called — verbatim
> "## Agentic Capability Checklist" — .claude/skills/skillforge/references/script-integration-framework.md:421

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/regression-questions.md | 191 | defined here | Verification checklist confirming autonomous execution, self-verification, error recovery, persistence, and output. |
| .claude/skills/skillforge/references/script-integration-framework.md | 421 | defined here | Section heading for pre-finalization checklist ensuring script autonomy and robustness. |

## Consumes
Script designs, implementations, and invocation patterns.

## Produces
Verification sign-off confirming autonomous execution, self-verification, error recovery, state persistence, structured output, docs, exit codes, and graceful degradation.

## When applied
Verified after script analysis in Phase 1 and before finalizing scripts in Phase 3.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
clean

## Design notes
A comprehensive verification checklist ensuring that skills equipped with scripts are fully capable of unattended, autonomous execution without human intervention.
