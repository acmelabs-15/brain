---
package: rjm
name: Validate Copilot agent frontmatter
slug: validate-copilot-agent-frontmatter
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/workflows/validate-generated-agents.yml, sha256: bfec11e4e278d7959a9341743431c53b8f4c68ee7d453a25390ec6e58777e6ca}
  - {path: scripts/validation/checks_plugin.py, sha256: bde1cc8ea22ca4ac213de4ce3b615700be8f0c8bfaaa715f49f58b141094a2f8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Validate Copilot agent frontmatter

## Definition — verbatim
> "def validate_copilot_agent_frontmatter(repo_root: Path) -> bool:" — scripts/validation/checks_plugin.py:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/validate-generated-agents.yml | 241 | defined here | Workflow step running `scripts/validation/validate_copilot_agent_frontmatter.py` to prevent malformed frontmatter in CI. |
| scripts/validation/checks_plugin.py | 58 | defined here | Python validation function executing frontmatter syntax verification for `.github/agents/*.agent.md`. |

## Consumes
Agent files in `.github/agents/*.agent.md` and parser script `scripts/validation/validate_copilot_agent_frontmatter.py`.

## Produces
Boolean status or exit code confirming all agent markdown files contain valid, parseable YAML frontmatter.

## When applied
Executed in CI and during local pre-PR checks to validate agent markdown definitions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug

## Design notes
A syntax validation gate ensuring that all Copilot agent markdown files contain valid YAML frontmatter without unquoted colon-bearing strings, preventing Copilot's runtime loader from crashing during agent discovery.
