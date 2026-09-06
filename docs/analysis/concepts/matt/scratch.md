---
package: matt
name: .scratch/
slug: scratch
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md, sha256: 7dcda20a2eb4bdc89b95d1143423c0691309921cadae3132e6424f371030506e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .scratch/

## Definition — verbatim
> "Issues and specs for this repo live as markdown files in `.scratch/`." — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTEXT.md | 8 | used here | Mentions .scratch/ as an example local markdown issue tracker convention. |
| external/to-spec.md | 32 | used here | Confirms that to-spec publishes specs as local markdown files under .scratch/. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md | 3 | used here | Establishes the local markdown issue tracker directory convention under .scratch/. |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 28 | used here | Checks for .scratch/ as a signal that a local-markdown tracker is in use. |

## Consumes
Local filesystem repository root directory.

## Produces
Organized feature folders (`.scratch/<feature-slug>/`) containing `spec.md` and numbered ticket files (`issues/<NN>-<slug>.md`).

## When applied
Used when the local markdown issue tracker option is configured for solo, private, or offline development.

## Sub-concepts
none

## Part of
issue-tracker

## Implementation status
defects: script-bug (open template bug #200 where generated issue files can duplicate acceptance criteria)

## Design notes
A first-class, zero-dependency issue tracker convention storing specs and numbered issue markdown files directly within a local repository directory, supporting full planning and triage workflows without external network services.
