---
package: matt
name: throwaway branch
slug: throwaway-branch
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: skills/engineering/prototype/LOGIC.md, sha256: f61c7d249e786a79ef289018901c348271e1798dd0b0bc5607b5c6f4d4a01ab9}
  - {path: skills/engineering/prototype/SKILL.md, sha256: 714de632d116bb73f65cdb5a882db15b9369a6713b9a47c0fad827848f0bfbe3}
  - {path: skills/engineering/prototype/UI.md, sha256: 723211e878acbc7b6ff09755263f3295cde724ba902ff0064da41eed51d45ad3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# throwaway branch

## Definition — verbatim
> "6. **Capture it when done.** Fold any validated decision into the real code, then capture the prototype itself as a **primary source**: commit it to a throwaway branch, out of main, and leave a context pointer to that branch on the implementation issue." — skills/engineering/prototype/SKILL.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 58 | defined here | Explains that prototypes are captured on dedicated throwaway branches out of main rather than deleted. |
| skills/engineering/prototype/LOGIC.md | 58 | used here | Directs moving the prototype HTML shell to a throwaway branch to preserve runnable evidence. |
| skills/engineering/prototype/SKILL.md | 26 | defined here | Core rule mandating committing prototype code to an unmerged throwaway branch as a primary source. |
| skills/engineering/prototype/UI.md | 100 | used here | Specifies moving losing UI variants and switchers to the throwaway branch while main keeps only the winner. |

## Consumes
Exploratory prototype code, UI variants, or spike scripts.

## Produces
A git branch named `prototype/<name>` or `research/<name>` branched off main that is never merged.

## When applied
When completing an exploratory spike or prototype once the core question has been settled.

## Sub-concepts
none

## Part of
none

## Implementation status
clean (in skills/engineering/prototype/); defects: missing-path, doc-drift (in CHANGELOG.md)

## Design notes
A throwaway branch preserves runnable evidence and alternative exploration out of the main codebase, keeping main clean while allowing future developers and agents to re-examine or re-run exploratory code.
