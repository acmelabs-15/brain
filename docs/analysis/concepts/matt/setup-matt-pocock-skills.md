---
package: matt
name: /setup-matt-pocock-skills
slug: setup-matt-pocock-skills
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md, sha256: 8f60cf9bf19f1ee8cc09a15c2e06e1d7a9cb51f79d9a273dd9b20b8a2a494f80}
  - {path: .agents/install-block.md, sha256: 23f776c69d4b8688e18fd2a29d51ed4f2cb40132f0c3acb3a1ca6d45c1d18f65}
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: .changeset/fix-yaml-frontmatter-colons.md, sha256: fb4975a991e85ec802044c96350038db3343be5a604b38a9b5f323bd56223652}
  - {path: .changeset/user-invoked-skill-invocation.md, sha256: 4ddc0960266b40cedd4087c91c0e1e30fb294f2d0d1fcd96e391b27d3a74d365}
  - {path: .out-of-scope/mainstream-issue-trackers-only.md, sha256: b640f37fb4dd35b88eeddd1438bd637dc3f813facfc668074c9a71f82d38847f}
  - {path: .out-of-scope/setup-skill-verify-mode.md, sha256: aba793ba7b3457fd75e7c2560ec0e98e75a051ecfc5f91f73f16fc97475919bd}
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: docs/engineering/setup-matt-pocock-skills.md, sha256: 4a4129edb23d9ba1491e2ef9ccba964ebc3d85830b013c089f0b8b4dd58ebbe6}
  - {path: docs/engineering/wizard.md, sha256: d9936487d804e953412f0f932dd5d273c29643b1995e1a5d443624b3f9059210}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
  - {path: skills/engineering/setup-matt-pocock-skills/agents/openai.yaml, sha256: 9527de0110541c45712319025155aeab8dc7d77c6ed6e5e83271bab1851ab939}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# /setup-matt-pocock-skills

## Definition — verbatim
> "`setup-matt-pocock-skills` answers three questions about one repo: where issues live, what the triage labels are called, and where the domain docs sit." — docs/engineering/setup-matt-pocock-skills.md:3

## Also called — verbatim
> "name: setup-matt-pocock-skills" — skills/engineering/setup-matt-pocock-skills/SKILL.md:2

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md | 1 | used here | Named in title as the configuration command referenced only by hard-dependency skills |
| .agents/install-block.md | 35 | used here | Highlighted as mandatory during multi-skill installer selection |
| .agents/invocation.md | 22 | used here | Catalogued as a user-invoked setup command with implicit invocation disabled |
| .agents/writing-docs.md | 36 | used here | Listed in documentation catalog index of engineering skills |
| .changeset/fix-yaml-frontmatter-colons.md | 5 | used here | Cited in patch record fixing YAML frontmatter formatting |
| .changeset/user-invoked-skill-invocation.md | 7 | used here | Recorded as updated for explicit user-invoked configuration |
| .out-of-scope/mainstream-issue-trackers-only.md | 3 | used here | Discussed regarding scope restriction to mainstream issue trackers |
| .out-of-scope/setup-skill-verify-mode.md | 1 | used here | Cited in architectural decision rejecting separate verification mode |
| CONTEXT.md | 3 | used here | Referenced as the emitter of per-repo configuration files |
| docs/engineering/implement.md | 29 | used here | Cited as required prerequisite setup for tracking integrations |
| docs/engineering/setup-matt-pocock-skills.md | 3 | defined here | Core documentation page defining what the setup skill does |
| docs/engineering/wizard.md | 98 | used here | Cited as setup prerequisite for scaffolding skills |
| external/ask-matt.md | 32 | used here | External router documentation directing unconfigured repositories to run setup |
| external/code-review.md | 40 | used here | Referenced as external configuration setup command |
| external/implement.md | 34 | used here | Cited as prerequisite configuration for build workflows |
| external/setup-matt-pocock-skills.md | 25 | defined here | External documentation page defining the setup skill workflow |
| external/to-spec.md | 32 | used here | Prerequisite setup instruction referenced before spec generation |
| external/triage.md | 32 | used here | Prerequisite setup instruction referenced before issue triage |
| external/wayfinder.md | 33 | used here | Prerequisite setup instruction referenced before mapping decisions |
| external/wizard.md | 70 | used here | Cited as prerequisite setup command |
| skills/engineering/setup-matt-pocock-skills/agents/openai.yaml | 2 | used here | Metadata configuration declaring display name and invocation policy |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 2 | defined here | Skill frontmatter and instruction body establishing setup execution flow |

## Consumes
Repository metadata, git configuration (`git remote -v`), existing `CLAUDE.md`/`AGENTS.md`, and domain documents (`CONTEXT.md`, ADRs).

## Produces
Markdown configuration files in `docs/agents/` (`issue-tracker.md`, `domain.md`, and `triage-labels.md`) and an `## Agent skills` block in `CLAUDE.md` or `AGENTS.md`.

## When applied
> "Reach for it once per repo, before the first use of any other engineering skill." — docs/engineering/setup-matt-pocock-skills.md:13

## Sub-concepts
issue-tracker, triage-label-vocabulary, domain-doc-layout

## Part of
none

## Implementation status
defects: missing-path, other, doc-drift (references non-existent command path under `commands/`; writes label mappings to `triage-labels.md` without remote tracker label entity provisioning).

## Design notes
Foundational configuration skill executed once per repository to establish issue tracker destinations, triage label strings, and domain documentation locations. Embodying Matt Pocock's "config is death" philosophy, it replaces global configuration files with committed Markdown files under `docs/agents/`, enabling identical skill instructions to operate portably across GitHub, GitLab, and local scratch trackers without skill modification.
