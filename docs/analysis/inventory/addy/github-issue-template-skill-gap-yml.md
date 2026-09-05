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
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/ISSUE_TEMPLATE/skill-gap.yml

## Purpose — required, verbatim
> "Report when a skill's guidance was wrong, outdated, or did not apply in your project." — .github/ISSUE_TEMPLATE/skill-gap.yml:2

## Design intent — required
Structured GitHub issue form for community and user feedback when agent skill instructions mislead coding agents or fail in specific project ecosystems. It captures the affected skill, excerpt, project context, failure description, and workaround, creating a structured feedback loop for skill maintenance.

## Phase — required
none

## Inputs — required
User input via GitHub Issue form fields: affected skill dropdown selection (.github/ISSUE_TEMPLATE/skill-gap.yml:13), relevant instruction or excerpt textarea (.github/ISSUE_TEMPLATE/skill-gap.yml:47), project context textarea (.github/ISSUE_TEMPLATE/skill-gap.yml:56), failure description textarea (.github/ISSUE_TEMPLATE/skill-gap.yml:65), and optional workaround textarea (.github/ISSUE_TEMPLATE/skill-gap.yml:74).

## Outputs — required
GitHub issue with title prefix "[skill-gap]: " — .github/ISSUE_TEMPLATE/skill-gap.yml:3 and label "enhancement" — .github/ISSUE_TEMPLATE/skill-gap.yml:4.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Skill gap` — .github/ISSUE_TEMPLATE/skill-gap.yml:1 — defined here
- `Affected skill` — .github/ISSUE_TEMPLATE/skill-gap.yml:15 — defined here
- `Relevant instruction or excerpt` — .github/ISSUE_TEMPLATE/skill-gap.yml:49 — defined here
- `Project context` — .github/ISSUE_TEMPLATE/skill-gap.yml:58 — defined here
- `What did not work or did not apply` — .github/ISSUE_TEMPLATE/skill-gap.yml:67 — defined here
- `What you did instead` — .github/ISSUE_TEMPLATE/skill-gap.yml:76 — defined here
- `SKILL.md` — .github/ISSUE_TEMPLATE/skill-gap.yml:50 — used here

## Structure
- Form metadata (name, description, title, labels) — .github/ISSUE_TEMPLATE/skill-gap.yml:1-4
- Guidance banner markdown — .github/ISSUE_TEMPLATE/skill-gap.yml:6-11
- Dropdown: Affected skill — .github/ISSUE_TEMPLATE/skill-gap.yml:12-45
- Textarea: Relevant instruction or excerpt — .github/ISSUE_TEMPLATE/skill-gap.yml:46-54
- Textarea: Project context — .github/ISSUE_TEMPLATE/skill-gap.yml:55-63
- Textarea: What did not work or did not apply — .github/ISSUE_TEMPLATE/skill-gap.yml:64-72
- Textarea: What you did instead — .github/ISSUE_TEMPLATE/skill-gap.yml:73-81

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The dropdown enumerates all 24 skills in the repository in alphabetical order plus "other / not sure" — .github/ISSUE_TEMPLATE/skill-gap.yml:42, providing an accurate catalog sync for issue triage.

## Context cost
2669 bytes, ~600 tokens. Isolated issue template; loads nothing when referenced.
