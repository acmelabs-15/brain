---
package: addy
name: "secrets management"
slug: secrets-management
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# secrets management

## Definition — verbatim
> "## Secrets Management" — skills/security-and-hardening/SKILL.md:332

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/security-and-hardening.md | 5 | used here | Listed as a primary security defense mechanism in the catalog skill summary. |
| skills/security-and-hardening/SKILL.md | 332 | defines | Defines rules for environment file hierarchy, gitignore exclusions, pre-commit secret scanning, and key rotation. |

## Consumes
API keys, database credentials, environment variables, and certificate files.

## Produces
.env.example templates, .gitignore secret patterns, and pre-commit secret scanning hooks.

## When applied
Mandated continuously during implementation and verified during security reviews before any commit.

## Sub-concepts
none

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
Secrets management establishes zero-tolerance practices for committing sensitive credentials into source control, defining strict separation of local env files from templates and immediate rotation protocols if keys are exposed.
