---
package: addy
name: Handling Generated Files
slug: handling-generated-files
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Handling Generated Files

## Definition — verbatim
> "- **Commit generated files** only if the project expects them (e.g., `package-lock.json`, Prisma migrations)" — skills/git-workflow-and-versioning/SKILL.md:246

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 244 | defined here | Section heading introducing rules for committing expected generated files and ignoring build artifacts. |

## Consumes
Generated files, build outputs, lockfiles, environment configurations, and `.gitignore`.

## Produces
A clean git repository free of unwanted build artifacts, local environment variables, or transient outputs.

## When applied
Whenever adding or staging files that may contain machine-generated content, build outputs, or dependencies.

## Sub-concepts
none

## Part of
- git-workflow-and-versioning

## Implementation status
clean

## Design notes
A repository governance pattern that explicitly distinguishes between required generated artifacts (such as lockfiles and schema migrations) and transient build outputs or environment secrets that must be excluded via `.gitignore`.
