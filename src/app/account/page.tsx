import { ModeToggle } from "@/components/toggleMode"

export default function Account() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Account</h1>
      <p className="text-center text-muted-foreground">
       For now, toggle the theme.
      </p>
      <ModeToggle />
    </div>
  )
}
