---
package: rjm
name: failure canon
slug: failure-canon
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# failure canon

## Definition — verbatim
> "Feeds the failure canon; see `ai-agents-failure-archaeology`" — .claude/skills/ai-agents-docs-of-record/SKILL.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 42 | defined here | Defined as the repository's cumulative corpus of retrospectives and failure modes documenting past engineering incidents. |

## Consumes
Retrospectives, incident writeups, PR post-mortems, and debugging traces.

## Produces
Curated anti-patterns in `FAILURE-MODES.md`, Serena memory rules, and architectural gates.

## When applied
Populated after any incident, bug, or failed PR, and consulted during design and code reviews.

## Sub-concepts
none

## Part of
ai-agents-docs-of-record

## Implementation status
defects: missing-path, doc-drift

## Design notes
The authoritative historical collection of failure modes and retrospectives in rjm. Every governance constraint, anti-pattern, and testing gate in the repository is directly derived from a verified entry in the failure canon, ensuring rules address concrete empirical failures rather than hypothetical concerns.
