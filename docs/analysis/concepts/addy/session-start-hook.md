---
package: addy
name: session-start hook
slug: session-start-hook
kind: pattern
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 190d4a4a399018f1d7bf0895a953042fe0f285080e37ca45381785f80ba007c7}
  - {path: hooks/session-start.sh, sha256: 2ea42e7077f606f793f5e7704f593d26ea9bcf231c6f32a7ed17df5c727a63ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# session-start hook

## Definition — verbatim
> "The session-start hook (`hooks/session-start.sh`) injects the `using-agent-skills` meta-skill into every new Claude Code session." — CONTRIBUTING.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 79 | references | Documents the session-start hook mechanism injecting the using-agent-skills meta-skill into new sessions. |
| hooks/session-start.sh | 2 | defines | Implements the startup script emitting the SessionStart JSON payload with embedded meta-skill instructions. |

## Consumes
Host environment, availability of `jq` utility, and `skills/using-agent-skills/SKILL.md`.

## Produces
JSON session initialization payload (`SessionStart` hookSpecificOutput) loaded by the agent harness.

## When applied
Executed automatically by Claude Code or compatible agent harnesses upon session initialization.

## Sub-concepts
no-jq-fallback

## Part of
using-agent-skills

## Implementation status
defects: script-bug, doc-drift

## Design notes
The session-start hook automates agent onboarding by injecting the central routing meta-skill into context at the start of every session. This ensures that agents automatically possess the skill catalog flowchart and core behavioral expectations without requiring manual user prompting or manual configuration.
