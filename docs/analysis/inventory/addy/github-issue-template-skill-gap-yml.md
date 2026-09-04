---
package: addy
path: .github/ISSUE_TEMPLATE/skill-gap.yml
type: config
bytes: 2669
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .github/ISSUE_TEMPLATE/skill-gap.yml, sha256: f6a7748bfe8a1a43c42c7a5e7317c66689b66afd514ee091eb6f8ce07e46d5a4}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .github/ISSUE_TEMPLATE/skill-gap.yml

## Purpose — required, verbatim
> "Report when a skill's guidance was wrong, outdated, or did not apply in your project." — .github/ISSUE_TEMPLATE/skill-gap.yml:2

## Design intent — required
Defines a structured GitHub Issue template allowing users and developers to report inaccuracies, outdated guidance, or framework mismatches encountered when executing skills, capturing structured triage metadata.

## Phase — required
none

## Inputs — required
User input via GitHub Issue form fields: affected skill dropdown selection, relevant excerpt from SKILL.md, project context, failure description, and optional workaround.

## Outputs — required
GitHub issue titled with prefix `[skill-gap]: ` and labeled `enhancement`.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Skill gap` — .github/ISSUE_TEMPLATE/skill-gap.yml:1 — defined here
- `enhancement` — .github/ISSUE_TEMPLATE/skill-gap.yml:4 — used here
- `Affected skill` — .github/ISSUE_TEMPLATE/skill-gap.yml:15 — defined here
- `Relevant instruction or excerpt` — .github/ISSUE_TEMPLATE/skill-gap.yml:49 — defined here
- `Project context` — .github/ISSUE_TEMPLATE/skill-gap.yml:58 — defined here
- `What did not work or did not apply` — .github/ISSUE_TEMPLATE/skill-gap.yml:67 — defined here
- `What you did instead` — .github/ISSUE_TEMPLATE/skill-gap.yml:76 — defined here

## Structure
- name
- description
- title
- labels
- body

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Lists all 24 primary skills in lines 18-41 as options in the dropdown selector.

## Context cost
2669 bytes, ~600 tokens.
