import { TextField } from "@shopify/polaris";
import React from "react";

function SingleLineCellModal({ onSetValue, value, error }) {
  return (
    <TextField
      error={error || false}
      value={value || ""}
      onChange={(value) => {
        onSetValue(value);
      }}
    />
  );
}

export default SingleLineCellModal;
