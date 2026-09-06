---
package: matt
name: skills.sh
slug: skills-sh
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0002-ship-as-a-claude-code-plugin.md, sha256: c8f8f946db9fee714fc55270caf6107e749e30316d43fb80cb3ce2f048dd949d}
  - {path: .agents/install-block.md, sha256: 23f776c69d4b8688e18fd2a29d51ed4f2cb40132f0c3acb3a1ca6d45c1d18f65}
  - {path: .changeset/fix-yaml-frontmatter-colons.md, sha256: fb4975a991e85ec802044c96350038db3343be5a604b38a9b5f323bd56223652}
  - {path: README.md, sha256: 4079d981bc2ac0a52aaf2c76d1c1476f4297937a8ff3a2e2322b6b730dc2d4f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills.sh

## Definition — verbatim
(used, not defined)
> "These skills have always been installable via [skills.sh](https://skills.sh/mattpocock/skills) (`npx skills add mattpocock/skills`), which copies editable skill files into a user's project across Claude Code, Codex, and other Agent-Skills-standard harnesses." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:3
> "The plugin is Claude Code only. Everywhere else, [skills.sh](https://skills.sh/mattpocock/skills) copies editable skill files into the project." — .agents/install-block.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0002-ship-as-a-claude-code-plugin.md | 3 | used here | Characterized as the universal installer copying editable skill files into user projects |
| .agents/install-block.md | 27 | used here | Documented as the primary installation route for Codex and other non-Claude agents |
| .changeset/fix-yaml-frontmatter-colons.md | 5 | used here | Cited in patch record fixing frontmatter syntax |
| README.md | 27 | used here | Listed in README installation options for non-Claude harnesses |

## Consumes
The public GitHub repository and its individual skill directories.

## Produces
Locally copied, user-editable skill directories within target consumer repositories.

## When applied
When installing skills into Codex or other non-Claude coding agent environments conforming to the Agent Skills standard.

## Sub-concepts
npx-skills-add-mattpocock-skills

## Part of
none

## Implementation status
clean

## Design notes
The universal skill distribution mechanism and catalog registry (`skills.sh`). In contrast to read-only native plugin distribution, `skills.sh` copies editable skill files directly into a project tree, serving as the fallback installation path for harnesses that lack native multi-path plugin manifests.
