---
package: rjm
name: behavioral regressions
slug: behavioral-regressions
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md, sha256: 924e6f5e3f68c755ac189d1ade6220f4f904c62a74c32547df99dc5e58a64aa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# behavioral regressions

## Definition — verbatim
> "Structural tests cannot detect behavioral regressions." — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 26 | used here | Failure mode where prompt structural tests pass but LLM runtime reasoning degrades. |

## Consumes
Prompt modifications and runtime LLM execution outputs.

## Produces
Failure signals requiring prompt refinement or rollback before release.

## When applied
During behavioral evaluation of prompt modifications.

## Sub-concepts
scenario-based-evaluation

## Part of
prompt-behavioral-evaluation

## Implementation status
clean

## Design notes
A failure pattern in LLM prompt development where changes satisfy all structural validation tests but degrade runtime model decisions, stop prematurely, or produce incorrect outputs.
