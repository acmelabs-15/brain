# Codex: request_user_input and request_user_input_async

Tools `request_user_input` (sync) and `request_user_input_async`. Facts checked on
2026-09-11 against source at commit `6b9826e3aa83b1a5947db50f4332cb9c65f1b340`, the
release tag of the installed codex-cli 0.154.0. Evidence grade: source at a commit,
plus the app-server schema generated from that binary. The checked session declared
both tools, the sync one as Plan-only. Desktop, web and other clients were not checked.

## Compose the call: request_user_input

Input: `questions`; each has `id`, `header`, `question` and `options`. Each option
has `label` and `description`. The specification asks for one to three questions and
two to three mutually exclusive options. Send one question. The normaliser requires
nonempty options, so this form cannot carry an open question; the client adds the
free-text choice. No `multiSelect`, `preview`, timeout or `isBlocking` field exists;
protocol-only fields (`isOther`, `isSecret`, `autoResolutionMs`) stay out of a model
call. Recommendation: the specification puts the recommended option first, with
`(Recommended)` in its label.

```json
{
  "questions": [
    {
      "id": "draft_storage",
      "header": "Drafts",
      "question": "Cross-device recovery requires server storage and sign-in. Keep that requirement, or use browser-only drafts?",
      "options": [
        {
          "label": "Require sign-in (Recommended)",
          "description": "Meets the confirmed recovery requirement, but users must sign in to save drafts."
        },
        {
          "label": "Use browser-only drafts",
          "description": "Avoids sign-in, but revises the requirement because drafts stay on one device."
        }
      ]
    }
  ]
}
```

## Compose the call: request_user_input_async

Input: `questions`; each has a nonempty `title` that holds the whole question and
optional `options` as nonempty strings. No header, id, option description, preview,
multi-select or timeout field exists, so the context and the costs go in the title
and the option strings. Omit `options` for an open question; the UI always accepts
free text. The UI preselects the first option but does not submit it by itself, so
the recommended option in first position is also the preselected one.

```json
{
  "questions": [
    {
      "title": "Draft recovery needs one decision.\n\nCross-device recovery is a confirmed requirement. Server storage provides it but requires sign-in.\n\nShould we require sign-in or revise the recovery requirement?",
      "options": [
        "Require sign-in (Recommended): meets cross-device recovery; users must sign in to save drafts.",
        "Use browser-only drafts: avoids sign-in; drafts remain on the current device."
      ]
    }
  ]
}
```

## Read the reply

Sync: `answers` maps the question `id` to an object with an `answers` array of
strings. In the terminal a selected label is one entry; a note is a further entry
prefixed `user_note:`. The array does not prove a multi-select control. An empty or
missing entry stays unresolved. Cancellation is reported distinctly from an answer.

```json
{"answers":{"draft_storage":{"answers":["Require sign-in (Recommended)","user_note: Keep existing browser drafts readable."]}}}
```

Async: the immediate result `{"accepted":true}` acknowledges emission, not display,
receipt or an answer. The reply arrives later as a new user message. Keep dependent
work pending, match that message to the pending question, and do not ask again
because the reply came through chat.

## Availability

- The sync handler rejects non-root agents, so a subagent cannot call it.
- The sync handler checks its configured available modes. In the checked session it
  is Plan-only. Read the active tool list, not the documentation.

## Host expiry facts

- The sync handler sets `isBlocking` from whether the session is in Plan mode and
  sets `autoResolutionMs` to none. The terminal reads `isBlocking`, not the deprecated
  `autoResolutionMs`. The model-facing schemas have no field that changes this policy.
- Blocking requests (Plan mode) have no automatic-resolution timer.
- Non-blocking requests get 60 seconds of hidden grace, then a 60-second visible
  countdown. Interaction stops the countdown for that request. On expiry the
  terminal submits an empty answer map and closes or advances the request.
- Source: constants at lines 69 to 70, `auto_resolution_timing_at` at lines 288 to
  307, `submit_empty_auto_resolution` at lines 936 to 954 of the terminal file below.
- The async handler installs no response timer; client display lifetime is unchecked.
- A reported incident of about 30 seconds does not match this two-minute policy.
  Its client, version, mode and trace were not supplied. Do not equate the two.

## Evidence

- [Sync specification](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/core/src/tools/handlers/request_user_input_spec.rs)
- [Sync handler](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/core/src/tools/handlers/request_user_input.rs)
- [Protocol response](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/protocol/src/request_user_input.rs)
- [Async specification and handler](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/core/src/tools/handlers/request_user_input_async.rs)
- [Terminal timer and replies](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/bottom_pane/request_user_input/mod.rs#L288)
- [App-server documentation](https://learn.chatgpt.com/docs/app-server#toolrequestuserinput)

Unverified for this host:

- A delayed reply on a live blocking question; async delivery, a delayed reply in
  chat, and cleanup after the answer.
- The non-blocking countdown as rendered, and the empty-map result on expiry.
- Multiline context, option costs, notes and cancellation as rendered in each client.
- Whether the reported incident came from this native path, another version, an app
  wrapper, or agent-written waiting logic.
