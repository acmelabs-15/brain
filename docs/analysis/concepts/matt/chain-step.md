---
package: matt
name: chain step
slug: chain-step
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# chain step

## Definition — verbatim
> "a **chain step** (`grill-with-docs → to-spec → to-tickets → implement → code-review`)" — .agents/writing-docs.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 66 | defined here | Classifies skills that function as sequential stages within the primary engineering build chain. |

## Consumes
Upstream lifecycle artifacts (such as plans, specs, or tickets).

## Produces
Downstream lifecycle artifacts passed to the next step in the development pipeline.

## When applied
Applied when executing sequential stages within the primary engineering build flow.

## Sub-concepts
none

## Part of
Where it fits

## Implementation status
clean

## Design notes
A workflow role classification denoting skills that form links in the linear software engineering chain (`grill-with-docs → to-spec → to-tickets → implement → code-review`), consuming upstream outputs and producing inputs for the next stage.
