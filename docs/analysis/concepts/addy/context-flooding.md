---
package: addy
name: Context flooding
slug: context-flooding
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Context flooding

## Definition — verbatim
> "| Context flooding | Agent loses focus when loaded with >5,000 lines of non-task-specific context. More files does not mean better output. | Include only what is relevant to the current task. Aim for <2,000 lines of focused context per task. |" — skills/context-engineering/SKILL.md:258

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 258 | defined here | Listed in the Anti-Patterns table as an operational failure mode where agents are overloaded with context. |

## Consumes
Unfiltered loading of extensive non-task-specific files (>5,000 lines) into the context window.

## Produces
Loss of attention focus, ignored system instructions, and degraded reasoning quality.

## When applied
Identified when excessive context degrades agent performance; remedied by keeping task context focused under 2,000 lines.

## Sub-concepts
none

## Part of
context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
An anti-pattern where an agent's context window is flooded with unnecessary code and documentation (>5,000 lines), exhausting its attention budget and causing critical constraints to be overlooked. Addressed by selective context loading targeted at under 2,000 lines per task.
