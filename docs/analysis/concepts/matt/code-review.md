---
package: matt
name: "/code-review"
slug: code-review
kind: gate
package_phase: matt:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/add-implement-spec-skill.md, sha256: abbf2ece03c6629782df0f815603378f275252c92379529eae0268e101721246}
  - {path: .changeset/fix-yaml-frontmatter-colons.md, sha256: fb4975a991e85ec802044c96350038db3343be5a604b38a9b5f323bd56223652}
  - {path: .changeset/skill-tool-invocation-terminology.md, sha256: 3fb3ccf597c7975987c671483f337a9e4d2804bf595e4bec0d854fbaffc6c8c1}
  - {path: .changeset/user-invoked-skill-invocation.md, sha256: 4ddc0960266b40cedd4087c91c0e1e30fb294f2d0d1fcd96e391b27d3a74d365}
  - {path: .claude-plugin/marketplace.json, sha256: 83e889fed719fc92dc17a4accc69beed7d6c28bc87ec064b515a90a030f72e13}
  - {path: .claude-plugin/plugin.json, sha256: e531ddc6560515397ac32d93334fa3eb586b6b6bcc2e472c3646641fd3d2b951}
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: skills/engineering/implement/SKILL.md, sha256: 6d3fd9e83b8f36e5213854779db49b256a457a7ebb4a503e53fa7dcff696adc3}
  - {path: skills/engineering/tdd/SKILL.md, sha256: cb01f66bebfaa25fa1f88e6b7e769cd9fd9f35b1120b8563749820738814c927}
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# /code-review

## Definition — verbatim
> "`code-review` reviews the diff between `HEAD` and a fixed point you name (a commit, a branch, a tag, `main`, `HEAD~5`) along two axes." — docs/engineering/code-review.md:3

## Also called — verbatim
`/code-review` — docs/engineering/code-review.md:9

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/add-implement-spec-skill.md | 5 | used here | Explains that the implement-spec flow closes with /code-review before marking the PR ready. |
| .changeset/add-implement-spec-skill.md | 5 | used here | Cites code-review tool invocation closing the implementation flow. |
| .changeset/fix-yaml-frontmatter-colons.md | 5 | used here | Notes fixing frontmatter formatting in code-review skill files. |
| .changeset/skill-tool-invocation-terminology.md | 5 | used here | Updates skill tool invocation terminology across code-review. |
| .changeset/user-invoked-skill-invocation.md | 5 | used here | Updates skill invocation guidance for /code-review. |
| .claude-plugin/marketplace.json | 12 | used here | Registers code-review in the plugin marketplace listing. |
| .claude-plugin/marketplace.json | 18 | used here | Lists code-review capabilities in marketplace metadata. |
| .claude-plugin/plugin.json | 4 | used here | Declares the code-review skill in plugin metadata. |
| .claude-plugin/plugin.json | 16 | used here | Configures command routing for /code-review. |
| docs/engineering/code-review.md | 3 | defined here | Defines code-review as a two-axis review of diffs against Standards and Spec. |
| docs/engineering/grill-with-docs.md | 79 | used here | Positions code-review at the conclusion of the main build chain. |
| docs/engineering/implement.md | 3 | used here | Explains that implement invokes code-review before committing. |
| external/ask-matt.md | 47 | used here | Routes review inquiries to /code-review. |
| external/code-review.md | 25 | defined here | Outlines the Standards and Spec dual-axis review mechanism. |
| external/grill-with-docs.md | 65 | used here | References code-review at the end of the engineering lifecycle chain. |
| external/implement.md | 25 | used here | Describes automated code-review execution at the end of ticket implementation. |
| external/tdd.md | 36 | used here | Notes that refactoring is delegated to code-review rather than TDD cycles. |
| external/to-spec.md | 38 | used here | Explains that code-review checks that only agreed-upon test seams were used. |
| skills/engineering/implement/SKILL.md | 13 | used here | Directs implement to run code-review before committing. |
| skills/engineering/tdd/SKILL.md | 38 | used here | States that refactoring belongs to the code-review stage. |
| skills/in-progress/implement-spec/SKILL.md | 31 | used here | Directs running /code-review on the PR branch once all tickets complete. |

## Consumes
A git diff between HEAD and a specified fixed point, repository coding standards, and originating specifications or tickets.

## Produces
An unblended dual-axis review report identifying findings across Standards and Spec.

## When applied
Invoked directly via `/code-review` after implementation, prior to committing, or when validating completed PR branches.

## Sub-concepts
standards-axis, spec-axis

## Part of
ask-matt

## Implementation status
clean

## Design notes
The core quality gate in Matt Pocock's engineering lifecycle. It evaluates git diffs across two strictly separated axes—Standards (conventions, patterns, style) and Spec (functional requirements adherence)—using isolated subagents so neither axis influences or masks defects in the other. It refuses to blend or average scores into a single verdict.
