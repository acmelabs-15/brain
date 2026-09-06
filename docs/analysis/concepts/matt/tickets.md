---
package: matt
name: tickets
slug: tickets
kind: artifact
package_phase: matt:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/add-implement-spec-skill.md, sha256: abbf2ece03c6629782df0f815603378f275252c92379529eae0268e101721246}
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
  - {path: docs/engineering/resolving-merge-conflicts.md, sha256: 08e538aa0d35e65e26063ad44351cb429d84afb5eae5b3add02f6a08cba868f6}
  - {path: docs/engineering/setup-matt-pocock-skills.md, sha256: 4a4129edb23d9ba1491e2ef9ccba964ebc3d85830b013c089f0b8b4dd58ebbe6}
  - {path: docs/engineering/tdd.md, sha256: 879c4bad53e79f3972dd3b37438330f9ff86035843f3bf83ef41ff51e8337860}
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/engineering/implement/SKILL.md, sha256: 6d3fd9e83b8f36e5213854779db49b256a457a7ebb4a503e53fa7dcff696adc3}
  - {path: skills/engineering/implement/agents/openai.yaml, sha256: 8970a8596ade0c28ab427f41a4ea242d6bdf6186c59ebf55e1238dbecaab79dc}
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# tickets

## Definition — verbatim
> "`to-tickets` breaks a plan, spec, or conversation into a set of **tickets** — tracer-bullet vertical slices, each declaring its **blocking edges**." — CHANGELOG.md:183

## Also called — verbatim
`ticket` — docs/engineering/to-tickets.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/add-implement-spec-skill.md | 5 | used here | Mentions reading tickets as a task graph with blocking edges. |
| CHANGELOG.md | 183 | defined here | Defines tickets as tracer-bullet vertical slices declaring blocking edges. |
| docs/engineering/ask-matt.md | 14 | used here | Routes ticket decomposition through to-tickets. |
| docs/engineering/domain-modeling.md | 86 | used here | Relates domain model modifications to individual feature tickets. |
| docs/engineering/grill-with-docs.md | 46 | used here | Distinguishes conversational agreements from actionable issue tickets. |
| docs/engineering/improve-codebase-architecture.md | 64 | used here | Recommends breaking wide architectural changes into separate tickets. |
| docs/engineering/prototype.md | 13 | used here | Explains linking prototype results to implementation tickets. |
| docs/engineering/resolving-merge-conflicts.md | 23 | used here | Advises consulting ticket descriptions when resolving merge conflicts. |
| docs/engineering/setup-matt-pocock-skills.md | 94 | used here | Explains configuring issue trackers for ticket publishing. |
| docs/engineering/tdd.md | 18 | used here | Connects ticket acceptance criteria with TDD test assertions. |
| docs/engineering/to-spec.md | 39 | used here | Clarifies that tickets are execution steps, contrasting with the spec as destination. |
| docs/engineering/to-tickets.md | 3 | defined here | Defines tickets as issue tracker items declaring blocking edges. |
| external/domain-modeling.md | 71 | used here | Discusses scoping domain changes into discrete tickets. |
| external/grill-with-docs.md | 42 | used here | Recommends generating tickets only after requirements stabilize. |
| external/improve-codebase-architecture.md | 54 | used here | Advises batching refactoring tickets by blast radius. |
| external/prototype.md | 30 | used here | Describes capturing prototype outcomes in implementation tickets. |
| external/resolving-merge-conflicts.md | 33 | used here | Details using ticket context to resolve conflicting branch intent. |
| external/setup-matt-pocock-skills.md | 70 | used here | Details issue tracker setup for ticket automation. |
| external/tdd.md | 30 | used here | Highlights deriving test seams from ticket definitions. |
| external/to-spec.md | 41 | used here | Emphasizes that tickets are disposable execution units. |
| external/to-tickets.md | 25 | defined here | Details breaking specs into tracer-bullet tickets. |
| external/triage.md | 26 | used here | Explains triaging incoming tickets before processing. |
| external/writing-for-agents.md | 30 | used here | Outlines guidelines for writing agent-executable tickets. |
| skills/engineering/implement/agents/openai.yaml | 3 | used here | Mentions implementing tickets in agent configuration. |
| skills/engineering/implement/SKILL.md | 3 | used here | States that implement takes a ticket as its primary input. |
| skills/engineering/to-tickets/SKILL.md | 9 | defined here | Defines ticket creation and vertical slice requirements. |
| skills/in-progress/implement-spec/SKILL.md | 7 | used here | Explains interpreting tickets as an executable task graph. |

## Consumes
A specification, architectural plan, or settled conversation.

## Produces
Issue tracker items (or local markdown files) containing vertical slice acceptance criteria, pre-agreed seams, and blocking edges.

## When applied
When a spec or multi-session plan is decomposed into bite-sized units ready for execution by `/implement` or `implement-spec`.

## Sub-concepts
tracer-bullet, blocking-edges, ready-frontier

## Part of
to-tickets

## Implementation status
defects: missing-path

## Design notes
Discrete, agent-ready execution units in Matt Pocock's methodology. Rather than splitting tasks by technical layer (e.g. backend vs frontend), tickets are constructed as vertical tracer-bullet slices spanning schema, logic, UI, and tests. Each ticket declares its blocking edges and is sized specifically to execute within a single fresh context window, making tickets disposable once completed.
