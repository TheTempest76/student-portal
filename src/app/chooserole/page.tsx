'use client';
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SelectRole() {
  const { user } = useUser();
  const router = useRouter();
  const [role, setRole] = useState("");

  const handleRoleSelection = async () => {
    if (!role) {
      alert("Please select a role");
      return;
    }

    // Update user's public metadata to include the selected role
    await user?.update({
      unsafeMetadata: { publicMetadata: { role } },
    });

    // Redirect based on the role
    if (role === "student") {
      router.push("/create-profile");
    } else if (role === "admin") {
      router.push("/admin-dashboard");
    }
  };

  return (
    <div>
      <h1>Select Your Role</h1>
      <div>
        <button onClick={() => setRole("student")}>Student</button>
        <button onClick={() => setRole("admin")}>Admin</button>
      </div>
      <button onClick={handleRoleSelection}>Confirm</button>
    </div>
  );
}
