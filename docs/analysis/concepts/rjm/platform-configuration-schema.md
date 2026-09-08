---
package: rjm
name: Platform Configuration Schema
slug: platform-configuration-schema
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Platform Configuration Schema

## Definition — verbatim
> "## Platform Configuration Schema (REQ-003)" — templates/README.md:310

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/README.md | 310 | defined here | Section heading defining the schema governing platform configuration YAML files under REQ-003. |

## Consumes
Platform specification requirements defined in REQ-003-002 and architectural constraints from ADR-006 Amendment 2026-04-28.

## Produces
Validation rules for templates/platforms/*.yaml files declaring per-provider substitution rules consumed by the build pipeline.

## When applied
Applied by validate_templates_schema.py locally and in CI (validate-generated-agents.yml) when platform configurations change.

## Sub-concepts
none

## Part of
platform-transformations

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
Platform Configuration Schema standardizes the structural constraints and substitution mappings for platform-specific generation targets (copilot-cli, vscode, visual-studio). By formalizing schema rules enforced by validate_templates_schema.py, it guarantees that platform build configurations remain declarative, avoid recursive or unsafe YAML structures, and maintain deterministic generation across toolchains.
