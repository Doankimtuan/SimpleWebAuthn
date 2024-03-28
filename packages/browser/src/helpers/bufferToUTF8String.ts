/**
 * A helper method to convert an arbitrary ArrayBuffer, returned from an authenticator, to a UTF-8
 * string.
 */
export function bufferToUTF8String(value: ArrayBuffer): string {
  const uint8Array = new Uint8Array(value);

  // Use the TextDecoder API to decode the Uint8Array as UTF-8
  const decoder = new TextDecoder("utf-8");
  const text = decoder.decode(uint8Array);

  return text;
}
