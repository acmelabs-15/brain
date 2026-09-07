---
package: matt
name: implement
slug: implement
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: docs/engineering/wizard.md, sha256: d9936487d804e953412f0f932dd5d273c29643b1995e1a5d443624b3f9059210}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
  - {path: skills/engineering/implement/SKILL.md, sha256: 6d3fd9e83b8f36e5213854779db49b256a457a7ebb4a503e53fa7dcff696adc3}
  - {path: skills/engineering/implement/agents/openai.yaml, sha256: 8970a8596ade0c28ab427f41a4ea242d6bdf6186c59ebf55e1238dbecaab79dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# implement

## Definition — verbatim
> "`implement` builds work that has already been decided. You point it at a [ticket](https://www.aihero.dev/ai-coding-dictionary/ticket), a [spec](https://www.aihero.dev/ai-coding-dictionary/spec), or the plan you just agreed in the conversation, and it writes the code, drives [tdd](https://aihero.dev/skills-tdd) at the seams, typechecks as it goes, runs [code-review](https://aihero.dev/skills-code-review) at the end, and commits to the current branch." — docs/engineering/implement.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/grill-with-docs.md | 61 | used here | Mentions the downstream implement skill in relation to architectural inputs. |
| docs/engineering/improve-codebase-architecture.md | 50 | used here | Describes moving architectural decisions into to-spec, to-tickets, and implement after survey completion. |
| docs/engineering/wizard.md | 98 | used here | References the implement skill as part of standard engineering task execution. |
| external/ask-matt.md | 32 | used here | Routes users with an existing spec or ticket directly to /implement. |
| external/code-review.md | 29 | used here | Identifies implement as the upstream authoring phase before code review evaluates the changes. |
| external/grill-with-docs.md | 52 | used here | Notes relationship between upstream architectural decisions and downstream implement execution. |
| external/implement.md | 25 | defined here | Full external skill documentation explaining how implement turns decided plans into commits. |
| external/improve-codebase-architecture.md | 47 | used here | Charts progression from deepening decisions into to-spec, to-tickets, and implement. |
| external/prototype.md | 48 | used here | Notes that validated prototype state models transition into real code through implement. |
| external/tdd.md | 30 | used here | Contrasts standalone tdd usage with automated tdd driven inside implement. |
| external/to-spec.md | 30 | used here | Explains that clear, small specifications can be passed straight into implement without intermediate ticketing. |
| external/triage.md | 73 | used here | Directs triaged bug reports with known fixes to implement. |
| external/wayfinder.md | 30 | used here | Contrasts wayfinder's decision-seeking exploration with implement's execution focus. |
| external/wizard.md | 70 | used here | Contrasts wizard's interactive guidance with direct implement invocation. |
| skills/engineering/implement/agents/openai.yaml | 2 | defined here | UI metadata declaring the Implement agent display name and description. |
| skills/engineering/implement/SKILL.md | 2 | defined here | Frontmatter declaration naming the implement skill and defining its execution contract. |

## Consumes
A ticket, a spec, or an agreed-upon plan, along with pre-agreed testing seams.

## Produces
Working implementation code, passing TDD tests, passing typechecks, completed code review, and a git commit on the current branch.

## When applied
When building work that has already been decided and scoped upstream, invoked strictly via user command (/implement).

## Sub-concepts
red-green-slice, seams

## Part of
main-build-chain

## Implementation status
clean

## Design notes
implement is the dedicated construction skill in Matt's lifecycle. Its critical architectural invariant is that it never re-opens design questions or re-interviews the user: it consumes settled upstream decisions and methodically translates them into tested, typechecked commits via TDD at agreed seams.
