---
package: rjm
name: pass_when
slug: pass-when
kind: technique
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md, sha256: ee5cb9a3172bd724519fa305997ae2d7cff5bc6b983194995c5651bb50d21d3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pass_when

## Definition — verbatim
> "Define a small `pass_when` DSL: dotted-path resolution, literals" — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md | 41 | defined here | Defines the safe expression evaluation syntax supporting dotted paths, literals, equality comparisons, and boolean logic |

## Consumes
Dotted-path field lookups from verifier JSON output and comparison literals.

## Produces
Boolean determination of whether an individual review criterion is satisfied.

## When applied
Evaluated by the completion gate dispatcher for each criterion defined in `pr-review-config.yaml`.

## Sub-concepts
none

## Part of
pass-when-dsl

## Implementation status
defects: missing-path, other

## Design notes
pass_when is the configuration key and expression operator set used in `pr-review-config.yaml` to specify success criteria for PR review verifier commands. In rjm's architecture, it provides a safe, deterministic alternative to raw script execution for validating PR readiness without arbitrary code evaluation risks.
