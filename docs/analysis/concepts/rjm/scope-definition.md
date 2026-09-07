---
package: rjm
name: Scope Definition
slug: scope-definition
kind: phase
package_phase: rjm:chaos-experiment
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-043-scoped-tool-execution.md, sha256: 9a4be43328cc6530b1b24cac28beba3ffa57f0eb559fbaa872864d8f002798a4}
  - {path: .claude/skills/chaos-experiment/SKILL.md, sha256: 3bebfe39adb559c75a55a96b2ecebb91143bfb2522de30fc96b12606ca2aba03}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Scope Definition

## Definition — verbatim
> "Phase 1: Scope Definition" — .claude/skills/chaos-experiment/SKILL.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-043-scoped-tool-execution.md | 73 | defined here | Section heading defining the boundaries of changed files for tool execution scoping. |
| .claude/skills/chaos-experiment/SKILL.md | 79 | defined here | First phase of chaos experimentation responsible for establishing experiment boundaries. |

## Consumes
System architecture, historical incidents, and monitoring data.

## Produces
Defined system boundaries, target services, and failure domains for experimentation.

## When applied
Executed at the beginning of a chaos engineering experiment cycle.

## Sub-concepts
none

## Part of
chaos-experiment

## Implementation status
defects: missing-path, internal-contradiction, doc-drift, exit-code-mismatch

## Design notes
Scope Definition designates both the initial phase of chaos experiment design where boundaries and failure domains are identified, and the criteria defining changed files in tool execution scoping.
