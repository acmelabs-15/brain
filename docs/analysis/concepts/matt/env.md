---
package: matt
name: .env
slug: env
kind: artifact
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

# .env

## Definition — verbatim
(used, not defined)

> "writes it into <code class=\"ah-code-inline\">.env</code> files and GitHub Actions secrets." — external/wizard.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 25 | used here | Names local environment variable files as a primary write target for wizard captured values. |

## Consumes
Scoped credentials and configuration values gathered during wizard execution.

## Produces
Updated local configuration files containing necessary environment variables for local development.

## When applied
When captured configuration values are needed for local development environments.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
The `.env` file is the standard configuration artifact for local environment variables. In Matt's wizard skill, `.env` files are updated idempotently using helper functions, ensuring existing settings are preserved and new secrets are appended or updated without duplication.
