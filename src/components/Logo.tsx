type Props = {
  className?: string;
  size?: number;
};

export default function Logo({ className, size = 40 }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Bijalsangnaach logo"
    >
      <circle cx="32" cy="32" r="30.5" fill="#0b0a08" stroke="#d4af6a" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="25.5" fill="none" stroke="#d4af6a" strokeWidth="0.75" opacity="0.55" />

      {/* four small dots evoking ghungroo bells around the ring */}
      <circle cx="32" cy="7.5" r="1.4" fill="#d4af6a" />
      <circle cx="32" cy="56.5" r="1.4" fill="#d4af6a" />
      <circle cx="7.5" cy="32" r="1.4" fill="#d4af6a" />
      <circle cx="56.5" cy="32" r="1.4" fill="#d4af6a" />

      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="22"
        fontWeight="600"
        fill="#f2e4c4"
        letterSpacing="0.5"
      >
        BS
      </text>
    </svg>
  );
}
