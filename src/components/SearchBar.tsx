import { useEffect, useRef } from "react";
import "./SearchBar.css";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="search-container">
      <input
        ref={inputRef}
        className="search-input"
        type="text"
        placeholder=" Search products...                                                 🔎"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}