import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="flex item-center w-full p-6 bg-background z-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between md-justify-end
      flex items-center gap-x-2 text-muted-foreground">
        <button variant="ghost" sixe="sm">
          Github
        </button>
        <p>&nbspTakeNote Copyright 2024</p>
      </div>
    </div>
  )
}
