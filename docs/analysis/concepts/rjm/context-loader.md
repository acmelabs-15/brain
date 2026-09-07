---
package: rjm
name: Context Loader
slug: context-loader
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md, sha256: f9858d8a57344768ff57519852ffc367dc1b7ca3a21aed20435a5c75e6c27945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Context Loader

## Definition — verbatim
> "The Context Loader hook narrowed: it no longer auto-injects" — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 177 | used here | Describes the architectural evolution and narrowing of the context loading hook to eliminate stale handoff injection. |

## Consumes
Historical session retrospectives and pending retrospective skeletons.

## Produces
Contextually relevant historical learnings injected into the session prompt.

## When applied
Invoked at session startup.

## Sub-concepts
none

## Part of
sessionstart-context-loader, lifecycle-hooks

## Implementation status
clean. Implemented in `SessionStart/invoke_context_loader.py` and active on the platform.

## Design notes
An automated context priming mechanism that ensures agents begin their work with visibility into recent retrospectives and unfulfilled retrospective requirements.
