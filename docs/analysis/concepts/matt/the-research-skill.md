---
package: matt
name: The /research Skill
slug: the-research-skill
kind: technique
package_phase: matt:Shaping
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The /research Skill

## Definition — verbatim
> "Get a cited answer, read from primary sources." — external/research.md:24

## Also called — verbatim
`research` — external/research.md:25
`/research` — external/research.md:28

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/research.md | 24 | defined here | Web documentation title and definition for delegating factual inquiry to a background agent reading primary sources. |

## Consumes
A question or external factual prerequisite requiring reading outside the working directory (such as third-party API behavior, specification details, or version claims).

## Produces
A durable, cited Markdown note saved directly into the repository containing links to primary sources for every factual claim.

## When applied
"Reach for it when the next step is <em class=\"ah-prose-em\">finding something out</em> from outside the working directory (how a third-party API behaves, what a spec actually says, whether a version claim holds), and you&#x27;d rather not stall your own thread doing the reading." — external/research.md:29

## Sub-concepts
primary-sources, background-agent

## Part of
shaping

## Implementation status
defects: orphan (external/research.md:1), other (external/research.md:38 notes unrestricted agent delegation causes recursive subagent execution), other (external/research.md:49 notes missing stopping criteria leads to excessive or omitted research), other (external/research.md:51 notes subagent delegation on throwaway research branches creates draft PRs)

## Design notes
A shaping skill that offloads external documentation and fact-finding to an asynchronous background agent reading primary sources. Producing a cited Markdown file in the repo preserves the main session's context window while providing durable, verifiable evidence for subsequent architectural decisions.
