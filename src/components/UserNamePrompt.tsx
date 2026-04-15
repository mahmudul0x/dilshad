import { FormEvent, useEffect, useState } from "react";

type UserNamePromptProps = {
  initialName: string;
  onSave: (name: string) => void;
};

const UserNamePrompt = ({ initialName, onSave }: UserNamePromptProps) => {
  const [fullName, setFullName] = useState(initialName);
  const [error, setError] = useState("");

  useEffect(() => {
    setFullName(initialName);
  }, [initialName]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = fullName.trim().replace(/\s+/g, " ");

    if (trimmedName.length < 3) {
      setError("আপনার পূর্ণ নাম লিখুন।");
      return;
    }

    setError("");
    onSave(trimmedName);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-border/60 bg-background p-6 shadow-2xl">
        <div className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Welcome</p>
          <h2 className="font-heading text-2xl font-bold text-foreground">আপনার নামটি দিন</h2>
          <p className="text-sm text-muted-foreground">
            প্রথমবার ওয়েবসাইটে প্রবেশের জন্য আপনার পূর্ণ নাম প্রয়োজন। পরে WhatsApp অর্ডারের সাথে এই নামটিও যাবে।
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <label htmlFor="full-name" className="text-sm font-medium text-foreground">
              পূর্ণ নাম
            </label>
            <input
              id="full-name"
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="আপনার পুরো নাম লিখুন"
              autoFocus
              required
              maxLength={100}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            {error ? <p className="text-sm text-destructive">{error}</p> : null}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            সংরক্ষণ করুন
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserNamePrompt;
