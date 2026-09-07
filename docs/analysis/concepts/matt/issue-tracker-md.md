---
package: matt
name: issue-tracker.md
slug: issue-tracker-md
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# issue-tracker.md

## Definition — verbatim
(used, not defined)
> "Step 1 depends on <code class="ah-code-inline">docs/agents/issue-tracker.md</code>, which <a class="ah-prose-a" href="/skills-setup-matt-pocock-skills">setup-matt-pocock-skills</a> writes." — external/code-review.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review.md | 40 | used here | Consulted during code review to identify issue tracking mechanisms and fetch linked specs. |
| external/setup-matt-pocock-skills.md | 33 | defined here | Configuration file written under docs/agents/ establishing repo-specific issue tracking integration. |
| external/triage.md | 33 | used here | Configuration file checked to determine whether external pull requests fall within triage scope. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A repository configuration markdown file path located under `docs/agents/issue-tracker.md` recording issue tracker integration mechanics, cataloged as `kind: name-only` per D-023 rather than an SDLC lifecycle concept.
