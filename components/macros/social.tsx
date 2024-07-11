import { Divider } from "@nextui-org/react";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Social() {
  return (
    <>
      {/* left */}
      <div className="fixed bottom-0 left-16 right-auto max-sm:hidden">
        <Divider
          orientation="vertical"
          className="dark:bg-custom2 absolute bottom-0 left-3 h-24 bg-secondary"
        />
        <div className="mb-28 flex flex-col gap-5">
          {[FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter].map(
            (Icon, index) => (
              <Link
                key={"social-links-" + index}
                href={"https://github.com/krish7x"}
                target="__blank"
                className="duration-0.25s ease-custom-cubic transform transition-all hover:-translate-y-2 hover:delay-200"
              >
                <Icon
                  size={24}
                  className="dark:fill-custom2 fill-secondary dark:hover:fill-white"
                />
              </Link>
            ),
          )}
        </div>
      </div>

      {/* right */}
      <div className="fixed bottom-0 left-auto right-16 max-sm:hidden">
        <Divider
          orientation="vertical"
          className="dark:bg-custom2 absolute bottom-0 left-[calc(6px)] h-24 bg-secondary"
        />
        <div className="mb-28 flex translate-y-1 flex-col gap-5">
          <Link
            href={"mailto:krishnakumar99g@gmail.com"}
            target="__blank"
            className="vertical-rl dark:text-custom2 duration-0.25s ease-custom-cubic inline-block text-sm leading-4 text-secondary no-underline transition-all hover:-translate-y-2 dark:hover:text-white"
          >
            krishnakumar99g@gmail.com
          </Link>
        </div>
      </div>
    </>
  );
}
