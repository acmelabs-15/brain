---
package: rjm
name: encode-repo-serena
slug: encode-repo-serena
kind: technique
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# encode-repo-serena

## Definition — verbatim
> "Similar but for codebase analysis" — .claude/skills/research-and-incorporate/SKILL.md:163

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 163 | used here | Cited in related skills table as a related skill performing codebase analysis for Serena memory encoding. |

## Consumes
Codebase files, symbols, and repository architectural structures.

## Produces
Project-level Serena memory structures encoding repository architecture and symbols.

## When applied
Applied when analyzing codebase structure to populate Serena project memories.

## Sub-concepts
none

## Part of
research-and-incorporate

## Implementation status
out-of-scope (memory skill excluded per METHOD §1.2)

## Design notes
A codebase analysis and memory encoding skill that extracts structural concepts and symbol relationships from repositories into Serena project memories.
