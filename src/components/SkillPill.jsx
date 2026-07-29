import { getSkillLogoUrl } from '../data/skillLogos';

export default function SkillPill({ name, tint, depth, variant = 0 }) {
  const logo = getSkillLogoUrl(name);
  const initial = name.charAt(0).toUpperCase();

  return (
    <span
      className={`skill-pill skill-pill--${variant % 4}`}
      style={{ '--pill': tint, '--depth': depth ?? tint }}
    >
      {logo ? (
        <img src={logo} alt="" className="skill-pill-logo" loading="lazy" width={20} height={20} />
      ) : (
        <span className="skill-pill-fallback" aria-hidden="true">
          {initial}
        </span>
      )}
      <span className="skill-pill-name">{name}</span>
    </span>
  );
}
