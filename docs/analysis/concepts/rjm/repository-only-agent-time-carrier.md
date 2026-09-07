---
package: rjm
name: Repository-only agent-time carrier
slug: repository-only-agent-time-carrier
kind: pattern
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

# Repository-only agent-time carrier

## Definition — verbatim
> "**Repository-only agent-time carrier.** A separate decision approves a non-vendored PreToolUse carrier." — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:319-320

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md | 319 | defined here | Defined as Terminal State 1 for D-A where an internal PreToolUse hook carrier enforces local policy without being vendored to consumers. |

## Consumes
Internal repository hook definitions, local configuration manifests, and developer workflow enforcement requirements.

## Produces
Locally scoped hook execution mechanisms providing real-time tool interception without distribution to external plugin consumers.

## When applied
Applied when internal repository protocols require real-time tool blocking that cannot be observed by commit-time hooks but must not be shipped in consumer plugins.

## Sub-concepts
none

## Part of
cross-harness-permission-surface-asymmetry

## Implementation status
defects: missing-path, doc-drift

## Design notes
The repository-only agent-time carrier is an architectural pattern in rjm providing local runtime hook interception for internal dogfooding and governance. It allows the core repository to enforce custom developer behaviors without violating ADR-084 by shipping internal ceremonies to external plugin consumers.
