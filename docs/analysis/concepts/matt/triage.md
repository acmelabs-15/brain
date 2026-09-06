---
package: matt
name: triage
slug: triage
kind: phase
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md, sha256: 8f60cf9bf19f1ee8cc09a15c2e06e1d7a9cb51f79d9a273dd9b20b8a2a494f80}
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: .changeset/skill-tool-invocation-terminology.md, sha256: 3fb3ccf597c7975987c671483f337a9e4d2804bf595e4bec0d854fbaffc6c8c1}
  - {path: .changeset/user-invoked-skill-invocation.md, sha256: 4ddc0960266b40cedd4087c91c0e1e30fb294f2d0d1fcd96e391b27d3a74d365}
  - {path: .out-of-scope/mainstream-issue-trackers-only.md, sha256: b640f37fb4dd35b88eeddd1438bd637dc3f813facfc668074c9a71f82d38847f}
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md, sha256: afd6852a80185217bd28aa5cbe456bef1e85be25be7bd1fba382d5b8ee428325}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md, sha256: ea175f73d193b3f55819c0ed9bbccf6ee0e70ad8f928e3d7607596c53380acd6}
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
  - {path: skills/engineering/triage/agents/openai.yaml, sha256: 2e683717720cf456d165d0bb1a68bb600d0b6a8ccb61841c172e50d26f95351c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# triage

## Definition — verbatim
> "description: Move issues and external PRs through a state machine of triage roles, categorise, verify, grill if needed, and write agent-ready briefs." — skills/engineering/triage/SKILL.md:3
> "  display_name: \"Triage\"" — skills/engineering/triage/agents/openai.yaml:2

## Also called — verbatim
> "# Triage" — skills/engineering/triage/SKILL.md:7

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md | 7 | used here | Identified as a hard-dependency skill requiring configured issue tracker |
| .agents/writing-docs.md | 36 | used here | Listed in promoted engineering documentation catalog |
| .changeset/skill-tool-invocation-terminology.md | 5 | used here | Updated in changeset standardizing invocation terminology |
| .changeset/user-invoked-skill-invocation.md | 5 | used here | Configured as an explicitly user-invoked skill |
| .out-of-scope/mainstream-issue-trackers-only.md | 7 | used here | Discussed regarding issue tracker compatibility scope |
| CONTEXT.md | 8 | used here | Referenced as reading from and writing to the repository issue tracker |
| docs/engineering/ask-matt.md | 14 | used here | Router guidance directing incoming bug reports or feature requests to triage |
| docs/engineering/domain-modeling.md | 86 | used here | Cited in workflow transitions |
| docs/productivity/grilling.md | 87 | used here | Transition destination when raw ideas require issue organization |
| external/ask-matt.md | 29 | used here | Recommended entry point for handling incoming requests |
| external/diagnosing-bugs.md | 30 | used here | Cited regarding shallow verification versus deep bug diagnosis |
| external/domain-modeling.md | 52 | used here | Cited in domain modelling workflow references |
| external/grilling.md | 46 | used here | Transition destination for issues needing structured breakdown |
| external/setup-matt-pocock-skills.md | 30 | used here | Hard dependency needing setup configuration before execution |
| external/to-spec.md | 32 | used here | Listed alongside spec and ticket creation skills |
| external/triage.md | 2 | defined here | External documentation establishing purpose, states, and guidelines |
| external/triage.md | 24 | used here | External documentation heading and overview |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md | 18 | used here | Documented as consumer of GitHub issue labels |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md | 19 | used here | Documented as consumer of GitLab issue labels |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 29 | used here | Setup prerequisite check verifying triage label presence |
| skills/engineering/triage/agents/openai.yaml | 2 | defined here | Metadata declaring display name and invocation policy |
| skills/engineering/triage/SKILL.md | 3 | defined here | Core skill instruction file establishing triage state machine |

## Consumes
Incoming issues, bug reports, and external pull requests from the configured issue tracker, plus triage label vocabulary from `docs/agents/triage-labels.md`.

## Produces
Triage label updates, verification assessments, AI disclaimer comments, and agent-ready implementation briefs.

## When applied
When reviewing incoming issues or external PRs to evaluate validity, reproduce reported problems, clarify missing details, or promote items to implementation-ready status.

## Sub-concepts
triage-label-vocabulary

## Part of
hard-dependencies

## Implementation status
defects: missing-path, other (references non-existent `commands/setup-matt-pocock-skills.md`; depends on remote label creation that setup does not perform automatically).

## Design notes
The intake phase and state machine for raw incoming work (issues and external PRs). It processes items across five canonical roles (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`), applying verification standards and adding standard AI attribution disclaimers to ensure that downstream implementation agents receive well-formed, reproduction-proven briefs.
