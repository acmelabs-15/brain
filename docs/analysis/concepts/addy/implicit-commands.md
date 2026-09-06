---
package: addy
name: Implicit Commands
slug: implicit-commands
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/opencode-setup.md, sha256: 77a6bd91ef2837acb96feea4ae60f3bfea2c4155864c197394dd2166f49de864}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Implicit Commands

## Definition — verbatim
(used, not defined)

> "### 3. Lifecycle Mapping (Implicit Commands)" — docs/opencode-setup.md:164

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/opencode-setup.md | 164 | defined here | Section heading presenting automatic skill execution triggered by user intent rather than explicit slash commands. |

## Consumes
Natural language requests expressing engineering intent (e.g. 'build a feature', 'fix a bug').

## Produces
Execution of the appropriate skill workflow without explicit command typing.

## When applied
When operating in agent tools that lack slash command mechanisms or when developer prefers conversational prompt steering.

## Sub-concepts
none

## Part of
lifecycle-mapping

## Implementation status
defects: [missing-path] in docs/opencode-setup.md

## Design notes
Implicit Commands allow agents to infer and execute full phase workflows from conversational intent alone, removing reliance on proprietary slash command interfaces while enforcing standard lifecycle gates.
