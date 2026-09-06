---
package: addy
name: Basic CI Pipeline
slug: basic-ci-pipeline
kind: template
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

# Basic CI Pipeline

## Definition — verbatim
> "### Basic CI Pipeline" — skills/ci-cd-and-automation/SKILL.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/ci-cd-and-automation/SKILL.md | 58 | defined here | Baseline GitHub Actions workflow configuration executing lint, typecheck, test, build, and security audit |

## Consumes
Git repository with Node.js project configuration (package.json, lockfile).

## Produces
.github/workflows/ci.yml configuration file defining automated CI jobs.

## When applied
When scaffolding a new repository or establishing foundational continuous integration workflows.

## Sub-concepts
lint-check, type-check, security-audit

## Part of
ci-cd-and-automation

## Implementation status
clean

## Design notes
In addy, the Basic CI Pipeline provides an out-of-the-box GitHub Actions workflow template that automates essential code hygiene checks. Running on pull requests and pushes to main, it standardizes checkout, Node environment caching, dependency installation via npm ci, linting, typechecking, test execution with coverage, build verification, and high-severity vulnerability auditing.
