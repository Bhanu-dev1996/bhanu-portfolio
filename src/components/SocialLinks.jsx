import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./brandIcons";
import { site } from "../data/site";
import MagneticButton from "./MagneticButton";

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  phone: Phone,
};

const NO_NEWTAB = new Set(["email", "phone"]);

export default function SocialLinks({ size = "md", variant = "icon" }) {
  const sizeClass =
    size === "sm"
      ? "h-9 w-9"
      : size === "lg"
        ? "h-12 w-12"
        : "h-10 w-10";

  if (variant === "text") {
    return (
      <div className="flex flex-wrap items-center gap-3">
        {site.socials.map((social) => {
          const Icon = ICONS[social.icon] ?? Mail;
          return (
            <a
              key={social.id}
              href={social.url}
              target={NO_NEWTAB.has(social.id) ? undefined : "_blank"}
              rel={NO_NEWTAB.has(social.id) ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {social.label}
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {site.socials.map((social) => {
        const Icon = ICONS[social.icon] ?? Mail;
        return (
          <MagneticButton key={social.id} strength={0.25}>
            <a
              href={social.url}
              target={NO_NEWTAB.has(social.id) ? undefined : "_blank"}
              rel={NO_NEWTAB.has(social.id) ? undefined : "noopener noreferrer"}
              aria-label={social.label}
              title={social.label}
              className={`inline-flex items-center justify-center rounded-full border border-line bg-card text-muted transition-colors duration-300 hover:border-primary/50 hover:text-primary ${sizeClass}`}
            >
              <Icon className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} aria-hidden="true" />
            </a>
          </MagneticButton>
        );
      })}
    </div>
  );
}