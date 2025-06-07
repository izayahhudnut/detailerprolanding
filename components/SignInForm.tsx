// components/SignInForm.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SignInFormProps = {
  onClose: () => void;
};

export function SignInForm({ onClose }: SignInFormProps) {
  return (
    <div className="space-y-6 p-4 bg-gray-800 text-white rounded-lg">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="email@example.com"
          className="mt-2 block w-full px-4 py-3 text-lg bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Password
        </label>
        <Input
          id="password"
          type="password"
          placeholder="Your password"
          className="mt-2 block w-full px-4 py-3 text-lg bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <Button
        type="button"
        className="w-full px-4 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-700 rounded-md"
        onClick={onClose}
      >
        Sign In
      </Button>
    </div>
  );
}