---
package: rjm
name: Stop: Auto-Retrospective
slug: stop-auto-retrospective
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

# Stop: Auto-Retrospective

## Definition — verbatim
> "Stop: Auto-Retrospective" — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 146 | defined here | Historical entry in the hook status table for automatically generating retrospective files on session stop. |

## Consumes
Stop lifecycle event at session completion.

## Produces
Auto-generated retrospective skeleton files (`.agents/retrospective/{date}-auto-retro.md`).

## When applied
Triggered when an agent finishes its work or halts.

## Sub-concepts
none

## Part of
lifecycle-hooks

## Implementation status
defects: missing-path · .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:146. Retired by Issue #3349 because automatically generated retrospectives dirtied the working tree and disrupted handoffs; retrospectives became authored on demand via `/retro`.

## Design notes
An automated session termination hook intended to enforce retrospective writing, which was replaced by on-demand retrospective workflows to avoid unwanted repository modifications.
