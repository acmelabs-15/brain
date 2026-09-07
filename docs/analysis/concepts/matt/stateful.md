---
package: matt
name: stateful
slug: stateful
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/grill-me.md, sha256: 8ef33c20bc9870b89757d0d6238d319381bb0b7afb299d3e4ef1f92d20dba1d3}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# stateful

## Definition — verbatim
> "It is **[stateful](https://www.aihero.dev/ai-coding-dictionary/stateful)**. Every other grilling skill leaves the [session](https://www.aihero.dev/ai-coding-dictionary/session) in your head; this one leaves files on disk." — docs/engineering/grill-with-docs.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/grill-with-docs.md | 5 | defined here | Contrasts grill-with-docs leaving stateful files on disk (CONTEXT.md, ADRs) against other grilling skills that leave state only in conversation memory. |
| docs/productivity/grill-me.md | 16 | defined here | References grill-with-docs as a stateful counterpart that reads code and persists acquired domain insights into CONTEXT.md and ADRs. |
| docs/productivity/teach.md | 5 | defined here | Explains that teach is structurally stateful, storing mission, resources, lessons, and learning records as files in the workspace directory. |
| external/grill-me.md | 33 | used here | Contrasts ephemeral session grilling with stateful grilling workflows that write repository documentation. |
| external/grill-with-docs.md | 26 | used here | Describes grill-with-docs as a stateful skill persisting architecture and domain decisions directly into repository files. |
| external/teach.md | 26 | used here | Highlights the stateful nature of teach workspaces across multi-session learning trajectories. |

## Consumes
An active workspace directory where artifacts, decisions, and domain contexts can be written to disk.

## Produces
Persisted repository files (CONTEXT.md, ADRs, LESSONS.md, RESOURCES.md) capturing structured knowledge.

## When applied
When an agentic workflow is designed to accumulate knowledge across multiple sessions rather than confining context to ephemeral chat memory.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
In Matt Pocock's design philosophy, 'stateful' marks workflows that persist their findings as real files in the repository rather than relying on the LLM's transient context window or human memory. This file-based persistence enables multi-session accumulation, cross-agent handoffs, and deterministic resumption without context rot.
