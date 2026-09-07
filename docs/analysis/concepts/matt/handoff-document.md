---
package: matt
name: handoff document
slug: handoff-document
kind: artifact
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
  - {path: external/handoff.md, sha256: e5ac1ebb0b42a1e7c5fbddb1e0b75cff7e08aadb480e116082812741225e6f5f}
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
  - {path: skills/productivity/handoff/SKILL.md, sha256: 7c62de979fdc7ac32fb5ddb2146156c917f80ee070d30fadc9d40343c4b6ed25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# handoff document

## Definition — verbatim
> "`handoff` compacts the conversation you are in into a **handoff document**: one markdown file, written to your OS's temporary directory rather than into the workspace, that a fresh [agent](https://www.aihero.dev/ai-coding-dictionary/agent) can read to pick the work up." — docs/productivity/handoff.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/handoff.md | 3 | defined here | Defines the handoff document as a portable markdown file saved to OS temp directories. |
| external/handoff.md | 25 | defined here | Describes compacting conversation into a single markdown handoff file for fresh agents. |
| skills/productivity/handoff/SKILL.md | 8 | defined here | Directs writing a handoff document summarizing the session to the OS temp directory. |
| skills/productivity/README.md | 10 | used here | Summarizes handoff as compacting the conversation into a handoff document. |

## Consumes
A rich conversation history with in-flight work, open questions, and next actions.

## Produces
A markdown file in the OS temporary directory containing live context and suggested skills.

## When applied
When work must travel across sessions, directories, harnesses, or to a collaborator.

## Sub-concepts
suggested-skills

## Part of
handoff

## Implementation status
defects: other (temp files vanishing between sessions; shell interpolation bugs; unverified assumptions passed as facts)

## Design notes
A handoff document provides targeted portability across agent sessions. In Matt's model, it avoids duplicating settled documentation (specs, ADRs, diffs), focusing exclusively on the live operational thread and suggested next skills, purposefully stored outside the repository tree in OS temp directories to avoid workspace clutter.
