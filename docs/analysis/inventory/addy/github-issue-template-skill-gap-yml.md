---
package: addy
path: .github/ISSUE_TEMPLATE/skill-gap.yml
type: config
bytes: 2669
unit: inv-addy-3
aliases: []
memo_inputs:
  - {path: .github/ISSUE_TEMPLATE/skill-gap.yml, sha256: f6a7748bfe8a1a43c42c7a5e7317c66689b66afd514ee091eb6f8ce07e46d5a4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .github/ISSUE_TEMPLATE/skill-gap.yml

## Purpose — required, verbatim
> "Report when a skill's guidance was wrong, outdated, or did not apply in your project." — .github/ISSUE_TEMPLATE/skill-gap.yml:2

## Design intent — required
GitHub issue template providing a structured feedback mechanism for users and agents to report when an engineering skill produces incorrect, obsolete, or ecosystem-mismatched guidance. Captures the specific skill affected, the misleading instruction excerpt, project context, failure manifestation, and any local workarounds.

## Phase — required
none

## Inputs — required
User input submitted via GitHub issue form: affected skill selection (dropdown of 24 core skills), relevant instruction or excerpt, project context (language, build tool, test runner), failure description, and optional workaround.

## Outputs — required
GitHub issues created with title prefix `"[skill-gap]: "` — .github/ISSUE_TEMPLATE/skill-gap.yml:3 and label `"enhancement"` — .github/ISSUE_TEMPLATE/skill-gap.yml:4.

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `skill-gap` — .github/ISSUE_TEMPLATE/skill-gap.yml:3 — defined here
- `Affected skill` — .github/ISSUE_TEMPLATE/skill-gap.yml:15 — defined here
- `Relevant instruction or excerpt` — .github/ISSUE_TEMPLATE/skill-gap.yml:49 — defined here
- `Project context` — .github/ISSUE_TEMPLATE/skill-gap.yml:58 — defined here
- `What did not work or did not apply` — .github/ISSUE_TEMPLATE/skill-gap.yml:67 — defined here
- `What you did instead` — .github/ISSUE_TEMPLATE/skill-gap.yml:76 — defined here

## Structure
- name: Skill gap
- description
- title
- labels
- body: markdown intro
- body: dropdown Affected skill
- body: textarea Relevant instruction or excerpt
- body: textarea Project context
- body: textarea What did not work or did not apply
- body: textarea What you did instead

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `orphan` · .github/ISSUE_TEMPLATE/skill-gap.yml:1 · Issue template configuration file is not invoked by any workflow or skill within the repository.

## Observations
The dropdown list in lines 18-41 enumerates all 24 skills in the package plus `other / not sure` (line 42).

## Context cost
2669 bytes (~667 tokens). Static YAML configuration.
