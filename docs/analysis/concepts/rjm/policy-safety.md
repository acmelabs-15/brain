---
package: rjm
name: Policy safety
slug: policy-safety
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

# Policy safety

## Definition — verbatim
> "**Policy safety.** The underlying allow or deny policy establishes a real safety boundary." — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:282-283

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md | 282 | defined here | Defined as Rule 3 of the three-part eligibility test requiring the underlying policy to enforce a genuine security boundary. |

## Consumes
Security threat models, execution boundary analysis, and tool argument provenance.

## Produces
Security evaluations confirming whether an auto-approval or permission rule enforces an authentic trust boundary.

## When applied
Applied when reviewing permission policies to prevent approving commands that execute arbitrary repository-controlled code.

## Sub-concepts
none

## Part of
cross-harness-permission-surface-asymmetry

## Implementation status
defects: missing-path, doc-drift

## Design notes
Policy safety is the fundamental security principle in rjm's hook-to-permissions migration framework. It asserts that portability and fidelity cannot legalize an unsafe policy, establishing that test runner names or command prefixes cannot serve as security boundaries when the underlying tools execute untrusted code.
