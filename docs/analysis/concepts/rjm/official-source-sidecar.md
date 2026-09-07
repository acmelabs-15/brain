---
package: rjm
name: official source sidecar
slug: official-source-sidecar
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# official source sidecar

## Definition — verbatim
> "The official source sidecar is the contract; Serena memories are retrieval aids." — .claude/skills/CLAUDE.md:8-9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/CLAUDE.md | 8 | defined here | Architectural contract pattern establishing source files as authoritative specifications across platforms. |

## Consumes
Cross-harness mutation proposals and platform-specific skill definitions.

## Produces
Authoritative specification contract binding skill behavior and schema.

## When applied
Applied when authoring, modifying, or synchronizing skills across Claude Code and Copilot CLI platforms.

## Sub-concepts
none

## Part of
ai-agents-portability-campaign

## Implementation status
clean

## Design notes
The official source sidecar pattern establishes that filesystem-based skill definitions and sidecar files constitute the immutable behavioral contract, preventing secondary retrieval mechanisms or memory systems from drifting or becoming false authorities.
