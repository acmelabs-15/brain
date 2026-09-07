---
package: rjm
name: Web search
slug: web-search
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Web search

## Definition — verbatim
> "3. **Web search.** Content you fetched in this session via a documentation server (Context7, DeepWiki, Microsoft Learn) or a web fetch. Weaker than (1) and (2) because the source is outside the repo's invariants." — .claude/agents/implementer.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 30 | defined here | Designated as Level 3 evidence covering external documentation fetched via web search or doc servers. |
| templates/agents/implementer.shared.md | 39 | defined here | Shared implementer template defining Level 3 evidence from external web retrieval. |

## Consumes
Queries against external web resources, documentation servers, and third-party API portals.

## Produces
Level 3 external evidence regarding third-party libraries, framework specifications, and vendor documentation.

## When applied
Applied when researching third-party APIs, vendor platforms, or language runtime features external to the repository.

## Sub-concepts
none

## Part of
four-level-hierarchy, evidence-standards

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Represents Level 3 evidence in rjm. External web lookups and documentation server queries provide vital information about third-party dependencies, but rank below local repository inspection because external specifications do not account for local configuration, dependency pinning, or repository-specific invariants.
