---
package: matt
name: external-PR
slug: external-pr
kind: artifact
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# external-PR

## Definition — verbatim
> "One rough edge: the GitHub template&#x27;s external-PR listing command asks <code class=\"ah-code-inline\">gh pr list</code> for an <code class=\"ah-code-inline\">authorAssociation</code> field that <code class=\"ah-code-inline\">gh</code> does not expose, so the command as written fails outright" — external/triage.md:47

## Also called — verbatim
"external pull requests" — external/triage.md:46

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 47 | defined here | Defines inbound external pull requests filtered for triage discovery, noting a defect in GitHub's authorAssociation listing command (#468). |

## Consumes
Inbound pull requests submitted by outside contributors to the repository.

## Produces
A triaged pull request with verified test status, attached follow-up agent brief describing necessary delta work, or maintainer merge queue transition.

## When applied
When external pull requests arrive on the repository's request surface during `/triage`.

## Sub-concepts
none

## Part of
request-surface, triage

## Implementation status
defects: script-bug

## Design notes
An external pull request is an inbound contribution treated by `/triage` as an issue with attached code. Unlike internal collaborator branches which bypass triage, external PRs are discovered, checked out, and tested to produce structured agent briefs detailing remaining work on the diff before escalating to human maintainers for merge.
