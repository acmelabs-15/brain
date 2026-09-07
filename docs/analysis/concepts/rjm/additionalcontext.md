---
package: rjm
name: additionalContext
slug: additionalcontext
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# additionalContext

## Definition — verbatim
> "emits one documented `additionalContext` object. The merger creates" — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:417

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 417 | used here | Hook output object carrying aggregated observer stdout into Copilot context |
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 51 | used here | Schema payload into which active PostToolUse text is merged for host consumption |

## Consumes
Merged stdout text from observer hook shims.

## Produces
A standardized JSON envelope injected into the host session context.

## When applied
Emitted by PostToolUse hook dispatchers upon successful completion of observer shims.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
additionalContext is the standardized JSON envelope used by Copilot CLI hook dispatchers to inject dynamic diagnostic feedback and environmental observations directly into the agent's active prompt context.
