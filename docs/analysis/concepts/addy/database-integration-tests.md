---
package: addy
name: Database Integration Tests
slug: database-integration-tests
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

# Database Integration Tests

## Definition — verbatim
> "### With Database Integration Tests" — skills/ci-cd-and-automation/SKILL.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/ci-cd-and-automation/SKILL.md | 100 | defined here | GitHub Actions service container configuration running PostgreSQL with migrations for integration tests |

## Consumes
Docker container service definition (e.g. Postgres image), database migration scripts, test database secrets.

## Produces
Ephemeral isolated database service, migrated schema, and integration test execution results.

## When applied
When CI jobs need to verify real database queries, ORM migrations, or relational transactions against real database instances.

## Sub-concepts
none

## Part of
ci-cd-and-automation

## Implementation status
clean

## Design notes
In addy, Database Integration Tests demonstrate how to spin up ephemeral service containers (such as PostgreSQL 16) with health checks in GitHub Actions. It stresses deploying real schema migrations and storing test database credentials in GitHub Secrets, ensuring integration tests run against authentic database instances without hardcoded secrets.
