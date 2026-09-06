---
package: addy
name: meta-skill
slug: meta-skill
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/getting-started.md, sha256: 2c218fb92f46645d93191b9f3ff4f2df8faa25ba3d7517c336c6fa87fed8ab0b}
  - {path: hooks/session-start.sh, sha256: 2ea42e7077f606f793f5e7704f593d26ea9bcf231c6f32a7ed17df5c727a63ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# meta-skill

## Definition — verbatim
(used, not defined)

> "### 4. Use the meta-skill for discovery" — docs/getting-started.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/getting-started.md | 38 | used here | Section heading instructing to use the meta-skill for task discovery and routing. |
| hooks/session-start.sh | 11 | defined here | Shell variable defining the meta-skill path for automated session injection. |

## Consumes
Incoming user prompt or task description.

## Produces
Routing decision mapping the task to one of the 24 lifecycle skills.

## When applied
At session start or whenever deciding which engineering skill applies to an incoming task.

## Sub-concepts
none

## Part of
using-agent-skills

## Implementation status
defects: [script-bug, doc-drift] (hooks/session-start.sh outputs JSON envelope failing test assertions)

## Design notes
The meta-skill (using-agent-skills) serves as the central router for the entire skill catalog, reading incoming developer intent and directing the agent into the appropriate phase-specific workflow without bloating initial context with all skills simultaneously.
