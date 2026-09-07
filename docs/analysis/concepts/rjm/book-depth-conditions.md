---
package: rjm
name: book-depth conditions
slug: book-depth-conditions
kind: pattern
package_phase: rjm:Deep Analysis
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# book-depth conditions

## Definition — verbatim
> "When analysis discovers book-depth conditions" — .claude/skills/analyze/SKILL.md:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/SKILL.md | 119 | defined here | Criteria (e.g. low test coverage, retries, bounded contexts) triggering on-demand loading of book references. |

## Consumes
Codebase observations, test coverage metrics, concurrency patterns, and architectural seams.

## Produces
Progressive-disclosure trigger decisions activating specific book references in software-engineering-library.

## When applied
Evaluated dynamically during Phase 4 (Deep Analysis) when examining code evidence.

## Sub-concepts
none

## Part of
software-engineering-library

## Implementation status
defects: missing-path, doc-drift

## Design notes
`book-depth conditions` define the threshold rules for progressive disclosure, ensuring that heavy reference texts are only loaded into context when specific complex failure modes or architectural patterns are encountered.
