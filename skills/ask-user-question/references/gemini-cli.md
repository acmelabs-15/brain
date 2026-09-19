# Gemini CLI: ask_user

Tool `ask_user` (display name Ask User). Facts checked on 2026-09-11 against main
commit `ed2ac40df67a319bf348bd7e3d10494696b31b38` (package 0.61.0-nightly.20260908)
and stable v0.59.0 at `fb0d535af931b27c51e87e5e6ade72905b1e8390` (published
2026-09-08). Evidence grade: source at a commit, plus official documentation.
`ask-user.ts` and `confirmation.ts` are byte-identical in both; UI and configuration
findings are pinned to main. Gemini CLI only: Antigravity CLI, to which unpaid-tier
and Google One users moved on 2026-06-18, does not share this contract.

## Compose the call

Input: `questions`, one to four entries. Send one. Each question has:

- `question`: required, the complete question text.
- `header`: required. Documentation says at most 16 characters; the schema has no
  `maxLength`, so this is a writing limit, not an enforced one.
- `type`: required by the schema: `choice`, `text` or `yesno`. Documentation calls it
  optional and the schema declares a default of `choice`; send it explicitly.
- `options`: for `choice`, two to four objects with `label` and `description`. A
  label must be nonempty after trimming; a description may be empty. The guidance of
  one to five words per label has no validator.
- `multiSelect`: optional boolean; applies to `choice`.
- `placeholder`: optional hint. For `text` it goes to the main input; for `choice`
  and `yesno` it goes to the custom-answer input.

No question id, recommendation field, default-answer field or timeout field exists;
the internal `unconstrainedHeight` is not in the public schema. Recommendation: no
schema field. The label carries it: append `(Recommended)` to the recommended label.

```json
{
  "questions": [
    {
      "header": "Draft storage",
      "type": "choice",
      "question": "Cross-device recovery is required. Server storage meets it but requires sign-in. Should we require sign-in or revise that requirement?",
      "multiSelect": false,
      "options": [
        {
          "label": "Require sign-in (Recommended)",
          "description": "Meets cross-device recovery. Users must sign in before saving a draft."
        },
        {
          "label": "Use browser drafts",
          "description": "Avoids sign-in. Drafts stay on the current device, so the recovery requirement changes."
        }
      ]
    }
  ]
}
```

The host adds a custom-answer input to `choice` and `yesno`; add no Other option.
`yesno` becomes Yes and No with `multiSelect: false`. A multi-select `choice` gets
All of the above (with more than one option) and a Done control. Question text goes
through the Markdown renderer; descriptions through the inline Markdown renderer.

## Read the reply

`llmContent` is a JSON string. Keys are zero-based question positions; values, strings:

```json
{"answers":{"0":"Require sign-in (Recommended)"}}
```

- Multi-select: the UI joins selected labels and custom text with comma-space into
  one string. It returns no array and does not mark the custom answer. Match known
  labels and keep the rest as the user's text.
- Blank answers are dropped by the UI reducer. A submission with no answer gives
  `{"answers":{}}` and an `empty_submission` metric. This is an explicit submission
  without an answer, not silence and not a default.
- Dismissal: `ask-user.ts` holds the result text
  `User dismissed ask_user dialog without answering.` The native UI instead sends
  `ToolConfirmationOutcome.Cancel`; the scheduler marks the call cancelled, cancels
  queued calls and skips execution. Not every dismissal reaches the model as that
  text. Read the actual result or cancellation state.

## Availability

- Registered through the general core-tool path, outside the plan-mode gate; not plan-only.
- `tools.core`, when set, is the built-in-tool allowlist and must include `ask_user`;
  unset, the tool is on by default. Runtime policy can still deny it.
- Excluded in non-interactive (headless) mode and in ACP (IDE) mode; the source says
  ACP permission interception breaks conversational flows. The non-interactive
  policy also denies it. Read the session's tool list.

## Host expiry facts

- No deadline. The confirmation listener waits for the response with the matching
  correlation id or for the caller's `AbortSignal`. It installs no timer. A source
  comment that advises embedding callers to manage lifecycle is advice to runtime
  authors, not an installed timeout.
- The dialog has no timer and no idle-default logic. Escape cancels it. Ctrl-C can
  also cancel and exit the application.
- An embedding host, terminal process or upstream caller can still abort the call.

## Evidence

- [Official tool documentation](https://geminicli.com/docs/tools/ask-user/)
- [Stable schema, lines 635 to 710](https://github.com/google-gemini/gemini-cli/blob/fb0d535af931b27c51e87e5e6ade72905b1e8390/packages/core/src/tools/definitions/model-family-sets/default-legacy.ts#L635)
- [Validation and result text](https://github.com/google-gemini/gemini-cli/blob/ed2ac40df67a319bf348bd7e3d10494696b31b38/packages/core/src/tools/ask-user.ts#L45)
- [Dialog: options, yes/no, rendering, serialisation, reducer, cancellation](https://github.com/google-gemini/gemini-cli/blob/ed2ac40df67a319bf348bd7e3d10494696b31b38/packages/cli/src/ui/components/AskUserDialog.tsx#L730)
- [UI submit and cancel callbacks](https://github.com/google-gemini/gemini-cli/blob/ed2ac40df67a319bf348bd7e3d10494696b31b38/packages/cli/src/ui/components/messages/ToolConfirmationMessage.tsx#L547)
- [Scheduler cancellation](https://github.com/google-gemini/gemini-cli/blob/ed2ac40df67a319bf348bd7e3d10494696b31b38/packages/core/src/scheduler/scheduler.ts#L712)
- [Confirmation listener](https://github.com/google-gemini/gemini-cli/blob/ed2ac40df67a319bf348bd7e3d10494696b31b38/packages/core/src/scheduler/confirmation.ts#L51)
- [Core registration and tools.core](https://github.com/google-gemini/gemini-cli/blob/ed2ac40df67a319bf348bd7e3d10494696b31b38/packages/core/src/config/config.ts#L3935)
- [CLI exclusions](https://github.com/google-gemini/gemini-cli/blob/ed2ac40df67a319bf348bd7e3d10494696b31b38/packages/cli/src/config/config.ts#L793)
- [Non-interactive policy](https://github.com/google-gemini/gemini-cli/blob/ed2ac40df67a319bf348bd7e3d10494696b31b38/packages/core/src/policy/policies/non-interactive.toml)

Unverified for this host:

- The installed Gemini CLI version, the session's tool visibility, and upstream
  lifecycle signals in every embedding.
- Live dialog rendering: whether a long question fits the terminal width and height.
- End-to-end cancellation output as the model receives it, and a delayed reply on
  a live question.
