---
package: matt
name: wait-what
slug: wait-what
kind: technique
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/fix-yaml-frontmatter-colons.md, sha256: fb4975a991e85ec802044c96350038db3343be5a604b38a9b5f323bd56223652}
  - {path: .changeset/wait-what-context-map.md, sha256: 6a01f1b4b3686179ceca13206e1bf3cb3cc8e1413ba71a47b15ab780ffd04e2a}
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: docs/productivity/wait-what.md, sha256: 5523a8be6520dc2aa09e1aab9ea3e5e59e6f0d41ffefa5130c3404dd2e34c677}
  - {path: external/wait-what.md, sha256: 74574387b52328039e177e1816b86717875262d832da9043bd5c2ce8040c0c96}
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
  - {path: skills/productivity/wait-what/SKILL.md, sha256: e3f44e3ccbc0e7b62f20ba70b295fc9c9f4aa3f96c77168faee1c71bacbf4215}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# wait-what

## Definition — verbatim
> "Stop. That last message did not land: re-pitch it." — skills/productivity/wait-what/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/fix-yaml-frontmatter-colons.md | 5 | used here | Cited in changeset fixing frontmatter description syntax. |
| .changeset/wait-what-context-map.md | 5 | used here | Documents adding CONTEXT-MAP.md support to wait-what for multi-context repositories. |
| docs/productivity/teach.md | 17 | used here | Highlights wait-what as a conversational recovery tool during technical learning sessions. |
| docs/productivity/wait-what.md | 3 | defined here | Detailed explanation of re-pitching messages using plain English and CONTEXT.md vocabulary. |
| external/wait-what.md | 25 | defined here | External doc page describing the wait-what re-pitching mechanism. |
| external/wait-what.md | 28 | defined here | Explains invocation rules and cognitive state reset mechanism. |
| skills/productivity/README.md | 13 | used here | Lists wait-what in the productivity skills catalog. |
| skills/productivity/wait-what/SKILL.md | 2 | defined here | Three-line skill prompt instructing the model to re-pitch with context in Simplified Technical English. |

## Consumes
A confusing, verbose, or jargon-heavy prior agent message and project vocabulary in CONTEXT.md.

## Produces
A concise, grounded re-pitch of the explanation in ASD-STE100 Simplified Technical English.

## When applied
When the user notices they are skimming or comprehension has broken down.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A minimalist productivity skill designed to repair conversational comprehension without triggering degenerative 'be concise' caveman responses. By explicitly naming the listener's state ('Wait, you lost me') rather than demanding brevity, it prompts the agent to back up, provide missing context, and re-explain in clear, standardized English using the project's established ubiquitous language.
