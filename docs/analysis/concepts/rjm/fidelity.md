---
package: rjm
name: Fidelity
slug: fidelity
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

# Fidelity

## Definition — verbatim
> "**Fidelity.** The hook carries no parsing or injection semantics the permission surface cannot replicate." — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:278-279

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md | 278 | defined here | Defined as Rule 2 of the three-part eligibility test for migrating hooks to host-native permissions. |

## Consumes
Executable hook parsing logic, argument sanitization rules, and target harness permission capabilities.

## Produces
Validation verdicts determining whether declarative host permissions preserve the security screening fidelity of the hook.

## When applied
Applied during architectural evaluation of proposals to replace custom guard hooks with native permission declarations.

## Sub-concepts
none

## Part of
cross-harness-permission-surface-asymmetry

## Implementation status
defects: missing-path, doc-drift

## Design notes
Fidelity is the second criterion in rjm's three-part eligibility test for hook-to-permissions migration. It mandates that any parsing or injection guards present in an executable hook (such as screening shell metacharacters or subshell substitutions) must be faithfully replicated by the host permission surface before the hook can be retired.
