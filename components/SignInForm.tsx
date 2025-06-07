// components/SignInForm.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SignInFormProps = {
  onClose: () => void;
};

export function SignInForm({ onClose }: SignInFormProps) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <Input id="email" type="email" placeholder="email@example.com" className="mt-1 block w-full" />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <Input id="password" type="password" placeholder="Your password" className="mt-1 block w-full" />
      </div>
      <Button type="button" className="w-full" onClick={onClose}>
        Sign In
      </Button>
    </div>
  );
}