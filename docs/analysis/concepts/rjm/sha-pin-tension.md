---
package: rjm
name: SHA-pin tension
slug: sha-pin-tension
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/provenance.md, sha256: 04ccff20a5972dda6a64eea54b0e39b152b0c950046a9924e4f23d856a453cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SHA-pin tension

## Definition — verbatim
> "SHA-pin tension" — .claude/skills/ai-agents-change-control/references/provenance.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/provenance.md | 17 | defined here | Provenance entry tracking the conflict between strict SHA pinning in PROJECT-CONSTRAINTS and GP-006's first-party tag allowance. |

## Consumes
PROJECT-CONSTRAINTS.md rule (Exceptions: None) and golden-principles.md GP-006 rule.

## Produces
PR description tension flags and resolution favoring the stricter constraint unless human approval is given.

## When applied
Encountered whenever adding or modifying GitHub Action dependencies in workflow files.

## Sub-concepts
gp-006

## Part of
none

## Implementation status
clean

## Design notes
SHA-pin tension represents a recognized governance conflict in the repository between an uncompromising SHA pinning mandate and a pragmatic rule allowing first-party tags with Dependabot, resolved by defaulting to the stricter rule.
