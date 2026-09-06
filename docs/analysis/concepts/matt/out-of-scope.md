---
package: matt
name: out of scope
slug: out-of-scope
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .out-of-scope/mainstream-issue-trackers-only.md, sha256: b640f37fb4dd35b88eeddd1438bd637dc3f813facfc668074c9a71f82d38847f}
  - {path: .out-of-scope/question-limits.md, sha256: a4c7ab33523e8f88b75be6549f657cf086b86d77be48b87d48276311e368cc9d}
  - {path: .out-of-scope/setup-skill-verify-mode.md, sha256: aba793ba7b3457fd75e7c2560ec0e98e75a051ecfc5f91f73f16fc97475919bd}
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/engineering/to-spec/SKILL.md, sha256: 43ad9cf318e5e7d3d1fa360253a37021796dc87a0c2e595ad262661a10f85088}
  - {path: skills/engineering/triage/AGENT-BRIEF.md, sha256: 7f5f87fed3033df1b06e083c480f3e847b1fbb0647746b8a4c6a50f9f26ef44f}
  - {path: skills/engineering/triage/OUT-OF-SCOPE.md, sha256: 1fbf9b432130c6380aa65813b55553cfda150309b27c595e183f8e335b8a190d}
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
  - {path: skills/in-progress/writing-shape/SKILL.md, sha256: f5e6c57bdd85178ace4a260c92f46da6b64ddee18215b461d875739c68976f72}
  - {path: skills/productivity/teach/MISSION-FORMAT.md, sha256: 8cacbb3c0644d3ae0ea4965564797099401a6930a23f7cf462918576587f2418}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# out of scope

## Definition — verbatim
> "The `.out-of-scope/` directory in a repo stores persistent records of rejected feature requests." — skills/engineering/triage/OUT-OF-SCOPE.md:3

## Also called — verbatim
`Out of Scope` — skills/engineering/to-spec/SKILL.md:67

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/mainstream-issue-trackers-only.md | 3 | defined here | Defines niche issue tracker support as out of scope for the repository. |
| .out-of-scope/question-limits.md | 3 | defined here | Documents hard question limits during grilling as explicitly out of scope. |
| .out-of-scope/setup-skill-verify-mode.md | 5 | defined here | Documents automated verification mode for setup-matt-pocock-skills as out of scope. |
| docs/engineering/to-spec.md | 71 | used here | Explains that Out of Scope sections prevent scope creep in specifications. |
| docs/engineering/triage.md | 49 | defined here | Details how the .out-of-scope/ directory acts as institutional memory during triage. |
| docs/engineering/wayfinder.md | 38 | defined here | Describes recording rejected directions as out of scope during roadmap shaping. |
| external/to-spec.md | 49 | used here | External documentation highlighting Out of Scope boundary definitions in specs. |
| external/triage.md | 39 | defined here | External article explaining .out-of-scope/ files preventing re-litigation of rejected issues. |
| external/wayfinder.md | 42 | defined here | External documentation on tracking rejected ideas in out-of-scope documentation. |
| skills/engineering/to-spec/SKILL.md | 67 | defined here | Specification template section requiring explicit enumeration of out-of-scope items. |
| skills/engineering/triage/AGENT-BRIEF.md | 113 | used here | Directs triage subagents to check .out-of-scope/ before evaluating incoming issues. |
| skills/engineering/triage/OUT-OF-SCOPE.md | 3 | defined here | Formal reference manual defining .out-of-scope/ structure and deduplication rules. |
| skills/engineering/wayfinder/SKILL.md | 50 | defined here | Instructs wayfinder to document deliberately excluded scope items in decision tickets. |
| skills/in-progress/writing-shape/SKILL.md | 73 | defined here | Outlines scope boundaries and excluded content in writing-shape skill template. |
| skills/productivity/teach/MISSION-FORMAT.md | 21 | defined here | Mission template section delineating out-of-scope topics in guided curricula. |

## Consumes
Rejected feature requests, design alternatives, and explicit scope boundaries.

## Produces
Persistent rejection rationale documents in `.out-of-scope/` and bounded specification sections.

## When applied
Applied during specification writing to define explicit negative scope, and during issue triage to prevent re-litigation of rejected proposals.

## Sub-concepts
none

## Part of
to-spec, triage, wayfinder

## Implementation status
defects: doc-drift, orphan

## Design notes
`out of scope` is an essential scope-management and institutional memory pattern in `matt`. In specifications (`to-spec`), it forces authors to write down what will *not* be built to prevent scope creep. In project maintenance (`triage`), the `.out-of-scope/` directory stores conceptual design documents for rejected proposals, enabling agents to instantly surface past decisions and avoid costly re-litigation of previously rejected ideas.
