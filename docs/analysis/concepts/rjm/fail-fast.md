---
package: rjm
name: Fail-fast
slug: fail-fast
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Fail-fast

## Definition — verbatim
> "**Fail-fast**: Detect errors at boundaries, fail immediately with clear messages." — .claude/agents/implementer.md:231

## Also called — verbatim
> "**Fail fast**: detect that a request cannot succeed and return early, before consuming more resources." — .claude/skills/software-engineering-library/references/release-it.md:18

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 231 | defined here | Core error handling rule mandating immediate failure detection with clear messages at boundaries. |
| .claude/skills/software-engineering-library/references/release-it.md | 18 | defined here | Stability pattern ensuring requests that cannot succeed return early before consuming resources. |
| templates/agents/implementer.shared.md | 239 | used here | Shared implementation rule mandating boundary validation and early failure. |

## Consumes
Input parameters, external API responses, and boundary payloads.

## Produces
Immediate descriptive exceptions or error returns stopping invalid execution paths early.

## When applied
At system and module boundaries, input validation steps, and precondition evaluations.

## Sub-concepts
none

## Part of
code-quality-standards

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Fail-fast mandates that systems validate preconditions at boundaries and terminate unviable execution paths immediately in rjm. By surfacing failures at the point of origin rather than allowing corrupted state to propagate, it simplifies debugging and prevents downstream resource exhaustion.
