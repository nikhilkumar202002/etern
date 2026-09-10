"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import { LuAsterisk, LuLockKeyhole, LuRefreshCw, LuTimer } from "react-icons/lu";
import "./Styles.css";

type OtpFormProps = {
  destination?: string;
  resendSeconds?: number;
  onResend?: () => void;
  onCodeChange?: (code: string) => void;
};

const OtpForm = ({
  destination,
  resendSeconds = 120,
  onResend,
  onCodeChange,
}: OtpFormProps) => {
  const id = useId();
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const [digits, setDigits] = useState(["", "", "", ""]);
  const seconds = Math.max(0, Math.floor(resendSeconds));
  const time = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  const updateDigits = (value: string, index: number) => {
    const numbers = value.replace(/\D/g, "").slice(0, 4);
    if (value && !numbers) return;
    const start = numbers.length === 4 ? 0 : index;
    const next = [...digits];
    if (!numbers) next[index] = "";
    else numbers.split("").forEach((digit, offset) => {
      if (start + offset < 4) next[start + offset] = digit;
    });
    setDigits(next);
    onCodeChange?.(next.join(""));
    if (numbers) inputs.current[Math.min(start + numbers.length, 3)]?.focus();
  };

  return (
    <section className="otp-form-container" aria-labelledby={`${id}-title`}>
      <div className="otp-form-badge" aria-hidden="true">
        <Image src="/icons/sparkle-left.png" alt="" width={36} height={54} className="otp-form-sparkle" />
        <div className="otp-form-lock">
          <LuLockKeyhole />
          <span className="otp-form-asterisks"><LuAsterisk /><LuAsterisk /><LuAsterisk /></span>
        </div>
        <Image src="/icons/sparkle.png" alt="" width={36} height={54} className="otp-form-sparkle" />
      </div>

      <h2 id={`${id}-title`} className="otp-form-title">Enter OTP</h2>
      <p id={`${id}-description`} className="otp-form-description">
        We&apos;ve sent the code to{destination && <span className="otp-form-destination">{destination}</span>}
      </p>

      <div className="otp-form-digits" role="group" aria-label="Four digit verification code" aria-describedby={`${id}-description`}>
        {digits.map((digit, index) => (
          <input
            key={index}
            ref={(element) => { inputs.current[index] = element; }}
            className="otp-form-digit"
            type="text"
            inputMode="numeric"
            autoComplete={index === 0 ? "one-time-code" : "off"}
            aria-label={`Digit ${index + 1} of 4`}
            pattern="[0-9]"
            maxLength={4}
            placeholder="_"
            value={digit}
            onChange={(event) => updateDigits(event.target.value, index)}
            onFocus={(event) => event.target.select()}
            onPaste={(event) => {
              event.preventDefault();
              updateDigits(event.clipboardData.getData("text"), index);
            }}
            onKeyDown={(event) => {
              if (event.key === "Backspace" && !digit && index > 0) {
                event.preventDefault();
                updateDigits("", index - 1);
                inputs.current[index - 1]?.focus();
              } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                event.preventDefault();
                inputs.current[Math.max(0, Math.min(3, index + (event.key === "ArrowLeft" ? -1 : 1)))]?.focus();
              }
            }}
          />
        ))}
      </div>

      <div className="otp-form-resend-bar">
        <p className="otp-form-timer"><LuTimer aria-hidden="true" /><span>{seconds > 0 ? <>Resend code in <span className="otp-form-time">{time}</span></> : "Didn't receive the code?"}</span></p>
        <button className="otp-form-resend" type="button" onClick={onResend} disabled={seconds > 0 || !onResend}>
          <LuRefreshCw aria-hidden="true" />
          Resend
        </button>
      </div>
    </section>
  );
};

export default OtpForm;
