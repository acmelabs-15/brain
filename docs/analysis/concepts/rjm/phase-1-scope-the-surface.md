---
package: rjm
name: "Phase 1: Scope the Surface"
slug: phase-1-scope-the-surface
kind: phase
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 1: Scope the Surface

## Definition — verbatim
> "### Phase 1: Scope the Surface" — .claude/skills/security-review/SKILL.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-review/SKILL.md | 69 | defined here | First phase of security review where changed code or snippets are parsed as untrusted data to identify entry points, trust boundaries, and external calls. |

## Consumes
Changed code, diffs, or supplied code snippets.

## Produces
Attack surface inventory naming entry points (CLI argv, HTTP routes, env vars, file paths, tool params).

## When applied
Triggered at the beginning of an inline security review before threat modeling or assigning severity.

## Sub-concepts
none

## Part of
security-review

## Implementation status
clean

## Design notes
The initial reconnaissance phase of the security-review process. Phase 1 forces the reviewer to treat candidate code as untrusted input and map all trust boundaries and entry points before attempting vulnerability classification, preventing hasty or ungrounded risk assessments.
