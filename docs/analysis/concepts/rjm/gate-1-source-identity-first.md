---
package: rjm
name: Gate 1: Source identity first
slug: gate-1-source-identity-first
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/external-skill-source-adaptation.md, sha256: d1bfe692aa70bcf7515f3849cc45814365dbd7e23605c0b1058dbb125f43ec79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Gate 1: Source identity first

## Definition — verbatim
> "### Gate 1: Source identity first" — .claude/skills/skillforge/references/external-skill-source-adaptation.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/external-skill-source-adaptation.md | 19 | defined here | Defines Gate 1 requiring authoritative commit-pinned sources and content hashes before adopting external ideas. |

## Consumes
External skill repository references, commit SHAs, and source file lists.

## Produces
Source identity verification verdict; halts adoption if provenance is unverified.

## When applied
Executed as the first gate when evaluating an external skill catalog.

## Sub-concepts
none

## Part of
external-skill-source-adaptation

## Implementation status
clean

## Design notes
A security and integrity gate requiring an authoritative commit-pinned source and file hash inventory before external skill concepts are considered, preventing unverified or drifting prompts from entering the codebase.
