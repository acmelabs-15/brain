---
package: addy
name: Environment Management
slug: environment-management
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Environment Management

## Definition — verbatim
> "CI should never have production secrets. Use separate secrets for CI testing." — skills/ci-cd-and-automation/SKILL.md:281

## Also called — verbatim
`Environment Management` — skills/ci-cd-and-automation/SKILL.md:271

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/ci-cd-and-automation/SKILL.md | 271 | defined here | Section detailing environment variable partitioning and secret isolation between CI and production |

## Consumes
Local environment configs (.env.example, .env.test) and remote secret vaults (GitHub Secrets, platform vaults).

## Produces
Strict separation between development templates, test configs, CI secrets, and production credentials.

## When applied
When configuring project environments, secret managers, and continuous integration workflows.

## Sub-concepts
none

## Part of
ci-cd-and-automation

## Implementation status
clean

## Design notes
In addy, Environment Management establishes a strict hierarchy for environment variables and secret isolation. It commits templates (.env.example) and test configs (.env.test), prohibits committing local .env files, and strictly forbids storing production credentials in CI environments.
