# Claude Code: AskUserQuestion

Tool `AskUserQuestion`. Facts checked on 2026-09-11 against the official
documentation, with the installed CLI at 2.1.268 (release v2.1.268, published
2026-09-10). Evidence grade: documentation only. The documentation is rolling, not
pinned to that release. No live question was sent and no terminal rendering was tested.

## Compose the call

The input has `questions`. Each question has `question`, `header`, `options` and
`multiSelect`. Each option has `label`, `description` and an optional `preview`.
Optional top-level fields are `answers`, `annotations` and `metadata.source`.
There is no per-call timeout field; `afkTimeoutMs` exists in the output type only.

Maxima: one to four questions per call, two to four options per question, header at
most 12 characters. Send one question. Set `multiSelect` only when the choices can
combine. The host supplies the Other path; add no Other option of your own.

Recommendation: the schema has no recommendation field. The convention comes from
the tool prompt in the session: the recommended option carries `(Recommended)` in
its label. Read the active session's tool prompt for its current wording.

```json
{
  "questions": [
    {
      "header": "Drafts",
      "question": "Cross-device draft recovery is required. Server storage provides it but requires sign-in. Should drafts require sign-in, or should we revise the recovery requirement?",
      "multiSelect": false,
      "options": [
        {
          "label": "Require sign-in (Recommended)",
          "description": "Meets the cross-device requirement. Users must sign in before saving a draft."
        },
        {
          "label": "Revise recovery requirement",
          "description": "Keeps browser-only drafts without sign-in. Drafts remain on the current device."
        }
      ]
    }
  ]
}
```

Previews: the TypeScript SDK generates them only when the session sets
`toolConfig.askUserQuestion.previewFormat` to `markdown` or `html`; unset means none.
HTML fragments reject script, style and doctype. This is an SDK host feature, not a
terminal layout fact.

## Read the reply

The output has `questions` and `answers`, with optional `response`, `annotations`
and `afkTimeoutMs`.

- `answers` is keyed by the full question text. The value is the selected label;
  the published TypeScript type gives it as a string. Text typed through Other sits
  in that question's answer value.
- A multi-select reply is an array of labels or comma-separated labels, by the
  guide; the published type uses a string. Match known labels and keep the rest as
  the user's text. Do not split prose on commas.
- `response` is a general typed reply. It replaces the per-question answers in
  what the model receives.
- `annotations` holds notes and preview information. Keep every qualification.
- `afkTimeoutMs` marks a reply the host closed by auto-continue. It is not an input
  field and not proof of a completed decision.

Typed replies are relayed neutrally. A request to wait, explain, change direction or
limit scope reaches the agent as that request. Follow it.

## Availability

- Subagents started through the Agent tool do not have the tool.
- `--permission-prompts none` removes user-input tools, this one included, in
  unattended runs. It needs v2.1.259.
- The `dontAsk` permission mode denies the tool even when an allow rule matches.
- An SDK host collects input through `canUseTool`. The callback may stay pending
  without limit; cancelling the query cancels it. A host may instead persist the
  deferred call for later. An app that restricts its tools must list this one.

## Host expiry facts

- Questions stay open by default. The question input has no field that disables the timer.
- The setting `askUserQuestionTimeout` (user or managed scope) takes `60s`, `5m`,
  `10m` or `never`; the default is `never`. It exists from v2.1.200. `/config` shows
  it as Question auto-continue timeout and writes user settings; the row is hidden
  when managed settings or `--settings` set it.
- With auto-continue on, idle expiry closes the dialog, submits the options already
  selected, and tells the agent the user may be away and it may continue. The last
  20 seconds show a countdown. Keyboard input restarts it; terminal focus restarts
  it where supported. Permission prompts and plan approval do not use this.
- `CLAUDE_AFK_TIMEOUT_MS` overrides the setting and enables auto-continue even when
  the setting is unset or `never`. Zero closes the dialog at once; it does not
  disable the timer.
- `CLAUDE_AFK_COUNTDOWN_MS` changes only the countdown display (default 20 seconds).
- `CLAUDE_CODE_USER_DIALOG_TIMEOUT_MS` does not govern this tool or permission prompts.
- Versions 2.1.198 and 2.1.199 had a 60-second default. That historical bug is not
  evidence of a current 30-second limit.

## Evidence

- [Tool behaviour and auto-continue](https://code.claude.com/docs/en/tools-reference#askuserquestion-tool-behavior)
- [TypeScript input and output types](https://code.claude.com/docs/en/agent-sdk/typescript#askuserquestion)
- [Question format, caps and SDK lifecycle](https://code.claude.com/docs/en/agent-sdk/user-input)
- [askUserQuestionTimeout setting](https://code.claude.com/docs/en/settings-reference#askuserquestiontimeout)
- [Environment overrides](https://code.claude.com/docs/en/env-vars)
- [Headless permission prompts](https://code.claude.com/docs/en/headless#turn-off-permission-prompts-in-unattended-runs)
- [Release v2.1.268](https://github.com/anthropics/claude-code/releases/tag/v2.1.268)

Unverified for this host:

- Terminal rendering: focus defaults, label truncation, keyboard behaviour, and
  side-by-side preview restrictions.
- The returned payload for a delayed reply, typed notes, a freeform reply,
  cancellation and multi-select.
- The tool prompt's exact recommendation wording; the documentation does not state it.
- The effective timeout configuration of any given install, and wrapper timers in
  custom SDK apps that resolve the callback without the user.
