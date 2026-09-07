---
package: matt
name: local-ticket-template
slug: local-ticket-template
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# local-ticket-template

## Definition — verbatim
> "<local-ticket-template>" — skills/engineering/to-tickets/SKILL.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/to-tickets/SKILL.md | 69 | defined here | Tag enclosing the standardized markdown template for writing local filesystem ticket files. |

## Consumes
Approved vertical slice tickets when publishing to local files under `.scratch/<feature-slug>/issues/`.

## Produces
Standardized markdown ticket files (`<NN>-<slug>.md`) containing title, what to build, blocked by, status, and acceptance criteria.

## When applied
Step 5 ("Publish the tickets to the configured tracker") when the repository is configured for local file tracking.

## Sub-concepts
none

## Part of
to-tickets

## Implementation status
defects: missing-path (skills/engineering/to-tickets/SKILL.md:11 missing setup command)

## Design notes
A standardized markdown template for individual ticket files stored under `.scratch/<feature-slug>/issues/<NN>-<slug>.md`. It structures tickets with "What to build", "Blocked by", "Status: ready-for-agent", and checklist acceptance criteria. It explicitly enforces writing one ticket per file rather than a combined file, and prohibits volatile file paths or code snippets so tickets remain durable.
