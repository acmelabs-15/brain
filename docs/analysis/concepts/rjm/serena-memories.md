---
package: rjm
name: Serena memories
slug: serena-memories
kind: artifact
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

# Serena memories

## Definition — verbatim
> "Serena memories are retrieval aids." — .claude/skills/CLAUDE.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/CLAUDE.md | 9 | used here | Characterized as secondary retrieval aids subordinated to canonical source sidecars. |

## Consumes
Repository source files, conventions, and agent workflow patterns.

## Produces
Contextual knowledge items and memory files assisting agent recall during sessions.

## When applied
Applied during agent interactions for rapid retrieval of project guidelines and conventions.

## Sub-concepts
none

## Part of
serena

## Implementation status
clean

## Design notes
In the rjm system architecture, Serena memories provide low-overhead contextual retrieval aids for coding agents. They are explicitly designated as subordinate to filesystem source files and sidecars, which retain primary authority as the official contract.
