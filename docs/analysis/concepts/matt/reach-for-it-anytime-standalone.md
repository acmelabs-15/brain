---
package: matt
name: reach-for-it-anytime standalone
slug: reach-for-it-anytime-standalone
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: docs/productivity/to-questionnaire.md, sha256: 875abaef1ed5842ca5f008956288192341b48e4e71904ef4151a56560c3c58eb}
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# reach-for-it-anytime standalone

## Definition — verbatim
> "`teach` is a **reach-for-it-anytime standalone**." — docs/productivity/teach.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 66 | defined here | Names diagnosing-bugs, prototype, and handoff as examples of standalone skills callable on demand. |
| docs/productivity/handoff.md | 76 | used here | Describes handoff as a standalone utility invoked whenever context exhaustion or delegation occurs. |
| docs/productivity/teach.md | 95 | defined here | Defines teach as a standalone skill operating in its own directory outside build chains. |
| docs/productivity/to-questionnaire.md | 76 | used here | Classifies to-questionnaire as an unchained utility extracting structured questionnaires from unstructured inputs. |
| docs/productivity/writing-for-agents.md | 70 | used here | Identifies writing-for-agents as a standalone reference consulted when authoring agent instructions. |
| external/codebase-design.md | 68 | used here | Classifies codebase-design as a standalone vocabulary reference without a multi-step execution loop. |
| external/prototype.md | 65 | defined here | Explains that prototype is a standalone spike tool used to explore ideas without entering the build chain. |
| external/teach.md | 73 | defined here | Defines teach as a standalone skill operating in its own directory outside build chains. |

## Consumes
Specific situational needs, isolated problems, or ad hoc practitioner requests.

## Produces
Self-contained resolutions, diagnosis traces, spike code, or isolated workspaces.

## When applied
Invoked on demand whenever a specific need (e.g. bug diagnosis, prototyping, or learning) arises.

## Sub-concepts
none

## Part of
Where it fits

## Implementation status
defects: doc-drift, script-bug, internal-contradiction, orphan, other, missing-path

## Design notes
A workflow role classification for self-contained utility tools that operate outside linear pipelines. They can be invoked at any moment to solve localized problems without requiring prior chain steps or producing pipeline artifacts.
