---
package: rjm
name: Content drift
slug: content-drift
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Content drift

## Definition — verbatim
> "- **Content drift**, body text changed directly in a generated file" — CONTRIBUTING.md:509

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 509 | defined here | Defined as body text changes made directly in generated platform-specific agent files rather than in source templates. |

## Consumes
Direct manual modifications made to body text within generated agent target files (`src/vs-code-agents/*.agent.md`, `src/copilot-cli/agents/*.agent.md`).

## Produces
CI test and pre-push hook failures when comparing disk state against `build/generate_agents.py` output.

## When applied
Evaluated during CI drift detection and pre-push quality gates whenever generated files differ from canonical template rendering.

## Sub-concepts
none

## Part of
automated-quality-gates

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Content drift represents an anti-pattern in rjm's multi-platform agent architecture where contributors mistakenly modify the body of generated agent files instead of canonical templates (`templates/agents/*.shared.md`). The automated quality gates catch this divergence in CI by regenerating files and asserting exact equality, preserving template-driven generation as the single source of truth.
