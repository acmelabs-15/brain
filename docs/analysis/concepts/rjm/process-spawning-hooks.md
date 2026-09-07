---
package: rjm
name: process-spawning hooks
slug: process-spawning-hooks
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-084-vendored-hook-roi-bar.md, sha256: f803b402a803541adf9820344cedaec80e4287c68685834b8cdd175081bdf196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# process-spawning hooks

## Definition — verbatim
> "Prefer host-native declarations over process-spawning hooks." — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:82-83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-084-vendored-hook-roi-bar.md | 82 | defined here | Hook implementation pattern discouraged in favor of host-native zero-spawn declarative permissions. |

## Consumes
Tool execution events requiring process initialization (e.g. Python interpreter invocations).

## Produces
Execution delay and process lifecycle overhead during agent tool operations.

## When applied
Evaluated during hook architecture design to restrict process spawning on hot tool paths.

## Sub-concepts
none

## Part of
hook-governance

## Implementation status
defects: doc-drift

## Design notes
Process-spawning hooks execute external interpreter binaries (such as Python) on every intercepted tool use event. Because process spawning incurs substantial latency costs (hundreds of milliseconds per call) and can fail under resource constraints, the architecture mandates preferring zero-spawn declarative host rules (`permissions.allow`/`deny`) whenever static filtering suffices.
