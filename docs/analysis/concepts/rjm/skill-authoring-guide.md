---
package: rjm
name: Skill Authoring Guide
slug: skill-authoring-guide
kind: reference
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

# Skill Authoring Guide

## Definition — verbatim
> "This guide covers how to create Claude Code skills with correct YAML frontmatter, model selection, and file structure." — docs/SKILL-AUTHORING.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/SKILL-AUTHORING.md | 1 | defined here | Defined in document heading as the comprehensive reference guide for authoring Claude Code skills. |

## Consumes
Skill requirements and platform architectural guidelines.

## Produces
Conformant skill packages containing `SKILL.md`, references, and scripts.

## When applied
> "how to create Claude Code skills with correct YAML frontmatter, model selection, and file structure." — docs/SKILL-AUTHORING.md:3

## Sub-concepts
yaml-frontmatter, bare-rolling-alias, vendor-portability-exec

## Part of
none

## Implementation status
clean

## Design notes
The Skill Authoring Guide serves as the canonical technical standard for creating skills in rjm. It establishes strict guidelines for YAML frontmatter schema validation, ADR-080 model selection rules, progressive disclosure file structures, and cross-platform script execution portability.
