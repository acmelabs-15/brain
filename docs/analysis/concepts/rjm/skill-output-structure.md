---
package: rjm
name: Skill Output Structure
slug: skill-output-structure
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/output-structure.md, sha256: 0473a0031d8e58c6741137ae4795a3fd6ea136c0483ce45a043b265b491079a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill Output Structure

## Definition — verbatim
> "# Skill Output Structure and Packaging" — .claude/skills/skillforge/references/output-structure.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/output-structure.md | 1 | defined here | Document title specifying standard skill packaging, frontmatter properties, and directory layout. |

## Consumes
Generated skill artifacts, YAML metadata, reference documentation, and companion scripts.

## Produces
A standardized, compliant skill folder layout consisting of SKILL.md, references/, assets/, and scripts/.

## When applied
Applied during Phase 3 generation and packaging to enforce consistent agent skill directory structures.

## Sub-concepts
- frontmatter-requirements
- scripts-directory
- hooks-integration

## Part of
skillforge

## Implementation status
clean

## Design notes
Skill Output Structure establishes the canonical folder hierarchy and packaging contract for skills in rjm. By standardizing where metadata, core instructions, deep reference docs, asset templates, and automation scripts reside, it ensures cross-agent interoperability and predictable progressive disclosure.
