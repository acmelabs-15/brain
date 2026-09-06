---
package: rjm
path: .claude/skills/software-engineering-library/references/data-intensive-applications.md
type: reference
bytes: 14187
unit: inv-rjm-169
in_scope_via: .claude/skills/software-engineering-library/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/software-engineering-library/references/data-intensive-applications.md

## Purpose — required, verbatim
> "This rule consolidates the patterns from Martin Kleppmann's _Designing Data-Intensive Applications_ (DDIA) that recur in this codebase. Apply it whenever you change how data is owned, written, replicated, exchanged, or replayed across agent boundaries." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:4

## Design intent — required
Consolidates core data architecture principles from Martin Kleppmann's *Designing Data-Intensive Applications* (DDIA) for multi-agent workflows, inter-agent messaging, and persistence boundaries. It establishes explicit system-of-record (SoR) ownership, mandates at-least-once delivery with idempotent receivers over mythical exactly-once assumptions, specifies consistency models per boundary, and guides non-breaking schema evolution. Without it, distributed agent state, session logs, and derived projections risk silent divergence, lost updates, uncoordinated schema breakage, and duplicate side effects during retries.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill software-engineering-library — .claude/skills/software-engineering-library/SKILL.md:30
- doc .agents/architecture/ADR-060-rework-warning-session-log-persistence.md — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:164

## Concepts named — required, verbatim
- `Data-Intensive Applications` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:2 — defined here
- `Designing Data-Intensive Applications` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:4 — used here
- `System of record` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:12 — defined here
- `SoR` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:12 — defined here
- `Derived data` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:13 — defined here
- `Idempotent` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:14 — defined here
- `At-least-once delivery` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:15 — defined here
- `At-most-once delivery` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:16 — defined here
- `Exactly-once semantics` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:17 — defined here
- `Schema evolution` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:18 — defined here
- `Backward compatible` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:19 — defined here
- `Forward compatible` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:20 — defined here
- `Causal order` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:21 — defined here
- `Source of Truth Ownership` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:25 — defined here
- `last-writer-wins` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:40 — used here
- `CRDT merge` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:40 — used here
- `Idempotency` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:45 — defined here
- `idempotency key` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:57 — defined here
- `compare-and-set` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:59 — used here
- `versioned write` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:59 — used here
- `Consistency Model per Boundary` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:65 — defined here
- `Read-your-writes` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:77 — defined here
- `monotonic reads` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:77 — defined here
- `bounded staleness` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:77 — defined here
- `eventual` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:77 — defined here
- `strict serializable` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:77 — defined here
- `Schema Evolution` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:85 — defined here
- `schemaVersion` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:101 — defined here
- `Event Ordering and Delivery` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:106 — defined here
- `vector clock` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:120 — used here
- `logical timestamp` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:120 — used here
- `No Exactly-Once Wishful Thinking` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:126 — defined here
- `claim-then-execute` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:135 — defined here
- `Application to ai-agents` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:139 — defined here
- `Anti-Patterns` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:153 — defined here
- `Two writers, no policy` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:157 — defined here
- `Cache as SoR by accident` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:158 — defined here
- `Retry without idempotency` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:159 — defined here
- `Schema-by-accident` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:160 — defined here
- `Total-order fantasy` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:161 — defined here
- `Exactly-once labels` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:162 — defined here
- `Wall-clock causality` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:163 — defined here
- `Quick Self-Review` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:165 — defined here

## Structure
# Data-Intensive Applications — .claude/skills/software-engineering-library/references/data-intensive-applications.md:2
## Core Vocabulary — .claude/skills/software-engineering-library/references/data-intensive-applications.md:8
## Source of Truth Ownership — .claude/skills/software-engineering-library/references/data-intensive-applications.md:25
## Idempotency — .claude/skills/software-engineering-library/references/data-intensive-applications.md:45
## Consistency Model per Boundary — .claude/skills/software-engineering-library/references/data-intensive-applications.md:65
## Schema Evolution — .claude/skills/software-engineering-library/references/data-intensive-applications.md:85
## Event Ordering and Delivery — .claude/skills/software-engineering-library/references/data-intensive-applications.md:106
## No Exactly-Once Wishful Thinking — .claude/skills/software-engineering-library/references/data-intensive-applications.md:126
## Application to ai-agents — .claude/skills/software-engineering-library/references/data-intensive-applications.md:139
## Anti-Patterns — .claude/skills/software-engineering-library/references/data-intensive-applications.md:153
## Quick Self-Review — .claude/skills/software-engineering-library/references/data-intensive-applications.md:165

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .claude/skills/software-engineering-library/references/data-intensive-applications.md:146 · cites `scripts/memory_enhancement/reflection.py::reinforce_memories` as writer of memory operational metadata, but `reinforce_memories` function was removed from `reflection.py` (explicitly asserted absent in `tests/test_memory_hook_reflection.py:183`).

## Observations
Directly formalizes the persistence and consistency topology of the `rjm` multi-agent codebase: session logs on disk are the authoritative system of record for protocol compliance and work history; Serena/Forgetful agent memory content is an indexed, rebuildable projection; memory operational metadata (confidence, freshness) is its own independent system of record; workspace state is strictly process-local; and inter-agent messages across hooks and skills are at-least-once delivery requiring persistent idempotency keys.

## Context cost
14187 bytes, approximately 3546 tokens.
