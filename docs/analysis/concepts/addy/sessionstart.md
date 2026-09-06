---
package: addy
name: SessionStart
slug: sessionstart
kind: gate
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: hooks/hooks.json, sha256: 870c97c9cb6f526b66cc1d684e261ad2f7b45066a41e56ca5cb3fa6784df8888}
  - {path: hooks/session-start-test.sh, sha256: db35bb3e69a98900dddb0c5b1c9ceb8e738cdeb17613ed50177fff7924d350d2}
  - {path: hooks/session-start.sh, sha256: 2ea42e7077f606f793f5e7704f593d26ea9bcf231c6f32a7ed17df5c727a63ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# SessionStart

## Definition — verbatim
> "SessionStart" — hooks/hooks.json:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/hooks.json | 3 | defined here | Registers the session initialization hook command. |
| hooks/session-start-test.sh | 2 | used here | Script header documenting test runner for SessionStart JSON payload. |
| hooks/session-start.sh | 5 | used here | Comments specifying standard SessionStart JSON envelope output. |

## Consumes
Session initiation event triggered by the host agent runner.

## Produces
Formatted JSON payload injecting meta-skill context into the conversation window.

## When applied
Fired automatically at the very start of a new interaction session in Claude Code or Codex CLI.

## Sub-concepts
none

## Part of
hooks

## Implementation status
defects: script-bug / doc-drift

## Design notes
Lifecycle event emitted by Claude Code at the initiation of a conversation session, utilized to inject skill discovery flowcharts and baseline operating guidelines into the model context before user prompt execution.
