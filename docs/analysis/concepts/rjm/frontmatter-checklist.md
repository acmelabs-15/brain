---
package: rjm
name: Frontmatter Checklist
slug: frontmatter-checklist
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/SKILL-AUTHORING.md, sha256: db5db754421869dc7fb420e1bc025ab2b2e94bd40db6a14bda714efee8fd5c25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Frontmatter Checklist

## Definition — verbatim
> "## Frontmatter Checklist" — docs/SKILL-AUTHORING.md:312

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/SKILL-AUTHORING.md | 312 | defined here | Pre-commit checklist specifying verification steps for YAML frontmatter syntax, field constraints, model-pin conformity, allowed-tools, and script portability. |

## Consumes
Authored skill definitions in `SKILL.md`, YAML frontmatter configurations, model-pin rationale documentation, and validation scripts.

## Produces
Validation confirmation and pre-commit compliance pass for newly authored Claude Code skills.

## When applied
Before committing a new skill, verifying all frontmatter and structural rules prior to push.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A standardized pre-commit verification checklist in rjm defining mandatory validation gates for all skill authors, ensuring consistent YAML formatting, non-empty trigger descriptions, strict compliance with ADR-080 model-pin policies, and portable multi-environment execution before code enters repository history.
