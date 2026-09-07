---
package: matt
name: main build chain
slug: main-build-chain
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# main build chain

## Definition — verbatim
> "`grill-with-docs` is the head of the main build chain:" — docs/engineering/grill-with-docs.md:76

## Also called — verbatim
main chain — docs/engineering/implement.md:87

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/grill-with-docs.md | 76 | defined here | Declares grill-with-docs as the head of the main build chain. |
| docs/engineering/to-spec.md | 75 | defined here | Identifies to-spec as the specification step in the multi-session branch of the main build chain. |
| docs/engineering/to-tickets.md | 93 | used here | Identifies to-tickets as the breakdown step in the main build chain. |
| external/grill-with-docs.md | 64 | used here | Diagrams the sequence of skills composing the main build chain. |
| external/to-spec.md | 67 | used here | Places to-spec within the main build chain context. |
| external/to-tickets.md | 77 | used here | Situates to-tickets between to-spec and implement in the main build chain. |

## Consumes
An initial raw feature request, bug report, or architectural goal.

## Produces
A sequence of verified artifacts progressing from context and spec to tickets, code, and review.

## When applied
Standard end-to-end software feature development spanning from initial discovery to final code review.

## Sub-concepts
implement, to-spec, to-tickets

## Part of
none

## Implementation status
clean

## Design notes
The main build chain represents Matt Pocock's primary five-stage engineering pipeline: grill-with-docs → to-spec → to-tickets → implement → code-review. It establishes a strict division of labor between specification, ticket breakdown, execution, and verification, ensuring that reasoning occurs in small, bounded phases.
