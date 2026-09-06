---
package: addy
name: Session Hooks
slug: session-hooks
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/gemini-cli-setup.md, sha256: 982d9cdc469fb26cbd4dd6a2d26d1894f2b93e2f821dd8646c188dacb8150803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Session Hooks

## Definition — verbatim
(used, not defined)

> "### Session Hooks" — docs/gemini-cli-setup.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/gemini-cli-setup.md | 92 | used here | Heading explaining how to configure lifecycle hooks for automated context injection and script validation. |

## Consumes
Lifecycle hook scripts (e.g. `hooks/session-start.sh`) and harness configuration.

## Produces
Injected context (e.g. `using-agent-skills` meta-skill) or executed validation checks upon session start.

## When applied
Automatically triggered at session lifecycle events such as `SessionStart`.

## Sub-concepts
meta-skill

## Part of
none

## Implementation status
clean (docs/gemini-cli-setup.md has no defects; note hooks/session-start.sh carries defects: script-bug, doc-drift)

## Design notes
Session Hooks automate the injection of meta-skills or environment validation at session start, ensuring the agent is equipped with workflow routing without requiring manual prompt initialization by the developer.
