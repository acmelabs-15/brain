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
verified: 2026-09-06 quote-check+coverage
---

# .changeset/user-invoked-skill-invocation.md

## Purpose — required, verbatim
> "Stop skills from trying to reach user-invoked skills through the Skill tool: fix cross-skill references that violated the \"no other skill can call it\" invariant in `.agents/invocation.md`, in `to-spec`, `wayfinder`, `to-tickets`, `triage`, `code-review`, and `diagnosing-bugs`." — .changeset/user-invoked-skill-invocation.md:5

## Design intent — required
Documents a critical architectural repair enforcing the invariant that user-invoked skills cannot be called programmatically by other skills via the Skill tool. It resolves violations where preconditions attempted to execute `setup-matt-pocock-skills` or where autonomous bug diagnostics handed off to `improve-codebase-architecture`. The changeset instructs agents to direct human users to run setup skills, removes unattended hand-offs, and adds an explicit exception in `.agents/invocation.md` clarifying that the `Call the Skill tool` convention applies only to model-invoked skills.

## Phase — required
none

## Inputs — required
Precondition and post-mortem hand-off instructions across `to-spec`, `wayfinder`, `to-tickets`, `triage`, `code-review`, and `diagnosing-bugs`; issue #453; PR #878.

## Outputs — required
Patch version changeset for `mattpocock-skills`; reworded precondition instructions instructing agents to prompt the user; removed hand-off in `diagnosing-bugs` Phase 6 ("Cleanup"); carve-out paragraph in `.agents/invocation.md`.

## Invokes — required
- reference .agents/invocation.md — .changeset/user-invoked-skill-invocation.md:5
- skill to-spec — .changeset/user-invoked-skill-invocation.md:5
- skill wayfinder — .changeset/user-invoked-skill-invocation.md:5
- skill to-tickets — .changeset/user-invoked-skill-invocation.md:5
- skill triage — .changeset/user-invoked-skill-invocation.md:5
- skill code-review — .changeset/user-invoked-skill-invocation.md:5
- skill diagnosing-bugs — .changeset/user-invoked-skill-invocation.md:5
- skill setup-matt-pocock-skills — .changeset/user-invoked-skill-invocation.md:7
- skill improve-codebase-architecture — .changeset/user-invoked-skill-invocation.md:8

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `user-invoked skills` — .changeset/user-invoked-skill-invocation.md:5 — defined here
- `Skill tool` — .changeset/user-invoked-skill-invocation.md:5 — used here
- `cross-skill references` — .changeset/user-invoked-skill-invocation.md:5 — defined here
- `.agents/invocation.md` — .changeset/user-invoked-skill-invocation.md:5 — used here
- `to-spec` — .changeset/user-invoked-skill-invocation.md:5 — used here
- `wayfinder` — .changeset/user-invoked-skill-invocation.md:5 — used here
- `to-tickets` — .changeset/user-invoked-skill-invocation.md:5 — used here
- `triage` — .changeset/user-invoked-skill-invocation.md:5 — used here
- `code-review` — .changeset/user-invoked-skill-invocation.md:5 — used here
- `diagnosing-bugs` — .changeset/user-invoked-skill-invocation.md:5 — used here
- `setup-matt-pocock-skills` — .changeset/user-invoked-skill-invocation.md:7 — used here
- `model-invoked` — .changeset/user-invoked-skill-invocation.md:7 — defined here
- `post-mortem` — .changeset/user-invoked-skill-invocation.md:8 — used here
- `improve-codebase-architecture` — .changeset/user-invoked-skill-invocation.md:8 — used here
- `Cleanup` — .changeset/user-invoked-skill-invocation.md:8 — defined here
- `checklist` — .changeset/user-invoked-skill-invocation.md:8 — used here

## Structure
- Frontmatter
- Core invariant fix statement
- User-invoked setup skill precondition resolution
- Diagnosing-bugs Phase 6 cleanup and hand-off removal
- Carve-out documentation in .agents/invocation.md
- Issue closure citation

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Highlights a subtle composition failure mode in agent tool use: models cannot call skills configured for interactive user sessions. Formalizes the distinction between model-invoked and user-invoked skills in `.agents/invocation.md`.

## Context cost
1565 bytes, ~380 tokens. References `.agents/invocation.md` (3848 bytes, ~900 tokens).
