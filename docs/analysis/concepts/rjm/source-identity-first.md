---
package: rjm
name: Source identity first
slug: source-identity-first
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Source identity first

## Definition — verbatim
> "1. **Source identity first.** Require an authoritative, commit-pinned source (a" — .claude/skills/skillforge/SKILL.md:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/SKILL.md | 136 | defined here | First gate for external skill adaptation requiring commit-pinned SHA and treating text as untrusted data. |

## Consumes
External skill source repository ref, commit hash, and enumerated file inventory.

## Produces
Adoption gate verdict: approval to inspect pinned source or unconditional rejection when unpinned.

## When applied
Applied before adopting or analyzing any external skill source catalog.

## Sub-concepts
none

## Part of
adapting-an-external-skill-source

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
Source identity first is an rjm security and provenance gate requiring external skills to be pinned to an immutable commit hash and explicit file list, treating external instructions as untrusted input to block prompt injection and unverified code adoption.
