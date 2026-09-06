---
package: matt
name: local markdown
slug: local-markdown
kind: artifact
package_phase: cross-phase
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

# local markdown

## Definition — verbatim
> "| **Local markdown** | files under `.scratch/<feature>/` in this repo | nothing: no remote at all |" — docs/engineering/setup-matt-pocock-skills.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/mainstream-issue-trackers-only.md | 18 | defined here | Identified as an escape hatch for lightweight in-repo tracking without external backends. |
| docs/engineering/setup-matt-pocock-skills.md | 44 | defined here | Documented as an issue tracker option storing issue files under `.scratch/<feature>/`. |
| external/setup-matt-pocock-skills.md | 39 | defined here | Table row defining local markdown files under `.scratch/<feature>/` as a first-class issue tracker. |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 46 | used here | Configured as an issue tracking option for solo projects or repos without remotes. |

## Consumes
Local directory structure (`.scratch/<feature>/`).

## Produces
Markdown files representing tickets, tasks, and issues stored directly in the repository.

## When applied
Selected during `/setup-matt-pocock-skills` when working without an external issue tracker or on solo offline projects.

## Sub-concepts
none

## Part of
none

## Implementation status
clean (in .out-of-scope/mainstream-issue-trackers-only.md); defects: doc-drift, internal-contradiction (in docs/engineering/setup-matt-pocock-skills.md, external/setup-matt-pocock-skills.md); missing-path, other (in skills/engineering/setup-matt-pocock-skills/SKILL.md)

## Design notes
Local markdown serves as a first-class, zero-dependency issue tracker backend storing work items under `.scratch/<feature>/`, eliminating the need for remote services while supporting downstream skills like `to-tickets` and `triage`.
