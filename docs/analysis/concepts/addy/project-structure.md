---
package: addy
name: Project Structure
slug: project-structure
kind: template
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Project Structure

## Definition — verbatim
> "Where source code lives, where tests go, where docs belong." — skills/spec-driven-development/SKILL.md:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/spec-driven-development/SKILL.md | 96 | defined here | Third core area of a specification document defining directory layout and file locations. |

## Consumes
Existing codebase architecture, conventions, and module structure.

## Produces
A documented directory and file layout map within the specification.

## When applied
When drafting the Project Structure section during Phase 1: Specify.

## Sub-concepts
none

## Part of
phase-1-specify

## Implementation status
defects: doc-drift

## Design notes
A mandatory specification section documenting directory mappings and file placement rules, preventing agents from creating files in arbitrary or inconsistent project directories.
