// src/pages/ContactPage.tsx
import { SiGithub, SiLinkedin, SiX, SiMaildotru, SiMastodon } from "react-icons/si";

export function ContactPage() {
  const contacts = [
    {
      platform: "Github",
      value: "@AumPauskar",
      href: "https://github.com/AumPauskar",
      icon: <SiGithub />,
    },
    {
      platform: "Linkedin",
      value: "Aum Pauskar",
      href: "https://www.linkedin.com/in/aum-pauskar/", // Replace with your actual LinkedIn profile URL
      icon: <SiLinkedin />,
    },
    {
      platform: "X (Twitter)",
      value: "@AumPauskar",
      href: "https://twitter.com/AumPauskar",
      icon: <SiX />,
    },
    {
      platform: "Email",
      value: "aumpauskar.dev@gmail.com",
      href: "mailto:aumpauskar.dev@gmail.com",
      icon: <SiMaildotru />,
    },
    { platform: "Mastodon",
      value: "@aumpauskar",
      href: "https://mastodon.social/@aumpauskar",
      icon: <SiMastodon />,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <div className="border rounded-lg">
        <div className="grid grid-cols-3 p-4 font-semibold border-b">
          <div className="col-span-1">Platform</div>
          <div className="col-span-2">How to contact me</div>
        </div>
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="grid grid-cols-3 p-4 items-center border-b last:border-b-0"
          >
            <div className="col-span-1 text-muted-foreground flex items-center">
              <span className="mr-2">{contact.icon}</span>
              {contact.platform}
            </div>
            <div className="col-span-2">
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {contact.value}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}