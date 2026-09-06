---
package: matt
name: GitLab
slug: gitlab
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .out-of-scope/mainstream-issue-trackers-only.md, sha256: b640f37fb4dd35b88eeddd1438bd637dc3f813facfc668074c9a71f82d38847f}
  - {path: docs/engineering/setup-matt-pocock-skills.md, sha256: 4a4129edb23d9ba1491e2ef9ccba964ebc3d85830b013c089f0b8b4dd58ebbe6}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# GitLab

## Definition — verbatim
(used, not defined)
> "- **GitLab**: issues live in the repo's GitLab Issues (uses the [`glab`](https://gitlab.com/gitlab-org/cli) CLI)" — skills/engineering/setup-matt-pocock-skills/SKILL.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/mainstream-issue-trackers-only.md | 11 | used here | Cited as an example of a mainstream issue tracker tool that meets the threshold for first-class integration support. |
| docs/engineering/setup-matt-pocock-skills.md | 43 | used here | Listed as an issue tracker option configuring GitLab Issues via the glab CLI. |
| external/setup-matt-pocock-skills.md | 39 | used here | Table entry documenting GitLab Issues setup and requirements. |
| external/triage.md | 62 | used here | Mentioned as one of the alternative tracker backends supported via configuration. |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 45 | used here | Option for repo issue tracking using GitLab Issues via the glab CLI. |

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
clean (in .out-of-scope/mainstream-issue-trackers-only.md); defects: doc-drift, internal-contradiction (in docs/engineering/setup-matt-pocock-skills.md, external/setup-matt-pocock-skills.md); missing-path, script-bug (in external/triage.md, skills/engineering/setup-matt-pocock-skills/SKILL.md)

## Design notes
GitLab is an external issue tracking platform and code forge supported by setup-matt-pocock-skills via the glab CLI, rather than a software development lifecycle concept.
