---
package: matt
name: blast radius
slug: blast-radius
kind: technique
package_phase: matt:to-tickets
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# blast radius

## Definition — verbatim
> "A **wide refactor** is one mechanical change (rename a column, retype a shared symbol) whose **blast radius** fans across the whole codebase, so a single edit breaks thousands of call sites at once and no vertical slice can land green." — skills/engineering/to-tickets/SKILL.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 179 | defined here | Introduces blast radius sizing for ticket batches in changelog |
| docs/engineering/to-tickets.md | 46 | defined here | Explains blast radius as the extent of broken call sites across the codebase |
| external/to-tickets.md | 42 | defined here | Documentation explaining batch sizing by package/directory blast radius |
| skills/engineering/to-tickets/SKILL.md | 40 | defined here | Core skill instruction sizing migration ticket batches by blast radius |

## Consumes
The dependency graph of call sites and imports referencing a modified interface

## Produces
Ticket boundaries and batch sizes scoped to contain breakage per package or directory

## When applied
When decomposing a large cross-cutting refactor into discrete, manageable tickets

## Sub-concepts
none

## Part of
to-tickets, wide-refactor

## Implementation status
clean

## Design notes
Blast radius measures the spatial extent of call sites impacted by an interface change, providing the objective sizing metric by which migration tasks are partitioned into incremental batches.
