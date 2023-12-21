import TestComponent from "@/components/test-component";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-blue-300">
      <label for="Toggle1" className="absolute top-5 right-5 inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
        <span>English</span>
        <span className="relative">
          <input id="Toggle1" type="checkbox" className="hidden peer" />
          <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
          <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
        </span>
        <span>Spanish</span>
      </label>

      
    </main>
  );
}
