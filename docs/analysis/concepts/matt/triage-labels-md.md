---
package: matt
name: triage-labels.md
slug: triage-labels-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md, sha256: 7dcda20a2eb4bdc89b95d1143423c0691309921cadae3132e6424f371030506e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# triage-labels.md

## Definition — verbatim
(used, not defined)
> "- Triage state is recorded as a `Status:` line near the top of each issue file (see `triage-labels.md` for the role strings)" — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTEXT.md | 19 | used here | Cites docs/agents/triage-labels.md as the mapping between canonical roles and tracker labels. |
| external/setup-matt-pocock-skills.md | 33 | defined here | Lists triage-labels.md as written to docs/agents/ when triage is installed. |
| external/triage.md | 54 | used here | Explains that setup-matt-pocock-skills writes triage-labels.md to configure label vocabulary. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md | 10 | used here | References triage-labels.md for role strings recorded on Status lines in local issues. |

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
defects: missing-path, script-bug (CONTEXT.md cites non-existent file path; setup writes file but does not create labels in tracker per #616)

## Design notes
This name designates the configuration template file emitted into target repositories by setup-matt-pocock-skills to map canonical triage roles to repository-specific issue tracker labels rather than an operational lifecycle concept.
