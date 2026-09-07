---
package: rjm
name: github-url-intercept
slug: github-url-intercept
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/github-url-intercept/SKILL.md, sha256: 598a7fda8d4d2d6d3308524266285eeec763778d3f7998d49ff35b39054abbd8}
  - {path: scripts/validation/skill_contract_test_baseline.txt, sha256: 136d084d2e2eaca5e79b320223bf3a4daeee5bafa569d350dc60491b5473c130}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# github-url-intercept

## Definition — verbatim
> "name: github-url-intercept" — .claude/skills/github-url-intercept/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/github-url-intercept/SKILL.md | 2 | defined here | Frontmatter skill name identifying the automatic interceptor skill for GitHub URLs. |
| scripts/validation/skill_contract_test_baseline.txt | 9 | defined here | Listed in baseline ratchet of skills documenting exit-code contracts without binding tests. |

## Consumes
User prompts or pasted messages containing any github.com or gist.github.com URL.

## Produces
Structured JSON payloads from targeted GitHub API or script calls instead of multi-megabyte HTML page downloads.

## When applied
Automatically activated when any GitHub URL appears in user input to prevent context window exhaustion.

## Sub-concepts
none

## Part of
cross-phase

## Implementation status
defects: doc-drift, missing-path

## Design notes
An automated interceptor skill designed to prevent LLM agents from exhausting context windows by fetching bloated GitHub HTML pages (5–10MB). It routes GitHub URLs to lightweight GitHub API endpoints or local Python helper scripts that return compact JSON payloads (1–50KB).
