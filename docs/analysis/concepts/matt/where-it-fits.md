---
package: matt
name: Where it fits
slug: where-it-fits
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Where it fits

## Definition — verbatim
> "Always present. Situate the skill in the system in a sentence or two:" — .agents/writing-docs.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 62 | defined here | Mandates the Where it fits section to situate every skill in the system via role, neighbors, and ask-matt. |
| external/domain-modeling.md | 70 | defined here | Situates domain-modeling relative to codebase-design, grill-with-docs, and improve-codebase-architecture. |
| external/implement.md | 70 | used here | Places implement within the sequential build flow between to-tickets and code-review. |
| external/prototype.md | 64 | defined here | Positions prototype as a standalone spike tool outside the main build chain. |

## Consumes
System topology, workflow role classifications, and neighboring skill relationships.

## Produces
System-level placement mapping connecting a skill to its neighbors and the global router.

## When applied
Required as the final section of the fixed frame on every skill documentation page.

## Sub-concepts
chain step, run-once setup, periodic maintenance, reach-for-it-anytime standalone

## Part of
fixed frame

## Implementation status
defects: missing-path, doc-drift, orphan, other

## Design notes
The mandatory closing section of the fixed frame that places every tool into system context by naming its operational role, identifying adjacent sibling skills, and linking to ask-matt.
