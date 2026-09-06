---
package: matt
name: GitHub
slug: github
kind: reference
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .out-of-scope/mainstream-issue-trackers-only.md, sha256: b640f37fb4dd35b88eeddd1438bd637dc3f813facfc668074c9a71f82d38847f}
  - {path: docs/engineering/setup-matt-pocock-skills.md, sha256: 4a4129edb23d9ba1491e2ef9ccba964ebc3d85830b013c089f0b8b4dd58ebbe6}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# GitHub

## Definition — verbatim
> "- **GitHub**: issues live in the repo's GitHub Issues (uses the `gh` CLI)" — skills/engineering/setup-matt-pocock-skills/SKILL.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/mainstream-issue-trackers-only.md | 11 | used here | Cited as an archetype mainstream issue tracker supported with first-class CLI integration. |
| docs/engineering/setup-matt-pocock-skills.md | 42 | used here | Documents GitHub Issues as an out-of-the-box tracker option powered by the gh CLI. |
| external/setup-matt-pocock-skills.md | 39 | used here | External documentation table presenting GitHub as a default tracker option. |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 44 | used here | Specifies GitHub Issues as the default issue tracker configuration using the gh CLI. |

## Consumes
GitHub git remotes, GitHub repository issues, and local `gh` CLI authentication.

## Produces
Configured `docs/agents/issue-tracker.md` routing issues and pull requests to GitHub.

## When applied
Proposed by default during `setup-matt-pocock-skills` whenever the repository's git remote points to GitHub.

## Sub-concepts
none

## Part of
issue-trackers, setup-matt-pocock-skills

## Implementation status
defects: doc-drift, orphan

## Design notes
`GitHub` is the primary and default issue tracking platform target in `mattpocock-skills`. Skills such as `to-spec`, `to-tickets`, and `triage` are architected to integrate directly with GitHub Issues via the `gh` CLI, managing tickets, triage labels, and specifications natively within GitHub repositories.
