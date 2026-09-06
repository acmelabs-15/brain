---
package: matt
name: to-tickets
slug: to-tickets
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md, sha256: 8f60cf9bf19f1ee8cc09a15c2e06e1d7a9cb51f79d9a273dd9b20b8a2a494f80}
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: .changeset/skill-tool-invocation-terminology.md, sha256: 3fb3ccf597c7975987c671483f337a9e4d2804bf595e4bec0d854fbaffc6c8c1}
  - {path: .changeset/user-invoked-skill-invocation.md, sha256: 4ddc0960266b40cedd4087c91c0e1e30fb294f2d0d1fcd96e391b27d3a74d365}
  - {path: .out-of-scope/mainstream-issue-trackers-only.md, sha256: b640f37fb4dd35b88eeddd1438bd637dc3f813facfc668074c9a71f82d38847f}
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/engineering/to-tickets/agents/openai.yaml, sha256: 21bc6215fffcd7614e9f772bb1760e87cc5fc7dcc707e7d282bc9414267a6090}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# to-tickets

## Definition — verbatim
> "  display_name: \"To Tickets\"" — skills/engineering/to-tickets/agents/openai.yaml:2
> "  short_description: \"Split a plan into tracer-bullet tickets\"" — skills/engineering/to-tickets/agents/openai.yaml:3
> "You invoke this by typing <code class=\"ah-code-inline\">/to-tickets</code>. The <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/agent\">agent</a> won&#x27;t reach for it on its own." — external/to-tickets.md:28

## Also called — verbatim
> "<code class=\"ah-code-inline\">to-tickets</code> takes a plan, a <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/spec\">spec</a>, or the conversation you are in, and breaks it into a set of <strong class=\"ah-prose-strong\"><a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/ticket\">tickets</a></strong> on your issue tracker." — external/to-tickets.md:25

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md | 7 | used here | Listed as a hard-dependency skill requiring explicit setup pointer |
| .agents/writing-docs.md | 36 | used here | Listed in documentation catalog of promoted engineering skills |
| .changeset/skill-tool-invocation-terminology.md | 5 | used here | Cited in patch aligning skill and tool invocation terminology |
| .changeset/user-invoked-skill-invocation.md | 5 | used here | Documented as an explicitly user-invoked skill |
| .out-of-scope/mainstream-issue-trackers-only.md | 7 | used here | Discussed regarding issue tracker backend limitations |
| CONTEXT.md | 8 | used here | Referenced as an engineering skill reading and writing to the issue tracker |
| docs/engineering/grill-with-docs.md | 79 | used here | Downstream routing destination following specification review |
| docs/engineering/implement.md | 9 | used here | Suggested preceding skill to decompose complex tasks into tracer-bullet tickets |
| docs/engineering/improve-codebase-architecture.md | 50 | used here | Cited as next step after architectural survey decisions are made |
| external/ask-matt.md | 32 | used here | Recommended by router for splitting specifications into tasks |
| external/code-review.md | 72 | used here | Cited in workflow sequencing following review outcomes |
| external/implement.md | 28 | used here | Referenced as decomposition precursor to implementation |
| external/improve-codebase-architecture.md | 47 | used here | Transition skill converting architectural plans into execution tickets |
| external/setup-matt-pocock-skills.md | 30 | used here | Listed as a hard dependency requiring configured issue tracker |
| external/tdd.md | 68 | used here | Suggested when test work requires multi-ticket decomposition |
| external/to-spec.md | 30 | used here | Recommended workflow partner executing after spec creation |
| external/to-spec.md | 44 | used here | Cited in workflow transition table |
| external/to-tickets.md | 28 | defined here | External documentation establishing purpose, invocation, and constraints |
| external/triage.md | 26 | used here | Mentioned regarding boundaries between triaging incoming work and ticket generation |
| external/triage.md | 49 | used here | Listed in workflow transitions |
| external/wayfinder.md | 30 | used here | Downstream skill invoked once architectural exploration clears |
| skills/engineering/to-tickets/agents/openai.yaml | 2 | defined here | Declares display name and invocation policy |

## Consumes
A specification issue, plan, or active conversation thread, along with issue tracker configuration from `docs/agents/issue-tracker.md`.

## Produces
A set of vertical-slice issues on the configured issue tracker, each with defined blocking edges and acceptance criteria.

## When applied
When a design or spec is ready and the implementation is too large for a single context window, requiring decomposition into discrete, ordered tasks.

## Sub-concepts
none

## Part of
hard-dependencies

## Implementation status
defects: missing-path (cites non-existent `commands/setup-matt-pocock-skills.md` in skill body).

## Design notes
Breaks complex specifications or plans into independently buildable and verifiable vertical slices ("tracer bullets"). By enforcing vertical cuts through all architecture layers (rather than horizontal slicing by layer) and capturing explicit dependency edges, it generates tasks optimized for single-session agent execution without mid-task blocked states.
