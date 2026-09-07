---
package: rjm
name: Portability
slug: portability
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

# Portability

## Definition — verbatim
> "**Portability.** An equivalent repo-committed, shippable permission surface exists on every harness the hook targets." — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:274-275

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md | 274 | defined here | Defined as Rule 1 of the three-part eligibility test for migrating hooks to host-native permissions. |

## Consumes
Target platform configuration capabilities, manifest specifications, and runtime permission models.

## Produces
Validation verdicts determining whether all targeted harnesses provide equivalent declarative permission enforcement surfaces.

## When applied
Applied when reviewing proposals to migrate custom executable guard hooks to declarative host-native permissions.

## Sub-concepts
none

## Part of
cross-harness-permission-surface-asymmetry

## Implementation status
defects: missing-path, doc-drift

## Design notes
Portability is the initial gate in rjm's three-part test for hook-to-permissions migration. It requires that a shippable, repo-committed permission surface exist across all supported harnesses before retiring a cross-platform guard hook in favor of host permissions.
