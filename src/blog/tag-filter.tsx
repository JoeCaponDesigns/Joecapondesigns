import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../lib/utils"

interface TagFilterProps {
  tags: string[]
  selectedTag: string | null
  onSelectTag: (tag: string | null) => void
}

export function TagFilter({ tags, selectedTag, onSelectTag }: TagFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return

    scrollRef.current.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative flex items-center gap-2">
      {/* Left scroll button (mobile-friendly) */}
      <button
        onClick={() => scroll("left")}
        className="flex-shrink-0 rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground md:hidden"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {/* Tags container */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth flex-nowrap"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* ALL POSTS */}
        <button
          onClick={() => onSelectTag(null)}
          className={cn(
            "flex-shrink-0 whitespace-nowrap rounded-full px-4 py-2 font-mono text-sm transition-all duration-200",
            selectedTag === null
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
          )}
        >
          All Posts
        </button>

        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onSelectTag(tag)}
            className={cn(
              "flex-shrink-0 whitespace-nowrap rounded-full px-4 py-2 font-mono text-sm transition-all duration-200",
              selectedTag === tag
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Right scroll button */}
      <button
        onClick={() => scroll("right")}
        className="flex-shrink-0 rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground md:hidden"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}
