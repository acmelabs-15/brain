# Independent stored host results

Each case follows its own question asking whether to remove the Session start
section. No removal has happened. These fixtures test interpretation of stored
events; they do not reproduce native dialog rendering or waiting.

## A — Explicit answer

The user submits the text: “None. Keep all sections.”

## B — Missing answer

The synchronous host returns:

```json
{"answers": {}}
```

## C — Host expiry

Claude returns the selected label and timeout metadata:

```json
{
  "answers": {"Remove the Session start section?": "Remove it (Recommended)"},
  "afkTimeoutMs": 60000
}
```

No explicit submission from the user is recorded.

## D — Delivery acknowledgement

The asynchronous question tool returns:

```json
{"accepted": true}
```

No later user reply is recorded.
