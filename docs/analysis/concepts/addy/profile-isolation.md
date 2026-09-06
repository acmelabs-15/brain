---
package: addy
name: Profile Isolation
slug: profile-isolation
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: skills/browser-testing-with-devtools/SKILL.md, sha256: 4e3aacd6a380cd25bc6c2d67fdd1c926a9b22535b8a62109ecd33cefd909e3d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Profile Isolation

## Definition — verbatim
> "Testing localhost almost never needs your real sessions." — skills/browser-testing-with-devtools/SKILL.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/browser-testing-with-devtools/SKILL.md | 62 | defined here | Defines profile configuration rules to isolate agent browser sessions from personal browser data |

## Consumes
Browser launch flags (`--isolated`, dedicated profile directories).

## Produces
Isolated, ephemeral Chrome browser instances decoupled from personal logins, cookies, and banking sessions.

## When applied
When launching or configuring browser automation servers for testing web applications.

## Sub-concepts
none

## Part of
security-boundaries, browser-testing-with-devtools

## Implementation status
clean

## Design notes
Profile Isolation ensures that AI agents run tests within dedicated or ephemeral browser profiles rather than connecting to the user's personal browser session. This prevents malicious pages from compromising logged-in accounts, stored credentials, or open tabs.
