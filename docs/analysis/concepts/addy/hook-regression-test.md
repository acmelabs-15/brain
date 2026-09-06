---
package: addy
name: Hook regression test
slug: hook-regression-test
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
memo_inputs:
  - {path: docs/developer-onboarding.md, sha256: 59a35b68045f34aa42161bc5901892489e6ecdac4b5bbfcf311fde65f8255eea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Hook regression test

## Definition — verbatim
(used, not defined)
> "# Hook regression test, required if you touch hooks/session-start.sh" — docs/developer-onboarding.md:67

## Also called — verbatim
- `session-start-test.sh` — docs/developer-onboarding.md:69

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/developer-onboarding.md | 67 | used here | Documented as a mandatory verification script when modifying session hooks or using-agent-skills. |

## Consumes
Session initialization scripts (`hooks/session-start.sh`) and the core meta-skill (`skills/using-agent-skills/SKILL.md`).

## Produces
Pass/fail verification of hook execution, session injection, and shell compatibility.

## When applied
Executed locally via `bash hooks/session-start-test.sh` whenever modifications touch session lifecycle hooks or the meta-skill.

## Sub-concepts
none

## Part of
- `verification-loop`

## Implementation status
clean

## Design notes
The hook regression test verifies that agent session startup hooks and embedded meta-skill instructions run without errors across supported shell environments, guaranteeing that session guidance and skill routing rules are cleanly injected into new agent sessions.
