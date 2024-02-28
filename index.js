// src/index.ts
import core from "@actions/core";
try {
  const webhook = core.getInput("webhook");
  const message = core.getInput("message");
  fetch(webhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: message
    })
  });
} catch (err) {
  core.setFailed(err.message);
}
