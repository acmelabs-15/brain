---
package: matt
name: Common questions
slug: common-questions
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: .changeset/README.md, sha256: 495bd4805f8362853bce99689c1cd75db8c475dfa38930619d2e197d7554db27}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Common questions

## Definition — verbatim
> "The questions readers really ask about this skill, each in bold with the answer in the lines beneath it. No sub-headings." — .agents/writing-docs.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 44 | defined here | Establishes authoring rules for the Common questions documentation section based on empirical evidence. |
| .changeset/README.md | 7 | used here | Organizes recurring contributor inquiries regarding changeset management. |
| external/domain-modeling.md | 46 | defined here | Answers common practitioner questions regarding ubiquitous language conflicts and ADR creation. |
| external/implement.md | 48 | used here | Addresses recurring questions about pre-agreed seams, ticket scope, and TDD enforcement. |
| external/prototype.md | 42 | defined here | Resolves practical questions about throwaway spikes and UI scaffolding. |

## Consumes
Observed issues, pull request discussions, changelogs, and user inquiries.

## Produces
Evidence-backed FAQ sections addressing recurring developer confusion.

## When applied
Included in documentation pages whenever empirical evidence reveals recurring practitioner questions.

## Sub-concepts
none

## Part of
docs page

## Implementation status
defects: missing-path, doc-drift, orphan, other

## Design notes
A documentation pattern requiring FAQ items to be derived from real user questions found in issues, changelogs, and discussions, rather than invented hypotheticals, keeping documentation focused on real-world adoption friction.
