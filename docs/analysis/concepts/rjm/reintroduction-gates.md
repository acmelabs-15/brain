---
package: rjm
name: Reintroduction gates
slug: reintroduction-gates
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md, sha256: 664b46f110094bbed7c45aab168811441cde25fb9bfc05eaae862beca4c4e09c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Reintroduction gates

## Definition — verbatim
> "**Reintroduction gates.** Issue #5013 and assignee rjmurillo own reintroduction. Reintroduction is optional and requires rjmurillo's approval before the field reverts to `false`. All eight gates below must pass in the same change:" — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:517-520

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md | 517 | defined here | Defined as the 8 required verification gates that must all pass before reintroducing an excluded hook to Copilot. |

## Consumes
Refactored hook implementations, load test execution results, latency benchmarks, and owner security approval.

## Produces
Formal architectural reintroduction approval restoring an excluded hook to generated platform manifests.

## When applied
Applied when attempting to revert a cross-harness exclusion flag to restore a hook to an excluded platform distribution.

## Sub-concepts
none

## Part of
cross-harness-permission-surface-asymmetry

## Implementation status
defects: missing-path, doc-drift

## Design notes
Reintroduction gates define an 8-part verification standard in rjm regulating the return of previously excluded hooks. By mandating zero false-positive denials under load, sub-second latency thresholds, and real CLI probe verification, the gates prevent recurring containment incidents.
