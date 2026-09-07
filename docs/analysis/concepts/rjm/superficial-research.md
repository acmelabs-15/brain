---
package: rjm
name: Superficial research
slug: superficial-research
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Superficial research

## Definition — verbatim
> "| Superficial research | Surface definitions miss actionable insights | Dig into frameworks, examples, failure modes |" — .claude/skills/research-and-incorporate/SKILL.md:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 151 | defined here | Anti-pattern warning that surface definitions miss actionable insights, prescribing digging into frameworks, examples, and failure modes. |

## Consumes
none

## Produces
Corrective research behavior digging into deeper structures and concrete examples.

## When applied
Monitored throughout research and analysis phases of research-and-incorporate.

## Sub-concepts
none

## Part of
research-and-incorporate

## Implementation status
defects: doc-drift, missing-path

## Design notes
An anti-pattern in research-and-incorporate warning against shallow web searches that only collect high-level definitions rather than operational frameworks, failure modes, and implementation guidance.
