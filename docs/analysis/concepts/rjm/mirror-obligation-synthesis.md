---
package: rjm
name: mirror-obligation synthesis
slug: mirror-obligation-synthesis
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-077-flip-stale-contract-tests.md, sha256: c4b19bb8f1453828b502f31578a375d9fd70f1446abf25e4f094ca50a2efd652}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# mirror-obligation synthesis

## Definition — verbatim
(used, not defined)

> "That issue traces the failure shape to the mirror-obligation synthesis in #2789." — .agents/architecture/ADR-077-flip-stale-contract-tests.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-077-flip-stale-contract-tests.md | 28 | used here | Names the epic analysis in issue #2789 that identified failure shapes in test and code mirrors. |

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
clean

## Design notes
An analytical task label from epic issue #2789 identifying synchronization obligations between test assertions and implementation mirrors, representing a project-specific investigation name rather than a lifecycle concept.
