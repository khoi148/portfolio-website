import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function TypeWriterComponent() {
  return (
    <div style={{ fontSize: "34px" }}>
      <ReactTypingEffect
        text="FULL-STACK SOFTWARE DEVELOPER "
        typingDelay={1200}
        eraseDelay={1600}
        speed={150}
      />
    </div>
  );
}
