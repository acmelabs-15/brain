---
package: rjm
name: Phase 4: Persist Learnings to Memory
slug: phase-4-persist-learnings-to-memory
kind: phase
package_phase: rjm:reflect
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/SKILL.md, sha256: 645403addd017edc990804ffecd3e577ef8c2b3a15e7e841b599c2e901b33c77}
  - {path: .claude/skills/reflect/references/phase3-4-propose-persist.md, sha256: c797e32ff834c793ed982059ea1368cf993481ebc2d25bf44165df0fed6a4ccc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 4: Persist Learnings to Memory

## Definition — verbatim
> "## Phase 4: Persist Learnings to Memory" — .claude/skills/reflect/references/phase3-4-propose-persist.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/phase3-4-propose-persist.md | 60 | defined here | Detailed reference section defining memory reading, appending, formatting, and auto-citation extraction steps. |
| .claude/skills/reflect/SKILL.md | 88 | defined here | Final workflow phase reading existing memory, extracting citations, and persisting approved learnings. |

## Consumes
Approved learnings from Phase 3, existing memory files from `.serena/memories/`, and session metadata.

## Produces
Updated `.serena/memories/{skill-name}-observations.md` file with appended learnings and code citations.

## When applied
Triggered following user approval of Phase 3 reflection proposals.

## Sub-concepts
auto-citation-capture, storage-strategy, memory-format, citations

## Part of
reflect-skill

## Implementation status
defects: missing-path

## Design notes
Phase 4 of the reflect skill executes the durable recording of approved learnings into skill-specific sidecar memories. It enforces non-destructive appending, session tracking, structured section categorisation, and verified code citation linking so institutional knowledge persists reliably across sessions.
