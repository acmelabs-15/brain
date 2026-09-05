---
package: matt
path: .changeset/user-invoked-skill-invocation.md
type: doc
bytes: 1565
unit: inv-matt-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .changeset/user-invoked-skill-invocation.md, sha256: 4ddc0960266b40cedd4087c91c0e1e30fb294f2d0d1fcd96e391b27d3a74d365}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .changeset/user-invoked-skill-invocation.md

## Purpose — required, verbatim
> "Stop skills from trying to reach user-invoked skills through the Skill tool: fix cross-skill references that violated the \"no other skill can call it\" invariant in `.agents/invocation.md`, in `to-spec`, `wayfinder`, `to-tickets`, `triage`, `code-review`, and `diagnosing-bugs`." — .changeset/user-invoked-skill-invocation.md:5 (no explicit purpose statement)

## Design intent — required
Documents a critical architectural repair across six skills that erroneously instructed the agent to call user-invoked skills (`setup-matt-pocock-skills` and `improve-codebase-architecture`) via the Skill tool. It reinforces the fundamental invariant that user-invoked skills can never be invoked by model tool calls, updating calling skills to either instruct human users to run them or removing automated handoffs in unattended workflows.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- doc .agents/invocation.md — .changeset/user-invoked-skill-invocation.md:5

## Invoked by — required
none

## Concepts named — required, verbatim
- `mattpocock-skills` — .changeset/user-invoked-skill-invocation.md:2 — used here
- `Skill tool` — .changeset/user-invoked-skill-invocation.md:5 — used here
- `.agents/invocation.md` — .changeset/user-invoked-skill-invocation.md:5 — used here
- `to-spec` — .changeset/user-invoked-skill-invocation.md:5 — used here
- `wayfinder` — .changeset/user-invoked-skill-invocation.md:5 — used here
- `to-tickets` — .changeset/user-invoked-skill-invocation.md:5 — used here
- `triage` — .changeset/user-invoked-skill-invocation.md:5 — used here
- `code-review` — .changeset/user-invoked-skill-invocation.md:5 — used here
- `diagnosing-bugs` — .changeset/user-invoked-skill-invocation.md:5 — used here
- `setup-matt-pocock-skills` — .changeset/user-invoked-skill-invocation.md:7 — used here
- `user-invoked` — .changeset/user-invoked-skill-invocation.md:7 — used here
- `model-invoked` — .changeset/user-invoked-skill-invocation.md:7 — used here
- `improve-codebase-architecture` — .changeset/user-invoked-skill-invocation.md:8 — used here
- `post-mortem` — .changeset/user-invoked-skill-invocation.md:8 — used here
- `Cleanup` — .changeset/user-invoked-skill-invocation.md:8 — used here

## Structure
- (no headings)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Identifies a fundamental taxonomy and orchestration boundary in skill design: separating user-invoked skills (interactive workflows triggered by human engineers) from model-invoked skills (utility routines called programmatically by models). Automated handoffs from unattended workflows to user-invoked skills cause unhandled failures.

## Context cost
1565 bytes (~391 tokens). Changeset documentation.
