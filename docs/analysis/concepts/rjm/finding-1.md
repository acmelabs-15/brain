---
package: rjm
name: Finding 1
slug: finding-1
kind: name-only
package_phase: none
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

# Finding 1

## Definition — verbatim
(used, not defined)

> "Finding 1: Copilot has no repo-committed permission surface, and the guard self-neutered before retirement" — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:156

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md | 156 | defined here | Architectural finding establishing the absence of a committed permission surface in Copilot CLI. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
A numbered architecture review finding and section heading in ADR-085 documenting cross-harness permission differences, not an operational lifecycle concept.
