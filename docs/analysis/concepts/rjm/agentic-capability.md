---
package: rjm
name: Agentic Capability
slug: agentic-capability
kind: technique
package_phase: rjm:Phase 4: Synthesis Panel
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md, sha256: c1dd0e02bdb365dfc6c492fd2e5a9726aeaa054a6f0f442d18a0504f72521cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agentic Capability

## Definition — verbatim
> "| **Agentic Capability** | Scripts complete cleanly without interactive prompts during scoped, user-approved invocations |" — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md | 26 | defined here | Script Agent criterion verifying non-interactive execution without blocking user prompts. |

## Consumes
Skill scripts and invocation workflows.

## Produces
Validation that automation runs unattended without halting on interactive prompts.

## When applied
Checked during Script Agent synthesis review in Phase 4.

## Sub-concepts
none

## Part of
script-agent

## Implementation status
clean

## Design notes
A design principle and review standard ensuring that scripts designed for AI agent execution can run to completion non-interactively without prompting the user for manual confirmation during routine operations.
