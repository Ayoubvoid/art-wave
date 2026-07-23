import { AdminShell } from "@/components/admin/admin-shell";

export default function AdminManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminShell>{children}</AdminShell>;
}
