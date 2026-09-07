---
package: matt
name: fail-closed
slug: fail-closed
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fail-closed

## Definition — verbatim
(used, not defined)

> "The resolution is confident rather than fail-closed, so the mistake is not obvious until it has started." — external/implement.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/implement.md | 61 | used here | Identifies the absence of fail-closed ticket resolution as a failure mode causing agents to bind to wrong numbered lists. |

## Consumes
Ambiguous user inputs, ticket numbers, or partial identifiers.

## Produces
Aborted execution or explicit confirmation requests rather than guessing.

## When applied
When resolving external entity references, ticket numbers, or ambiguous commands.

## Sub-concepts
none

## Part of
implement

## Implementation status
defects: orphan, doc-drift, cross-file-contradiction, other

## Design notes
Fail-closed is an architectural safety pattern where a system halts and demands clarification when encountering ambiguity or missing references rather than making optimistic assumptions. In Matt's critique of /implement, the lack of a fail-closed check on issue numbers allows agents to mistakenly bind to unrelated numbered lists in conversation history.
