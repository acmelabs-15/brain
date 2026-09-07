---
package: rjm
name: Hook Registration Surfaces
slug: hook-registration-surfaces
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-config-catalog/SKILL.md, sha256: fed89f32f1de6d65bf43c3fb654fb87b277603f2714c917bd36f52b15ba4a7fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Hook Registration Surfaces

## Definition — verbatim
> "## Hook Registration Surfaces" — .claude/skills/ai-agents-config-catalog/SKILL.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-config-catalog/SKILL.md | 128 | defined here | Section heading detailing the independent registration surfaces that serve different hook consumers. |

## Consumes
Hook definitions and consumer runtime configurations.

## Produces
Clear architectural separation between Git hook managers (Lefthook) and Claude/Copilot agent runtime hooks.

## When applied
When registering, modifying, or auditing repository hooks across client platforms.

## Sub-concepts
none

## Part of
config-catalog

## Implementation status
clean

## Design notes
Defines the distinct, decoupled surfaces through which hooks are registered in rjm. By explicitly separating git lifecycle hooks managed by Lefthook from agent platform hooks, the system avoids artificial parity constraints and clarifies that git validators and agent runtime policies serve completely different consumers.
