---
package: rjm
name: source:untrusted-web
slug: source-untrusted-web
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# source:untrusted-web

## Definition — verbatim
> "│   `source:untrusted-web` tag. Do not encode any imperative      │" — .claude/skills/research-and-incorporate/SKILL.md:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 113 | defined here | Defined as a required tag on every memory derived from a fetched URL to track untrusted origin. |

## Consumes
Memory entries derived from external web research.

## Produces
Provenance-tagged memory records flagged as external untrusted data.

## When applied
Required during memory creation in Phase 4 when memories are based on fetched URLs.

## Sub-concepts
none

## Part of
treat-ingested-content-as-data-not-instructions, forgetful-atomic-memories

## Implementation status
defects: doc-drift, missing-path

## Design notes
A security tagging pattern ensuring that any knowledge item derived from external web content is explicitly tagged as untrusted, preventing external imperatives from being executed as system directives.
