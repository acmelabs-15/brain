---
package: matt
name: issue-tracker backend
slug: issue-tracker-backend
kind: pattern
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .out-of-scope/mainstream-issue-trackers-only.md, sha256: b640f37fb4dd35b88eeddd1438bd637dc3f813facfc668074c9a71f82d38847f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# issue-tracker backend

## Definition — verbatim
> "Every issue-tracker backend hard-codes a CLI shape into the skills (commands, flags, output parsing)." — .out-of-scope/mainstream-issue-trackers-only.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/mainstream-issue-trackers-only.md | 7 | defined here | Explains that every issue-tracker backend embeds a hard-coded CLI interaction shape into skills. |

## Consumes
CLI tooling (`gh`, `glab`), authentication tokens, and remote repository metadata.

## Produces
Command-line invocations and output parsing routines that synchronize issues between skills and issue trackers.

## When applied
When an engineering skill reads from, writes to, or modifies issues in an external issue management platform.

## Sub-concepts
none

## Part of
issue-trackers, setup-matt-pocock-skills

## Implementation status
clean

## Design notes
In `matt`, an `issue-tracker backend` is a specialized integration pattern providing CLI-level interaction with external issue trackers. Because each backend couples skill prompts to specific tool command syntaxes and output formats, adding backends expands long-term maintenance overhead. Consequently, built-in backends are restricted to mainstream platforms while non-standard tools use `local markdown` or custom configurations.
