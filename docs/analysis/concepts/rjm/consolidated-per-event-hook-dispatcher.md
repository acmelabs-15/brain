---
package: rjm
name: Consolidated Per-Event Hook Dispatcher
slug: consolidated-per-event-hook-dispatcher
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Consolidated Per-Event Hook Dispatcher

## Definition — verbatim
> "# ADR-068: Consolidated Per-Event Hook Dispatcher" — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 13 | defined here | Architectural decision establishing consolidated dispatcher scripts to route multiple hook shims per lifecycle event. |

## Consumes
Host hook event inputs and internal dispatch group manifests (`dispatch_groups.json`).

## Produces
Consolidated execution of multiple hook shims with merged stdout and consistent error policies.

## When applied
Fired by host harnesses at lifecycle hook events to multiplex hook execution through a single entry point.

## Sub-concepts
matcher-union, dispatch-groups

## Part of
hook-architecture

## Implementation status
defects: doc-drift, missing-path

## Design notes
An architecture pattern codified in ADR-068 that registers a single consolidated dispatcher script per hook event (such as `invoke_dispatch_claude.py`) rather than registering dozens of individual scripts with the host harness. It provides uniform error handling, output aggregation, and matcher filtering.
