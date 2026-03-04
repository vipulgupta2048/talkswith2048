import React, { useState, useEffect, useCallback, memo, useRef } from "react";
import styles from "./CommandPalette.module.scss";

// Holi festival color palette — vibrant, festive, and joyful
const HOLI_COLORS = [
  { accent: "#FF3CAC", hover: "#FF5CC0", rgb: "255, 60, 172" },   // Magenta pink
  { accent: "#F9A825", hover: "#FFB740", rgb: "249, 168, 37" },   // Marigold yellow
  { accent: "#00E5FF", hover: "#33EAFF", rgb: "0, 229, 255" },    // Sky cyan
  { accent: "#76FF03", hover: "#96FF33", rgb: "118, 255, 3" },    // Lime green
  { accent: "#FF6D00", hover: "#FF8A33", rgb: "255, 109, 0" },    // Blazing orange
  { accent: "#E040FB", hover: "#EA60FC", rgb: "224, 64, 251" },   // Electric purple
  { accent: "#FF1744", hover: "#FF4569", rgb: "255, 23, 68" },    // Festival red
  { accent: "#00E676", hover: "#33EB91", rgb: "0, 230, 118" },    // Emerald green
  { accent: "#FFEA00", hover: "#FFEE33", rgb: "255, 234, 0" },    // Turmeric yellow
  { accent: "#40C4FF", hover: "#66CFFF", rgb: "64, 196, 255" },   // Peacock blue
];

interface Command {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  action: string | (() => void);
  type: "action" | "search";
}

interface SearchHit {
  objectID: string;
  url: string;
  hierarchy: {
    lvl0?: string;
    lvl1?: string;
    lvl2?: string;
    lvl3?: string;
  };
  content?: string;
  _highlightResult?: {
    hierarchy?: {
      lvl0?: { value: string };
      lvl1?: { value: string };
      lvl2?: { value: string };
    };
    content?: { value: string };
  };
}

const quickActions: Command[] = [
  {
    id: "holi",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
    label: "Holi Mode 🎨",
    description: "Toggle festive random colors — Happy Holi!",
    action: "toggle-holi",
    type: "action",
  },
  {
    id: "work",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    label: "Work with me",
    description: "Learn about my professional experience",
    action: "/category/work",
    type: "action",
  },
  {
    id: "hire",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "Hire Mixster",
    description: "DevRel, Developer Advocacy, and more",
    action: "https://mixster.dev",
    type: "action",
  },
  {
    id: "speaking",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
    label: "Speaking",
    description: "Invite me to speak at your event",
    action: "/Talks",
    type: "action",
  },
  {
    id: "hello",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    label: "Say hi",
    description: "Connect on Twitter/X",
    action: "https://twitter.com/vipulgupta2048",
    type: "action",
  },
];

// Algolia config
const ALGOLIA_APP_ID = "2W8TQEDQ7Y";
const ALGOLIA_API_KEY = "9182b1e9f7a45bc038813c8c2791ed70";
const ALGOLIA_INDEX = "mixster";

export const CommandPalette: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchResults, setSearchResults] = useState<SearchHit[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [holiMode, setHoliMode] = useState(false);
  const holiIntervalRef = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<number | null>(null);

  // Apply a random Holi color to CSS custom properties
  const applyHoliColor = useCallback(() => {
    const color = HOLI_COLORS[Math.floor(Math.random() * HOLI_COLORS.length)];
    const root = document.documentElement;
    root.style.setProperty("--vg-accent", color.accent);
    root.style.setProperty("--vg-accent-hover", color.hover);
    root.style.setProperty("--vg-accent-dim", `rgba(${color.rgb}, 0.15)`);
    root.style.setProperty("--vg-accent-glow", `0 0 40px rgba(${color.rgb}, 0.35)`);
    root.style.setProperty("--vg-accent-glow-strong", `0 0 60px rgba(${color.rgb}, 0.5)`);
    root.style.setProperty("--vg-border-hover", `rgba(${color.rgb}, 0.4)`);
    root.style.setProperty("--vg-border-accent", `rgba(${color.rgb}, 0.6)`);
    root.style.setProperty("--ifm-color-primary", color.accent);
  }, []);

  // Reset to the original Electric Mint palette
  const resetHoliColors = useCallback(() => {
    const root = document.documentElement;
    root.style.removeProperty("--vg-accent");
    root.style.removeProperty("--vg-accent-hover");
    root.style.removeProperty("--vg-accent-dim");
    root.style.removeProperty("--vg-accent-glow");
    root.style.removeProperty("--vg-accent-glow-strong");
    root.style.removeProperty("--vg-border-hover");
    root.style.removeProperty("--vg-border-accent");
    root.style.removeProperty("--ifm-color-primary");
  }, []);

  // Start / stop Holi Mode color cycling
  useEffect(() => {
    if (holiMode) {
      applyHoliColor();
      holiIntervalRef.current = window.setInterval(applyHoliColor, 800);
    } else {
      if (holiIntervalRef.current) {
        clearInterval(holiIntervalRef.current);
        holiIntervalRef.current = null;
      }
      resetHoliColors();
    }
    return () => {
      if (holiIntervalRef.current) {
        clearInterval(holiIntervalRef.current);
      }
    };
  }, [holiMode, applyHoliColor, resetHoliColors]);

  // Filter quick actions based on query, patching Holi command label dynamically
  const filteredActions = (query
    ? quickActions.filter(
        (cmd) =>
          cmd.label.toLowerCase().includes(query.toLowerCase()) ||
          cmd.description.toLowerCase().includes(query.toLowerCase())
      )
    : quickActions
  ).map((cmd) =>
    cmd.id === "holi"
      ? {
          ...cmd,
          label: holiMode ? "Holi Mode 🎨 — ON" : "Holi Mode 🎨",
          description: holiMode
            ? "Click to turn off — Happy Holi! 🌈"
            : "Toggle festive random colors — Happy Holi!",
        }
      : cmd
  );

  // Combined results: filtered actions + search results
  const allResults = [
    ...filteredActions,
    ...searchResults.map((hit): Command => ({
      id: hit.objectID,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
      label: hit.hierarchy.lvl1 || hit.hierarchy.lvl0 || "Documentation",
      description: hit.hierarchy.lvl2 || hit.hierarchy.lvl0 || "",
      action: hit.url,
      type: "search",
    })),
  ];

  // Search Algolia
  const searchAlgolia = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const response = await fetch(
        `https://${ALGOLIA_APP_ID}-dsn.algolia.net/1/indexes/${ALGOLIA_INDEX}/query`,
        {
          method: "POST",
          headers: {
            "X-Algolia-Application-Id": ALGOLIA_APP_ID,
            "X-Algolia-API-Key": ALGOLIA_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: searchQuery,
            hitsPerPage: 5,
            attributesToRetrieve: ["hierarchy", "url", "content"],
            attributesToHighlight: ["hierarchy", "content"],
          }),
        }
      );
      const data = await response.json();
      setSearchResults(data.hits || []);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  // Debounced search
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    searchTimeoutRef.current = window.setTimeout(() => {
      searchAlgolia(query);
    }, 200);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [query, searchAlgolia]);

  // Reset selection when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [allResults.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Open with Cmd/Ctrl + K - intercept before Algolia
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(true);
        return;
      }

      // Close with Escape
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
        setQuery("");
        setSearchResults([]);
        return;
      }

      if (!isOpen) return;

      // Navigate with arrows
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, allResults.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + allResults.length) % Math.max(1, allResults.length));
      } else if (e.key === "Enter" && allResults.length > 0) {
        e.preventDefault();
        executeCommand(allResults[selectedIndex]);
      }
    },
    [isOpen, selectedIndex, allResults]
  );

  useEffect(() => {
    // Use capture phase to intercept before Algolia
    document.addEventListener("keydown", handleKeyDown, true);
    return () => document.removeEventListener("keydown", handleKeyDown, true);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus input after opening
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const executeCommand = (command: Command) => {
    if (typeof command.action === "function") {
      command.action();
    } else if (command.action === "toggle-holi") {
      setHoliMode((prev) => !prev);
    } else if (command.action.startsWith("http")) {
      window.open(command.action, "_blank");
    } else {
      window.location.href = command.action;
    }
    setIsOpen(false);
    setQuery("");
    setSearchResults([]);
  };

  const closeAndReset = () => {
    setIsOpen(false);
    setQuery("");
    setSearchResults([]);
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        className={`${styles.trigger} ${holiMode ? styles.holiActive : ""}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open command palette"
      >
        <span className={styles.triggerIcon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
          </svg>
        </span>
        <span className={styles.triggerText}>{holiMode ? "🎨 Holi!" : "Quick Actions"}</span>
        <kbd className={styles.kbd}>⌘K</kbd>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className={styles.overlay} onClick={closeAndReset}>
          <div className={`${styles.modal} ${holiMode ? styles.holiActive : ""}`} onClick={(e) => e.stopPropagation()}>
            <div className={styles.header}>
              <div className={styles.searchIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <input
                ref={inputRef}
                type="text"
                className={styles.input}
                placeholder="Search docs or type a command..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              {isSearching && <span className={styles.spinner} />}
              <kbd className={styles.escKey}>ESC</kbd>
            </div>

            <div className={styles.divider} />

            <div className={styles.commands}>
              {!query && (
                <div className={styles.sectionLabel}>Quick Actions</div>
              )}
              {query && filteredActions.length > 0 && (
                <div className={styles.sectionLabel}>Actions</div>
              )}
              
              {filteredActions.map((command, index) => (
                <button
                  key={command.id}
                  className={`${styles.command} ${index === selectedIndex ? styles.selected : ""}`}
                  onClick={() => executeCommand(command)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <span className={styles.commandIcon}>{command.icon}</span>
                  <div className={styles.commandContent}>
                    <span className={styles.commandLabel}>{command.label}</span>
                    <span className={styles.commandDescription}>{command.description}</span>
                  </div>
                  <span className={styles.arrow}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              ))}

              {query && searchResults.length > 0 && (
                <>
                  <div className={styles.sectionLabel}>Search Results</div>
                  {searchResults.map((hit, idx) => {
                    const index = filteredActions.length + idx;
                    return (
                      <button
                        key={hit.objectID}
                        className={`${styles.command} ${index === selectedIndex ? styles.selected : ""}`}
                        onClick={() => {
                          window.location.href = hit.url;
                          closeAndReset();
                        }}
                        onMouseEnter={() => setSelectedIndex(index)}
                      >
                        <span className={styles.commandIcon}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                          </svg>
                        </span>
                        <div className={styles.commandContent}>
                          <span 
                            className={styles.commandLabel}
                            dangerouslySetInnerHTML={{
                              __html: hit._highlightResult?.hierarchy?.lvl1?.value || 
                                      hit.hierarchy.lvl1 || 
                                      hit.hierarchy.lvl0 || 
                                      "Documentation"
                            }}
                          />
                          <span 
                            className={styles.commandDescription}
                            dangerouslySetInnerHTML={{
                              __html: hit._highlightResult?.hierarchy?.lvl2?.value ||
                                      hit.hierarchy.lvl2 ||
                                      hit._highlightResult?.hierarchy?.lvl0?.value ||
                                      hit.hierarchy.lvl0 ||
                                      ""
                            }}
                          />
                        </div>
                        <span className={styles.arrow}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </button>
                    );
                  })}
                </>
              )}

              {query && filteredActions.length === 0 && searchResults.length === 0 && !isSearching && (
                <div className={styles.noResults}>
                  <span>No results found for "{query}"</span>
                </div>
              )}
            </div>

            <div className={styles.footer}>
              <span className={styles.hint}>
                <kbd>↑↓</kbd> Navigate
              </span>
              <span className={styles.hint}>
                <kbd>↵</kbd> Select
              </span>
              <span className={styles.hint}>
                <kbd>ESC</kbd> Close
              </span>
              <span className={styles.poweredBy}>
                Search by Algolia
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

CommandPalette.displayName = "CommandPalette";
