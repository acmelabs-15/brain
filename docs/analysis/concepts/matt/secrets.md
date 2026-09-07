---
package: matt
name: secrets.*
slug: secrets
kind: reference
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# secrets.*

## Definition — verbatim
(used, not defined)

> "every <code class=\"ah-code-inline\">secrets.*</code> / <code class=\"ah-code-inline\">vars.*</code> reference in <code class=\"ah-code-inline\">.github/workflows/</code>" — external/wizard.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 36 | used here | Scoped by the wizard skill to determine which encrypted secrets must be gathered and configured. |

## Consumes
Workflow definition files located under `.github/workflows/`.

## Produces
The list of required secret values that the wizard script must prompt the user for and provision.

## When applied
Analyzed during wizard scoping prior to authoring setup stages.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
`secrets.*` represents the GitHub Actions expression syntax used in workflow files to reference encrypted credentials. The wizard skill inspects these references during scoping to detect required CI inputs and verify statically that every minted secret matches an active workflow consumer.
