---
package: rjm
name: Error Recovery
slug: error-recovery
kind: pattern
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Error Recovery

## Definition — verbatim
> "Scripts should attempt recovery before failing:" — .claude/skills/skillforge/references/script-integration-framework.md:177

## Also called — verbatim
> "### Pattern 2: Error Recovery" — .claude/skills/skillforge/references/script-integration-framework.md:175

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-integration-framework.md | 175 | defined here | Defines the error recovery pattern where scripts attempt retries or fallbacks before exiting with an error. |

## Consumes
Transient execution errors, recoverable exceptions, and maximum retry limits.

## Produces
Recovered execution outputs or graceful fallback results.

## When applied
When scripts interact with transiently unreliable operations or recoverable failures.

## Sub-concepts
none

## Part of
agentic-script-patterns

## Implementation status
clean

## Design notes
Minimizes human intervention and prevents agent cascade failures by embedding bounded retries and fallback execution paths directly within automation scripts.
