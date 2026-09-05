---
package: addy
path: .github/ISSUE_TEMPLATE/skill-gap.yml
type: config
bytes: 2669
unit: inv-addy-3
deprecated: false
aliases: []
memo_inputs:
  - {path: .github/ISSUE_TEMPLATE/skill-gap.yml, sha256: f6a7748bfe8a1a43c42c7a5e7317c66689b66afd514ee091eb6f8ce07e46d5a4}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .github/ISSUE_TEMPLATE/skill-gap.yml

## Purpose — required, verbatim
> "Report when a skill's guidance was wrong, outdated, or did not apply in your project." — .github/ISSUE_TEMPLATE/skill-gap.yml:2

## Design intent — required
Structured GitHub issue form for users to report defects, drift, or ecosystem mismatches in agent skills. Collects standardized triage information including the affected skill dropdown, misleading excerpt from SKILL.md, project technology stack, observed failure mode, and optional workaround.

## Phase — required
none

## Inputs — required
User issue submission details: affected skill selected from dropdown (.github/ISSUE_TEMPLATE/skill-gap.yml:18-42), excerpt from SKILL.md (.github/ISSUE_TEMPLATE/skill-gap.yml:50), project context (.github/ISSUE_TEMPLATE/skill-gap.yml:59), description of failure (.github/ISSUE_TEMPLATE/skill-gap.yml:68), and optional workaround (.github/ISSUE_TEMPLATE/skill-gap.yml:77).

## Outputs — required
GitHub issue titled with prefix `[skill-gap]: ` (.github/ISSUE_TEMPLATE/skill-gap.yml:3) and labeled with `enhancement` (.github/ISSUE_TEMPLATE/skill-gap.yml:4).

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `Skill gap` — .github/ISSUE_TEMPLATE/skill-gap.yml:1 — defined here
- `enhancement` — .github/ISSUE_TEMPLATE/skill-gap.yml:4 — used here

## Structure
- name: Skill gap — .github/ISSUE_TEMPLATE/skill-gap.yml:1
- description: Report when a skill's guidance was wrong, outdated, or did not apply in your project. — .github/ISSUE_TEMPLATE/skill-gap.yml:2
- title: "[skill-gap]: " — .github/ISSUE_TEMPLATE/skill-gap.yml:3
- labels: ["enhancement"] — .github/ISSUE_TEMPLATE/skill-gap.yml:4
- body: — .github/ISSUE_TEMPLATE/skill-gap.yml:5

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains a hardcoded list of 24 skill slugs in the `Affected skill` dropdown (.github/ISSUE_TEMPLATE/skill-gap.yml:18-41). If skills are added, renamed, or deprecated, this issue template requires manual synchronization.

## Context cost
2669 bytes, ~650 tokens.
