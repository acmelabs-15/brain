---
package: rjm
name: Installation Artifacts
slug: installation-artifacts
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Installation Artifacts

## Definition — verbatim
(used, not defined)

> "When adding new installation artifacts, use the **Installation Artifacts** section in the PRD template to verify each referenced file exists and targets the correct audience." — docs/customization.md:218

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/customization.md | 218 | used here | Section in PRD template used to verify that new installation files exist and target the correct audience. |

## Consumes
PRD specifications and proposed installation/distribution artifact paths.

## Produces
Validation audit ensuring referenced installation files exist and target appropriate user or contributor audiences.

## When applied
Applied during PRD preparation when introducing or modifying installation artifacts across platforms.

## Sub-concepts
none

## Part of
prd-template

## Implementation status
defects: missing-path

## Design notes
A checklist section in rjm's PRD template that audits every proposed file reference in installer configurations (e.g. InstructionsFile) to verify that the target exists and properly targets either end users (in src/) or contributors (at repo root) without mixing audiences.
