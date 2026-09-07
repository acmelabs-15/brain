---
package: rjm
name: Surfacing Mechanism
slug: surfacing-mechanism
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/issue-resolution.md, sha256: 0a50a77e7a5b822596d45280d9b7a1ee36a6d19b7f86e9ad7e948c98ee51e4e7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Surfacing Mechanism

## Definition — verbatim
> "Deferred P1 items surface through THREE mechanisms:" — .claude/skills/adr-review/references/issue-resolution.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/issue-resolution.md | 26 | defined here | Defines three retrieval pathways (issue linking, Phase 0 search, and memory-index keywords) enabling stateless agents to discover deferred items. |

## Consumes
Deferred P1 issues, GitHub issue metadata, tracking labels (`adr-followup`), and routing keywords.

## Produces
Contextual rediscovery and re-injection of deferred architectural issues into relevant agent workflows.

## When applied
Operates during session initialization, Phase 0 related work searches, and issue inspection.

## Sub-concepts
keyword-based-surfacing

## Part of
p1-deferral-requirements, issue-resolution

## Implementation status
clean

## Design notes
A multi-channel discovery architecture addressing agent statelessness ("amnesia"). By defining three complementary surfacing mechanisms—linking to active issues, automated Phase 0 label searches, and keyword routing—it guarantees that deferred architectural obligations are brought back into view when related work begins.
