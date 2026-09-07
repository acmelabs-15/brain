---
package: rjm
name: PRIMARY signal
slug: primary-signal
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md, sha256: 2e49561b59500f4a4b6d417dfc94da905bdb2eb57a996e3070193904150cd40d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PRIMARY signal

## Definition — verbatim
> "The PRIMARY signal is a real shipped hook firing from the" — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:156

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md | 156 | defined here | Highest confidence verification signal in Copilot CLI testing: observing a real shipped hook execute. |

## Consumes
Packaged hook definitions in `hooks.json` and tool execution events.

## Produces
Irrefutable proof of plugin loading and hook dispatch execution.

## When applied
Evaluated during end-to-end smoke tests of Copilot plugin loading.

## Sub-concepts
none

## Part of
signal-hierarchy

## Implementation status
defects: missing-path, doc-drift

## Design notes
In testing Copilot CLI plugins, the PRIMARY signal represents the highest level of verification fidelity. Because host output lists and CLI discovery formats can be buggy or misleading, verifying that a registered hook actually executes upon a tool invocation definitively proves the plugin was loaded and dispatched by the host runtime.
